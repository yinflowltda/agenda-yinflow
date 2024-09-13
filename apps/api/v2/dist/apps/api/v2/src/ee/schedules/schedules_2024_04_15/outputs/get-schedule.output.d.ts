import { ScheduleOutput } from "src/ee/schedules/schedules_2024_04_15/outputs/schedule.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class GetScheduleOutput_2024_04_15 {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: ScheduleOutput;
}
