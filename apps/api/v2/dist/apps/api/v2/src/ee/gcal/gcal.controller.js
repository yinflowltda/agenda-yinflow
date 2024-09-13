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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcalController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const calendars_service_1 = require("../calendars/services/calendars.service");
const api_versions_1 = require("../../lib/api-versions");
const gcal_service_1 = require("../../modules/apps/services/gcal.service");
const get_user_decorator_1 = require("../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../modules/auth/guards/permissions/permissions.guard");
const credentials_repository_1 = require("../../modules/credentials/credentials.repository");
const selected_calendars_repository_1 = require("../../modules/selected-calendars/selected-calendars.repository");
const tokens_repository_1 = require("../../modules/tokens/tokens.repository");
const platform_constants_1 = require("@calcom/platform-constants");
const CALENDAR_SCOPES = [
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar.events",
];
let GcalController = class GcalController {
  constructor(
    credentialRepository,
    tokensRepository,
    selectedCalendarsRepository,
    config,
    gcalService,
    calendarsService
  ) {
    this.credentialRepository = credentialRepository;
    this.tokensRepository = tokensRepository;
    this.selectedCalendarsRepository = selectedCalendarsRepository;
    this.config = config;
    this.gcalService = gcalService;
    this.calendarsService = calendarsService;
    this.logger = new common_1.Logger("Platform Gcal Provider");
    this.redirectUri = `${this.config.get("api.url")}/gcal/oauth/save`;
  }
  async redirect(authorization, req) {
    const oAuth2Client = await this.gcalService.getOAuthClient(this.redirectUri);
    const accessToken = authorization.replace("Bearer ", "");
    const origin = req.get("origin") ?? req.get("host");
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: CALENDAR_SCOPES,
      prompt: "consent",
      state: `accessToken=${accessToken}&origin=${origin}`,
    });
    return { status: platform_constants_1.SUCCESS_STATUS, data: { authUrl } };
  }
  async save(state, code) {
    const url = new URL(this.config.get("api.url") + "/calendars/google/save");
    url.searchParams.append("code", code);
    url.searchParams.append("state", state);
    return { url: url.href };
  }
  async check(userId) {
    const gcalCredentials = await this.credentialRepository.getByTypeAndUserId("google_calendar", userId);
    if (!gcalCredentials) {
      throw new common_1.BadRequestException("Credentials for google_calendar not found.");
    }
    if (gcalCredentials.invalid) {
      throw new common_1.BadRequestException("Invalid google oauth credentials.");
    }
    const { connectedCalendars } = await this.calendarsService.getCalendars(userId);
    const googleCalendar = connectedCalendars.find(
      (cal) => cal.integration.type === platform_constants_1.GOOGLE_CALENDAR_TYPE
    );
    if (!googleCalendar) {
      throw new common_1.UnauthorizedException("Google Calendar not connected.");
    }
    if (googleCalendar.error?.message) {
      throw new common_1.UnauthorizedException(googleCalendar.error?.message);
    }
    return { status: platform_constants_1.SUCCESS_STATUS };
  }
};
__decorate(
  [
    (0, common_1.Get)("/oauth/auth-url"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/auth-url.output").GcalAuthUrlOutput,
    }),
    __param(0, (0, common_1.Headers)("Authorization")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise),
  ],
  GcalController.prototype,
  "redirect",
  null
);
__decorate(
  [
    (0, common_1.Get)("/oauth/save"),
    (0, common_1.Redirect)(undefined, 301),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/save-redirect.output").GcalSaveRedirectOutput,
    }),
    __param(0, (0, common_1.Query)("state")),
    __param(1, (0, common_1.Query)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise),
  ],
  GcalController.prototype,
  "save",
  null
);
__decorate(
  [
    (0, common_1.Get)("/check"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.APPS_READ]),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/check.output").GcalCheckOutput,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise),
  ],
  GcalController.prototype,
  "check",
  null
);
GcalController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/gcal",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Google Calendar"),
    __metadata("design:paramtypes", [
      credentials_repository_1.CredentialsRepository,
      tokens_repository_1.TokensRepository,
      selected_calendars_repository_1.SelectedCalendarsRepository,
      config_1.ConfigService,
      gcal_service_1.GCalService,
      calendars_service_1.CalendarsService,
    ]),
  ],
  GcalController
);
exports.GcalController = GcalController;
//# sourceMappingURL=gcal.controller.js.map
