import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class ApiKeyRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getApiKeyFromHash(hashedKey: string): Promise<{
    id: string;
    userId: number;
    teamId: number | null;
    note: string | null;
    createdAt: Date;
    expiresAt: Date | null;
    lastUsedAt: Date | null;
    hashedKey: string;
    appId: string | null;
  } | null>;
}
