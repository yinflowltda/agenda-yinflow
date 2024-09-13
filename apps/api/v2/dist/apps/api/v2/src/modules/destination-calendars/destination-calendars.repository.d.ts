import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class DestinationCalendarsRepository {
  private readonly dbWrite;
  constructor(dbWrite: PrismaWriteService);
  updateCalendar(
    integration: string,
    externalId: string,
    credentialId: number,
    userId: number,
    primaryEmail: string | null
  ): Promise<{
    id: number;
    integration: string;
    externalId: string;
    primaryEmail: string | null;
    userId: number | null;
    eventTypeId: number | null;
    credentialId: number | null;
  }>;
}
