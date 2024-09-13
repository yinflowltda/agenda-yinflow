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
exports.OrganizationsSchedulesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const schedules_service_1 = require("../../../../ee/schedules/schedules_2024_06_11/services/schedules.service");
const api_versions_1 = require("../../../../lib/api-versions");
const platform_plan_decorator_1 = require("../../../auth/decorators/billing/platform-plan.decorator");
const roles_decorator_1 = require("../../../auth/decorators/roles/roles.decorator");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const platform_plan_guard_1 = require("../../../auth/guards/billing/platform-plan.guard");
const is_admin_api_enabled_guard_1 = require("../../../auth/guards/organizations/is-admin-api-enabled.guard");
const is_org_guard_1 = require("../../../auth/guards/organizations/is-org.guard");
const roles_guard_1 = require("../../../auth/guards/roles/roles.guard");
const is_user_in_org_guard_1 = require("../../../auth/guards/users/is-user-in-org.guard");
const organizations_schedules_service_1 = require("../../services/organizations-schedules.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
const platform_types_2 = require("@calcom/platform-types");
let OrganizationsSchedulesController = class OrganizationsSchedulesController {
  constructor(schedulesService, organizationScheduleService) {
    this.schedulesService = schedulesService;
    this.organizationScheduleService = organizationScheduleService;
  }
  async getOrganizationSchedules(orgId, queryParams) {
    const { skip, take } = queryParams;
    const schedules = await this.organizationScheduleService.getOrganizationSchedules(orgId, skip, take);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedules,
    };
  }
  async createUserSchedule(userId, bodySchedule) {
    const schedule = await this.schedulesService.createUserSchedule(userId, bodySchedule);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedule,
    };
  }
  async getUserSchedule(userId, scheduleId) {
    const schedule = await this.schedulesService.getUserSchedule(userId, scheduleId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedule,
    };
  }
  async getUserSchedules(userId) {
    const schedules = await this.schedulesService.getUserSchedules(userId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: schedules,
    };
  }
  async updateUserSchedule(userId, scheduleId, bodySchedule) {
    const updatedSchedule = await this.schedulesService.updateUserSchedule(userId, scheduleId, bodySchedule);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: updatedSchedule,
    };
  }
  async deleteUserSchedule(userId, scheduleId) {
    await this.schedulesService.deleteUserSchedule(userId, scheduleId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
};
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Get)("/schedules"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/get-schedules.output")
        .GetSchedulesOutput_2024_06_11,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_2.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsSchedulesController.prototype,
  "getOrganizationSchedules",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    (0, common_1.Post)("/users/:userId/schedules"),
    openapi.ApiResponse({
      status: 201,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/create-schedule.output")
        .CreateScheduleOutput_2024_06_11,
    }),
    __param(0, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_1.CreateScheduleInput_2024_06_11]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsSchedulesController.prototype,
  "createUserSchedule",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    (0, common_1.Get)("/users/:userId/schedules/:scheduleId"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/get-schedule.output")
        .GetScheduleOutput_2024_06_11,
    }),
    __param(0, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("scheduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsSchedulesController.prototype,
  "getUserSchedule",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    (0, common_1.Get)("/users/:userId/schedules"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/get-schedules.output")
        .GetSchedulesOutput_2024_06_11,
    }),
    __param(0, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsSchedulesController.prototype,
  "getUserSchedules",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    (0, common_1.Patch)("/users/:userId/schedules/:scheduleId"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/update-schedule.output")
        .UpdateScheduleOutput_2024_06_11,
    }),
    __param(0, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("scheduleId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, platform_types_1.UpdateScheduleInput_2024_06_11]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsSchedulesController.prototype,
  "updateUserSchedule",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    (0, common_1.Delete)("/users/:userId/schedules/:scheduleId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../../../../../../../packages/platform/types/schedules/schedules-2024-06-11/outputs/delete-schedule.output")
        .DeleteScheduleOutput_2024_06_11,
    }),
    __param(0, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("scheduleId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsSchedulesController.prototype,
  "deleteUserSchedule",
  null
);
OrganizationsSchedulesController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/organizations/:orgId",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, swagger_1.ApiTags)("Organizations Schedules"),
    __metadata("design:paramtypes", [
      schedules_service_1.SchedulesService_2024_06_11,
      organizations_schedules_service_1.OrganizationsSchedulesService,
    ]),
  ],
  OrganizationsSchedulesController
);
exports.OrganizationsSchedulesController = OrganizationsSchedulesController;
//# sourceMappingURL=organizations-schedules.controller.js.map
