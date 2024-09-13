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
exports.SelectedCalendarsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const calendars_repository_1 = require("../../../ee/calendars/calendars.repository");
const calendars_service_1 = require("../../../ee/calendars/services/calendars.service");
const api_versions_1 = require("../../../lib/api-versions");
const get_user_decorator_1 = require("../../auth/decorators/get-user/get-user.decorator");
const api_auth_guard_1 = require("../../auth/guards/api-auth/api-auth.guard");
const selected_calendars_input_1 = require("../inputs/selected-calendars.input");
const selected_calendars_output_1 = require("../outputs/selected-calendars.output");
const selected_calendars_repository_1 = require("../selected-calendars.repository");
const platform_constants_1 = require("@calcom/platform-constants");
let SelectedCalendarsController = class SelectedCalendarsController {
  constructor(calendarsRepository, selectedCalendarsRepository, calendarsService) {
    this.calendarsRepository = calendarsRepository;
    this.selectedCalendarsRepository = selectedCalendarsRepository;
    this.calendarsService = calendarsService;
  }
  async addSelectedCalendar(input, user) {
    const { integration, externalId, credentialId } = input;
    await this.calendarsService.checkCalendarCredentials(Number(credentialId), user.id);
    const newlyAddedCalendarEntry = await this.selectedCalendarsRepository.addUserSelectedCalendar(
      user.id,
      integration,
      externalId,
      credentialId
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        selected_calendars_output_1.SelectedCalendarOutputDto,
        newlyAddedCalendarEntry,
        { strategy: "excludeAll" }
      ),
    };
  }
  async removeSelectedCalendar(queryParams, user) {
    const { integration, externalId, credentialId } = queryParams;
    await this.calendarsService.checkCalendarCredentials(Number(credentialId), user.id);
    const removedCalendarEntry = await this.selectedCalendarsRepository.removeUserSelectedCalendar(
      user.id,
      integration,
      externalId
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        selected_calendars_output_1.SelectedCalendarOutputDto,
        removedCalendarEntry,
        { strategy: "excludeAll" }
      ),
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 201,
      type: require("../outputs/selected-calendars.output").SelectedCalendarOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [selected_calendars_input_1.SelectedCalendarsInputDto, Object]),
    __metadata("design:returntype", Promise),
  ],
  SelectedCalendarsController.prototype,
  "addSelectedCalendar",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/"),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/selected-calendars.output").SelectedCalendarOutputResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      selected_calendars_input_1.SelectedCalendarsQueryParamsInputDto,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  SelectedCalendarsController.prototype,
  "removeSelectedCalendar",
  null
);
SelectedCalendarsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/selected-calendars",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Selected-Calendars"),
    __metadata("design:paramtypes", [
      calendars_repository_1.CalendarsRepository,
      selected_calendars_repository_1.SelectedCalendarsRepository,
      calendars_service_1.CalendarsService,
    ]),
  ],
  SelectedCalendarsController
);
exports.SelectedCalendarsController = SelectedCalendarsController;
//# sourceMappingURL=selected-calendars.controller.js.map
