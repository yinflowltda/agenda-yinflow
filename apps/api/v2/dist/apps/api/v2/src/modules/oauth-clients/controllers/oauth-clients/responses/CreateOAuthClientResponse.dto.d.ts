import { SUCCESS_STATUS, ERROR_STATUS, REDIRECT_STATUS } from "@calcom/platform-constants";

declare class DataDto {
  clientId: string;
  clientSecret: string;
}
export declare class CreateOAuthClientResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: DataDto;
}
export declare class CreateOauthClientRedirect {
  status: typeof REDIRECT_STATUS;
  url: string;
}
export {};
