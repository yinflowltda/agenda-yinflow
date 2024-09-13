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
exports.EventTypeWebhooksController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../lib/api-versions");
const api_auth_guard_1 = require("../../auth/guards/api-auth/api-auth.guard");
const get_webhook_decorator_1 = require("../../webhooks/decorators/get-webhook-decorator");
const is_user_event_type_webhook_guard_1 = require("../../webhooks/guards/is-user-event-type-webhook-guard");
const webhook_input_1 = require("../../webhooks/inputs/webhook.input");
const event_type_webhook_output_1 = require("../../webhooks/outputs/event-type-webhook.output");
const WebhookInputPipe_1 = require("../../webhooks/pipes/WebhookInputPipe");
const WebhookOutputPipe_1 = require("../../webhooks/pipes/WebhookOutputPipe");
const event_type_webhooks_service_1 = require("../../webhooks/services/event-type-webhooks.service");
const webhooks_service_1 = require("../../webhooks/services/webhooks.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let EventTypeWebhooksController = class EventTypeWebhooksController {
  constructor(webhooksService, eventTypeWebhooksService) {
    this.webhooksService = webhooksService;
    this.eventTypeWebhooksService = eventTypeWebhooksService;
  }
  async createEventTypeWebhook(body, eventTypeId) {
    const webhook = await this.eventTypeWebhooksService.createEventTypeWebhook(
      eventTypeId,
      new WebhookInputPipe_1.WebhookInputPipe().transform(body)
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        event_type_webhook_output_1.EventTypeWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async updateEventTypeWebhook(body, webhookId) {
    const webhook = await this.webhooksService.updateWebhook(
      webhookId,
      new WebhookInputPipe_1.PartialWebhookInputPipe().transform(body)
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        event_type_webhook_output_1.EventTypeWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async getEventTypeWebhook(webhook) {
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        event_type_webhook_output_1.EventTypeWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async getEventTypeWebhooks(eventTypeId, pagination) {
    const webhooks = await this.eventTypeWebhooksService.getEventTypeWebhooksPaginated(
      eventTypeId,
      pagination.skip ?? 0,
      pagination.take ?? 250
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: webhooks.map((webhook) =>
        (0, class_transformer_1.plainToClass)(
          event_type_webhook_output_1.EventTypeWebhookOutputDto,
          new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
          {
            strategy: "excludeAll",
          }
        )
      ),
    };
  }
  async deleteEventTypeWebhook(webhook) {
    await this.webhooksService.deleteWebhook(webhook.id);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        event_type_webhook_output_1.EventTypeWebhookOutputDto,
        new WebhookOutputPipe_1.WebhookOutputPipe().transform(webhook),
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
  async deleteAllEventTypeWebhooks(eventTypeId) {
    const data = await this.eventTypeWebhooksService.deleteAllEventTypeWebhooks(eventTypeId);
    return { status: platform_constants_1.SUCCESS_STATUS, data: `${data.count} webhooks deleted` };
  }
};
__decorate(
  [
    (0, common_1.Post)("/"),
    (0, swagger_1.ApiOperation)({ summary: "Create a webhook for an event-type" }),
    openapi.ApiResponse({
      status: 201,
      type: require("../../webhooks/outputs/event-type-webhook.output").EventTypeWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("eventTypeId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webhook_input_1.CreateWebhookInputDto, Number]),
    __metadata("design:returntype", Promise),
  ],
  EventTypeWebhooksController.prototype,
  "createEventTypeWebhook",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/:webhookId"),
    (0, swagger_1.ApiOperation)({ summary: "Update a webhook of an event-type" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../webhooks/outputs/event-type-webhook.output").EventTypeWebhookOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("webhookId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [webhook_input_1.UpdateWebhookInputDto, String]),
    __metadata("design:returntype", Promise),
  ],
  EventTypeWebhooksController.prototype,
  "updateEventTypeWebhook",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:webhookId"),
    (0, swagger_1.ApiOperation)({ summary: "Get a webhook of an event-type" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../webhooks/outputs/event-type-webhook.output").EventTypeWebhookOutputResponseDto,
    }),
    __param(0, (0, get_webhook_decorator_1.GetWebhook)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypeWebhooksController.prototype,
  "getEventTypeWebhook",
  null
);
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({ summary: "Get all webhooks of an event-type" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../webhooks/outputs/event-type-webhook.output").EventTypeWebhooksOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("eventTypeId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, platform_types_1.SkipTakePagination]),
    __metadata("design:returntype", Promise),
  ],
  EventTypeWebhooksController.prototype,
  "getEventTypeWebhooks",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/:webhookId"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a webhook of an event-type" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../webhooks/outputs/event-type-webhook.output").EventTypeWebhookOutputResponseDto,
    }),
    __param(0, (0, get_webhook_decorator_1.GetWebhook)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  EventTypeWebhooksController.prototype,
  "deleteEventTypeWebhook",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/"),
    (0, swagger_1.ApiOperation)({ summary: "Delete all webhooks of an event-type" }),
    openapi.ApiResponse({
      status: 200,
      type: require("../../webhooks/outputs/webhook.output").DeleteManyWebhooksOutputResponseDto,
    }),
    __param(0, (0, common_1.Param)("eventTypeId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise),
  ],
  EventTypeWebhooksController.prototype,
  "deleteAllEventTypeWebhooks",
  null
);
EventTypeWebhooksController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/event-types/:eventTypeId/webhooks",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(
      api_auth_guard_1.ApiAuthGuard,
      is_user_event_type_webhook_guard_1.IsUserEventTypeWebhookGuard
    ),
    (0, swagger_1.ApiTags)("Users' EventTypes Webhooks"),
    __metadata("design:paramtypes", [
      webhooks_service_1.WebhooksService,
      event_type_webhooks_service_1.EventTypeWebhooksService,
    ]),
  ],
  EventTypeWebhooksController
);
exports.EventTypeWebhooksController = EventTypeWebhooksController;
//# sourceMappingURL=event-types-webhooks.controller.js.map
