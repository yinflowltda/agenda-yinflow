import {
  Body,
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  Post,
  Req,
  Version,
  VERSION_NEUTRAL,
} from "@nestjs/common";
import dayjs from "dayjs";

import { SUCCESS_STATUS } from "@calcom/platform-constants";
import { BookingResponse, HttpError } from "@calcom/platform-libraries";
import { ApiResponse, CreateBookingInput } from "@calcom/platform-types";

import { supabase } from "./config/supabase";

const AGENDA_BASE_URL = "https://agenda.yinflow.life/api";

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

  @Get("/v2/me")
  @Version(VERSION_NEUTRAL)
  getMe(): string {
    return JSON.stringify({
      message: "me",
    });
  }

  @Post("/")
  async createBooking(
    @Req() req: any,
    @Body() body: CreateBookingInput
  ): Promise<ApiResponse<Partial<BookingResponse>>> {
    const { start, metadata, lengthInMinutes } = body;

    const end = dayjs(start)
      .add(lengthInMinutes || 50, "minutes")
      .toISOString();

    try {
      const { data: eventType } = await supabase
        .from("EventType")
        .select("title")
        .eq("id", req.body.eventTypeId)
        .single();

      if (!eventType) throw new NotFoundException("Event type not found.");

      try {
        const response = await fetch(`${AGENDA_BASE_URL}/yinflow-post-booking`, {
          body: JSON.stringify({
            eventTypeId: req.body.eventTypeId,
            start: req.body.start,
            end,
            responses: req.body.bookingFieldsResponses || {},
            metadata: metadata || {},
            timeZone: req.body.attendee.timeZone,
            language: req.body.attendee.language,
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
