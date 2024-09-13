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
exports.EventTypesController_2024_04_15 = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_event_type_input_1 = require("../inputs/create-event-type.input");
const event_type_id_input_1 = require("../inputs/event-type-id.input");
const get_public_event_type_query_params_input_1 = require("../inputs/get-public-event-type-query-params.input");
const update_event_type_input_1 = require("../inputs/update-event-type.input");
const event_types_service_1 = require("../services/event-types.service");
const api_versions_1 = require("../../../../lib/api-versions");
const get_user_decorator_1 = require("../../../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../../../modules/auth/guards/permissions/permissions.guard");
const prisma_read_service_1 = require("../../../../modules/prisma/prisma-read.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_libraries_0_0_2_1 = require("@calcom/platform-libraries-0.0.2");
let EventTypesController_2024_04_15 = class EventTypesController_2024_04_15 {
  constructor(eventTypesService, prismaReadService) {
    this.eventTypesService = eventTypesService;
    this.prismaReadService = prismaReadService;
  }
  async createEventType(body, user) {
    const eventType = await this.eventTypesService.createUserEventType(user, body);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async getEventType(eventTypeId, user) {
    const eventType = await this.eventTypesService.getUserEventTypeForAtom(user, Number(eventTypeId));
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async getEventTypes(user) {
    const eventTypes = await (0, platform_libraries_0_0_2_1.getEventTypesByViewer)({
      id: user.id,
      profile: {
        upId: `usr-${user.id}`,
      },
    });
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventTypes,
    };
  }
  async getPublicEventType(username, eventSlug, queryParams) {
    try {
      const event = await (0, platform_libraries_0_0_2_1.getPublicEvent)(
        username.toLowerCase(),
        eventSlug,
        queryParams.isTeamEvent,
        queryParams.org || null,
        this.prismaReadService.prisma,
        true
      );
      return {
        data: event,
        status: platform_constants_1.SUCCESS_STATUS,
      };
    } catch (err) {
      if (err instanceof Error) {
        throw new common_1.NotFoundException(err.message);
      }
    }
    throw new common_1.InternalServerErrorException("Could not find public event.");
  }
  async getPublicEventTypes(username) {
    const eventTypes = await this.eventTypesService.getEventTypesPublicByUsername(username);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventTypes,
    };
  }
  async updateEventType(params, eventTypeId, body, user) {
    const eventType = await this.eventTypesService.updateEventType(eventTypeId, body, user);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async deleteEventType(params, eventTypeId, userId) {
    const eventType = await this.eventTypesService.deleteEventType(eventTypeId, userId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        id: eventType.id,
        length: eventType.length,
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
      type: require("../outputs/create-event-type.output").CreateEventTypeOutput,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_type_input_1.CreateEventTypeInput_2024_04_15, Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
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
      type: require("../outputs/get-event-type.output").GetEventTypeOutput,
    }),
    __param(0, (0, common_1.Param)("eventTypeId", common_1.ParseIntPipe)),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
  "getEventType",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.EVENT_TYPE_READ]),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/get-event-types.output").GetEventTypesOutput,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
  "getEventTypes",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:username/:eventSlug/public"),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/get-event-type-public.output").GetEventTypePublicOutput,
    }),
    __param(0, (0, common_1.Param)("username")),
    __param(1, (0, common_1.Param)("eventSlug")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      String,
      String,
      get_public_event_type_query_params_input_1.GetPublicEventTypeQueryParams_2024_04_15,
    ]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
  "getPublicEventType",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:username/public"),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/get-event-types-public.output").GetEventTypesPublicOutput,
    }),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
  "getPublicEventTypes",
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
      type: require("../outputs/update-event-type.output").UpdateEventTypeOutput,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Param)("eventTypeId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      event_type_id_input_1.EventTypeIdParams_2024_04_15,
      Number,
      update_event_type_input_1.UpdateEventTypeInput_2024_04_15,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
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
      type: require("../outputs/delete-event-type.output").DeleteEventTypeOutput,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Param)("eventTypeId", common_1.ParseIntPipe)),
    __param(2, (0, get_user_decorator_1.GetUser)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_type_id_input_1.EventTypeIdParams_2024_04_15, Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  EventTypesController_2024_04_15.prototype,
  "deleteEventType",
  null
);
EventTypesController_2024_04_15 = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/event-types",
      version: [api_versions_1.VERSION_2024_04_15, api_versions_1.VERSION_2024_06_11],
    }),
    (0, common_1.UseGuards)(permissions_guard_1.PermissionsGuard),
    (0, swagger_1.ApiTags)("Event types"),
    __metadata("design:paramtypes", [
      event_types_service_1.EventTypesService_2024_04_15,
      prisma_read_service_1.PrismaReadService,
    ]),
  ],
  EventTypesController_2024_04_15
);
exports.EventTypesController_2024_04_15 = EventTypesController_2024_04_15;
//# sourceMappingURL=event-types.controller.js.map
