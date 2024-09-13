/// <reference types="cookie-parser" />
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import { GcalAuthUrlOutput } from "src/ee/gcal/outputs/auth-url.output";
import { GcalCheckOutput } from "src/ee/gcal/outputs/check.output";
import { GcalSaveRedirectOutput } from "src/ee/gcal/outputs/save-redirect.output";
import { GCalService } from "src/modules/apps/services/gcal.service";
import { CredentialsRepository } from "src/modules/credentials/credentials.repository";
import { SelectedCalendarsRepository } from "src/modules/selected-calendars/selected-calendars.repository";
import { TokensRepository } from "src/modules/tokens/tokens.repository";

export declare class GcalController {
  private readonly credentialRepository;
  private readonly tokensRepository;
  private readonly selectedCalendarsRepository;
  private readonly config;
  private readonly gcalService;
  private readonly calendarsService;
  private readonly logger;
  constructor(
    credentialRepository: CredentialsRepository,
    tokensRepository: TokensRepository,
    selectedCalendarsRepository: SelectedCalendarsRepository,
    config: ConfigService,
    gcalService: GCalService,
    calendarsService: CalendarsService
  );
  private redirectUri;
  redirect(authorization: string, req: Request): Promise<GcalAuthUrlOutput>;
  save(state: string, code: string): Promise<GcalSaveRedirectOutput>;
  check(userId: number): Promise<GcalCheckOutput>;
}
