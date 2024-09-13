import { ConfigService } from "@nestjs/config";
import { DeploymentsRepository } from "src/modules/deployments/deployments.repository";
import { RedisService } from "src/modules/redis/redis.service";

export declare class DeploymentsService {
  private readonly deploymentsRepository;
  private readonly configService;
  private readonly redisService;
  constructor(
    deploymentsRepository: DeploymentsRepository,
    configService: ConfigService,
    redisService: RedisService
  );
  checkLicense(): Promise<boolean>;
}
