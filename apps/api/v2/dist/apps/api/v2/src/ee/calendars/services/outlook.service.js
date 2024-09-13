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
exports.OutlookService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const querystring_1 = require("querystring");
const calendars_service_1 = require("./calendars.service");
const credentials_repository_1 = require("../../../modules/credentials/credentials.repository");
const selected_calendars_repository_1 = require("../../../modules/selected-calendars/selected-calendars.repository");
const tokens_repository_1 = require("../../../modules/tokens/tokens.repository");
const zod_1 = require("zod");
const platform_constants_1 = require("@calcom/platform-constants");
let OutlookService = class OutlookService {
  constructor(config, calendarsService, credentialRepository, tokensRepository, selectedCalendarsRepository) {
    this.config = config;
    this.calendarsService = calendarsService;
    this.credentialRepository = credentialRepository;
    this.tokensRepository = tokensRepository;
    this.selectedCalendarsRepository = selectedCalendarsRepository;
    this.redirectUri = `${this.config.get("api.url")}/calendars/${
      platform_constants_1.OFFICE_365_CALENDAR
    }/save`;
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
    const { client_id } = await this.calendarsService.getAppKeys(platform_constants_1.OFFICE_365_CALENDAR_ID);
    const scopes = ["User.Read", "Calendars.Read", "Calendars.ReadWrite", "offline_access"];
    const params = {
      response_type: "code",
      scope: scopes.join(" "),
      client_id,
      prompt: "select_account",
      redirect_uri: this.redirectUri,
      state: `accessToken=${accessToken}&origin=${origin}&redir=${redir ?? ""}`,
    };
    const query = (0, querystring_1.stringify)(params);
    const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${query}`;
    return url;
  }
  async checkIfCalendarConnected(userId) {
    const office365CalendarCredentials = await this.credentialRepository.getByTypeAndUserId(
      "office365_calendar",
      userId
    );
    if (!office365CalendarCredentials) {
      throw new common_1.BadRequestException("Credentials for office_365_calendar not found.");
    }
    if (office365CalendarCredentials.invalid) {
      throw new common_1.BadRequestException("Invalid office 365 calendar credentials.");
    }
    const { connectedCalendars } = await this.calendarsService.getCalendars(userId);
    const office365Calendar = connectedCalendars.find(
      (cal) => cal.integration.type === platform_constants_1.OFFICE_365_CALENDAR_TYPE
    );
    if (!office365Calendar) {
      throw new common_1.UnauthorizedException("Office 365 calendar not connected.");
    }
    if (office365Calendar.error?.message) {
      throw new common_1.UnauthorizedException(office365Calendar.error?.message);
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
  async getOAuthCredentials(code) {
    const scopes = ["offline_access", "Calendars.Read", "Calendars.ReadWrite"];
    const { client_id, client_secret } = await this.calendarsService.getAppKeys(
      platform_constants_1.OFFICE_365_CALENDAR_ID
    );
    const toUrlEncoded = (payload) =>
      Object.keys(payload)
        .map((key) => `${key}=${encodeURIComponent(payload[key])}`)
        .join("&");
    const body = toUrlEncoded({
      client_id,
      grant_type: "authorization_code",
      code,
      scope: scopes.join(" "),
      redirect_uri: this.redirectUri,
      client_secret,
    });
    const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
    });
    const responseBody = await response.json();
    return responseBody;
  }
  async getDefaultCalendar(accessToken) {
    const response = await fetch("https://graph.microsoft.com/v1.0/me/calendar", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const responseBody = await response.json();
    return responseBody;
  }
  async saveCalendarCredentialsAndRedirect(code, accessToken, origin, redir) {
    if (!code) {
      return { url: redir || origin };
    }
    const parsedCode = zod_1.z.string().parse(code);
    const ownerId = await this.tokensRepository.getAccessTokenOwnerId(accessToken);
    if (!ownerId) {
      throw new common_1.UnauthorizedException("Invalid Access token.");
    }
    const office365OAuthCredentials = await this.getOAuthCredentials(parsedCode);
    const defaultCalendar = await this.getDefaultCalendar(office365OAuthCredentials.access_token);
    if (defaultCalendar?.id) {
      const credential = await this.credentialRepository.createAppCredential(
        platform_constants_1.OFFICE_365_CALENDAR_TYPE,
        office365OAuthCredentials,
        ownerId
      );
      await this.selectedCalendarsRepository.createSelectedCalendar(
        defaultCalendar.id,
        credential.id,
        ownerId,
        platform_constants_1.OFFICE_365_CALENDAR_TYPE
      );
    }
    return {
      url: redir || origin,
    };
  }
};
OutlookService = __decorate(
  [
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [
      config_1.ConfigService,
      calendars_service_1.CalendarsService,
      credentials_repository_1.CredentialsRepository,
      tokens_repository_1.TokensRepository,
      selected_calendars_repository_1.SelectedCalendarsRepository,
    ]),
  ],
  OutlookService
);
exports.OutlookService = OutlookService;
//# sourceMappingURL=outlook.service.js.map
