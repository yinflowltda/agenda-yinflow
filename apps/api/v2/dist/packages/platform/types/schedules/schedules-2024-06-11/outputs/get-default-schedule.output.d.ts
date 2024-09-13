import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

import { ScheduleOutput_2024_06_11 } from "./schedule.output";

export declare class GetDefaultScheduleOutput_2024_06_11 {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: ScheduleOutput_2024_06_11 | null;
}
