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
exports.IsUserEventTypeWebhookGuard = void 0;
const common_1 = require("@nestjs/common");
const event_types_repository_1 = require("../../../ee/event-types/event-types_2024_06_14/event-types.repository");
const webhooks_service_1 = require("../services/webhooks.service");
let IsUserEventTypeWebhookGuard = class IsUserEventTypeWebhookGuard {
  constructor(webhooksService, eventtypesRepository) {
    this.webhooksService = webhooksService;
    this.eventtypesRepository = eventtypesRepository;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const webhookId = request.params.webhookId;
    const eventTypeId = request.params.eventTypeId;
    if (!user) {
      return false;
    }
    if (eventTypeId) {
      const eventType = await this.eventtypesRepository.getEventTypeById(parseInt(eventTypeId));
      if (!eventType) {
        throw new common_1.NotFoundException(`Event type (${eventTypeId}) not found`);
      }
      if (eventType.userId !== user.id) {
        throw new common_1.ForbiddenException(
          `User (${user.id}) is not the owner of event type (${eventTypeId})`
        );
      }
      request.eventType = eventType;
    }
    if (webhookId) {
      const webhook = await this.webhooksService.getWebhookById(webhookId);
      if (!webhook.eventTypeId) {
        throw new common_1.BadRequestException(`Webhook (${webhookId}) is not associated with an event type`);
      }
      if (webhook.eventTypeId !== parseInt(eventTypeId)) {
        throw new common_1.ForbiddenException(
          `Webhook (${webhookId}) is not associated with event type (${eventTypeId})`
        );
      }
      request.webhook = webhook;
    }
    return true;
  }
};
IsUserEventTypeWebhookGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      webhooks_service_1.WebhooksService,
      event_types_repository_1.EventTypesRepository_2024_06_14,
    ]),
  ],
  IsUserEventTypeWebhookGuard
);
exports.IsUserEventTypeWebhookGuard = IsUserEventTypeWebhookGuard;
//# sourceMappingURL=is-user-event-type-webhook-guard.js.map
