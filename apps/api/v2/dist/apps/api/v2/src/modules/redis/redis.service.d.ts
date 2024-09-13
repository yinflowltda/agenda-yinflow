import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Redis } from "ioredis";
import { AppConfig } from "src/config/type";

export declare class RedisService implements OnModuleDestroy {
  readonly configService: ConfigService<AppConfig>;
  redis: Redis;
  private readonly logger;
  constructor(configService: ConfigService<AppConfig>);
  onModuleDestroy(): Promise<void>;
}
