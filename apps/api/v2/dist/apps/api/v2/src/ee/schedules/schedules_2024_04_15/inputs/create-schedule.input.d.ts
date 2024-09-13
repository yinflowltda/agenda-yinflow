import { CreateAvailabilityInput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/inputs/create-availability.input";

export declare class CreateScheduleInput_2024_04_15 {
  name: string;
  timeZone: string;
  availabilities?: CreateAvailabilityInput_2024_04_15[];
  isDefault: boolean;
}
