import { Schedule } from "@prisma/client";
import { SchedulesRepository_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/schedules.repository";
import { InputSchedulesService_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/services/input-schedules.service";
import { OutputSchedulesService_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/services/output-schedules.service";
import { UsersRepository } from "src/modules/users/users.repository";

import { CreateScheduleInput_2024_06_11, ScheduleOutput_2024_06_11 } from "@calcom/platform-types";
import { UpdateScheduleInput_2024_06_11 } from "@calcom/platform-types";

export declare class SchedulesService_2024_06_11 {
  private readonly schedulesRepository;
  private readonly inputSchedulesService;
  private readonly outputSchedulesService;
  private readonly usersRepository;
  constructor(
    schedulesRepository: SchedulesRepository_2024_06_11,
    inputSchedulesService: InputSchedulesService_2024_06_11,
    outputSchedulesService: OutputSchedulesService_2024_06_11,
    usersRepository: UsersRepository
  );
  createUserDefaultSchedule(userId: number, timeZone: string): Promise<ScheduleOutput_2024_06_11>;
  createUserSchedule(
    userId: number,
    scheduleInput: CreateScheduleInput_2024_06_11
  ): Promise<ScheduleOutput_2024_06_11>;
  getUserScheduleDefault(userId: number): Promise<{
    id: number;
    ownerId: number;
    name: string;
    timeZone: string;
    availability: {
      days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
      startTime: string;
      endTime: string;
    }[];
    isDefault: boolean;
    overrides: {
      date: string;
      startTime: string;
      endTime: string;
    }[];
  } | null>;
  getUserSchedule(
    userId: number,
    scheduleId: number
  ): Promise<{
    id: number;
    ownerId: number;
    name: string;
    timeZone: string;
    availability: {
      days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
      startTime: string;
      endTime: string;
    }[];
    isDefault: boolean;
    overrides: {
      date: string;
      startTime: string;
      endTime: string;
    }[];
  }>;
  getUserSchedules(userId: number): Promise<
    {
      id: number;
      ownerId: number;
      name: string;
      timeZone: string;
      availability: {
        days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
        startTime: string;
        endTime: string;
      }[];
      isDefault: boolean;
      overrides: {
        date: string;
        startTime: string;
        endTime: string;
      }[];
    }[]
  >;
  updateUserSchedule(
    userId: number,
    scheduleId: number,
    bodySchedule: UpdateScheduleInput_2024_06_11
  ): Promise<{
    id: number;
    ownerId: number;
    name: string;
    timeZone: string;
    availability: {
      days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
      startTime: string;
      endTime: string;
    }[];
    isDefault: boolean;
    overrides: {
      date: string;
      startTime: string;
      endTime: string;
    }[];
  }>;
  deleteUserSchedule(
    userId: number,
    scheduleId: number
  ): Promise<{
    id: number;
    userId: number;
    name: string;
    timeZone: string | null;
  }>;
  checkUserOwnsSchedule(userId: number, schedule: Pick<Schedule, "id" | "userId">): void;
}
