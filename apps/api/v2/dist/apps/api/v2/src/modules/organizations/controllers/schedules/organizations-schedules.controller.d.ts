import { SchedulesService_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/services/schedules.service";
import { OrganizationsSchedulesService } from "src/modules/organizations/services/organizations-schedules.service";

import {
  CreateScheduleInput_2024_06_11,
  CreateScheduleOutput_2024_06_11,
  DeleteScheduleOutput_2024_06_11,
  GetScheduleOutput_2024_06_11,
  GetSchedulesOutput_2024_06_11,
  UpdateScheduleInput_2024_06_11,
  UpdateScheduleOutput_2024_06_11,
} from "@calcom/platform-types";
import { SkipTakePagination } from "@calcom/platform-types";

export declare class OrganizationsSchedulesController {
  private schedulesService;
  private organizationScheduleService;
  constructor(
    schedulesService: SchedulesService_2024_06_11,
    organizationScheduleService: OrganizationsSchedulesService
  );
  getOrganizationSchedules(
    orgId: number,
    queryParams: SkipTakePagination
  ): Promise<GetSchedulesOutput_2024_06_11>;
  createUserSchedule(
    userId: number,
    bodySchedule: CreateScheduleInput_2024_06_11
  ): Promise<CreateScheduleOutput_2024_06_11>;
  getUserSchedule(userId: number, scheduleId: number): Promise<GetScheduleOutput_2024_06_11>;
  getUserSchedules(userId: number): Promise<GetSchedulesOutput_2024_06_11>;
  updateUserSchedule(
    userId: number,
    scheduleId: number,
    bodySchedule: UpdateScheduleInput_2024_06_11
  ): Promise<UpdateScheduleOutput_2024_06_11>;
  deleteUserSchedule(userId: number, scheduleId: number): Promise<DeleteScheduleOutput_2024_06_11>;
}
