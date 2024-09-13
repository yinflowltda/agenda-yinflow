import { Webhook } from "@prisma/client";
import { CreateWebhookInputDto, UpdateWebhookInputDto } from "src/modules/webhooks/inputs/webhook.input";
import {
  OAuthClientWebhookOutputResponseDto,
  OAuthClientWebhooksOutputResponseDto,
} from "src/modules/webhooks/outputs/oauth-client-webhook.output";
import { DeleteManyWebhooksOutputResponseDto } from "src/modules/webhooks/outputs/webhook.output";
import { OAuthClientWebhooksService } from "src/modules/webhooks/services/oauth-clients-webhooks.service";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

import { SkipTakePagination } from "@calcom/platform-types";

export declare class OAuthClientWebhooksController {
  private readonly webhooksService;
  private readonly oAuthClientWebhooksService;
  constructor(webhooksService: WebhooksService, oAuthClientWebhooksService: OAuthClientWebhooksService);
  createOAuthClientWebhook(
    body: CreateWebhookInputDto,
    oAuthClientId: string
  ): Promise<OAuthClientWebhookOutputResponseDto>;
  updateOAuthClientWebhook(
    body: UpdateWebhookInputDto,
    webhookId: string
  ): Promise<OAuthClientWebhookOutputResponseDto>;
  getOAuthClientWebhook(webhook: Webhook): Promise<OAuthClientWebhookOutputResponseDto>;
  getOAuthClientWebhooks(
    oAuthClientId: string,
    pagination: SkipTakePagination
  ): Promise<OAuthClientWebhooksOutputResponseDto>;
  deleteOAuthClientWebhook(webhook: Webhook): Promise<OAuthClientWebhookOutputResponseDto>;
  deleteAllOAuthClientWebhooks(oAuthClientId: string): Promise<DeleteManyWebhooksOutputResponseDto>;
}
