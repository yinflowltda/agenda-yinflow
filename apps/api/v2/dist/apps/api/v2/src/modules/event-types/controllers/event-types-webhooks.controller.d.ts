import { Webhook } from "@prisma/client";
import { CreateWebhookInputDto, UpdateWebhookInputDto } from "src/modules/webhooks/inputs/webhook.input";
import {
  EventTypeWebhookOutputResponseDto,
  EventTypeWebhooksOutputResponseDto,
} from "src/modules/webhooks/outputs/event-type-webhook.output";
import { DeleteManyWebhooksOutputResponseDto } from "src/modules/webhooks/outputs/webhook.output";
import { EventTypeWebhooksService } from "src/modules/webhooks/services/event-type-webhooks.service";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

import { SkipTakePagination } from "@calcom/platform-types";

export declare class EventTypeWebhooksController {
  private readonly webhooksService;
  private readonly eventTypeWebhooksService;
  constructor(webhooksService: WebhooksService, eventTypeWebhooksService: EventTypeWebhooksService);
  createEventTypeWebhook(
    body: CreateWebhookInputDto,
    eventTypeId: number
  ): Promise<EventTypeWebhookOutputResponseDto>;
  updateEventTypeWebhook(
    body: UpdateWebhookInputDto,
    webhookId: string
  ): Promise<EventTypeWebhookOutputResponseDto>;
  getEventTypeWebhook(webhook: Webhook): Promise<EventTypeWebhookOutputResponseDto>;
  getEventTypeWebhooks(
    eventTypeId: number,
    pagination: SkipTakePagination
  ): Promise<EventTypeWebhooksOutputResponseDto>;
  deleteEventTypeWebhook(webhook: Webhook): Promise<EventTypeWebhookOutputResponseDto>;
  deleteAllEventTypeWebhooks(eventTypeId: number): Promise<DeleteManyWebhooksOutputResponseDto>;
}
