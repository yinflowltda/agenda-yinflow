import { PrismaReadService } from "src/modules/prisma/prisma-read.service";

import { Webhook } from "@calcom/prisma/client";

import { PrismaWriteService } from "../prisma/prisma-write.service";

type WebhookInputData = Pick<
  Webhook,
  "payloadTemplate" | "eventTriggers" | "subscriberUrl" | "secret" | "active"
>;
export declare class WebhooksRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  createUserWebhook(
    userId: number,
    data: WebhookInputData
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
  createEventTypeWebhook(
    eventTypeId: number,
    data: WebhookInputData
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
  createOAuthClientWebhook(
    platformOAuthClientId: string,
    data: WebhookInputData
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
  updateWebhook(
    webhookId: string,
    data: Partial<WebhookInputData>
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
  } | null>;
  getUserWebhooksPaginated(
    userId: number,
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
  getEventTypeWebhooksPaginated(
    eventTypeId: number,
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
  getUserWebhookByUrl(
    userId: number,
    subscriberUrl: string
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
  } | null>;
  getOAuthClientWebhookByUrl(
    platformOAuthClientId: string,
    subscriberUrl: string
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
  } | null>;
  getEventTypeWebhookByUrl(
    eventTypeId: number,
    subscriberUrl: string
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
  } | null>;
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
  deleteAllEventTypeWebhooks(eventTypeId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
  deleteAllOAuthClientWebhooks(oAuthClientId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export {};
