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
exports.EventTypesController_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const event_types_service_1 = require("../services/event-types.service");
const api_versions_1 = require("../../../../lib/api-versions");
const get_user_decorator_1 = require("../../../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../../../modules/auth/guards/permissions/permissions.guard");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let EventTypesController_2024_06_14 = class EventTypesController_2024_06_14 {
  constructor(eventTypesService) {
    this.eventTypesService = eventTypesService;
  }
  async createEventType(body, user) {
    const eventType = await this.eventTypesService.createUserEventType(user, body);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async getEventTypeById(eventTypeId, user) {
    const eventType = await this.eventTypesService.getUserEventType(user.id, Number(eventTypeId));
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async getEventTypes(queryParams) {
    const eventTypes = await this.eventTypesService.getEventTypes(queryParams);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventTypes,
    };
  }
  async updateEventType(eventTypeId, body, user) {
    const eventType = await this.eventTypesService.updateEventType(eventTypeId, body, user);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async deleteEventType(eventTypeId, userId) {
    const eventType = await this.eventTypesService.deleteEventType(eventTypeId, userId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        id: eventType.id,
        lengthInMinutes: eventType.length,
        slug: eventType.slug,
        title: eventType.title,
      },
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.EVENT_TYPE_WRITE]),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 201,
      type: require("../outputs/create-event-type.output").CreateEventTypeOutput_2024_06_14,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_types_1.CreateEventTypeInput_2024_06_14, Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_06_14.prototype,
  "createEventType",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:eventTypeId"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.EVENT_TYPE_READ]),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/get-event-type.output").GetEventTypeOutput_2024_06_14,
    }),
    __param(0, (0, common_1.Param)("eventTypeId")),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_06_14.prototype,
  "getEventTypeById",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/get-event-types.output").GetEventTypesOutput_2024_06_14,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_types_1.GetEventTypesQuery_2024_06_14]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_06_14.prototype,
  "getEventTypes",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:eventTypeId"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.EVENT_TYPE_WRITE]),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../outputs/update-event-type.output").UpdateEventTypeOutput_2024_06_14,
    }),
    __param(0, (0, common_1.Param)("eventTypeId")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_1.UpdateEventTypeInput_2024_06_14, Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_06_14.prototype,
  "updateEventType",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:eventTypeId"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.EVENT_TYPE_WRITE]),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/delete-event-type.output").DeleteEventTypeOutput_2024_06_14,
    }),
    __param(0, (0, common_1.Param)("eventTypeId")),
    __param(1, (0, get_user_decorator_1.GetUser)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_06_14.prototype,
  "deleteEventType",
  null
);
EventTypesController_2024_06_14 = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/event-types",
      version: api_versions_1.VERSION_2024_06_14_VALUE,
    }),
    (0, common_1.UseGuards)(permissions_guard_1.PermissionsGuard),
    (0, swagger_1.ApiTags)("Event types"),
    __metadata("design:paramtypes", [event_types_service_1.EventTypesService_2024_06_14]),
  ],
  EventTypesController_2024_06_14
);
exports.EventTypesController_2024_06_14 = EventTypesController_2024_06_14;
//# sourceMappingURL=event-types.controller.js.map
