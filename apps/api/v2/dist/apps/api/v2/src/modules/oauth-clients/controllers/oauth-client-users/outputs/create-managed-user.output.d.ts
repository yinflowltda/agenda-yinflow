import { ManagedUserOutput } from "src/modules/oauth-clients/controllers/oauth-client-users/outputs/managed-user.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class CreateManagedUserData {
  user: ManagedUserOutput;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
}
export declare class CreateManagedUserOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: CreateManagedUserData;
}
export {};
