"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasMinimumPlan = exports.PlatformPlanGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_plan_decorator_1 = require("../../decorators/billing/platform-plan.decorator");
const organizations_repository_1 = require("../../../organizations/organizations.repository");
const redis_service_1 = require("../../../redis/redis.service");
let PlatformPlanGuard = class PlatformPlanGuard {
  constructor(reflector, organizationsRepository, redisService) {
    this.reflector = reflector;
    this.organizationsRepository = organizationsRepository;
    this.redisService = redisService;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const teamId = request.params.teamId;
    const orgId = request.params.orgId;
    const user = request.user;
    const minimumPlan = this.reflector.get(platform_plan_decorator_1.PlatformPlan, context.getHandler());
    const REDIS_CACHE_KEY = `apiv2:user:${user?.id ?? "none"}:org:${orgId ?? "none"}:team:${
      teamId ?? "none"
    }:guard:platformbilling:${minimumPlan}`;
    const cachedAccess = JSON.parse((await this.redisService.redis.get(REDIS_CACHE_KEY)) ?? "false");
    if (cachedAccess) {
      return cachedAccess;
    }
    let canAccess = false;
    if (user && orgId) {
      const team = await this.organizationsRepository.findByIdIncludeBilling(Number(orgId));
      const isPlatform = team?.isPlatform;
      const hasSubscription = team?.platformBilling?.subscriptionId;
      if (!team) {
        canAccess = false;
      } else if (!isPlatform) {
        canAccess = true;
      } else if (!hasSubscription) {
        canAccess = false;
      } else {
        canAccess = hasMinimumPlan({
          currentPlan: team.platformBilling?.plan,
          minimumPlan: minimumPlan,
          plans: ["STARTER", "ESSENTIALS", "SCALE", "ENTERPRISE"],
        });
      }
    }
    await this.redisService.redis.set(REDIS_CACHE_KEY, String(canAccess), "EX", 300);
    return canAccess;
  }
};
PlatformPlanGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      core_1.Reflector,
      organizations_repository_1.OrganizationsRepository,
      redis_service_1.RedisService,
    ]),
  ],
  PlatformPlanGuard
);
exports.PlatformPlanGuard = PlatformPlanGuard;
function hasMinimumPlan(props) {
  const currentPlanIndex = props.plans.indexOf(props.currentPlan);
  const minimumPlanIndex = props.plans.indexOf(props.minimumPlan);
  if (currentPlanIndex === -1 || minimumPlanIndex === -1) {
    throw new Error(
      `Invalid platform billing plan provided. Current plan: ${props.currentPlan}, Minimum plan: ${props.minimumPlan}`
    );
  }
  return currentPlanIndex >= minimumPlanIndex;
}
exports.hasMinimumPlan = hasMinimumPlan;
//# sourceMappingURL=platform-plan.guard.js.map
