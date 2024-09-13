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
exports.OrganizationsTeamsMembershipsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../../../lib/api-versions");
const platform_plan_decorator_1 = require("../../../../auth/decorators/billing/platform-plan.decorator");
const roles_decorator_1 = require("../../../../auth/decorators/roles/roles.decorator");
const api_auth_guard_1 = require("../../../../auth/guards/api-auth/api-auth.guard");
const platform_plan_guard_1 = require("../../../../auth/guards/billing/platform-plan.guard");
const is_admin_api_enabled_guard_1 = require("../../../../auth/guards/organizations/is-admin-api-enabled.guard");
const is_org_guard_1 = require("../../../../auth/guards/organizations/is-org.guard");
const roles_guard_1 = require("../../../../auth/guards/roles/roles.guard");
const is_team_in_org_guard_1 = require("../../../../auth/guards/teams/is-team-in-org.guard");
const create_organization_team_membership_input_1 = require("../../../inputs/create-organization-team-membership.input");
const update_organization_team_membership_input_1 = require("../../../inputs/update-organization-team-membership.input");
const organizations_repository_1 = require("../../../organizations.repository");
const organization_teams_memberships_output_1 = require("../../../outputs/organization-teams-memberships.output");
const organizations_teams_memberships_service_1 = require("../../../services/organizations-teams-memberships.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let OrganizationsTeamsMembershipsController = class OrganizationsTeamsMembershipsController {
  constructor(organizationsTeamsMembershipsService, organizationsRepository) {
    this.organizationsTeamsMembershipsService = organizationsTeamsMembershipsService;
    this.organizationsRepository = organizationsRepository;
  }
  async getAllOrgTeamMemberships(orgId, teamId, queryParams) {
    const { skip, take } = queryParams;
    const orgTeamMemberships = await this.organizationsTeamsMembershipsService.getPaginatedOrgTeamMemberships(
      orgId,
      teamId,
      skip ?? 0,
      take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: orgTeamMemberships.map((membership) =>
        (0, class_transformer_1.plainToClass)(
          organization_teams_memberships_output_1.OrgTeamMembershipOutputDto,
          membership,
          { strategy: "excludeAll" }
        )
      ),
    };
  }
  async getOrgTeamMembership(orgId, teamId, membershipId) {
    const orgTeamMembership = await this.organizationsTeamsMembershipsService.getOrgTeamMembership(
      orgId,
      teamId,
      membershipId
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        organization_teams_memberships_output_1.OrgTeamMembershipOutputDto,
        orgTeamMembership,
        { strategy: "excludeAll" }
      ),
    };
  }
  async deleteOrgTeamMembership(orgId, teamId, membershipId) {
    const membership = await this.organizationsTeamsMembershipsService.deleteOrgTeamMembership(
      orgId,
      teamId,
      membershipId
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        organization_teams_memberships_output_1.OrgTeamMembershipOutputDto,
        membership,
        { strategy: "excludeAll" }
      ),
    };
  }
  async updateOrgTeamMembership(orgId, teamId, membershipId, data) {
    const membership = await this.organizationsTeamsMembershipsService.updateOrgTeamMembership(
      orgId,
      teamId,
      membershipId,
      data
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        organization_teams_memberships_output_1.OrgTeamMembershipOutputDto,
        membership,
        { strategy: "excludeAll" }
      ),
    };
  }
  async createOrgTeamMembership(orgId, teamId, data) {
    const user = await this.organizationsRepository.findOrgUser(Number(orgId), Number(data.userId));
    if (!user) {
      throw new common_1.UnprocessableEntityException("User is not part of the Organization");
    }
    const membership = await this.organizationsTeamsMembershipsService.createOrgTeamMembership(teamId, data);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        organization_teams_memberships_output_1.OrgTeamMembershipOutputDto,
        membership,
        { strategy: "excludeAll" }
      ),
    };
  }
};
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({ summary: "Get all the memberships of a team of an organization." }),
    (0, common_1.UseGuards)(),
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../../outputs/organization-teams-memberships.output")
        .OrgTeamMembershipsOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, platform_types_1.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsMembershipsController.prototype,
  "getAllOrgTeamMemberships",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:membershipId"),
    (0, swagger_1.ApiOperation)({ summary: "Get the membership of an organization's team by ID" }),
    (0, common_1.UseGuards)(),
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../../outputs/organization-teams-memberships.output")
        .OrgTeamMembershipOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)("membershipId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsMembershipsController.prototype,
  "getOrgTeamMembership",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Delete)("/:membershipId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: "Delete the membership of an organization's team by ID" }),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../../outputs/organization-teams-memberships.output")
        .OrgTeamMembershipOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)("membershipId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsMembershipsController.prototype,
  "deleteOrgTeamMembership",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Patch)("/:membershipId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: "Update the membership of an organization's team by ID" }),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../../outputs/organization-teams-memberships.output")
        .OrgTeamMembershipOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)("membershipId", common_1.ParseIntPipe)),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      Number,
      Number,
      update_organization_team_membership_input_1.UpdateOrgTeamMembershipDto,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsMembershipsController.prototype,
  "updateOrgTeamMembership",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("TEAM_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: "Create a membership of an organization's team" }),
    openapi.ApiResponse({
      status: common_1.HttpStatus.CREATED,
      type: require("../../../outputs/organization-teams-memberships.output")
        .OrgTeamMembershipOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("teamId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      Number,
      create_organization_team_membership_input_1.CreateOrgTeamMembershipDto,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsTeamsMembershipsController.prototype,
  "createOrgTeamMembership",
  null
);
OrganizationsTeamsMembershipsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/organizations/:orgId/teams/:teamId/memberships",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      is_team_in_org_guard_1.IsTeamInOrg,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, swagger_1.ApiTags)("Organizations Teams"),
    __metadata("design:paramtypes", [
      organizations_teams_memberships_service_1.OrganizationsTeamsMembershipsService,
      organizations_repository_1.OrganizationsRepository,
    ]),
  ],
  OrganizationsTeamsMembershipsController
);
exports.OrganizationsTeamsMembershipsController = OrganizationsTeamsMembershipsController;
//# sourceMappingURL=organizations-teams-memberships.controller.js.map
