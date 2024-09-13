import { PipeTransform } from "@nestjs/common";
import { Webhook } from "@prisma/client";

export declare class WebhookOutputPipe implements PipeTransform {
  transform(value: Webhook): {
    triggers: import(".prisma/client").$Enums.WebhookTriggerEvents[];
    oAuthClientId: string | null;
    id: string;
    userId: number | null;
    teamId: number | null;
    eventTypeId: number | null;
    subscriberUrl: string;
    payloadTemplate: string | null;
    createdAt: Date;
    active: boolean;
    appId: string | null;
    secret: string | null;
    platform: boolean;
  };
}
export type PipedOutputWebhookType = ReturnType<WebhookOutputPipe["transform"]>;
