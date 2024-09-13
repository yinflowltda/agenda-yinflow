import { UpdateWebhookInputDto } from "src/modules/webhooks/inputs/webhook.input";
import { WebhooksRepository } from "src/modules/webhooks/webhooks.repository";

export declare class WebhooksService {
  private readonly webhooksRepository;
  constructor(webhooksRepository: WebhooksRepository);
  updateWebhook(
    webhookId: string,
    body: UpdateWebhookInputDto
  ): Promise<{
    id: string;
    userId: number | null;
    teamId: number | null;
    eventTypeId: number | null;
    platformOAuthClientId: string | null;
    subscriberUrl: string;
    payloadTemplate: string | null;
    createdAt: Date;
    active: boolean;
    eventTriggers: import(".prisma/client").$Enums.WebhookTriggerEvents[];
    appId: string | null;
    secret: string | null;
    platform: boolean;
  }>;
  getWebhookById(webhookId: string): Promise<{
    id: string;
    userId: number | null;
    teamId: number | null;
    eventTypeId: number | null;
    platformOAuthClientId: string | null;
    subscriberUrl: string;
    payloadTemplate: string | null;
    createdAt: Date;
    active: boolean;
    eventTriggers: import(".prisma/client").$Enums.WebhookTriggerEvents[];
    appId: string | null;
    secret: string | null;
    platform: boolean;
  }>;
  deleteWebhook(webhookId: string): Promise<{
    id: string;
    userId: number | null;
    teamId: number | null;
    eventTypeId: number | null;
    platformOAuthClientId: string | null;
    subscriberUrl: string;
    payloadTemplate: string | null;
    createdAt: Date;
    active: boolean;
    eventTriggers: import(".prisma/client").$Enums.WebhookTriggerEvents[];
    appId: string | null;
    secret: string | null;
    platform: boolean;
  }>;
}
