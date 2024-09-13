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
exports.IsOAuthClientWebhookGuard = void 0;
const common_1 = require("@nestjs/common");
const oauth_client_repository_1 = require("../../oauth-clients/oauth-client.repository");
const users_service_1 = require("../../users/services/users.service");
const webhooks_service_1 = require("../services/webhooks.service");
let IsOAuthClientWebhookGuard = class IsOAuthClientWebhookGuard {
  constructor(webhooksService, oAuthClientRepository, usersService) {
    this.webhooksService = webhooksService;
    this.oAuthClientRepository = oAuthClientRepository;
    this.usersService = usersService;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const webhookId = request.params.webhookId;
    const oAuthClientId = request.params.clientId;
    const organizationId = this.usersService.getUserMainOrgId(user);
    if (!user) {
      throw new common_1.ForbiddenException("User not authenticated");
    }
    if (!webhookId) {
      throw new common_1.BadRequestException("webhookId parameter not specified in the request");
    }
    if (!webhookId) {
      throw new common_1.BadRequestException("oAuthClientId parameter not specified in the request");
    }
    if (!user || !webhookId || !oAuthClientId) {
      return false;
    }
    const oAuthClient = await this.oAuthClientRepository.getOAuthClient(oAuthClientId);
    if (!oAuthClient) {
      throw new common_1.NotFoundException(`OAuthClient (${oAuthClientId}) not found`);
    }
    const webhook = await this.webhooksService.getWebhookById(webhookId);
    if (oAuthClient?.organizationId !== organizationId) {
      return user.isSystemAdmin;
    }
    if (webhook.platformOAuthClientId !== oAuthClientId) {
      throw new common_1.ForbiddenException("Webhook does not belong to this oAuthClient");
    }
    request.webhook = webhook;
    request.oAuthClient = oAuthClient;
    return true;
  }
};
IsOAuthClientWebhookGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      webhooks_service_1.WebhooksService,
      oauth_client_repository_1.OAuthClientRepository,
      users_service_1.UsersService,
    ]),
  ],
  IsOAuthClientWebhookGuard
);
exports.IsOAuthClientWebhookGuard = IsOAuthClientWebhookGuard;
//# sourceMappingURL=is-oauth-client-webhook-guard.js.map
