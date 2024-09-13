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
exports.CalProviderController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_versions_1 = require("../../lib/api-versions");
const get_user_decorator_1 = require("../../modules/auth/decorators/get-user/get-user.decorator");
const api_auth_guard_1 = require("../../modules/auth/guards/api-auth/api-auth.guard");
const oauth_client_repository_1 = require("../../modules/oauth-clients/oauth-client.repository");
const platform_constants_1 = require("@calcom/platform-constants");
let CalProviderController = class CalProviderController {
  constructor(oauthClientRepository) {
    this.oauthClientRepository = oauthClientRepository;
  }
  async verifyClientId(clientId) {
    if (!clientId) {
      throw new common_1.NotFoundException();
    }
    const oAuthClient = await this.oauthClientRepository.getOAuthClient(clientId);
    if (!oAuthClient) throw new common_1.UnauthorizedException();
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
  async verifyAccessToken(clientId, user) {
    if (!clientId) {
      throw new common_1.BadRequestException();
    }
    if (!user) {
      throw new common_1.UnauthorizedException();
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
};
__decorate(
  [
    (0, common_1.Get)("/:clientId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/verify-client.output").ProviderVerifyClientOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  CalProviderController.prototype,
  "verifyClientId",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:clientId/access-token"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./outputs/verify-access-token.output").ProviderVerifyAccessTokenOutput,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise),
  ],
  CalProviderController.prototype,
  "verifyAccessToken",
  null
);
CalProviderController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/provider",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Cal provider"),
    __metadata("design:paramtypes", [oauth_client_repository_1.OAuthClientRepository]),
  ],
  CalProviderController
);
exports.CalProviderController = CalProviderController;
//# sourceMappingURL=provider.controller.js.map
