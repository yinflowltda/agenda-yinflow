import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

export declare class PrismaWriteService implements OnModuleInit, OnModuleDestroy {
  readonly configService: ConfigService;
  private logger;
  prisma: PrismaClient;
  constructor(configService: ConfigService);
  onModuleInit(): Promise<void>;
  onModuleDestroy(): Promise<void>;
}
