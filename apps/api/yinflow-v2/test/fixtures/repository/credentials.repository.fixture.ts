import { TestingModule } from "@nestjs/testing";
import { Prisma } from "@prisma/client";

import { PrismaReadService } from "../../../src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "../../../src/modules/prisma/prisma-write.service";

export class CredentialsRepositoryFixture {
  private prismaReadClient: PrismaReadService["prisma"];
  private prismaWriteClient: PrismaWriteService["prisma"];

  constructor(private readonly module: TestingModule) {
    this.prismaReadClient = module.get(PrismaReadService).prisma;
    this.prismaWriteClient = module.get(PrismaWriteService).prisma;
  }

  create(type: string, key: Prisma.InputJsonValue, userId: number, appId: string) {
    return this.prismaWriteClient.credential.create({
      data: {
        type,
        key,
        userId,
        appId,
      },
    });
  }

  delete(id: number) {
    return this.prismaWriteClient.credential.delete({
      where: {
        id,
      },
    });
  }
}
