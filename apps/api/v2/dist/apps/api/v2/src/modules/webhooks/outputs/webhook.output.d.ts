import { WebhookTriggerEvents } from "@prisma/client";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class WebhookOutputDto {
  readonly id: number;
  readonly payloadTemplate: string;
  readonly triggers: WebhookTriggerEvents[];
  readonly subscriberUrl: string;
  readonly active: boolean;
  readonly secret?: string;
}
export declare class DeleteManyWebhooksOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: string;
}
