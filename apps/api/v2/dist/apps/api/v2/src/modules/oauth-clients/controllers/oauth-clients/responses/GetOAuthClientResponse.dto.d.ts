import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class PlatformOAuthClientDto {
  id: string;
  name: string;
  secret: string;
  permissions: number;
  logo: string | null;
  redirectUris: string[];
  organizationId: number;
  createdAt: Date;
}
export declare class GetOAuthClientResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: PlatformOAuthClientDto;
}
