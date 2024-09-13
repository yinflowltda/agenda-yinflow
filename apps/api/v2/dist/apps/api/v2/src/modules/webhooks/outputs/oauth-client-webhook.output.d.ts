import { ApiResponseWithoutData } from "@calcom/platform-types";

import { WebhookOutputDto } from "./webhook.output";

export declare class OAuthClientWebhookOutputDto extends WebhookOutputDto {
  readonly oAuthClientId: string;
}
export declare class OAuthClientWebhookOutputResponseDto extends ApiResponseWithoutData {
  data: OAuthClientWebhookOutputDto;
}
export declare class OAuthClientWebhooksOutputResponseDto extends ApiResponseWithoutData {
  data: OAuthClientWebhookOutputDto[];
}
