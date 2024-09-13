import { ManagedUserOutput } from "src/modules/oauth-clients/controllers/oauth-client-users/outputs/managed-user.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class GetManagedUsersOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: ManagedUserOutput[];
}
