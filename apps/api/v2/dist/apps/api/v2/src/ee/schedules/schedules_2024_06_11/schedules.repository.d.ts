import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

import type { CreateScheduleInput_2024_06_11 } from "@calcom/platform-types";

type InputScheduleAvailabilityTransformed = {
  days: number[];
  startTime: Date;
  endTime: Date;
};
type InputScheduleOverrideTransformed = {
  date: Date;
  startTime: Date;
  endTime: Date;
};
type InputScheduleTransformed = Omit<CreateScheduleInput_2024_06_11, "availability" | "overrides"> & {
  availability: InputScheduleAvailabilityTransformed[];
  overrides: InputScheduleOverrideTransformed[];
};
export declare class SchedulesRepository_2024_06_11 {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  createSchedule(
    userId: number,
    schedule: Omit<InputScheduleTransformed, "isDefault">
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
  getScheduleById(scheduleId: number): Promise<
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
  getScheduleByIdAndUserId(
    scheduleId: number,
    userId: number
  ): Promise<{
    id: number;
    userId: number;
    name: string;
    timeZone: string | null;
  } | null>;
  updateSchedule(
    userId: number,
    scheduleId: number,
    schedule: Partial<Omit<InputScheduleTransformed, "isDefault">>
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
  getSchedulesByUserId(userId: number): Promise<
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
  deleteScheduleById(scheduleId: number): Promise<{
    id: number;
    userId: number;
    name: string;
    timeZone: string | null;
  }>;
  getUserSchedulesCount(userId: number): Promise<number>;
}
export {};
