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
exports.EventTypeWebhooksService = void 0;
const common_1 = require("@nestjs/common");
const webhooks_repository_1 = require("../webhooks.repository");
let EventTypeWebhooksService = class EventTypeWebhooksService {
  constructor(webhooksRepository) {
    this.webhooksRepository = webhooksRepository;
  }
  async createEventTypeWebhook(eventTypeId, body) {
    const existingWebhook = await this.webhooksRepository.getEventTypeWebhookByUrl(
      eventTypeId,
      body.subscriberUrl
    );
    if (existingWebhook) {
      throw new common_1.ConflictException(
        "Webhook with this subscriber url already exists for this event type"
      );
    }
    return this.webhooksRepository.createEventTypeWebhook(eventTypeId, {
      ...body,
      payloadTemplate: body.payloadTemplate ?? null,
      secret: body.secret ?? null,
    });
  }
  getEventTypeWebhooksPaginated(eventTypeId, skip, take) {
    return this.webhooksRepository.getEventTypeWebhooksPaginated(eventTypeId, skip, take);
  }
  async deleteAllEventTypeWebhooks(eventTypeId) {
    return this.webhooksRepository.deleteAllEventTypeWebhooks(eventTypeId);
  }
};
EventTypeWebhooksService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [webhooks_repository_1.WebhooksRepository])],
  EventTypeWebhooksService
);
exports.EventTypeWebhooksService = EventTypeWebhooksService;
//# sourceMappingURL=event-type-webhooks.service.js.map
