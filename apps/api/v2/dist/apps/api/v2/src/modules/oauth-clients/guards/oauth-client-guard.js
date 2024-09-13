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
exports.OAuthClientGuard = void 0;
const common_1 = require("@nestjs/common");
const oauth_client_repository_1 = require("../oauth-client.repository");
const users_service_1 = require("../../users/services/users.service");
let OAuthClientGuard = class OAuthClientGuard {
  constructor(oAuthClientRepository, usersService) {
    this.oAuthClientRepository = oAuthClientRepository;
    this.usersService = usersService;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const organizationId = user ? this.usersService.getUserMainOrgId(user) : null;
    const oAuthClientId = request.params.clientId;
    if (!oAuthClientId) {
      throw new common_1.ForbiddenException("No OAuth client associated with the request.");
    }
    if (!user || !organizationId) {
      throw new common_1.ForbiddenException("No organization associated with the user.");
    }
    const oAuthClient = await this.oAuthClientRepository.getOAuthClient(oAuthClientId);
    if (!oAuthClient) {
      throw new common_1.NotFoundException("OAuth client not found.");
    }
    return Boolean(user.isSystemAdmin || oAuthClient.organizationId === organizationId);
  }
};
OAuthClientGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      oauth_client_repository_1.OAuthClientRepository,
      users_service_1.UsersService,
    ]),
  ],
  OAuthClientGuard
);
exports.OAuthClientGuard = OAuthClientGuard;
//# sourceMappingURL=oauth-client-guard.js.map
