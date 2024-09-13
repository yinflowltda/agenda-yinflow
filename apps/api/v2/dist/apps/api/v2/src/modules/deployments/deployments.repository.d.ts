import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class DeploymentsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getDeployment(): Promise<{
    id: number;
    logo: string | null;
    theme: import("@prisma/client/runtime/library").JsonValue;
    licenseKey: string | null;
    agreedLicenseAt: Date | null;
  } | null>;
}
