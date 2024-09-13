import { SchedulesService_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/services/schedules.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import {
  CreateScheduleOutput_2024_06_11,
  CreateScheduleInput_2024_06_11,
  UpdateScheduleInput_2024_06_11,
  GetScheduleOutput_2024_06_11,
  UpdateScheduleOutput_2024_06_11,
  DeleteScheduleOutput_2024_06_11,
  GetSchedulesOutput_2024_06_11,
} from "@calcom/platform-types";

export declare class SchedulesController_2024_06_11 {
  private readonly schedulesService;
  constructor(schedulesService: SchedulesService_2024_06_11);
  createSchedule(
    user: UserWithProfile,
    bodySchedule: CreateScheduleInput_2024_06_11
  ): Promise<CreateScheduleOutput_2024_06_11>;
  getDefaultSchedule(user: UserWithProfile): Promise<GetScheduleOutput_2024_06_11>;
  getSchedule(user: UserWithProfile, scheduleId: number): Promise<GetScheduleOutput_2024_06_11>;
  getSchedules(user: UserWithProfile): Promise<GetSchedulesOutput_2024_06_11>;
  updateSchedule(
    user: UserWithProfile,
    bodySchedule: UpdateScheduleInput_2024_06_11,
    scheduleId: string
  ): Promise<UpdateScheduleOutput_2024_06_11>;
  deleteSchedule(userId: number, scheduleId: number): Promise<DeleteScheduleOutput_2024_06_11>;
}
