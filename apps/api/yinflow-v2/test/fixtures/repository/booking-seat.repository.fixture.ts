import { TestingModule } from "@nestjs/testing";

import { Prisma } from "@calcom/prisma/client";

import { PrismaReadService } from "../../../src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "../../../src/modules/prisma/prisma-write.service";

export class BookingSeatRepositoryFixture {
  private prismaReadClient: PrismaReadService["prisma"];
  private prismaWriteClient: PrismaWriteService["prisma"];

  constructor(private readonly module: TestingModule) {
    this.prismaReadClient = module.get(PrismaReadService).prisma;
    this.prismaWriteClient = module.get(PrismaWriteService).prisma;
  }

  async create(bookingSeat: Prisma.BookingSeatCreateInput) {
    return this.prismaWriteClient.bookingSeat.create({ data: bookingSeat });
  }
}
