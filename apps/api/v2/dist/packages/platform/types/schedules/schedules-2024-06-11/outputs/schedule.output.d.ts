import {
  ScheduleAvailabilityInput_2024_06_11,
  ScheduleOverrideInput_2024_06_11,
} from "../inputs/create-schedule.input";

export declare class ScheduleOutput_2024_06_11 {
  id: number;
  ownerId: number;
  name: string;
  timeZone: string;
  availability: ScheduleAvailabilityInput_2024_06_11[];
  isDefault: boolean;
  overrides: ScheduleOverrideInput_2024_06_11[];
}
