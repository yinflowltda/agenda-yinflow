import { CredentialSyncCalendarApp } from "src/ee/calendars/calendars.interface";
import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import { CredentialsRepository } from "src/modules/credentials/credentials.repository";

import { SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class AppleCalendarService implements CredentialSyncCalendarApp {
  private readonly calendarsService;
  private readonly credentialRepository;
  constructor(calendarsService: CalendarsService, credentialRepository: CredentialsRepository);
  save(
    userId: number,
    userEmail: string,
    username: string,
    password: string
  ): Promise<{
    status: string;
  }>;
  check(userId: number): Promise<{
    status: typeof SUCCESS_STATUS;
  }>;
  checkIfCalendarConnected(userId: number): Promise<{
    status: typeof SUCCESS_STATUS;
  }>;
  saveCalendarCredentials(
    userId: number,
    userEmail: string,
    username: string,
    password: string
  ): Promise<{
    status: string;
  }>;
}
