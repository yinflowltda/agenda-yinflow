import { CreateScheduleOutput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/outputs/create-schedule.output";
import { DeleteScheduleOutput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/outputs/delete-schedule.output";
import { GetDefaultScheduleOutput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/outputs/get-default-schedule.output";
import { GetScheduleOutput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/outputs/get-schedule.output";
import { GetSchedulesOutput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/outputs/get-schedules.output";
import { UpdateScheduleOutput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/outputs/update-schedule.output";
import { SchedulesService_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/services/schedules.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import { UpdateScheduleInput_2024_04_15 } from "@calcom/platform-types";

import { CreateScheduleInput_2024_04_15 } from "../inputs/create-schedule.input";

export declare class SchedulesController_2024_04_15 {
  private readonly schedulesService;
  constructor(schedulesService: SchedulesService_2024_04_15);
  createSchedule(
    user: UserWithProfile,
    bodySchedule: CreateScheduleInput_2024_04_15
  ): Promise<CreateScheduleOutput_2024_04_15>;
  getDefaultSchedule(user: UserWithProfile): Promise<GetDefaultScheduleOutput_2024_04_15 | null>;
  getSchedule(user: UserWithProfile, scheduleId: number): Promise<GetScheduleOutput_2024_04_15>;
  getSchedules(user: UserWithProfile): Promise<GetSchedulesOutput_2024_04_15>;
  updateSchedule(
    user: UserWithProfile,
    bodySchedule: UpdateScheduleInput_2024_04_15,
    scheduleId: string
  ): Promise<UpdateScheduleOutput_2024_04_15>;
  deleteSchedule(userId: number, scheduleId: number): Promise<DeleteScheduleOutput_2024_04_15>;
}
