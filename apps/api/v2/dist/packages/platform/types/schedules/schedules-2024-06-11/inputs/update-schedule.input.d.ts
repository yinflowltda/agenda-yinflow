import {
  ScheduleAvailabilityInput_2024_06_11,
  ScheduleOverrideInput_2024_06_11,
} from "./create-schedule.input";

export declare class UpdateScheduleInput_2024_06_11 {
  name?: string;
  timeZone?: string;
  availability?: ScheduleAvailabilityInput_2024_06_11[];
  isDefault?: boolean;
  overrides?: ScheduleOverrideInput_2024_06_11[];
}
