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
exports.OAuthClientsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const env_1 = require("../../../../env");
const api_versions_1 = require("../../../../lib/api-versions");
const get_user_decorator_1 = require("../../../auth/decorators/get-user/get-user.decorator");
const membership_roles_decorator_1 = require("../../../auth/decorators/roles/membership-roles.decorator");
const next_auth_guard_1 = require("../../../auth/guards/next-auth/next-auth.guard");
const organization_roles_guard_1 = require("../../../auth/guards/organization-roles/organization-roles.guard");
const CreateOAuthClientResponse_dto_1 = require("./responses/CreateOAuthClientResponse.dto");
const oauth_client_guard_1 = require("../../guards/oauth-client-guard");
const update_oauth_client_input_1 = require("../../inputs/update-oauth-client.input");
const oauth_client_repository_1 = require("../../oauth-client.repository");
const organizations_repository_1 = require("../../../organizations/organizations.repository");
const users_service_1 = require("../../../users/services/users.service");
const users_repository_1 = require("../../../users/users.repository");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
const platform_types_2 = require("@calcom/platform-types");
const AUTH_DOCUMENTATION = `⚠️ First, this endpoint requires \`Cookie: next-auth.session-token=eyJhbGciOiJ\` header. Log into Cal web app using owner of organization that was created after visiting \`/settings/organizations/new\`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.
Second, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.`;
let OAuthClientsController = class OAuthClientsController {
  constructor(oauthClientRepository, userRepository, teamsRepository, usersService) {
    this.oauthClientRepository = oauthClientRepository;
    this.userRepository = userRepository;
    this.teamsRepository = teamsRepository;
    this.usersService = usersService;
    this.logger = new common_1.Logger("OAuthClientController");
  }
  async createOAuthClient(user, body) {
    const organizationId = this.usersService.getUserMainOrgId(user);
    this.logger.log(
      `For organisation ${organizationId} creating OAuth Client with data: ${JSON.stringify(body)}`
    );
    const organization = await this.teamsRepository.findByIdIncludeBilling(organizationId);
    if (!organization?.platformBilling || !organization?.platformBilling?.subscriptionId) {
      throw new common_1.BadRequestException("Team is not subscribed, cannot create an OAuth Client.");
    }
    const { id, secret } = await this.oauthClientRepository.createOAuthClient(organizationId, body);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        clientId: id,
        clientSecret: secret,
      },
    };
  }
  async getOAuthClients(user) {
    const organizationId = this.usersService.getUserMainOrgId(user);
    const clients = await this.oauthClientRepository.getOrganizationOAuthClients(organizationId);
    return { status: platform_constants_1.SUCCESS_STATUS, data: clients };
  }
  async getOAuthClientById(clientId) {
    const client = await this.oauthClientRepository.getOAuthClient(clientId);
    if (!client) {
      throw new common_1.NotFoundException(`OAuth client with ID ${clientId} not found`);
    }
    return { status: platform_constants_1.SUCCESS_STATUS, data: client };
  }
  async getOAuthClientManagedUsersById(clientId, queryParams) {
    const { offset, limit } = queryParams;
    const existingManagedUsers = await this.userRepository.findManagedUsersByOAuthClientId(
      clientId,
      offset ?? 0,
      limit ?? 50
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: existingManagedUsers.map((user) => this.getResponseUser(user)),
    };
  }
  async updateOAuthClient(clientId, body) {
    this.logger.log(`For client ${clientId} updating OAuth Client with data: ${JSON.stringify(body)}`);
    const client = await this.oauthClientRepository.updateOAuthClient(clientId, body);
    return { status: platform_constants_1.SUCCESS_STATUS, data: client };
  }
  async deleteOAuthClient(clientId) {
    this.logger.log(`Deleting OAuth Client with ID: ${clientId}`);
    const client = await this.oauthClientRepository.deleteOAuthClient(clientId);
    return { status: platform_constants_1.SUCCESS_STATUS, data: client };
  }
  getResponseUser(user) {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      timeZone: user.timeZone,
      weekStart: user.weekStart,
      createdDate: user.createdDate,
      timeFormat: user.timeFormat,
      defaultScheduleId: user.defaultScheduleId,
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ description: AUTH_DOCUMENTATION }),
    (0, swagger_1.ApiCreatedResponse)({
      description: "Create an OAuth client",
      type: CreateOAuthClientResponse_dto_1.CreateOAuthClientResponseDto,
    }),
    openapi.ApiResponse({
      status: common_1.HttpStatus.CREATED,
      type: require("./responses/CreateOAuthClientResponse.dto").CreateOAuthClientResponseDto,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, platform_types_1.CreateOAuthClientInput]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientsController.prototype,
  "createOAuthClient",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
      client_1.MembershipRole.MEMBER,
    ]),
    (0, swagger_1.ApiOperation)({ description: AUTH_DOCUMENTATION }),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./responses/GetOAuthClientsResponse.dto").GetOAuthClientsResponseDto,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientsController.prototype,
  "getOAuthClients",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:clientId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
      client_1.MembershipRole.MEMBER,
    ]),
    (0, swagger_1.ApiOperation)({ description: AUTH_DOCUMENTATION }),
    (0, common_1.UseGuards)(oauth_client_guard_1.OAuthClientGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./responses/GetOAuthClientResponse.dto").GetOAuthClientResponseDto,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientsController.prototype,
  "getOAuthClientById",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:clientId/managed-users"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
      client_1.MembershipRole.MEMBER,
    ]),
    (0, swagger_1.ApiOperation)({ description: AUTH_DOCUMENTATION }),
    (0, common_1.UseGuards)(oauth_client_guard_1.OAuthClientGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../oauth-client-users/outputs/get-managed-users.output").GetManagedUsersOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, platform_types_2.Pagination]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientsController.prototype,
  "getOAuthClientManagedUsersById",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:clientId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ description: AUTH_DOCUMENTATION }),
    (0, common_1.UseGuards)(oauth_client_guard_1.OAuthClientGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./responses/GetOAuthClientResponse.dto").GetOAuthClientResponseDto,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_oauth_client_input_1.UpdateOAuthClientInput]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientsController.prototype,
  "updateOAuthClient",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:clientId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ description: AUTH_DOCUMENTATION }),
    (0, common_1.UseGuards)(oauth_client_guard_1.OAuthClientGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./responses/GetOAuthClientResponse.dto").GetOAuthClientResponseDto,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientsController.prototype,
  "deleteOAuthClient",
  null
);
OAuthClientsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/oauth-clients",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      next_auth_guard_1.NextAuthGuard,
      organization_roles_guard_1.OrganizationRolesGuard
    ),
    (0, swagger_1.ApiExcludeController)((0, env_1.getEnv)("NODE_ENV") === "production"),
    (0, swagger_1.ApiTags)("OAuth - development only"),
    __metadata("design:paramtypes", [
      oauth_client_repository_1.OAuthClientRepository,
      users_repository_1.UsersRepository,
      organizations_repository_1.OrganizationsRepository,
      users_service_1.UsersService,
    ]),
  ],
  OAuthClientsController
);
exports.OAuthClientsController = OAuthClientsController;
//# sourceMappingURL=oauth-clients.controller.js.map
