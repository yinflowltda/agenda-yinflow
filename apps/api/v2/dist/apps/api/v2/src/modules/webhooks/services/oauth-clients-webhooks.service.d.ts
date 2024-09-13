import { PipedInputWebhookType } from "src/modules/webhooks/pipes/WebhookInputPipe";
import { WebhooksRepository } from "src/modules/webhooks/webhooks.repository";

export declare class OAuthClientWebhooksService {
  private readonly webhooksRepository;
  constructor(webhooksRepository: WebhooksRepository);
  createOAuthClientWebhook(
    platformOAuthClientId: string,
    body: PipedInputWebhookType
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
  getOAuthClientWebhooksPaginated(
    platformOAuthClientId: string,
    skip: number,
    take: number
  ): Promise<
    {
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
    }[]
  >;
  deleteAllOAuthClientWebhooks(platformOAuthClientId: string): Promise<{
    count: number;
  }>;
}
