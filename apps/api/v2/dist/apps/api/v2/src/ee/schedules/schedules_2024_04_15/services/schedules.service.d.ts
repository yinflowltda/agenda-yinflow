import { Schedule } from "@prisma/client";
import { User } from "@prisma/client";
import { CreateAvailabilityInput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/inputs/create-availability.input";
import { CreateScheduleInput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/inputs/create-schedule.input";
import { ScheduleOutput } from "src/ee/schedules/schedules_2024_04_15/outputs/schedule.output";
import { SchedulesRepository_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/schedules.repository";
import { UserWithProfile, UsersRepository } from "src/modules/users/users.repository";

import type { ScheduleWithAvailabilities } from "@calcom/platform-libraries-0.0.2";
import { UpdateScheduleInput_2024_04_15 } from "@calcom/platform-types";

export declare class SchedulesService_2024_04_15 {
  private readonly schedulesRepository;
  private readonly usersRepository;
  constructor(schedulesRepository: SchedulesRepository_2024_04_15, usersRepository: UsersRepository);
  createUserDefaultSchedule(
    userId: number,
    timeZone: string
  ): Promise<
    {
      availability: {
        id: number;
        userId: number | null;
        eventTypeId: number | null;
        days: number[];
        startTime: Date;
        endTime: Date;
        date: Date | null;
        scheduleId: number | null;
      }[];
    } & {
      id: number;
      userId: number;
      name: string;
      timeZone: string | null;
    }
  >;
  createUserSchedule(
    userId: number,
    schedule: CreateScheduleInput_2024_04_15
  ): Promise<
    {
      availability: {
        id: number;
        userId: number | null;
        eventTypeId: number | null;
        days: number[];
        startTime: Date;
        endTime: Date;
        date: Date | null;
        scheduleId: number | null;
      }[];
    } & {
      id: number;
      userId: number;
      name: string;
      timeZone: string | null;
    }
  >;
  getUserScheduleDefault(userId: number): Promise<
    | ({
        availability: {
          id: number;
          userId: number | null;
          eventTypeId: number | null;
          days: number[];
          startTime: Date;
          endTime: Date;
          date: Date | null;
          scheduleId: number | null;
        }[];
      } & {
        id: number;
        userId: number;
        name: string;
        timeZone: string | null;
      })
    | null
  >;
  getUserSchedule(
    userId: number,
    scheduleId: number
  ): Promise<
    {
      availability: {
        id: number;
        userId: number | null;
        eventTypeId: number | null;
        days: number[];
        startTime: Date;
        endTime: Date;
        date: Date | null;
        scheduleId: number | null;
      }[];
    } & {
      id: number;
      userId: number;
      name: string;
      timeZone: string | null;
    }
  >;
  getUserSchedules(userId: number): Promise<
    ({
      availability: {
        id: number;
        userId: number | null;
        eventTypeId: number | null;
        days: number[];
        startTime: Date;
        endTime: Date;
        date: Date | null;
        scheduleId: number | null;
      }[];
    } & {
      id: number;
      userId: number;
      name: string;
      timeZone: string | null;
    })[]
  >;
  updateUserSchedule(
    user: UserWithProfile,
    scheduleId: number,
    bodySchedule: UpdateScheduleInput_2024_04_15
  ): Promise<
    | {
        schedule: {
          name: string;
          id: number;
          userId: number;
        };
        isDefault: boolean;
        availability?: undefined;
        timeZone?: undefined;
        prevDefaultId?: undefined;
        currentDefaultId?: undefined;
      }
    | {
        schedule: {
          eventType: {
            id: number;
            eventName: string | null;
          }[];
          name: string;
          id: number;
          timeZone: string | null;
          availability: {
            id: number;
            startTime: Date;
            endTime: Date;
            eventTypeId: number | null;
            days: number[];
            date: Date | null;
            userId: number | null;
            scheduleId: number | null;
          }[];
          userId: number;
        };
        availability: import("@calcom/types/schedule").Schedule;
        timeZone: string;
        isDefault: boolean;
        prevDefaultId: number | null;
        currentDefaultId: number | null;
      }
  >;
  deleteUserSchedule(
    userId: number,
    scheduleId: number
  ): Promise<{
    id: number;
    userId: number;
    name: string;
    timeZone: string | null;
  }>;
  formatScheduleForAtom(user: User, schedule: ScheduleWithAvailabilities): Promise<ScheduleOutput>;
  formatSchedulesForAtom(user: User, schedules: ScheduleWithAvailabilities[]): Promise<ScheduleOutput[]>;
  transformScheduleForAtom(
    schedule: ScheduleWithAvailabilities,
    userSchedulesCount: number,
    user: Pick<User, "id" | "defaultScheduleId" | "timeZone">
  ): Promise<ScheduleOutput>;
  checkUserOwnsSchedule(userId: number, schedule: Pick<Schedule, "id" | "userId">): void;
  getDefaultAvailabilityInput(): CreateAvailabilityInput_2024_04_15;
}
