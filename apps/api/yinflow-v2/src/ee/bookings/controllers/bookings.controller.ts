import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiTags as DocsTags } from "@nestjs/swagger";
import { randomBytes } from "crypto";
import dayjs from "dayjs";
import { Request } from "express";

import { DailyLocationType } from "@calcom/app-store/locations";
import { deleteEvent } from "@calcom/core/CalendarManager";
import { EventTypeInfo } from "@calcom/features/webhooks/lib/sendPayload";
import logger from "@calcom/lib/logger";
import { getTimeFormatStringFromUserTimeFormat } from "@calcom/lib/timeFormat";
import { SUCCESS_STATUS, X_CAL_CLIENT_ID } from "@calcom/platform-constants";
import { BookingResponse, HttpError } from "@calcom/platform-libraries";
import { ApiResponse, CancelBookingInput, GetBookingsInput } from "@calcom/platform-types";
import { Prisma } from "@calcom/prisma/client";
import { BookingStatus, WebhookTriggerEvents } from "@calcom/prisma/enums";
import { CalendarEvent } from "@calcom/types/Calendar";
import { CredentialPayload } from "@calcom/types/Credential";
import { PartialReference } from "@calcom/types/EventManager";

import tOrganizer from "../../../../../../web/public/static/locales/pt-BR/common.json";
import { supabase } from "../../../config/supabase";
import { API_VERSIONS_VALUES } from "../../../lib/api-versions";
import { ApiAuthGuard } from "../../../modules/auth/guards/api-auth/api-auth.guard";
import { CreateBookingInput, RescheduleBookingInput } from "../inputs/create-booking.input";
import { MarkNoShowInput } from "../inputs/mark-no-show.input";
import { GetBookingOutput } from "../outputs/get-booking.output";
import { GetBookingsOutput } from "../outputs/get-bookings.output";
import { MarkNoShowOutput } from "../outputs/mark-no-show.output";

type BookingRequest = Request & {
  userId?: number;
};

const log = logger.getSubLogger({ prefix: ["handleCancelBooking"] });
@Controller({
  path: "/v2/bookings",
  version: API_VERSIONS_VALUES,
})
@DocsTags("Bookings")
export class BookingsController {
  @Get("/")
  @UseGuards(ApiAuthGuard)
  async getBookings(@Query() queryParams: GetBookingsInput): Promise<GetBookingsOutput> {
    const bookings = await this.getAllUserBookings(queryParams);

    return {
      status: SUCCESS_STATUS,
      data: { bookings },
    };
  }

  @Get("/:bookingUid")
  @UseGuards(ApiAuthGuard)
  async getBooking(@Param("bookingUid") bookingUid: string): Promise<GetBookingOutput> {
    const bookingInfo = await this.getBookingInfo(bookingUid);

    if (!bookingInfo) {
      throw new NotFoundException(`Booking with UID=${bookingUid} does not exist.`);
    }

    return {
      status: SUCCESS_STATUS,
      data: bookingInfo,
    };
  }

  @Post("/:bookingUid/reschedule")
  @UseGuards(ApiAuthGuard)
  async getBookingForReschedule(
    @Param("bookingUid") bookingUid: string,
    @Body() body: RescheduleBookingInput
  ): Promise<ApiResponse<unknown>> {
    const booking = await this.getBookingReschedule(bookingUid, body);

    if (!booking) {
      throw new NotFoundException(`Booking with UID=${bookingUid} does not exist.`);
    }

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Post("/")
  @UseGuards(ApiAuthGuard)
  async createBooking(
    @Req() req: BookingRequest,
    @Body() body: CreateBookingInput,
    @Headers(X_CAL_CLIENT_ID) clientId?: string
  ): Promise<ApiResponse<Partial<BookingResponse>>> {
    const {
      bookingUid,
      end,
      start,
      orgSlug,
      locationUrl,
      eventTypeSlug,
      user,
      responses,
      hashedLink,
      language,
      metadata,
      timeZone,
      userId,
      ...otherParams
    } = body;

    req.headers["x-cal-force-slug"] = orgSlug;

    try {
      const { data: eventType } = await supabase
        .from("EventType")
        .select("title")
        .eq("id", req.body.eventTypeId)
        .single();

      if (!eventType) throw new NotFoundException("Event type not found.");

      const uid = randomBytes(16).toString("hex");

      const { data: booking, error } = await supabase
        .from("Booking")
        .insert({
          ...otherParams,
          uid: bookingUid || uid,
          endTime: end,
          userId,
          title: eventType.title,
          startTime: start,
          user: JSON.stringify(user),
          responses: JSON.stringify(responses),
          metadata: JSON.stringify(metadata),
        })
        .select("*")
        .single();

      return {
        status: SUCCESS_STATUS,
        data: booking || error,
      };
    } catch (err) {
      this.handleBookingErrors(err);
    }
    throw new InternalServerErrorException("Could not create booking.");
  }

  @Post("/:bookingId/cancel")
  @UseGuards(ApiAuthGuard)
  async cancelBooking(
    @Req() req: BookingRequest,
    @Param("bookingId") bookingId: string,
    @Body() _: CancelBookingInput
  ): Promise<ApiResponse<{ bookingId: number; bookingUid: string; onlyRemovedAttendee: boolean }>> {
    if (!bookingId) throw new NotFoundException("Booking ID is required.");

    try {
      const data = await this.cancelUsageByBookingUid(req, bookingId);
      return {
        status: SUCCESS_STATUS,
        data,
      };
    } catch (err) {
      this.handleBookingErrors(err);
    }

    throw new InternalServerErrorException("Could not cancel booking.");
  }

  @Post("/:bookingUid/mark-absent")
  @UseGuards(ApiAuthGuard)
  async markAbsent(
    @Body() body: MarkNoShowInput,
    @Param("bookingUid") bookingUid: string
  ): Promise<MarkNoShowOutput> {
    try {
      const data = this.getBookingInfo(bookingUid) as any;
      const attendees =
        data.attendees && data.attendees.length !== 0
          ? data.attendees.map((attendee: string) => JSON.parse(attendee))
          : [];
      const absentAttendee = [...attendees, ...body.attendees].map((attendee: any) =>
        JSON.stringify(attendee)
      );

      const { data: absentedBooking } = await supabase
        .from("Booking")
        .update({ attendees: absentAttendee, absentHost: !!body.host })
        .eq("uid", bookingUid)
        .select("*")
        .single();

      return { status: SUCCESS_STATUS, data: absentedBooking };
    } catch (err) {
      this.handleBookingErrors(err, "no-show");
    }
    throw new InternalServerErrorException("Could not mark no show.");
  }

  private async getAllUserBookings({
    afterStart,
    attendeeEmail,
    attendeeName,
    beforeEnd,
    eventTypeId,
    eventTypeIds,
    skip,
    sortCreated,
    sortEnd,
    sortStart,
    status,
    take,
    teamId,
    teamsIds,
  }: GetBookingsInput): Promise<GetBookingsOutput["data"]["bookings"]> {
    const { data: bookings } = await supabase
      .from("Booking")
      .select(
        "id, uid, userId, createdAt, status, cancellationReason, responses, reschedulingReason, recurringEventId, startTime, endTime, eventTypeId, attendees, absentHost"
      );

    const { data: bookingReferences } = await supabase
      .from("BookingReference")
      .select("bookingId, meetingUrl");

    const { data: users } = await supabase.from("users").select("*");

    const formattedBookings = (bookings as any[]).map((booking) => {
      const duration = dayjs(booking.endTime as string).diff(dayjs(booking.startTime as string), "minutes");
      const findedBookingReference = (bookingReferences as any[]).find((ref) => ref.bookingId === booking.id);
      const meetingUrl = findedBookingReference ? findedBookingReference.meetingUrl : null;
      const findedUser = (users as any[]).find((user) => user.id === booking.userId);
      const hosts = findedUser ? [findedUser] : [];
      const guests = booking.responses ? booking.responses.guests : null;

      return {
        id: booking.id,
        uid: booking.uid,
        status: booking.status,
        cancellationReason: booking.cancellationReason,
        reschedulingReason: booking.reschedulingReason,
        start: booking.startTime,
        end: booking.endTime,
        duration,
        eventTypeId: booking.eventTypeId,
        attendees: booking.attendees,
        absentHost: booking.absentHost,
        created: booking.createdAt,
        meetingUrl,
        hosts,
        guests,
        rescheduledFromUid: booking.recurringEventId,
      };
    });

    const filteredBookings = formattedBookings
      .filter((booking) => {
        if (!status) return true;
        return status.includes(booking.status);
      })
      .filter((booking) => {
        if (!eventTypeId) return true;
        return booking.eventTypeId === eventTypeId;
      })
      .filter((booking) => {
        if (!eventTypeIds) return true;
        return eventTypeIds.includes(booking.eventTypeId);
      })
      .filter((booking) => {
        if (!attendeeEmail || !booking.attendees || booking.attendees.length === 0) return true;
        return booking.attendees.some((attendee: any) => {
          try {
            const parsedAttendee = JSON.parse(attendee);
            return parsedAttendee.email === attendeeEmail;
          } catch (_) {
            return false;
          }
        });
      })
      .filter((booking) => {
        if (!attendeeName || !booking.attendees || booking.attendees.length === 0) return true;
        return booking.attendees.some((attendee: any) => {
          try {
            const parsedAttendee = JSON.parse(attendee);
            return parsedAttendee.name === attendeeName;
          } catch (_) {
            return false;
          }
        });
      })
      .filter((booking) => {
        if (!afterStart) return true;
        return dayjs(booking.start).isAfter(afterStart);
      })
      .filter((booking) => {
        if (!beforeEnd) return true;
        return dayjs(booking.end).isBefore(beforeEnd);
      })
      .sort((a, b) => {
        const aTime = new Date(a.start).getTime();
        const bTime = new Date(b.start).getTime();

        if (aTime === bTime || !sortStart) return 0;
        else if (aTime > bTime && sortStart === "asc") return 1;
        else if (aTime < bTime && sortStart === "desc") return 1;
        else if (aTime < bTime && sortStart === "asc") return -1;
        else return -1;
      })
      .sort((a, b) => {
        const aTime = new Date(a.end).getTime();
        const bTime = new Date(b.end).getTime();

        if (aTime === bTime || !sortEnd) return 0;
        else if (aTime > bTime && sortEnd === "asc") return 1;
        else if (aTime < bTime && sortEnd === "desc") return 1;
        else if (aTime < bTime && sortEnd === "asc") return -1;
        else return -1;
      })
      .sort((a, b) => {
        const aTime = new Date(a.end).getTime();
        const bTime = new Date(b.end).getTime();

        if (aTime === bTime || !sortCreated) return 0;
        else if (aTime > bTime && sortCreated === "asc") return 1;
        else if (aTime < bTime && sortCreated === "desc") return 1;
        else if (aTime < bTime && sortCreated === "asc") return -1;
        else return -1;
      });

    let finishFormattedBookings = filteredBookings.map((booking) => {
      const { created: _, ...rest } = booking;
      return rest;
    });

    if (!!skip) finishFormattedBookings = finishFormattedBookings.slice(skip as number);
    if (!!take) finishFormattedBookings = finishFormattedBookings.slice(0, take as number);

    // // case !!teamsIds:
    // //   supabaseQuery = supabaseQuery.eq("attendees.email", attendeeEmail);
    // // case !!teamId:
    // //   supabaseQuery = supabaseQuery.eq("attendees.email", attendeeEmail);

    return finishFormattedBookings as unknown as GetBookingsOutput["data"]["bookings"];
  }

  private async getBookingInfo(bookingUid: string): Promise<GetBookingOutput["data"] | null> {
    const { data: bookingInfo, error } = await supabase
      .from("Booking")
      .select("*")
      .eq("uid", bookingUid)
      .limit(1)
      .single();

    if (error || !bookingInfo) return null;

    return error || bookingInfo;
  }

  private async getBookingReschedule(uid: string, body: RescheduleBookingInput): Promise<any> {
    const { userId, start, ...data } = body;
    let rescheduleUid: string | null = null;

    let theBooking = this.getBookingInfo(uid) as any;

    let bookingSeatReferenceUid: number | null = null;
    let attendeeEmail: string | null = null;
    let hasOwnershipOnBooking = false;
    let bookingSeatData: { description?: string; responses: Prisma.JsonValue } | null = null;

    const { data: booking } = await supabase
      .from("Booking")
      .update({ ...data, startTime: start })
      .eq("uid", uid)
      .select("*")
      .maybeSingle();

    if (!theBooking) {
      const { data: bookingSeat, error } = await supabase
        .from("BookingSeat")
        .select("*")
        .eq("referenceUid", uid)
        .maybeSingle();

      if (bookingSeat && !error) {
        bookingSeatData = bookingSeat.data as any;
        bookingSeatReferenceUid = bookingSeat.id;
        rescheduleUid = bookingSeat.booking.uid;
        attendeeEmail = bookingSeat.attendee.email;
      }
    }

    theBooking = booking;

    if (theBooking && theBooking?.eventType?.seatsPerTimeSlot && bookingSeatReferenceUid === null) {
      const isOwnerOfBooking = theBooking.userId === userId;

      const isHostOfEventType = theBooking?.eventType?.hosts.some(
        (host: { userId?: number }) => host.userId === userId
      );

      const isUserIdInBooking = theBooking.userId === userId;

      if (!isOwnerOfBooking && !isHostOfEventType && !isUserIdInBooking) return null;
      hasOwnershipOnBooking = true;
    }

    if (!theBooking) return null;

    if (bookingSeatReferenceUid) theBooking["description"] = bookingSeatData?.description ?? null;

    return {
      ...theBooking,
      attendees: rescheduleUid
        ? theBooking.attendees.filter((attendee: any) => attendee.email === attendeeEmail)
        : hasOwnershipOnBooking
        ? []
        : theBooking.attendees,
    };
  }

  private async cancelUsageByBookingUid(req: BookingRequest, bookingId: string): Promise<any> {
    const { allRemainingBookings, cancellationReason } = req.body;
    const { data: bookingToDelete } = await supabase
      .from("Booking")
      .select("*")
      .eq("uid", bookingId)
      .single();

    try {
      const response = await fetch("https://agenda.yinflow.life/api/cancel", {
        body: JSON.stringify({
          uid: bookingId,
          cancellationReason: cancellationReason,
          allRemainingBookings,
          cancelledBy: bookingToDelete.userPrimaryEmail,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new HttpError(response.statusText, response.status);

      const { data: allBookingsUpdated } = await supabase
        .from("Booking")
        .select("*")
        .or(`uid.eq.${bookingId}, recurringEventId.eq.${bookingToDelete.recurringEventId}`);

      return {
        onlyRemovedAttendee: false,
        bookingId: bookingToDelete.id,
        bookingUid: bookingId,
        updatedBookings: allBookingsUpdated,
      };
    } catch (err) {
      return err;
    }
  }

  private handleBookingErrors(
    err: Error | HttpError | unknown,
    type?: "recurring" | `instant` | "no-show"
  ): void {
    const errMsg =
      type === "no-show"
        ? `Error while marking no-show.`
        : `Error while creating ${type ? type + " " : ""}booking.`;
    if (err instanceof HttpError) {
      const httpError = err as HttpError;
      throw new HttpException(httpError?.message ?? errMsg, httpError?.statusCode ?? 500);
    }

    if (err instanceof Error) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message ?? errMsg);
    }

    throw new InternalServerErrorException(errMsg);
  }
}
