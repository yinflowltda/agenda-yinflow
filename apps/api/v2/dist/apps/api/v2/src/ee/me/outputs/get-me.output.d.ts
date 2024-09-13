import { MeOutput } from "src/ee/me/outputs/me.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class GetMeOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: MeOutput;
}
