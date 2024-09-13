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
exports.WebhooksRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const uuid_1 = require("uuid");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
let WebhooksRepository = class WebhooksRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async createUserWebhook(userId, data) {
    const id = (0, uuid_1.v4)();
    return this.dbWrite.prisma.webhook.create({
      data: { ...data, id, userId },
    });
  }
  async createEventTypeWebhook(eventTypeId, data) {
    const id = (0, uuid_1.v4)();
    return this.dbWrite.prisma.webhook.create({
      data: { ...data, id, eventTypeId },
    });
  }
  async createOAuthClientWebhook(platformOAuthClientId, data) {
    const id = (0, uuid_1.v4)();
    return this.dbWrite.prisma.webhook.create({
      data: { ...data, id, platformOAuthClientId },
    });
  }
  async updateWebhook(webhookId, data) {
    return this.dbWrite.prisma.webhook.update({
      where: { id: webhookId },
      data,
    });
  }
  async getWebhookById(webhookId) {
    return this.dbRead.prisma.webhook.findFirst({
      where: { id: webhookId },
    });
  }
  async getUserWebhooksPaginated(userId, skip, take) {
    return this.dbRead.prisma.webhook.findMany({
      where: { userId },
      skip,
      take,
    });
  }
  async getEventTypeWebhooksPaginated(eventTypeId, skip, take) {
    return this.dbRead.prisma.webhook.findMany({
      where: { eventTypeId },
      skip,
      take,
    });
  }
  async getOAuthClientWebhooksPaginated(platformOAuthClientId, skip, take) {
    return this.dbRead.prisma.webhook.findMany({
      where: { platformOAuthClientId },
      skip,
      take,
    });
  }
  async getUserWebhookByUrl(userId, subscriberUrl) {
    return this.dbRead.prisma.webhook.findFirst({
      where: { userId, subscriberUrl },
    });
  }
  async getOAuthClientWebhookByUrl(platformOAuthClientId, subscriberUrl) {
    return this.dbRead.prisma.webhook.findFirst({
      where: { platformOAuthClientId, subscriberUrl },
    });
  }
  async getEventTypeWebhookByUrl(eventTypeId, subscriberUrl) {
    return this.dbRead.prisma.webhook.findFirst({
      where: { eventTypeId, subscriberUrl },
    });
  }
  async deleteWebhook(webhookId) {
    return this.dbWrite.prisma.webhook.delete({
      where: { id: webhookId },
    });
  }
  async deleteAllEventTypeWebhooks(eventTypeId) {
    return this.dbWrite.prisma.webhook.deleteMany({
      where: { eventTypeId },
    });
  }
  async deleteAllOAuthClientWebhooks(oAuthClientId) {
    return this.dbWrite.prisma.webhook.deleteMany({
      where: { platformOAuthClientId: oAuthClientId },
    });
  }
};
WebhooksRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  WebhooksRepository
);
exports.WebhooksRepository = WebhooksRepository;
//# sourceMappingURL=webhooks.repository.js.map
