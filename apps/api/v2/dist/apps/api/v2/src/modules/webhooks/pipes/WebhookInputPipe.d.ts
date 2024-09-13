import { PipeTransform } from "@nestjs/common";
import { CreateWebhookInputDto, UpdateWebhookInputDto } from "src/modules/webhooks/inputs/webhook.input";

export declare class WebhookInputPipe implements PipeTransform {
  transform(value: CreateWebhookInputDto): {
    eventTriggers: import(".prisma/client").$Enums.WebhookTriggerEvents[];
    payloadTemplate?: string | undefined;
    active: boolean;
    subscriberUrl: string;
    secret?: string | undefined;
  };
}
export declare class PartialWebhookInputPipe implements PipeTransform {
  transform(value: UpdateWebhookInputDto):
    | {
        eventTriggers: import(".prisma/client").$Enums.WebhookTriggerEvents[];
        payloadTemplate?: string | undefined;
        active?: boolean | undefined;
        subscriberUrl?: string | undefined;
        secret?: string | undefined;
      }
    | {
        eventTriggers: undefined;
        payloadTemplate?: string | undefined;
        active?: boolean | undefined;
        subscriberUrl?: string | undefined;
        triggers?: import(".prisma/client").$Enums.WebhookTriggerEvents[] | undefined;
        secret?: string | undefined;
      };
}
export type PipedInputWebhookType = ReturnType<WebhookInputPipe["transform"]>;
