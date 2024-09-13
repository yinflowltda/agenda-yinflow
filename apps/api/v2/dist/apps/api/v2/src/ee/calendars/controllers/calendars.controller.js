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
exports.CalendarsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const calendars_repository_1 = require("../calendars.repository");
const delete_calendar_credentials_input_1 = require("../input/delete-calendar-credentials.input");
const delete_calendar_credentials_output_1 = require("../outputs/delete-calendar-credentials.output");
const apple_calendar_service_1 = require("../services/apple-calendar.service");
const calendars_service_1 = require("../services/calendars.service");
const gcal_service_1 = require("../services/gcal.service");
const outlook_service_1 = require("../services/outlook.service");
const api_versions_1 = require("../../../lib/api-versions");
const get_user_decorator_1 = require("../../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../../modules/auth/guards/permissions/permissions.guard");
const zod_1 = require("zod");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_constants_2 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let CalendarsController = class CalendarsController {
  constructor(
    calendarsService,
    outlookService,
    googleCalendarService,
    appleCalendarService,
    calendarsRepository
  ) {
    this.calendarsService = calendarsService;
    this.outlookService = outlookService;
    this.googleCalendarService = googleCalendarService;
    this.appleCalendarService = appleCalendarService;
    this.calendarsRepository = calendarsRepository;
  }
  async getBusyTimes(queryParams, user) {
    const { loggedInUsersTz, dateFrom, dateTo, calendarsToLoad } = queryParams;
    if (!dateFrom || !dateTo) {
      return {
        status: platform_constants_2.SUCCESS_STATUS,
        data: [],
      };
    }
    const busyTimes = await this.calendarsService.getBusyTimes(
      calendarsToLoad,
      user.id,
      dateFrom,
      dateTo,
      loggedInUsersTz
    );
    return {
      status: platform_constants_2.SUCCESS_STATUS,
      data: busyTimes,
    };
  }
  async getCalendars(userId) {
    const calendars = await this.calendarsService.getCalendars(userId);
    return {
      status: platform_constants_2.SUCCESS_STATUS,
      data: calendars,
    };
  }
  async redirect(req, authorization, calendar, redir) {
    switch (calendar) {
      case platform_constants_2.OFFICE_365_CALENDAR:
        return await this.outlookService.connect(authorization, req, redir ?? "");
      case platform_constants_2.GOOGLE_CALENDAR:
        return await this.googleCalendarService.connect(authorization, req, redir ?? "");
      default:
        throw new common_1.BadRequestException(
          "Invalid calendar type, available calendars are: ",
          platform_constants_2.CALENDARS.join(", ")
        );
    }
  }
  async save(state, code, calendar) {
    const stateParams = new URLSearchParams(state);
    const { accessToken, origin, redir } = zod_1.z
      .object({
        accessToken: zod_1.z.string(),
        origin: zod_1.z.string(),
        redir: zod_1.z.string().nullish().optional(),
      })
      .parse({
        accessToken: stateParams.get("accessToken"),
        origin: stateParams.get("origin"),
        redir: stateParams.get("redir"),
      });
    switch (calendar) {
      case platform_constants_2.OFFICE_365_CALENDAR:
        return await this.outlookService.save(code, accessToken, origin, redir ?? "");
      case platform_constants_2.GOOGLE_CALENDAR:
        return await this.googleCalendarService.save(code, accessToken, origin, redir ?? "");
      default:
        throw new common_1.BadRequestException(
          "Invalid calendar type, available calendars are: ",
          platform_constants_2.CALENDARS.join(", ")
        );
    }
  }
  async syncCredentials(user, calendar, body) {
    const { username, password } = body;
    switch (calendar) {
      case platform_constants_2.APPLE_CALENDAR:
        return await this.appleCalendarService.save(user.id, user.email, username, password);
      default:
        throw new common_1.BadRequestException(
          "Invalid calendar type, available calendars are: ",
          platform_constants_2.CALENDARS.join(", ")
        );
    }
  }
  async check(userId, calendar) {
    switch (calendar) {
      case platform_constants_2.OFFICE_365_CALENDAR:
        return await this.outlookService.check(userId);
      case platform_constants_2.GOOGLE_CALENDAR:
        return await this.googleCalendarService.check(userId);
      case platform_constants_2.APPLE_CALENDAR:
        return await this.appleCalendarService.check(userId);
      default:
        throw new common_1.BadRequestException(
          "Invalid calendar type, available calendars are: ",
          platform_constants_2.CALENDARS.join(", ")
        );
    }
  }
  async deleteCalendarCredentials(calendar, body, user) {
    const { id: credentialId } = body;
    await this.calendarsService.checkCalendarCredentials(credentialId, user.id);
    const { id, type, userId, teamId, appId, invalid } = await this.calendarsRepository.deleteCredentials(
      credentialId
    );
    return {
      status: platform_constants_2.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        delete_calendar_credentials_output_1.DeletedCalendarCredentialsOutputDto,
        { id, type, userId, teamId, appId, invalid },
        { strategy: "excludeAll" }
      ),
    };
  }
};
__decorate(
  [
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, common_1.Get)("/busy-times"),
    openapi.ApiResponse({ status: 200, type: require("../outputs/busy-times.output").GetBusyTimesOutput }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_types_1.CalendarBusyTimesInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "getBusyTimes",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/connected-calendars.output").ConnectedCalendarsOutput,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "getCalendars",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, common_1.Get)("/:calendar/connect"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)("Authorization")),
    __param(2, (0, common_1.Param)("calendar")),
    __param(3, (0, common_1.Query)("redir")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "redirect",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:calendar/save"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Redirect)(undefined, 301),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)("state")),
    __param(1, (0, common_1.Query)("code")),
    __param(2, (0, common_1.Param)("calendar")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "save",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, common_1.Post)("/:calendar/credentials"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("calendar")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "syncCredentials",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:calendar/check"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.APPS_READ]),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, get_user_decorator_1.GetUser)("id")),
    __param(1, (0, common_1.Param)("calendar")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "check",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, common_1.Post)("/:calendar/disconnect"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../outputs/delete-calendar-credentials.output")
        .DeletedCalendarCredentialsOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("calendar")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      String,
      delete_calendar_credentials_input_1.DeleteCalendarCredentialsInputBodyDto,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  CalendarsController.prototype,
  "deleteCalendarCredentials",
  null
);
CalendarsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/calendars",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Calendars"),
    __metadata("design:paramtypes", [
      calendars_service_1.CalendarsService,
      outlook_service_1.OutlookService,
      gcal_service_1.GoogleCalendarService,
      apple_calendar_service_1.AppleCalendarService,
      calendars_repository_1.CalendarsRepository,
    ]),
  ],
  CalendarsController
);
exports.CalendarsController = CalendarsController;
//# sourceMappingURL=calendars.controller.js.map
