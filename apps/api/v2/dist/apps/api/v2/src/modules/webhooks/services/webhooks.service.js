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
exports.WebhooksService = void 0;
const common_1 = require("@nestjs/common");
const webhooks_repository_1 = require("../webhooks.repository");
let WebhooksService = class WebhooksService {
  constructor(webhooksRepository) {
    this.webhooksRepository = webhooksRepository;
  }
  async updateWebhook(webhookId, body) {
    return this.webhooksRepository.updateWebhook(webhookId, body);
  }
  async getWebhookById(webhookId) {
    const webhook = await this.webhooksRepository.getWebhookById(webhookId);
    if (!webhook) {
      throw new common_1.NotFoundException(`Webhook (${webhookId}) not found`);
    }
    return webhook;
  }
  async deleteWebhook(webhookId) {
    return this.webhooksRepository.deleteWebhook(webhookId);
  }
};
WebhooksService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [webhooks_repository_1.WebhooksRepository])],
  WebhooksService
);
exports.WebhooksService = WebhooksService;
//# sourceMappingURL=webhooks.service.js.map
