import { App } from "@prisma/client";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class AppsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getAppBySlug(slug: string): Promise<App | null>;
}
