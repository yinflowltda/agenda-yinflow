import { WebhookTriggerEvents } from "@prisma/client";

export declare class CreateWebhookInputDto {
  payloadTemplate?: string;
  active: boolean;
  subscriberUrl: string;
  triggers: WebhookTriggerEvents[];
  secret?: string;
}
declare const UpdateWebhookInputDto_base: import("@nestjs/common").Type<Partial<CreateWebhookInputDto>>;
export declare class UpdateWebhookInputDto extends UpdateWebhookInputDto_base {}
export {};
