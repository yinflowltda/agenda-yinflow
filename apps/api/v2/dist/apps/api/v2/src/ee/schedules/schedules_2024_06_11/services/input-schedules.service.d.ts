import { CreateScheduleInput_2024_06_11, ScheduleAvailabilityInput_2024_06_11 } from "@calcom/platform-types";
import { ScheduleOverrideInput_2024_06_11 } from "@calcom/platform-types";

export declare class InputSchedulesService_2024_06_11 {
  transformInputCreateSchedule(inputSchedule: CreateScheduleInput_2024_06_11): {
    availability: any;
    overrides: any;
    name: string;
    timeZone: string;
    isDefault: boolean;
  };
  transformInputScheduleAvailability(inputAvailability: ScheduleAvailabilityInput_2024_06_11[]): any;
  transformInputOverrides(inputOverrides: ScheduleOverrideInput_2024_06_11[]): any;
}
