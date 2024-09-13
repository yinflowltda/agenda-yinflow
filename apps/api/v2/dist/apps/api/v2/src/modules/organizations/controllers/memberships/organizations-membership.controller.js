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
exports.OrganizationsMembershipsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../../lib/api-versions");
const platform_plan_decorator_1 = require("../../../auth/decorators/billing/platform-plan.decorator");
const get_membership_decorator_1 = require("../../../auth/decorators/get-membership/get-membership.decorator");
const roles_decorator_1 = require("../../../auth/decorators/roles/roles.decorator");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const platform_plan_guard_1 = require("../../../auth/guards/billing/platform-plan.guard");
const is_membership_in_org_guard_1 = require("../../../auth/guards/memberships/is-membership-in-org.guard");
const is_admin_api_enabled_guard_1 = require("../../../auth/guards/organizations/is-admin-api-enabled.guard");
const is_org_guard_1 = require("../../../auth/guards/organizations/is-org.guard");
const roles_guard_1 = require("../../../auth/guards/roles/roles.guard");
const create_organization_membership_input_1 = require("../../inputs/create-organization-membership.input");
const update_organization_membership_input_1 = require("../../inputs/update-organization-membership.input");
const membership_output_1 = require("../../outputs/organization-membership/membership.output");
const organizations_membership_service_1 = require("../../services/organizations-membership.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let OrganizationsMembershipsController = class OrganizationsMembershipsController {
  constructor(organizationsMembershipService) {
    this.organizationsMembershipService = organizationsMembershipService;
  }
  async getAllMemberships(orgId, queryParams) {
    const { skip, take } = queryParams;
    const memberships = await this.organizationsMembershipService.getPaginatedOrgMemberships(
      orgId,
      skip ?? 0,
      take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: memberships.map((membership) =>
        (0, class_transformer_1.plainToClass)(membership_output_1.OrgMembershipOutputDto, membership, {
          strategy: "excludeAll",
        })
      ),
    };
  }
  async createMembership(orgId, body) {
    const membership = await this.organizationsMembershipService.createOrgMembership(orgId, body);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(membership_output_1.OrgMembershipOutputDto, membership, {
        strategy: "excludeAll",
      }),
    };
  }
  async getUserSchedule(membership) {
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(membership_output_1.OrgMembershipOutputDto, membership, {
        strategy: "excludeAll",
      }),
    };
  }
  async deleteMembership(orgId, membershipId) {
    const membership = await this.organizationsMembershipService.deleteOrgMembership(orgId, membershipId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(membership_output_1.OrgMembershipOutputDto, membership, {
        strategy: "excludeAll",
      }),
    };
  }
  async updateMembership(orgId, membershipId, body) {
    const membership = await this.organizationsMembershipService.updateOrgMembership(
      orgId,
      membershipId,
      body
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(membership_output_1.OrgMembershipOutputDto, membership, {
        strategy: "excludeAll",
      }),
    };
  }
};
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Get)("/"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../outputs/organization-membership/get-all-memberships.output").GetAllOrgMemberships,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_1.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsMembershipsController.prototype,
  "getAllMemberships",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({
      status: common_1.HttpStatus.CREATED,
      type: require("../../outputs/organization-membership/create-membership.output")
        .CreateOrgMembershipOutput,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_organization_membership_input_1.CreateOrgMembershipDto]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsMembershipsController.prototype,
  "createMembership",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_membership_in_org_guard_1.IsMembershipInOrg),
    (0, common_1.Get)("/:membershipId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../outputs/organization-membership/get-membership.output").GetOrgMembership,
    }),
    __param(0, (0, get_membership_decorator_1.GetMembership)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsMembershipsController.prototype,
  "getUserSchedule",
  null
);
__decorate(
  [
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_membership_in_org_guard_1.IsMembershipInOrg),
    (0, common_1.Delete)("/:membershipId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../outputs/organization-membership/delete-membership.output").DeleteOrgMembership,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("membershipId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsMembershipsController.prototype,
  "deleteMembership",
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(is_membership_in_org_guard_1.IsMembershipInOrg),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.Patch)("/:membershipId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../../outputs/organization-membership/update-membership.output").UpdateOrgMembership,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("membershipId", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      Number,
      update_organization_membership_input_1.UpdateOrgMembershipDto,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsMembershipsController.prototype,
  "updateMembership",
  null
);
OrganizationsMembershipsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/organizations/:orgId/memberships",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, swagger_1.ApiTags)("Organizations Memberships"),
    __metadata("design:paramtypes", [organizations_membership_service_1.OrganizationsMembershipService]),
  ],
  OrganizationsMembershipsController
);
exports.OrganizationsMembershipsController = OrganizationsMembershipsController;
//# sourceMappingURL=organizations-membership.controller.js.map
