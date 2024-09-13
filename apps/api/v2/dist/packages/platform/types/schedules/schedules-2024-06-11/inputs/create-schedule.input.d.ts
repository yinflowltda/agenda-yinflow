import type { WeekDay } from "../constants";

export declare class ScheduleAvailabilityInput_2024_06_11 {
  days: WeekDay[];
  startTime: string;
  endTime: string;
}
export declare class ScheduleOverrideInput_2024_06_11 {
  date: string;
  startTime: string;
  endTime: string;
}
export declare class CreateScheduleInput_2024_06_11 {
  name: string;
  timeZone: string;
  availability?: ScheduleAvailabilityInput_2024_06_11[];
  isDefault: boolean;
  overrides?: ScheduleOverrideInput_2024_06_11[];
}
