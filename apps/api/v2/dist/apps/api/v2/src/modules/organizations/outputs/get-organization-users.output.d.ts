import { GetUserOutput } from "src/modules/users/outputs/get-users.output";

import { ERROR_STATUS } from "@calcom/platform-constants";
import { SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class GetOrganizationUsersOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: GetUserOutput[];
}
export declare class GetOrganizationUserOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: GetUserOutput;
}
