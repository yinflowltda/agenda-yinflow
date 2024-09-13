/// <reference types="cookie-parser" />
import { User } from "@prisma/client";
import { Request } from "express";
import { CreateBookingInput } from "src/ee/bookings/inputs/create-booking.input";
import { CreateRecurringBookingInput } from "src/ee/bookings/inputs/create-recurring-booking.input";
import { MarkNoShowInput } from "src/ee/bookings/inputs/mark-no-show.input";
import { GetBookingOutput } from "src/ee/bookings/outputs/get-booking.output";
import { GetBookingsOutput } from "src/ee/bookings/outputs/get-bookings.output";
import { MarkNoShowOutput } from "src/ee/bookings/outputs/mark-no-show.output";
import { BillingService } from "src/modules/billing/services/billing.service";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { OAuthFlowService } from "src/modules/oauth-clients/services/oauth-flow.service";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";

import { BookingResponse, handleInstantMeeting } from "@calcom/platform-libraries";
import { GetBookingsInput, CancelBookingInput } from "@calcom/platform-types";
import { ApiResponse } from "@calcom/platform-types";

type BookingRequest = Request & {
  userId?: number;
};
export declare class BookingsController {
  private readonly oAuthFlowService;
  private readonly prismaReadService;
  private readonly oAuthClientRepository;
  private readonly billingService;
  private readonly logger;
  constructor(
    oAuthFlowService: OAuthFlowService,
    prismaReadService: PrismaReadService,
    oAuthClientRepository: OAuthClientRepository,
    billingService: BillingService
  );
  getBookings(user: User, queryParams: GetBookingsInput): Promise<GetBookingsOutput>;
  getBooking(bookingUid: string): Promise<GetBookingOutput>;
  getBookingForReschedule(bookingUid: string): Promise<ApiResponse<unknown>>;
  createBooking(
    req: BookingRequest,
    body: CreateBookingInput,
    clientId?: string
  ): Promise<ApiResponse<Partial<BookingResponse>>>;
  cancelBooking(
    req: BookingRequest,
    bookingId: string,
    _: CancelBookingInput,
    clientId?: string
  ): Promise<
    ApiResponse<{
      bookingId: number;
      bookingUid: string;
      onlyRemovedAttendee: boolean;
    }>
  >;
  markNoShow(userId: number, body: MarkNoShowInput, bookingUid: string): Promise<MarkNoShowOutput>;
  createRecurringBooking(
    req: BookingRequest,
    _: CreateRecurringBookingInput[],
    clientId?: string
  ): Promise<ApiResponse<BookingResponse[]>>;
  createInstantBooking(
    req: BookingRequest,
    _: CreateBookingInput,
    clientId?: string
  ): Promise<ApiResponse<Awaited<ReturnType<typeof handleInstantMeeting>>>>;
  private getOwnerId;
  private getOAuthClientsParams;
  private createNextApiBookingRequest;
  private handleBookingErrors;
}
export {};
