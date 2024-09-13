"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCalendarService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const googleapis_1 = require("googleapis");
const calendars_service_1 = require("./calendars.service");
const apps_repository_1 = require("../../../modules/apps/apps.repository");
const credentials_repository_1 = require("../../../modules/credentials/credentials.repository");
const selected_calendars_repository_1 = require("../../../modules/selected-calendars/selected-calendars.repository");
const tokens_repository_1 = require("../../../modules/tokens/tokens.repository");
const zod_1 = require("zod");
const platform_constants_1 = require("@calcom/platform-constants");
const CALENDAR_SCOPES = [
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar.events",
];
let GoogleCalendarService = class GoogleCalendarService {
  constructor(
    config,
    appsRepository,
    credentialRepository,
    calendarsService,
    tokensRepository,
    selectedCalendarsRepository
  ) {
    this.config = config;
    this.appsRepository = appsRepository;
    this.credentialRepository = credentialRepository;
    this.calendarsService = calendarsService;
    this.tokensRepository = tokensRepository;
    this.selectedCalendarsRepository = selectedCalendarsRepository;
    this.redirectUri = `${this.config.get("api.url")}/gcal/oauth/save`;
    this.gcalResponseSchema = zod_1.z.object({
      client_id: zod_1.z.string(),
      client_secret: zod_1.z.string(),
    });
    this.logger = new common_1.Logger("GcalService");
  }
  async connect(authorization, req, redir) {
    const accessToken = authorization.replace("Bearer ", "");
    const origin = req.get("origin") ?? req.get("host");
    const redirectUrl = await await this.getCalendarRedirectUrl(accessToken, origin ?? "", redir);
    return { status: platform_constants_1.SUCCESS_STATUS, data: { authUrl: redirectUrl } };
  }
  async save(code, accessToken, origin, redir) {
    return await this.saveCalendarCredentialsAndRedirect(code, accessToken, origin, redir);
  }
  async check(userId) {
    return await this.checkIfCalendarConnected(userId);
  }
  async getCalendarRedirectUrl(accessToken, origin, redir) {
    const oAuth2Client = await this.getOAuthClient(this.redirectUri);
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: CALENDAR_SCOPES,
      prompt: "consent",
      state: `accessToken=${accessToken}&origin=${origin}&redir=${redir ?? ""}`,
    });
    return authUrl;
  }
  async getOAuthClient(redirectUri) {
    this.logger.log("Getting Google Calendar OAuth Client");
    const app = await this.appsRepository.getAppBySlug("google-calendar");
    if (!app) {
      throw new common_1.NotFoundException();
    }
    const { client_id, client_secret } = this.gcalResponseSchema.parse(app.keys);
    const oAuth2Client = new googleapis_1.google.auth.OAuth2(client_id, client_secret, redirectUri);
    return oAuth2Client;
  }
  async checkIfCalendarConnected(userId) {
    const gcalCredentials = await this.credentialRepository.getByTypeAndUserId("google_calendar", userId);
    if (!gcalCredentials) {
      throw new common_2.BadRequestException("Credentials for google_calendar not found.");
    }
    if (gcalCredentials.invalid) {
      throw new common_2.BadRequestException("Invalid google oauth credentials.");
    }
    const { connectedCalendars } = await this.calendarsService.getCalendars(userId);
    const googleCalendar = connectedCalendars.find(
      (cal) => cal.integration.type === platform_constants_1.GOOGLE_CALENDAR_TYPE
    );
    if (!googleCalendar) {
      throw new common_2.UnauthorizedException("Google Calendar not connected.");
    }
    if (googleCalendar.error?.message) {
      throw new common_2.UnauthorizedException(googleCalendar.error?.message);
    }
    return { status: platform_constants_1.SUCCESS_STATUS };
  }
  async saveCalendarCredentialsAndRedirect(code, accessToken, origin, redir) {
    if (!code) {
      return { url: redir || origin };
    }
    const parsedCode = zod_1.z.string().parse(code);
    const ownerId = await this.tokensRepository.getAccessTokenOwnerId(accessToken);
    if (!ownerId) {
      throw new common_2.UnauthorizedException("Invalid Access token.");
    }
    const oAuth2Client = await this.getOAuthClient(this.redirectUri);
    const token = await oAuth2Client.getToken(parsedCode);
    const key = token.tokens;
    const credential = await this.credentialRepository.createAppCredential(
      platform_constants_1.GOOGLE_CALENDAR_TYPE,
      key,
      ownerId
    );
    oAuth2Client.setCredentials(key);
    const calendar = googleapis_1.google.calendar({
      version: "v3",
      auth: oAuth2Client,
    });
    const cals = await calendar.calendarList.list({ fields: "items(id,summary,primary,accessRole)" });
    const primaryCal = cals.data.items?.find((cal) => cal.primary);
    if (primaryCal?.id) {
      await this.selectedCalendarsRepository.createSelectedCalendar(
        primaryCal.id,
        credential.id,
        ownerId,
        platform_constants_1.GOOGLE_CALENDAR_TYPE
      );
    }
    return { url: redir || origin };
  }
};
GoogleCalendarService = __decorate(
  [
    (0, common_3.Injectable)(),
    __metadata("design:paramtypes", [
      config_1.ConfigService,
      apps_repository_1.AppsRepository,
      credentials_repository_1.CredentialsRepository,
      calendars_service_1.CalendarsService,
      tokens_repository_1.TokensRepository,
      selected_calendars_repository_1.SelectedCalendarsRepository,
    ]),
  ],
  GoogleCalendarService
);
exports.GoogleCalendarService = GoogleCalendarService;
//# sourceMappingURL=gcal.service.js.map
