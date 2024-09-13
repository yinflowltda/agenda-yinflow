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
exports.IsOrgGuard = void 0;
const common_1 = require("@nestjs/common");
const organizations_repository_1 = require("../../../organizations/organizations.repository");
const redis_service_1 = require("../../../redis/redis.service");
let IsOrgGuard = class IsOrgGuard {
  constructor(organizationsRepository, redisService) {
    this.organizationsRepository = organizationsRepository;
    this.redisService = redisService;
  }
  async canActivate(context) {
    let canAccess = false;
    const request = context.switchToHttp().getRequest();
    const organizationId = request.params.orgId;
    if (!organizationId) {
      throw new common_1.ForbiddenException("No organization id found in request params.");
    }
    const REDIS_CACHE_KEY = `apiv2:org:${organizationId}:guard:isOrg`;
    const cachedData = await this.redisService.redis.get(REDIS_CACHE_KEY);
    if (cachedData) {
      const { org: cachedOrg, canAccess: cachedCanAccess } = JSON.parse(cachedData);
      if (cachedOrg?.id === Number(organizationId) && cachedCanAccess !== undefined) {
        request.organization = cachedOrg;
        return cachedCanAccess;
      }
    }
    const org = await this.organizationsRepository.findById(Number(organizationId));
    if (org?.isOrganization) {
      request.organization = org;
      canAccess = true;
    }
    if (org) {
      await this.redisService.redis.set(REDIS_CACHE_KEY, JSON.stringify({ org: org, canAccess }), "EX", 300);
    }
    return canAccess;
  }
};
IsOrgGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_repository_1.OrganizationsRepository,
      redis_service_1.RedisService,
    ]),
  ],
  IsOrgGuard
);
exports.IsOrgGuard = IsOrgGuard;
//# sourceMappingURL=is-org.guard.js.map
