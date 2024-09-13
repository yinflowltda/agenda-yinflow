/// <reference types="cookie-parser" />
import type { Calendar as OfficeCalendar } from "@microsoft/microsoft-graph-types-beta";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { OAuthCalendarApp } from "src/ee/calendars/calendars.interface";
import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import { CredentialsRepository } from "src/modules/credentials/credentials.repository";
import { SelectedCalendarsRepository } from "src/modules/selected-calendars/selected-calendars.repository";
import { TokensRepository } from "src/modules/tokens/tokens.repository";

import { SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class OutlookService implements OAuthCalendarApp {
  private readonly config;
  private readonly calendarsService;
  private readonly credentialRepository;
  private readonly tokensRepository;
  private readonly selectedCalendarsRepository;
  private redirectUri;
  constructor(
    config: ConfigService,
    calendarsService: CalendarsService,
    credentialRepository: CredentialsRepository,
    tokensRepository: TokensRepository,
    selectedCalendarsRepository: SelectedCalendarsRepository
  );
  connect(
    authorization: string,
    req: Request,
    redir?: string
  ): Promise<{
    status: typeof SUCCESS_STATUS;
    data: {
      authUrl: string;
    };
  }>;
  save(
    code: string,
    accessToken: string,
    origin: string,
    redir?: string
  ): Promise<{
    url: string;
  }>;
  check(userId: number): Promise<{
    status: typeof SUCCESS_STATUS;
  }>;
  getCalendarRedirectUrl(accessToken: string, origin: string, redir?: string): Promise<string>;
  checkIfCalendarConnected(userId: number): Promise<{
    status: typeof SUCCESS_STATUS;
  }>;
  getOAuthCredentials(code: string): Promise<any>;
  getDefaultCalendar(accessToken: string): Promise<OfficeCalendar>;
  saveCalendarCredentialsAndRedirect(
    code: string,
    accessToken: string,
    origin: string,
    redir?: string
  ): Promise<{
    url: string;
  }>;
}
