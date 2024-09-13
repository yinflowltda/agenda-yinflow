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
exports.OAuthClientUsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_versions_1 = require("../../../../lib/api-versions");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const oauth_client_guard_1 = require("../../guards/oauth-client-guard");
const oauth_client_repository_1 = require("../../oauth-client.repository");
const oauth_clients_users_service_1 = require("../../services/oauth-clients-users.service");
const tokens_repository_1 = require("../../../tokens/tokens.repository");
const create_managed_user_input_1 = require("../../../users/inputs/create-managed-user.input");
const update_managed_user_input_1 = require("../../../users/inputs/update-managed-user.input");
const users_repository_1 = require("../../../users/users.repository");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let OAuthClientUsersController = class OAuthClientUsersController {
  constructor(userRepository, oAuthClientUsersService, oauthRepository, tokensRepository) {
    this.userRepository = userRepository;
    this.oAuthClientUsersService = oAuthClientUsersService;
    this.oauthRepository = oauthRepository;
    this.tokensRepository = tokensRepository;
    this.logger = new common_1.Logger("UserController");
  }
  async getManagedUsers(oAuthClientId, queryParams) {
    this.logger.log(`getting managed users with data for OAuth Client with ID ${oAuthClientId}`);
    const { offset, limit } = queryParams;
    const existingUsers = await this.userRepository.findManagedUsersByOAuthClientId(
      oAuthClientId,
      offset ?? 0,
      limit ?? 50
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: existingUsers.map((user) => this.getResponseUser(user)),
    };
  }
  async createUser(oAuthClientId, body) {
    this.logger.log(
      `Creating user with data: ${JSON.stringify(body, null, 2)} for OAuth Client with ID ${oAuthClientId}`
    );
    const client = await this.oauthRepository.getOAuthClient(oAuthClientId);
    console.log("asap createUser client", JSON.stringify(client, null, 2));
    const isPlatformManaged = true;
    const { user, tokens } = await this.oAuthClientUsersService.createOauthClientUser(
      oAuthClientId,
      body,
      isPlatformManaged,
      client?.organizationId
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        user: this.getResponseUser(user),
        accessToken: tokens.accessToken,
        accessTokenExpiresAt: tokens.accessTokenExpiresAt.valueOf(),
        refreshToken: tokens.refreshToken,
      },
    };
  }
  async getUserById(clientId, userId) {
    const user = await this.validateManagedUserOwnership(clientId, userId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: this.getResponseUser(user),
    };
  }
  async updateUser(clientId, userId, body) {
    await this.validateManagedUserOwnership(clientId, userId);
    this.logger.log(`Updating user with ID ${userId}: ${JSON.stringify(body, null, 2)}`);
    const user = await this.oAuthClientUsersService.updateOAuthClientUser(clientId, userId, body);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: this.getResponseUser(user),
    };
  }
  async deleteUser(clientId, userId) {
    const user = await this.validateManagedUserOwnership(clientId, userId);
    await this.userRepository.delete(userId);
    this.logger.warn(`Deleting user with ID: ${userId}`);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: this.getResponseUser(user),
    };
  }
  async forceRefresh(userId, oAuthClientId) {
    this.logger.log(`Forcing new access tokens for managed user with ID ${userId}`);
    const { id } = await this.validateManagedUserOwnership(oAuthClientId, userId);
    const { accessToken, refreshToken, accessTokenExpiresAt } = await this.tokensRepository.createOAuthTokens(
      oAuthClientId,
      id,
      true
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        accessToken,
        refreshToken,
        accessTokenExpiresAt: accessTokenExpiresAt.valueOf(),
      },
    };
  }
  async validateManagedUserOwnership(clientId, userId) {
    const user = await this.userRepository.findByIdWithinPlatformScope(userId, clientId);
    if (!user) {
      throw new common_1.NotFoundException(`User with ID ${userId} is not part of this OAuth client.`);
    }
    return user;
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
      locale: user.locale,
    };
  }
};
__decorate(
  [
    (0, common_1.Get)("/"),
    openapi.ApiResponse({
      status: 200,
      type: require("./outputs/get-managed-users.output").GetManagedUsersOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, platform_types_1.Pagination]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientUsersController.prototype,
  "getManagedUsers",
  null
);
__decorate(
  [
    (0, common_1.Post)("/"),
    openapi.ApiResponse({
      status: 201,
      type: require("./outputs/create-managed-user.output").CreateManagedUserOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_managed_user_input_1.CreateManagedUserInput]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientUsersController.prototype,
  "createUser",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:userId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/get-managed-user.output").GetManagedUserOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientUsersController.prototype,
  "getUserById",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:userId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/get-managed-user.output").GetManagedUserOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Param)("userId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, update_managed_user_input_1.UpdateManagedUserInput]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientUsersController.prototype,
  "updateUser",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:userId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/get-managed-user.output").GetManagedUserOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientUsersController.prototype,
  "deleteUser",
  null
);
__decorate(
  [
    (0, common_1.Post)("/:userId/force-refresh"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("../oauth-flow/responses/KeysResponse.dto").KeysResponseDto,
    }),
    __param(0, (0, common_1.Param)("userId")),
    __param(1, (0, common_1.Param)("clientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientUsersController.prototype,
  "forceRefresh",
  null
);
OAuthClientUsersController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/oauth-clients/:clientId/users",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard, oauth_client_guard_1.OAuthClientGuard),
    (0, swagger_1.ApiTags)("Managed users"),
    __metadata("design:paramtypes", [
      users_repository_1.UsersRepository,
      oauth_clients_users_service_1.OAuthClientUsersService,
      oauth_client_repository_1.OAuthClientRepository,
      tokens_repository_1.TokensRepository,
    ]),
  ],
  OAuthClientUsersController
);
exports.OAuthClientUsersController = OAuthClientUsersController;
//# sourceMappingURL=oauth-client-users.controller.js.map
