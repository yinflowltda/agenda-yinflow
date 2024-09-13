import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";
import { CalendarsRepository } from "src/ee/calendars/calendars.repository";
import { AppsRepository } from "src/modules/apps/apps.repository";
import {
  CredentialsRepository,
  CredentialsWithUserEmail,
} from "src/modules/credentials/credentials.repository";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";
import { UsersRepository } from "src/modules/users/users.repository";

import { Calendar } from "@calcom/platform-types";

export declare class CalendarsService {
  private readonly usersRepository;
  private readonly credentialsRepository;
  private readonly appsRepository;
  private readonly calendarsRepository;
  private readonly dbRead;
  private readonly dbWrite;
  private readonly config;
  private oAuthCalendarResponseSchema;
  constructor(
    usersRepository: UsersRepository,
    credentialsRepository: CredentialsRepository,
    appsRepository: AppsRepository,
    calendarsRepository: CalendarsRepository,
    dbRead: PrismaReadService,
    dbWrite: PrismaWriteService,
    config: ConfigService
  );
  getCalendars(userId: number): Promise<any>;
  getBusyTimes(
    calendarsToLoad: Calendar[],
    userId: User["id"],
    dateFrom: string,
    dateTo: string,
    timezone: string
  ): Promise<
    {
      start: Date;
      end: Date;
      source?: string | null | undefined;
    }[]
  >;
  getUniqCalendarCredentials(
    calendarsToLoad: Calendar[],
    userId: User["id"]
  ): Promise<
    {
      type: string;
      id: number;
      userId: number | null;
      teamId: number | null;
      user: {
        email: string;
      } | null;
      appId: string | null;
      invalid: boolean | null;
      key: import("@prisma/client/runtime/library").JsonValue;
    }[]
  >;
  getCalendarsWithCredentials(
    credentials: CredentialsWithUserEmail,
    calendarsToLoad: Calendar[],
    userId: User["id"]
  ): Promise<
    {
      userId: number;
      integration: string;
      credentialId: number;
      externalId: string;
    }[]
  >;
  getAppKeys(appName: string): Promise<{
    client_id: string;
    client_secret: string;
  }>;
  checkCalendarCredentials(credentialId: number, userId: number): Promise<void>;
}
