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
exports.OrganizationsTeamsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../../lib/api-versions");
const platform_plan_decorator_1 = require("../../../auth/decorators/billing/platform-plan.decorator");
const get_team_decorator_1 = require("../../../auth/decorators/get-team/get-team.decorator");
const get_user_decorator_1 = require("../../../auth/decorators/get-user/get-user.decorator");
const roles_decorator_1 = require("../../../auth/decorators/roles/roles.decorator");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const platform_plan_guard_1 = require("../../../auth/guards/billing/platform-plan.guard");
const is_admin_api_enabled_guard_1 = require("../../../auth/guards/organizations/is-admin-api-enabled.guard");
const is_org_guard_1 = require("../../../auth/guards/organizations/is-org.guard");
const roles_guard_1 = require("../../../auth/guards/roles/roles.guard");
const is_team_in_org_guard_1 = require("../../../auth/guards/teams/is-team-in-org.guard");
const create_organization_team_input_1 = require("../../inputs/create-organization-team.input");
const update_organization_team_input_1 = require("../../inputs/update-organization-team.input");
const organization_team_output_1 = require("../../outputs/organization-team.output");
const organizations_teams_service_1 = require("../../services/organizations-teams.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
const platform_types_2 = require("@calcom/platform-types");
let OrganizationsTeamsController = class OrganizationsTeamsController {
  constructor(organizationsTeamsService) {
    this.organizationsTeamsService = organizationsTeamsService;
  }
  async getAllTeams(orgId, queryParams) {
    const { skip, take } = queryParams;
    const teams = await this.organizationsTeamsService.getPaginatedOrgTeams(orgId, skip ?? 0, take ?? 250);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: teams.map((team) =>
        (0, class_transformer_1.plainToClass)(platform_types_1.OrgTeamOutputDto, team, {
          strategy: "excludeAll",
        })
      ),
    };
  }
  async getMyTeams(orgId, queryParams, user) {
    const { skip, take } = queryParams;
    const teams = await this.organizationsTeamsService.getPaginatedOrgUserTeams(
      orgId,
      user.id,
      skip ?? 0,
      take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: teams.map((team) =>
        (0, class_transformer_1.plainToClass)(
          organization_team_output_1.OrgMeTeamOutputDto,
          { ...team, accepted: team.members.find((member) => member.userId === user.id)?.accepted ?? false },
          { strategy: "excludeAll" }
        )
      ),
    };
  }
  async getTeam(team) {
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(platform_types_1.OrgTeamOutputDto, team, {
        strategy: "excludeAll",
      }),
    };
  }
  async deleteTeam(orgId, teamId) {
    const team = await this.organizationsTeamsService.deleteOrgTeam(orgId, teamId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(platform_types_1.OrgTeamOutputDto, team, {
        strategy: "excludeAll",
      }),
    };
  }
  async updateTeam(orgId, teamId, body) {
    const team = await this.organizationsTeamsService.updateOrgTeam(orgId, teamId, body);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(platform_types_1.OrgTeamOutputDto, team, {
        strategy: "excludeAll",
      }),
    };
  }
  async createTeam(orgId, body, user, oAuthClientId) {
    const team = oAuthClientId
      ? await this.organizationsTeamsService.createPlatformOrgTeam(orgId, oAuthClientId, body, user)
      : await this.organizationsTeamsService.createOrgTeam(orgId, body, user);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(platform_types_1.OrgTeamOutputDto, team, {
        strategy: "excludeAll",
      }),
    };
  }
};
__decorate(
  [
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all the teams of an organization." }),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/organization-team.output").OrgTeamsOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_2.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsController.prototype,
  "getAllTeams",
  null
);
__decorate(
  [
    (0, common_1.Get)("/me"),
    (0, swagger_1.ApiOperation)({ summary: "Get the organization's teams user is a member of" }),
    (0, roles_decorator_1.Roles)("ORG_MEMBER"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/organization-team.output").OrgMeTeamsOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_2.SkipTakePagination, Object]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsController.prototype,
  "getMyTeams",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(is_team_in_org_guard_1.IsTeamInOrg),
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Get)("/:teamId"),
    (0, swagger_1.ApiOperation)({ summary: "Get a team of the organization by ID." }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/organization-team.output").OrgTeamOutputResponseDto,
    }),
    __param(0, (0, get_team_decorator_1.GetTeam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsController.prototype,
  "getTeam",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(is_team_in_org_guard_1.IsTeamInOrg),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Delete)("/:teamId"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a team of the organization by ID." }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/organization-team.output").OrgTeamOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsController.prototype,
  "deleteTeam",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(is_team_in_org_guard_1.IsTeamInOrg),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Patch)("/:teamId"),
    (0, swagger_1.ApiOperation)({ summary: "Update a team of the organization by ID." }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/organization-team.output").OrgTeamOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_organization_team_input_1.UpdateOrgTeamDto]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsController.prototype,
  "updateTeam",
  null
);
__decorate(
  [
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, swagger_1.ApiOperation)({ summary: "Create a team for an organization." }),
    openapi.ApiResponse({
      status: 201,
      type: require("../../outputs/organization-team.output").OrgTeamOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __param(3, (0, common_1.Headers)(platform_constants_1.X_CAL_CLIENT_ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      create_organization_team_input_1.CreateOrgTeamDto,
      Object,
      String,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsController.prototype,
  "createTeam",
  null
);
OrganizationsTeamsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/organizations/:orgId/teams",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, swagger_1.ApiTags)("Organizations Teams"),
    __metadata("design:paramtypes", [organizations_teams_service_1.OrganizationsTeamsService]),
  ],
  OrganizationsTeamsController
);
exports.OrganizationsTeamsController = OrganizationsTeamsController;
//# sourceMappingURL=organizations-teams.controller.js.map
