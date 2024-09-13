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
exports.WebhooksController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../lib/api-versions");
const get_user_decorator_1 = require("../../auth/decorators/get-user/get-user.decorator");
const api_auth_guard_1 = require("../../auth/guards/api-auth/api-auth.guard");
const get_webhook_decorator_1 = require("../decorators/get-webhook-decorator");
const is_user_webhook_guard_1 = require("../guards/is-user-webhook-guard");
const webhook_input_1 = require("../inputs/webhook.input");
const user_webhook_output_1 = require("../outputs/user-webhook.output");
const WebhookInputPipe_1 = require("../pipes/WebhookInputPipe");
const WebhookOutputPipe_1 = require("../pipes/WebhookOutputPipe");
const user_webhooks_service_1 = require("../services/user-webhooks.service");
const webhooks_service_1 = require("../services/webhooks.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let WebhooksController = class WebhooksController {
  constructor(webhooksService, userWebhooksService) {
    this.webhooksService = webhooksService;
    this.userWebhooksService = userWebhooksService;
  }
  async createWebhook(body, user) {
    const webhook = await this.userWebhooksService.createUserWebhook(
      user.id,
      new WebhookInputPipe_1.WebhookInputPipe().transform(body)
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        user_webhook_output_1.UserWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async updateWebhook(webhookId, body) {
    const webhook = await this.webhooksService.updateWebhook(
      webhookId,
      new WebhookInputPipe_1.PartialWebhookInputPipe().transform(body)
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        user_webhook_output_1.UserWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async getWebhook(webhook) {
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        user_webhook_output_1.UserWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook)
      ),
    };
  }
  async getWebhooks(user, query) {
    const webhooks = await this.userWebhooksService.getUserWebhooksPaginated(
      user.id,
      query.skip ?? 0,
      query.take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: webhooks.map((webhook) =>
        (0, class_transformer_1.plainToClass)(
          user_webhook_output_1.UserWebhookOutputDto,
          new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
          {
            strategy: "excludeAll",
          }
        )
      ),
    };
  }
  async deleteWebhook(webhookId) {
    const webhook = await this.webhooksService.deleteWebhook(webhookId);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        user_webhook_output_1.UserWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, swagger_1.ApiOperation)({ summary: "Create a webhook" }),
    openapi.ApiResponse({
      status: 201,
      type: require("../outputs/user-webhook.output").UserWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webhook_input_1.CreateWebhookInputDto, Object]),
    __metadata("design:returntype", Promise),
  ],
  WebhooksController.prototype,
  "createWebhook",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:webhookId"),
    (0, swagger_1.ApiOperation)({ summary: "Update a webhook" }),
    (0, common_1.UseGuards)(is_user_webhook_guard_1.IsUserWebhookGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/user-webhook.output").UserWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("webhookId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, webhook_input_1.UpdateWebhookInputDto]),
    __metadata("design:returntype", Promise),
  ],
  WebhooksController.prototype,
  "updateWebhook",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:webhookId"),
    (0, swagger_1.ApiOperation)({ summary: "Get a webhook" }),
    (0, common_1.UseGuards)(is_user_webhook_guard_1.IsUserWebhookGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/user-webhook.output").UserWebhookOutputResponseDto,
    }),
    __param(0, (0, get_webhook_decorator_1.GetWebhook)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  WebhooksController.prototype,
  "getWebhook",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({ summary: "Get all user webhooks paginated" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/user-webhook.output").UserWebhooksOutputResponseDto,
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, platform_types_1.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  WebhooksController.prototype,
  "getWebhooks",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:webhookId"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a webhook" }),
    (0, common_1.UseGuards)(is_user_webhook_guard_1.IsUserWebhookGuard),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/user-webhook.output").UserWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("webhookId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  WebhooksController.prototype,
  "deleteWebhook",
  null
);
WebhooksController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/webhooks",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, swagger_1.ApiTags)("Users' Webhooks"),
    __metadata("design:paramtypes", [
      webhooks_service_1.WebhooksService,
      user_webhooks_service_1.UserWebhooksService,
    ]),
  ],
  WebhooksController
);
exports.WebhooksController = WebhooksController;
//# sourceMappingURL=webhooks.controller.js.map
