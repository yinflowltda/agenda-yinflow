import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";
import { RedisService } from "src/modules/redis/redis.service";

export declare class IsAdminAPIEnabledGuard implements CanActivate {
  private organizationsRepository;
  private readonly redisService;
  constructor(organizationsRepository: OrganizationsRepository, redisService: RedisService);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
