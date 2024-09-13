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
exports.OrganizationsUsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../../lib/api-versions");
const platform_plan_decorator_1 = require("../../../auth/decorators/billing/platform-plan.decorator");
const get_org_decorator_1 = require("../../../auth/decorators/get-org/get-org.decorator");
const get_user_decorator_1 = require("../../../auth/decorators/get-user/get-user.decorator");
const roles_decorator_1 = require("../../../auth/decorators/roles/roles.decorator");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const platform_plan_guard_1 = require("../../../auth/guards/billing/platform-plan.guard");
const is_admin_api_enabled_guard_1 = require("../../../auth/guards/organizations/is-admin-api-enabled.guard");
const is_org_guard_1 = require("../../../auth/guards/organizations/is-org.guard");
const roles_guard_1 = require("../../../auth/guards/roles/roles.guard");
const is_user_in_org_guard_1 = require("../../../auth/guards/users/is-user-in-org.guard");
const create_organization_user_input_1 = require("../../inputs/create-organization-user.input");
const get_organization_users_input_1 = require("../../inputs/get-organization-users.input");
const update_organization_user_input_1 = require("../../inputs/update-organization-user.input");
const organizations_users_service_1 = require("../../services/organizations-users-service");
const get_users_output_1 = require("../../../users/outputs/get-users.output");
const platform_constants_1 = require("@calcom/platform-constants");
let OrganizationsUsersController = class OrganizationsUsersController {
  constructor(organizationsUsersService) {
    this.organizationsUsersService = organizationsUsersService;
  }
  async getOrganizationsUsers(orgId, query) {
    const users = await this.organizationsUsersService.getUsers(
      orgId,
      query.emails,
      query.skip ?? 0,
      query.take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: users.map((user) =>
        (0, class_transformer_1.plainToInstance)(get_users_output_1.GetUserOutput, user, {
          strategy: "excludeAll",
        })
      ),
    };
  }
  async createOrganizationUser(orgId, org, input, inviter) {
    const user = await this.organizationsUsersService.createUser(
      org,
      input,
      inviter.name ?? inviter.username ?? inviter.email
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToInstance)(get_users_output_1.GetUserOutput, user, {
        strategy: "excludeAll",
      }),
    };
  }
  async updateOrganizationUser(orgId, userId, org, input) {
    const user = await this.organizationsUsersService.updateUser(orgId, userId, input);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToInstance)(get_users_output_1.GetUserOutput, user, {
        strategy: "excludeAll",
      }),
    };
  }
  async deleteOrganizationUser(orgId, userId) {
    const user = await this.organizationsUsersService.deleteUser(orgId, userId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToInstance)(get_users_output_1.GetUserOutput, user, {
        strategy: "excludeAll",
      }),
    };
  }
};
__decorate(
  [
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/get-organization-users.output").GetOrganizationUsersOutput,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, get_organization_users_input_1.GetOrganizationsUsersInput]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsUsersController.prototype,
  "getOrganizationsUsers",
  null
);
__decorate(
  [
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    openapi.ApiResponse({
      status: 201,
      type: require("../../outputs/get-organization-users.output").GetOrganizationUserOutput,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, get_org_decorator_1.GetOrg)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      Object,
      create_organization_user_input_1.CreateOrganizationUserInput,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsUsersController.prototype,
  "createOrganizationUser",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:userId"),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/get-organization-users.output").GetOrganizationUserOutput,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __param(2, (0, get_org_decorator_1.GetOrg)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      Number,
      Number,
      Object,
      update_organization_user_input_1.UpdateOrganizationUserInput,
    ]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsUsersController.prototype,
  "updateOrganizationUser",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:userId"),
    (0, roles_decorator_1.Roles)("ORG_ADMIN"),
    (0, platform_plan_decorator_1.PlatformPlan)("ESSENTIALS"),
    (0, common_1.UseGuards)(is_user_in_org_guard_1.IsUserInOrg),
    openapi.ApiResponse({
      status: 200,
      type: require("../../outputs/get-organization-users.output").GetOrganizationUserOutput,
    }),
    __param(0, (0, common_1.Param)("orgId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise),
  ],
  OrganizationsUsersController.prototype,
  "deleteOrganizationUser",
  null
);
OrganizationsUsersController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/organizations/:orgId/users",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseInterceptors)(common_2.ClassSerializerInterceptor),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_org_guard_1.IsOrgGuard,
      roles_guard_1.RolesGuard,
      platform_plan_guard_1.PlatformPlanGuard,
      is_admin_api_enabled_guard_1.IsAdminAPIEnabledGuard
    ),
    (0, common_1.UseGuards)(is_org_guard_1.IsOrgGuard),
    (0, swagger_1.ApiTags)("Organizations Users"),
    __metadata("design:paramtypes", [organizations_users_service_1.OrganizationsUsersService]),
  ],
  OrganizationsUsersController
);
exports.OrganizationsUsersController = OrganizationsUsersController;
//# sourceMappingURL=organizations-users.controller.js.map
