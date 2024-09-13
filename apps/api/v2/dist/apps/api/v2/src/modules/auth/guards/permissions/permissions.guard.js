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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_1 = require("next-auth/jwt");
const api_key_1 = require("../../../../lib/api-key");
const permissions_decorator_1 = require("../../decorators/permissions/permissions.decorator");
const tokens_repository_1 = require("../../../tokens/tokens.repository");
const platform_utils_1 = require("@calcom/platform-utils");
let PermissionsGuard = class PermissionsGuard {
  constructor(reflector, tokensRepository, config) {
    this.reflector = reflector;
    this.tokensRepository = tokensRepository;
    this.config = config;
  }
  async canActivate(context) {
    const requiredPermissions = this.reflector.get(permissions_decorator_1.Permissions, context.getHandler());
    if (!requiredPermissions?.length || !Object.keys(requiredPermissions)?.length) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const authString = request.get("Authorization")?.replace("Bearer ", "");
    const nextAuthSecret = this.config.get("next.authSecret", { infer: true });
    const nextAuthToken = await (0, jwt_1.getToken)({ req: request, secret: nextAuthSecret });
    if (nextAuthToken) {
      return true;
    }
    if (!authString) {
      return false;
    }
    if ((0, api_key_1.isApiKey)(authString, this.config.get("api.apiKeyPrefix") ?? "cal_")) {
      return true;
    }
    const oAuthClientPermissions = await this.getOAuthClientPermissions(authString);
    if (!oAuthClientPermissions) {
      return false;
    }
    return (0, platform_utils_1.hasPermissions)(oAuthClientPermissions, [...requiredPermissions]);
  }
  async getOAuthClientPermissions(accessToken) {
    const oAuthClient = await this.tokensRepository.getAccessTokenClient(accessToken);
    return oAuthClient?.permissions;
  }
};
PermissionsGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      core_1.Reflector,
      tokens_repository_1.TokensRepository,
      config_1.ConfigService,
    ]),
  ],
  PermissionsGuard
);
exports.PermissionsGuard = PermissionsGuard;
//# sourceMappingURL=permissions.guard.js.map
