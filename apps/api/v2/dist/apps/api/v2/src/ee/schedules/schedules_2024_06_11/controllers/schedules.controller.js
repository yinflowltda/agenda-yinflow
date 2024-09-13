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
exports.SchedulesController_2024_06_11 = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const schedules_service_1 = require("../services/schedules.service");
const api_versions_1 = require("../../../../lib/api-versions");
const get_user_decorator_1 = require("../../../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../../../modules/auth/guards/permissions/permissions.guard");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let SchedulesController_2024_06_11 = class SchedulesController_2024_06_11 {
  constructor(schedulesService) {
    this.schedulesService = schedulesService;
  }
  async createSchedule(user, bodySchedule) {
    const schedule = await this.schedulesService.createUserSchedule(user.id, bodySchedule);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedule,
    };
  }
  async getDefaultSchedule(user) {
    const schedule = await this.schedulesService.getUserScheduleDefault(user.id);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedule,
    };
  }
  async getSchedule(user, scheduleId) {
    const schedule = await this.schedulesService.getUserSchedule(user.id, scheduleId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedule,
    };
  }
  async getSchedules(user) {
    const schedules = await this.schedulesService.getUserSchedules(user.id);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedules,
    };
  }
  async updateSchedule(user, bodySchedule, scheduleId) {
    const updatedSchedule = await this.schedulesService.updateUserSchedule(
      user.id,
      Number(scheduleId),
      bodySchedule
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: updatedSchedule,
    };
  }
  async deleteSchedule(userId, scheduleId) {
    await this.schedulesService.deleteUserSchedule(userId, scheduleId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.SCHEDULE_WRITE]),
    openapi.ApiResponse({
      status: 201,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/create-schedule.output")
        .CreateScheduleOutput_2024_06_11,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, platform_types_1.CreateScheduleInput_2024_06_11]),
    __metadata("design:returntype", Promise),
  ],
  SchedulesController_2024_06_11.prototype,
  "createSchedule",
  null
);
__decorate(
  [
    (0, common_1.Get)("/default"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.SCHEDULE_READ]),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: "Returns the default schedule",
      type: platform_types_1.GetDefaultScheduleOutput_2024_06_11,
    }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/get-schedule.output")
        .GetScheduleOutput_2024_06_11,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  SchedulesController_2024_06_11.prototype,
  "getDefaultSchedule",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:scheduleId"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.SCHEDULE_READ]),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/get-schedule.output")
        .GetScheduleOutput_2024_06_11,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("scheduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise),
  ],
  SchedulesController_2024_06_11.prototype,
  "getSchedule",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.SCHEDULE_READ]),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/get-schedules.output")
        .GetSchedulesOutput_2024_06_11,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  SchedulesController_2024_06_11.prototype,
  "getSchedules",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:scheduleId"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.SCHEDULE_WRITE]),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/update-schedule.output")
        .UpdateScheduleOutput_2024_06_11,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)("scheduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, platform_types_1.UpdateScheduleInput_2024_06_11, String]),
    __metadata("design:returntype", Promise),
  ],
  SchedulesController_2024_06_11.prototype,
  "updateSchedule",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:scheduleId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.SCHEDULE_WRITE]),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/delete-schedule.output")
        .DeleteScheduleOutput_2024_06_11,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)("id")),
    __param(1, (0, common_1.Param)("scheduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  SchedulesController_2024_06_11.prototype,
  "deleteSchedule",
  null
);
SchedulesController_2024_06_11 = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/schedules",
      version: [api_versions_1.VERSION_2024_06_14, api_versions_1.VERSION_2024_06_11],
    }),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, swagger_1.ApiTags)("Schedules"),
    __metadata("design:paramtypes", [schedules_service_1.SchedulesService_2024_06_11]),
  ],
  SchedulesController_2024_06_11
);
exports.SchedulesController_2024_06_11 = SchedulesController_2024_06_11;
//# sourceMappingURL=schedules.controller.js.map
