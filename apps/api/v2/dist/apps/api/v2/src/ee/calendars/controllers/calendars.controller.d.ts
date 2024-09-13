/// <reference types="cookie-parser" />
import { User } from "@prisma/client";
import { Request } from "express";
import { CalendarsRepository } from "src/ee/calendars/calendars.repository";
import { DeleteCalendarCredentialsInputBodyDto } from "src/ee/calendars/input/delete-calendar-credentials.input";
import { GetBusyTimesOutput } from "src/ee/calendars/outputs/busy-times.output";
import { ConnectedCalendarsOutput } from "src/ee/calendars/outputs/connected-calendars.output";
import { DeletedCalendarCredentialsOutputResponseDto } from "src/ee/calendars/outputs/delete-calendar-credentials.output";
import { AppleCalendarService } from "src/ee/calendars/services/apple-calendar.service";
import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import { GoogleCalendarService } from "src/ee/calendars/services/gcal.service";
import { OutlookService } from "src/ee/calendars/services/outlook.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import { ApiResponse, CalendarBusyTimesInput } from "@calcom/platform-types";

export declare class CalendarsController {
  private readonly calendarsService;
  private readonly outlookService;
  private readonly googleCalendarService;
  private readonly appleCalendarService;
  private readonly calendarsRepository;
  constructor(
    calendarsService: CalendarsService,
    outlookService: OutlookService,
    googleCalendarService: GoogleCalendarService,
    appleCalendarService: AppleCalendarService,
    calendarsRepository: CalendarsRepository
  );
  getBusyTimes(queryParams: CalendarBusyTimesInput, user: UserWithProfile): Promise<GetBusyTimesOutput>;
  getCalendars(userId: number): Promise<ConnectedCalendarsOutput>;
  redirect(
    req: Request,
    authorization: string,
    calendar: string,
    redir?: string | null
  ): Promise<
    ApiResponse<{
      authUrl: string;
    }>
  >;
  save(
    state: string,
    code: string,
    calendar: string
  ): Promise<{
    url: string;
  }>;
  syncCredentials(
    user: User,
    calendar: string,
    body: {
      username: string;
      password: string;
    }
  ): Promise<{
    status: string;
  }>;
  check(userId: number, calendar: string): Promise<ApiResponse>;
  deleteCalendarCredentials(
    calendar: string,
    body: DeleteCalendarCredentialsInputBodyDto,
    user: UserWithProfile
  ): Promise<DeletedCalendarCredentialsOutputResponseDto>;
}
