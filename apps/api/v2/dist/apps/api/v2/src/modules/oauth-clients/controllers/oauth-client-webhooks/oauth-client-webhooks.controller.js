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
exports.OAuthClientWebhooksController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../../lib/api-versions");
const membership_roles_decorator_1 = require("../../../auth/decorators/roles/membership-roles.decorator");
const next_auth_guard_1 = require("../../../auth/guards/next-auth/next-auth.guard");
const organization_roles_guard_1 = require("../../../auth/guards/organization-roles/organization-roles.guard");
const get_webhook_decorator_1 = require("../../../webhooks/decorators/get-webhook-decorator");
const is_oauth_client_webhook_guard_1 = require("../../../webhooks/guards/is-oauth-client-webhook-guard");
const webhook_input_1 = require("../../../webhooks/inputs/webhook.input");
const oauth_client_webhook_output_1 = require("../../../webhooks/outputs/oauth-client-webhook.output");
const WebhookInputPipe_1 = require("../../../webhooks/pipes/WebhookInputPipe");
const WebhookOutputPipe_1 = require("../../../webhooks/pipes/WebhookOutputPipe");
const oauth_clients_webhooks_service_1 = require("../../../webhooks/services/oauth-clients-webhooks.service");
const webhooks_service_1 = require("../../../webhooks/services/webhooks.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
const oauth_client_guard_1 = require("../../guards/oauth-client-guard");
let OAuthClientWebhooksController = class OAuthClientWebhooksController {
  constructor(webhooksService, oAuthClientWebhooksService) {
    this.webhooksService = webhooksService;
    this.oAuthClientWebhooksService = oAuthClientWebhooksService;
  }
  async createOAuthClientWebhook(body, oAuthClientId) {
    const webhook = await this.oAuthClientWebhooksService.createOAuthClientWebhook(
      oAuthClientId,
      new WebhookInputPipe_1.WebhookInputPipe().transform(body)
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        oauth_client_webhook_output_1.OAuthClientWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async updateOAuthClientWebhook(body, webhookId) {
    const webhook = await this.webhooksService.updateWebhook(
      webhookId,
      new WebhookInputPipe_1.PartialWebhookInputPipe().transform(body)
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        oauth_client_webhook_output_1.OAuthClientWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async getOAuthClientWebhook(webhook) {
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        oauth_client_webhook_output_1.OAuthClientWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async getOAuthClientWebhooks(oAuthClientId, pagination) {
    const webhooks = await this.oAuthClientWebhooksService.getOAuthClientWebhooksPaginated(
      oAuthClientId,
      pagination.skip ?? 0,
      pagination.take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: webhooks.map((webhook) =>
        (0, class_transformer_1.plainToClass)(
          oauth_client_webhook_output_1.OAuthClientWebhookOutputDto,
          new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
          {
            strategy: "excludeAll",
          }
        )
      ),
    };
  }
  async deleteOAuthClientWebhook(webhook) {
    await this.webhooksService.deleteWebhook(webhook.id);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        oauth_client_webhook_output_1.OAuthClientWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async deleteAllOAuthClientWebhooks(oAuthClientId) {
    const data = await this.oAuthClientWebhooksService.deleteAllOAuthClientWebhooks(oAuthClientId);
    return { status: platform_constants_1.SUCCESS_STATUS, data: `${data.count} webhooks deleted` };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ summary: "Create a webhook for an oAuthClient" }),
    openapi.ApiResponse({
      status: 201,
      type: require("../../../webhooks/outputs/oauth-client-webhook.output")
        .OAuthClientWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("clientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webhook_input_1.CreateWebhookInputDto, String]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientWebhooksController.prototype,
  "createOAuthClientWebhook",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:webhookId"),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ summary: "Update a webhook of an oAuthClient" }),
    (0, common_1.UseGuards)(is_oauth_client_webhook_guard_1.IsOAuthClientWebhookGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../webhooks/outputs/oauth-client-webhook.output")
        .OAuthClientWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("webhookId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webhook_input_1.UpdateWebhookInputDto, String]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientWebhooksController.prototype,
  "updateOAuthClientWebhook",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:webhookId"),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
      client_1.MembershipRole.MEMBER,
    ]),
    (0, swagger_1.ApiOperation)({ summary: "Get a webhook of an oAuthClient" }),
    (0, common_1.UseGuards)(is_oauth_client_webhook_guard_1.IsOAuthClientWebhookGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../webhooks/outputs/oauth-client-webhook.output")
        .OAuthClientWebhookOutputResponseDto,
    }),
    __param(0, (0, get_webhook_decorator_1.GetWebhook)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientWebhooksController.prototype,
  "getOAuthClientWebhook",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
      client_1.MembershipRole.MEMBER,
    ]),
    (0, swagger_1.ApiOperation)({ summary: "Get all webhooks of an oAuthClient" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../webhooks/outputs/oauth-client-webhook.output")
        .OAuthClientWebhooksOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, platform_types_1.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientWebhooksController.prototype,
  "getOAuthClientWebhooks",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:webhookId"),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ summary: "Delete a webhook of an oAuthClient" }),
    (0, common_1.UseGuards)(is_oauth_client_webhook_guard_1.IsOAuthClientWebhookGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../webhooks/outputs/oauth-client-webhook.output")
        .OAuthClientWebhookOutputResponseDto,
    }),
    __param(0, (0, get_webhook_decorator_1.GetWebhook)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientWebhooksController.prototype,
  "deleteOAuthClientWebhook",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/"),
    (0, membership_roles_decorator_1.MembershipRoles)([
      client_1.MembershipRole.ADMIN,
      client_1.MembershipRole.OWNER,
    ]),
    (0, swagger_1.ApiOperation)({ summary: "Delete all webhooks of an oAuthClient" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../../webhooks/outputs/webhook.output").DeleteManyWebhooksOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  OAuthClientWebhooksController.prototype,
  "deleteAllOAuthClientWebhooks",
  null
);
OAuthClientWebhooksController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/oauth-clients/:clientId/webhooks",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      next_auth_guard_1.NextAuthGuard,
      organization_roles_guard_1.OrganizationRolesGuard,
      oauth_client_guard_1.OAuthClientGuard
    ),
    (0, swagger_1.ApiTags)("OAuthClients Webhooks"),
    __metadata("design:paramtypes", [
      webhooks_service_1.WebhooksService,
      oauth_clients_webhooks_service_1.OAuthClientWebhooksService,
    ]),
  ],
  OAuthClientWebhooksController
);
exports.OAuthClientWebhooksController = OAuthClientWebhooksController;
//# sourceMappingURL=oauth-client-webhooks.controller.js.map
