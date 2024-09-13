import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class KeysDto {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
}
export declare class KeysResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: KeysDto;
}
export {};
