import { CreateAvailabilityInput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/inputs/create-availability.input";
import { CreateScheduleInput_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/inputs/create-schedule.input";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class SchedulesRepository_2024_04_15 {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  createScheduleWithAvailabilities(
    userId: number,
    schedule: CreateScheduleInput_2024_04_15,
    availabilities: CreateAvailabilityInput_2024_04_15[]
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
