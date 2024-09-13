import { Webhook } from "@prisma/client";
import { UserWithProfile } from "src/modules/users/users.repository";
import { CreateWebhookInputDto, UpdateWebhookInputDto } from "src/modules/webhooks/inputs/webhook.input";
import {
  UserWebhookOutputResponseDto,
  UserWebhooksOutputResponseDto,
} from "src/modules/webhooks/outputs/user-webhook.output";
import { UserWebhooksService } from "src/modules/webhooks/services/user-webhooks.service";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

import { SkipTakePagination } from "@calcom/platform-types";

export declare class WebhooksController {
  private readonly webhooksService;
  private readonly userWebhooksService;
  constructor(webhooksService: WebhooksService, userWebhooksService: UserWebhooksService);
  createWebhook(body: CreateWebhookInputDto, user: UserWithProfile): Promise<UserWebhookOutputResponseDto>;
  updateWebhook(webhookId: string, body: UpdateWebhookInputDto): Promise<UserWebhookOutputResponseDto>;
  getWebhook(webhook: Webhook): Promise<UserWebhookOutputResponseDto>;
  getWebhooks(user: UserWithProfile, query: SkipTakePagination): Promise<UserWebhooksOutputResponseDto>;
  deleteWebhook(webhookId: string): Promise<UserWebhookOutputResponseDto>;
}
