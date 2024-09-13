import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

import { WebhookOutputDto } from "./webhook.output";

export declare class EventTypeWebhookOutputDto extends WebhookOutputDto {
  readonly eventTypeId: number;
}
export declare class EventTypeWebhookOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: EventTypeWebhookOutputDto;
}
export declare class EventTypeWebhooksOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: EventTypeWebhookOutputDto[];
}
