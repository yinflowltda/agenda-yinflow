import { PlatformOAuthClientDto } from "src/modules/oauth-clients/controllers/oauth-clients/responses/GetOAuthClientResponse.dto";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class GetOAuthClientsResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: PlatformOAuthClientDto[];
}
