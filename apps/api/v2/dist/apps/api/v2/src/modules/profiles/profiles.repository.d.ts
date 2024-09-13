import { PrismaReadService } from "src/modules/prisma/prisma-read.service";

export declare class ProfilesRepository {
  private readonly dbRead;
  constructor(dbRead: PrismaReadService);
  getPlatformOwnerUserId(organizationId: number): Promise<number | undefined>;
}
