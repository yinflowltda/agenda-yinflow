import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PlatformPlanType } from "src/modules/billing/types";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";
import { RedisService } from "src/modules/redis/redis.service";

export declare class PlatformPlanGuard implements CanActivate {
  private reflector;
  private readonly organizationsRepository;
  private readonly redisService;
  constructor(
    reflector: Reflector,
    organizationsRepository: OrganizationsRepository,
    redisService: RedisService
  );
  canActivate(context: ExecutionContext): Promise<boolean>;
}
type HasMinimumPlanProp = {
  currentPlan: PlatformPlanType;
  minimumPlan: PlatformPlanType;
  plans: PlatformPlanType[];
};
export declare function hasMinimumPlan(props: HasMinimumPlanProp): boolean;
export {};
