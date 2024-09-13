/// <reference types="cookie-parser" />
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { OAuthCalendarApp } from "src/ee/calendars/calendars.interface";
import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import { AppsRepository } from "src/modules/apps/apps.repository";
import { CredentialsRepository } from "src/modules/credentials/credentials.repository";
import { SelectedCalendarsRepository } from "src/modules/selected-calendars/selected-calendars.repository";
import { TokensRepository } from "src/modules/tokens/tokens.repository";

import { SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class GoogleCalendarService implements OAuthCalendarApp {
  private readonly config;
  private readonly appsRepository;
  private readonly credentialRepository;
  private readonly calendarsService;
  private readonly tokensRepository;
  private readonly selectedCalendarsRepository;
  private redirectUri;
  private gcalResponseSchema;
  private logger;
  constructor(
    config: ConfigService,
    appsRepository: AppsRepository,
    credentialRepository: CredentialsRepository,
    calendarsService: CalendarsService,
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
  getOAuthClient(redirectUri: string): Promise<import("google-auth-library").OAuth2Client>;
  checkIfCalendarConnected(userId: number): Promise<{
    status: typeof SUCCESS_STATUS;
  }>;
  saveCalendarCredentialsAndRedirect(
    code: string,
    accessToken: string,
    origin: string,
    redir?: string
  ): Promise<{
    url: string;
  }>;
}
