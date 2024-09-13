import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class SelectedCalendarsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  createSelectedCalendar(
    externalId: string,
    credentialId: number,
    userId: number,
    integration: string
  ): import(".prisma/client").Prisma.Prisma__SelectedCalendarClient<
    {
      userId: number;
      integration: string;
      externalId: string;
      credentialId: number | null;
    },
    never,
    import("@prisma/client/runtime/library").DefaultArgs
  >;
  getUserSelectedCalendars(userId: number): import(".prisma/client").Prisma.PrismaPromise<
    {
      userId: number;
      integration: string;
      externalId: string;
      credentialId: number | null;
    }[]
  >;
  addUserSelectedCalendar(
    userId: number,
    integration: string,
    externalId: string,
    credentialId: number
  ): Promise<{
    userId: number;
    integration: string;
    externalId: string;
    credentialId: number | null;
  }>;
  removeUserSelectedCalendar(
    userId: number,
    integration: string,
    externalId: string
  ): Promise<{
    userId: number;
    integration: string;
    externalId: string;
    credentialId: number | null;
  }>;
}
