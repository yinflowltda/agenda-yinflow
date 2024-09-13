import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

import { WebhookOutputDto } from "./webhook.output";

export declare class UserWebhookOutputDto extends WebhookOutputDto {
  readonly userId: number;
}
export declare class UserWebhookOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: UserWebhookOutputDto;
}
export declare class UserWebhooksOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: UserWebhookOutputDto[];
}
