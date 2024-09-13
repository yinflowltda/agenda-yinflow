import type { Availability, Schedule } from "@prisma/client";
import { UsersRepository } from "src/modules/users/users.repository";

export declare class OutputSchedulesService_2024_06_11 {
  private readonly usersRepository;
  constructor(usersRepository: UsersRepository);
  getResponseSchedule(
    databaseSchedule: Schedule & {
      availability: Availability[];
    }
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
  padHoursMinutesWithZeros(hhMM: string): string;
}
