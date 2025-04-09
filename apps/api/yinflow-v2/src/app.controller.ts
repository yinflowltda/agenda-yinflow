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
  Version,
  VERSION_NEUTRAL,
} from "@nestjs/common";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import dayjs from "dayjs";

import { ReqBodyMetadata } from "@calcom/features/bookings/lib/handleNewBooking/getBookingData";
import { SUCCESS_STATUS } from "@calcom/platform-constants";
import { BookingResponse, HttpError } from "@calcom/platform-libraries";
import { ApiResponse } from "@calcom/platform-types";
import { Attendee } from "@calcom/prisma/client";
import { BookingFieldType } from "@calcom/prisma/zod-utils";

import { supabase } from "./config/supabase";

interface YinflowRequest extends Omit<Request, "headers"> {
  headers: {
    apiKey: string;
  };
}

class YinflowCancelBookingBody {
  @IsString()
  @IsOptional()
  cancellationReason?: string;
}

class YinflowRescheduleBookingBody {
  @IsString()
  start!: string;

  @IsString()
  @IsOptional()
  reschedulingReason?: string;
}

class YinflowMarkAbsentBookingBody {
  @IsString()
  @IsOptional()
  attendees?: Attendee[];
}

class YinflowCreateBookingBody {
  @IsObject()
  attendee!: Attendee;

  @IsArray()
  bookingFieldsResponses!: {
    [K in BookingFieldType]: string;
  }[];

  @IsNumber()
  eventTypeId!: number;

  @IsString()
  start!: string;

  @IsObject()
  metadata!: ReqBodyMetadata;

  @IsNumber()
  lengthInMinutes!: number;
}

const AGENDA_BASE_URL = "https://agenda.yinflow.life/api";
const UNDEFINED_QUERY = "undefined";

@Controller()
export class AppController {
  @Get("health")
  @Version(VERSION_NEUTRAL)
  getHealth(): "OK" {
    return "OK";
  }

  @Get()
  @Version(VERSION_NEUTRAL)
  getRoot(): string {
    return JSON.stringify({
      message: "Welcome to Cal.com API V2 - docs are at https://developer.cal.com/api",
    });
  }

  @Post("/v2/bookings")
  async createBooking(
    @Body() body: YinflowCreateBookingBody
  ): Promise<ApiResponse<Partial<BookingResponse>>> {
    const { attendee, bookingFieldsResponses, eventTypeId, start, metadata, lengthInMinutes } = body;

    const end = dayjs(start)
      .add(lengthInMinutes || 50, "minutes")
      .toISOString();

    try {
      const { data: eventType } = await supabase
        .from("EventType")
        .select("title")
        .eq("id", eventTypeId)
        .single();

      if (!eventType) throw new NotFoundException("Event type not found.");

      try {
        const response = await fetch(`${AGENDA_BASE_URL}/yinflow-post-booking`, {
          body: JSON.stringify({
            eventTypeId,
            start,
            end,
            responses: bookingFieldsResponses || {},
            metadata: metadata || {},
            timeZone: attendee.timeZone,
            language: attendee.language,
            title: eventType.title,
          }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new HttpException(response.statusText, response.status);

        const responseData = await response.json();

        return {
          status: SUCCESS_STATUS,
          data: responseData,
        };
      } catch (err) {
        this.handleBookingErrors(err);
      }
    } catch (err) {
      this.handleBookingErrors(err);
    }
    throw new InternalServerErrorException("Could not create booking.");
  }

  @Post("/v2/bookings/:uid/cancel")
  @Version(VERSION_NEUTRAL)
  async cancelBookingById(
    @Headers("Authorization") authorization: string,
    @Body() body: YinflowCancelBookingBody,
    @Param("uid") uid: string
  ) {
    const { cancellationReason } = body;

    const params = cancellationReason
      ? `?uid=${uid}&cancellationReason=${cancellationReason}`
      : `?uid=${uid}`;

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-cancel-booking-by-id${params}`, {
        headers: {
          apiKey: authorization,
        },
        method: "POST",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Post("/v2/bookings/:uid/reschedule")
  @Version(VERSION_NEUTRAL)
  async rescheduleBookingById(
    @Headers("Authorization") authorization: string,
    @Body() body: YinflowRescheduleBookingBody,
    @Param("uid") uid: string
  ) {
    const { start } = body;

    const params = start ? `?uid=${uid}&start=${start}` : `?uid=${uid}`;

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-reschedule-booking-by-id${params}`, {
        headers: {
          apiKey: authorization,
        },
        method: "POST",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Post("/v2/bookings/:uid/mark-absent")
  @Version(VERSION_NEUTRAL)
  async markAbsentBookingById(
    @Headers("Authorization") authorization: string,
    @Body() body: YinflowMarkAbsentBookingBody,
    @Param("uid") uid: string
  ) {
    const { attendees } = body;

    const params = attendees ? `?uid=${uid}&attendees=${attendees}` : `?uid=${uid}`;

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-mark-absent-booking-by-id${params}`, {
        headers: {
          apiKey: authorization,
        },
        method: "POST",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Get("/v2/bookings/:uid")
  @Version(VERSION_NEUTRAL)
  async getBookingById(@Headers("Authorization") authorization: string, @Param("uid") uid: string) {
    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-get-booking-by-id?uid=${uid}`, {
        headers: {
          apiKey: authorization,
        },
        method: "GET",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Get("/v2/bookings")
  @Version(VERSION_NEUTRAL)
  async getBookings(
    @Req() req: YinflowRequest,
    @Query("status") status: string,
    @Query("attendeeEmail") attendeeEmail: string,
    @Query("attendeeName") attendeeName: string,
    @Query("eventTypeId") eventTypeId: string,
    @Query("eventTypeIds") eventTypeIds: string,
    @Query("teamId") teamId: string,
    @Query("teamIds") teamIds: string,
    @Query("afterStart") afterStart: string,
    @Query("beforeEnd") beforeEnd: string,
    @Query("afterCreateAt") afterCreateAt: string,
    @Query("beforeCreateAt") beforeCreateAt: string,
    @Query("afterUpdateAt") afterUpdateAt: string,
    @Query("beforeUpdateAt") beforeUpdateAt: string,
    @Query("sortEnd") sortEnd: string,
    @Query("sortStart") sortStart: string,
    @Query("sortCreated") sortCreated: string,
    @Query("sortUpdated") sortUpdated: string,
    @Query("take") take: string,
    @Query("skip") skip: string
  ) {
    let customParams = [];

    if (status && status !== UNDEFINED_QUERY) customParams.push(`status=${status}`);
    if (attendeeEmail && attendeeEmail !== UNDEFINED_QUERY)
      customParams.push(`attendeeEmail=${attendeeEmail}`);
    if (attendeeName && attendeeName !== UNDEFINED_QUERY) customParams.push(`attendeeName=${attendeeName}`);
    if (eventTypeId && eventTypeId !== UNDEFINED_QUERY) customParams.push(`eventTypeId=${eventTypeId}`);
    if (eventTypeIds && eventTypeIds !== UNDEFINED_QUERY) customParams.push(`eventTypeIds=${eventTypeIds}`);
    if (teamId && teamId !== UNDEFINED_QUERY) customParams.push(`teamId=${teamId}`);
    if (teamIds && teamIds !== UNDEFINED_QUERY) customParams.push(`teamIds=${teamIds}`);
    if (afterStart && afterStart !== UNDEFINED_QUERY) customParams.push(`afterStart=${afterStart}`);
    if (beforeEnd && beforeEnd !== UNDEFINED_QUERY) customParams.push(`beforeEnd=${beforeEnd}`);
    if (afterUpdateAt && afterUpdateAt !== UNDEFINED_QUERY)
      customParams.push(`afterUpdateAt=${afterUpdateAt}`);
    if (beforeUpdateAt && beforeUpdateAt !== UNDEFINED_QUERY)
      customParams.push(`beforeUpdateAt=${beforeUpdateAt}`);
    if (beforeCreateAt && beforeCreateAt !== UNDEFINED_QUERY)
      customParams.push(`beforeCreateAt=${beforeCreateAt}`);
    if (afterCreateAt && afterCreateAt !== UNDEFINED_QUERY)
      customParams.push(`afterCreateAt=${afterCreateAt}`);
    if (beforeUpdateAt && beforeUpdateAt !== UNDEFINED_QUERY)
      customParams.push(`beforeUpdateAt=${beforeUpdateAt}`);
    if (sortEnd && sortEnd !== UNDEFINED_QUERY) customParams.push(`sortEnd=${sortEnd}`);
    if (sortStart && sortStart !== UNDEFINED_QUERY) customParams.push(`sortStart=${sortStart}`);
    if (sortCreated && sortCreated !== UNDEFINED_QUERY) customParams.push(`sortCreated=${sortCreated}`);
    if (sortUpdated && sortUpdated !== UNDEFINED_QUERY) customParams.push(`sortUpdated=${sortUpdated}`);
    if (take && take !== UNDEFINED_QUERY) customParams.push(`take=${take}`);
    if (skip && skip !== UNDEFINED_QUERY) customParams.push(`skip=${skip}`);

    const params = customParams.length ? `?${customParams.join("&")}` : "";

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-get-bookings${params}`, {
        headers: {
          apiKey: "cal_f63feaae3cc8fc723f1226917933fc7c",
        },
        method: "GET",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Get("/v2/event-types")
  @Version(VERSION_NEUTRAL)
  async getEventTypes(
    @Headers("Authorization") authorization: string,
    @Query("username") username?: string,
    @Query("usernames") usernames?: string,
    @Query("eventSlug") eventSlug?: string,
    @Query("orgId") orgId?: string,
    @Query("orgSlug") orgSlug?: string
  ) {
    let customParams = [];

    if (username !== UNDEFINED_QUERY) customParams.push(`username=${username}`);
    if (usernames !== UNDEFINED_QUERY) customParams.push(`usernames=${usernames}`);
    if (eventSlug !== UNDEFINED_QUERY) customParams.push(`eventSlug=${eventSlug}`);
    if (orgId !== UNDEFINED_QUERY) customParams.push(`orgId=${orgId}`);
    if (orgSlug !== UNDEFINED_QUERY) customParams.push(`orgSlug=${orgSlug}`);

    const params = customParams.length ? `?${customParams.join("&")}` : "";

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-get-event-types${params}`, {
        headers: {
          apiKey: authorization,
        },
        method: "GET",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Get("/v2/slots")
  @Version(VERSION_NEUTRAL)
  async getSlots(
    @Headers("Authorization") authorization: string,
    @Query("start") start: string,
    @Query("end") end: string,
    @Query("duration") duration?: string,
    @Query("eventTypeId") eventTypeId?: string,
    @Query("eventTypeSlug") eventTypeSlug?: string,
    @Query("usernameList") usernameList?: string,
    @Query("timeZone") timeZone?: string,
    @Query("orgSlug") orgSlug?: string
  ) {
    let customParams = [];

    if (start && start !== UNDEFINED_QUERY) customParams.push(`start=${start}`);
    if (end && end !== UNDEFINED_QUERY) customParams.push(`end=${end}`);
    if (duration && duration !== UNDEFINED_QUERY) customParams.push(`duration=${duration}`);
    if (eventTypeId && eventTypeId !== UNDEFINED_QUERY) customParams.push(`eventTypeId=${eventTypeId}`);
    if (eventTypeSlug && eventTypeSlug !== UNDEFINED_QUERY)
      customParams.push(`eventTypeSlug=${eventTypeSlug}`);
    if (usernameList && usernameList !== UNDEFINED_QUERY) customParams.push(`usernameList=${usernameList}`);
    if (timeZone && timeZone !== UNDEFINED_QUERY) customParams.push(`timeZone=${timeZone}`);
    if (orgSlug && orgSlug !== UNDEFINED_QUERY) customParams.push(`orgSlug=${orgSlug}`);

    const params = customParams.length ? `?${customParams.join("&")}` : "";

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-get-slots${params}`, {
        headers: {
          apiKey: authorization,
        },
        method: "GET",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
    }
  }

  @Get("/v2/me/:id")
  @Version(VERSION_NEUTRAL)
  async getMe(@Headers("Authorization") authorization: string, @Param("id") id: string) {
    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-me?id=${id}`, {
        headers: {
          apiKey: authorization,
        },
        method: "GET",
      });

      if (!response.ok) throw new HttpException(response.statusText, response.status);

      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(error?.message);
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
