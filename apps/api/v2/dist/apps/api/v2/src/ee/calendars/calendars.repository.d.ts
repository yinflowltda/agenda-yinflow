import { Prisma } from "@prisma/client";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class CalendarsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getCalendarCredentials(
    credentialId: number,
    userId: number
  ): Promise<{
    type: string;
    id: number;
    userId: number | null;
    teamId: number | null;
    user: {
      email: string;
    } | null;
    app: {
      slug: string;
      dirName: string;
      categories: import(".prisma/client").$Enums.AppCategories[];
    } | null;
    appId: string | null;
    invalid: boolean | null;
    key: Prisma.JsonValue;
  } | null>;
  deleteCredentials(credentialId: number): Promise<{
    id: number;
    type: string;
    key: Prisma.JsonValue;
    userId: number | null;
    teamId: number | null;
    appId: string | null;
    subscriptionId: string | null;
    paymentStatus: string | null;
    billingCycleStart: number | null;
    invalid: boolean | null;
  }>;
}
