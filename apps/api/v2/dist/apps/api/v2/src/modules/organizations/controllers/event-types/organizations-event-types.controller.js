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
exports.OrganizationsEventTypesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_versions_1 = require("../../../../lib/api-versions");
const platform_plan_decorator_1 = require("../../../auth/decorators/billing/platform-plan.decorator");
const get_user_decorator_1 = require("../../../auth/decorators/get-user/get-user.decorator");
const roles_decorator_1 = require("../../../auth/decorators/roles/roles.decorator");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const platform_plan_guard_1 = require("../../../auth/guards/billing/platform-plan.guard");
const is_admin_api_enabled_guard_1 = require("../../../auth/guards/organizations/is-admin-api-enabled.guard");
const is_org_guard_1 = require("../../../auth/guards/organizations/is-org.guard");
const roles_guard_1 = require("../../../auth/guards/roles/roles.guard");
const is_team_in_org_guard_1 = require("../../../auth/guards/teams/is-team-in-org.guard");
const organizations_event_types_service_1 = require("../../services/event-types/organizations-event-types.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let OrganizationsEventTypesController = class OrganizationsEventTypesController {
  constructor(organizationsEventTypesService) {
    this.organizationsEventTypesService = organizationsEventTypesService;
  }
  async createTeamEventType(user, teamId, orgId, bodyEventType) {
    const eventType = await this.organizationsEventTypesService.createTeamEventType(
      user,
      teamId,
      orgId,
      bodyEventType
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async getTeamEventType(teamId, eventTypeId) {
    const eventType = await this.organizationsEventTypesService.getTeamEventType(teamId, eventTypeId);
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async getTeamEventTypes(teamId, queryParams) {
    const { eventSlug } = queryParams;
    if (eventSlug) {
      const eventType = await this.organizationsEventTypesService.getTeamEventTypeBySlug(teamId, eventSlug);
      return {
        status: platform_constants_1.SUCCESS_STATUS,
        data: eventType ? [eventType] : [],
      };
    }
    const eventTypes = await this.organizationsEventTypesService.getTeamEventTypes(teamId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventTypes,
    };
  }
  async getTeamsEventTypes(orgId, queryParams) {
    const { skip, take } = queryParams;
    const eventTypes = await this.organizationsEventTypesService.getTeamsEventTypes(orgId, skip, take);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventTypes,
    };
  }
  async updateTeamEventType(teamId, eventTypeId, user, bodyEventType) {
    const eventType = await this.organizationsEventTypesService.updateTeamEventType(
      eventTypeId,
      teamId,
      bodyEventType,
      user
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: eventType,
    };
  }
  async deleteTeamEventType(teamId, eventTypeId) {
    const eventType = await this.organizationsEventTypesService.deleteTeamEventType(teamId, eventTypeId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        id: eventTypeId,
        title: eventType.title,
      },
    };
  }
};
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      is_team_in_org_guard_1.IsTeamInOrg,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.Post)("/teams/:teamId/event-types"),
    openapi.ApiResponse({
      status: 201,
      type: require("./outputs/teams/create-team-event-type.output").CreateTeamEventTypeOutput,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Object,
      Number,
      Number,
      platform_types_1.CreateTeamEventTypeInput_2024_06_14,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsEventTypesController.prototype,
  "createTeamEventType",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      is_team_in_org_guard_1.IsTeamInOrg,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.Get)("/teams/:teamId/event-types/:eventTypeId"),
    openapi.ApiResponse({
      status: 200,
      type: require("./outputs/teams/get-team-event-type.output").GetTeamEventTypeOutput,
    }),
    __param(0, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("eventTypeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsEventTypesController.prototype,
  "getTeamEventType",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(
      is_org_guard_1.IsOrgGuard,
      is_team_in_org_guard_1.IsTeamInOrg,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.Get)("/teams/:teamId/event-types"),
    openapi.ApiResponse({
      status: 200,
      type: require("./outputs/teams/get-team-event-types.output").GetTeamEventTypesOutput,
    }),
    __param(0, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_1.GetTeamEventTypesQuery_2024_06_14]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsEventTypesController.prototype,
  "getTeamEventTypes",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.Get)("/teams/event-types"),
    openapi.ApiResponse({
      status: 200,
      type: require("./outputs/teams/get-team-event-types.output").GetTeamEventTypesOutput,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_1.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsEventTypesController.prototype,
  "getTeamsEventTypes",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      is_team_in_org_guard_1.IsTeamInOrg,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.Patch)("/teams/:teamId/event-types/:eventTypeId"),
    openapi.ApiResponse({
      status: 200,
      type: require("./outputs/teams/update-team-event-type.output").UpdateTeamEventTypeOutput,
    }),
    __param(0, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("eventTypeId")),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      Number,
      Object,
      platform_types_1.UpdateTeamEventTypeInput_2024_06_14,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsEventTypesController.prototype,
  "updateTeamEventType",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      is_team_in_org_guard_1.IsTeamInOrg,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.Delete)("/teams/:teamId/event-types/:eventTypeId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/teams/delete-team-event-type.output").DeleteTeamEventTypeOutput,
    }),
    __param(0, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("eventTypeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsEventTypesController.prototype,
  "deleteTeamEventType",
  null
);
OrganizationsEventTypesController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/organizations/:orgId",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Organizations Event Types"),
    __metadata("design:paramtypes", [organizations_event_types_service_1.OrganizationsEventTypesService]),
  ],
  OrganizationsEventTypesController
);
exports.OrganizationsEventTypesController = OrganizationsEventTypesController;
//# sourceMappingURL=organizations-event-types.controller.js.map
