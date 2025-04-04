import {
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  Query,
  Req,
  Version,
  VERSION_NEUTRAL,
} from "@nestjs/common";

import { HttpError } from "@calcom/platform-libraries";

type BookingRequest = Request & {
  userId?: number;
};

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

  @Get("/v2/event-types")
  @Version(VERSION_NEUTRAL)
  async getEventTypes(
    @Req() req: Request,
    @Query("username") username: string,
    @Query("usernames") usernames: string[],
    @Query("eventSlug") eventSlug: string,
    @Query("orgId") orgId: string,
    @Query("orgSlug") orgSlug: string
  ) {
    const apiKey = req.headers.get("apiKey") as string;

    let customParams = [];

    switch (true) {
      case !!username:
        customParams.push(`username=${username}`);
      case !!usernames:
        customParams.push(`usernames=${usernames}`);
      case !!eventSlug:
        customParams.push(`eventSlug=${eventSlug}`);
      case !!orgId:
        customParams.push(`orgId=${orgId}`);
      case !!orgSlug:
        customParams.push(`orgSlug=${orgSlug}`);
    }

    const params = customParams.length ? `?${customParams.join("&")}` : "";

    try {
      const response = await fetch(`${AGENDA_BASE_URL}/yinflow-get-event-types${params}`, {
        headers: {
          apiKey,
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

  // @Get("/v2/me")
  // @Version(VERSION_NEUTRAL)
  // async getMe(
  //   @Req() req: Request,
  //   @Query('id') id: string
  // ) {
  //   const idParam = id ? `?id=${id}` : "";

  //   try {
  //     const response = await fetch(`${AGENDA_BASE_URL}/yinflow-me${idParam}`, {
  //       headers:{
  //         apiKey: req.headers.apikey as string || "",
  //       }
  //       method: "GET",
  //     });

  //     if (!response.ok) throw new HttpException(response.statusText, response.status);

  //     return await response.json();
  //   } catch (err) {
  //     const error = err as Error;
  //     throw new InternalServerErrorException(error?.message);
  //   }
  //   throw new InternalServerErrorException("Could not get me.");
  // }

  // @Post("/v2/bookings")
  // async createBooking(
  //   @Req() req: BookingRequest,
  //   @Body() body: CreateBookingInput
  // ): Promise<ApiResponse<Partial<BookingResponse>>> {
  //   const { start, metadata, lengthInMinutes } = body;

  //   const end = dayjs(start)
  //     .add(lengthInMinutes || 50, "minutes")
  //     .toISOString();

  //   try {
  //     const { data: eventType } = await supabase
  //       .from("EventType")
  //       .select("title")
  //       .eq("id", req.body.eventTypeId)
  //       .single();

  //     if (!eventType) throw new NotFoundException("Event type not found.");

  //     try {
  //       const response = await fetch(`${AGENDA_BASE_URL}/yinflow-post-booking`, {
  //         body: JSON.stringify({
  //           eventTypeId: req.body.eventTypeId,
  //           start: req.body.start,
  //           end,
  //           responses: req.body.bookingFieldsResponses || {},
  //           metadata: metadata || {},
  //           timeZone: req.body.attendee.timeZone,
  //           language: req.body.attendee.language,
  //           title: eventType.title,
  //         }),
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (!response.ok) throw new HttpException(response.statusText, response.status);

  //       const responseData = await response.json();

  //       return {
  //         status: SUCCESS_STATUS,
  //         data: responseData,
  //       };
  //     } catch (err) {
  //       this.handleBookingErrors(err);
  //     }
  //   } catch (err) {
  //     this.handleBookingErrors(err);
  //   }
  //   throw new InternalServerErrorException("Could not create booking.");
  // }

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
