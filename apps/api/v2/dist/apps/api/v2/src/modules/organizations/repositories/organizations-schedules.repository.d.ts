import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class OrganizationSchedulesRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getSchedulesByUserIds(
    userIds: number[],
    skip: number,
    take: number
  ): Promise<
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
}
