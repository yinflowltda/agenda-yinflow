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
exports.DeploymentsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const deployments_repository_1 = require("./deployments.repository");
const redis_service_1 = require("../redis/redis.service");
const CACHING_TIME = 86400000;
const getLicenseCacheKey = (key) => `api-v2-license-key-url-${key}`;
let DeploymentsService = class DeploymentsService {
  constructor(deploymentsRepository, configService, redisService) {
    this.deploymentsRepository = deploymentsRepository;
    this.configService = configService;
    this.redisService = redisService;
  }
  async checkLicense() {
    if (this.configService.get("e2e")) {
      return true;
    }
    let licenseKey = this.configService.get("api.licenseKey");
    if (!licenseKey) {
      const deployment = await this.deploymentsRepository.getDeployment();
      licenseKey = deployment?.licenseKey ?? undefined;
    }
    if (!licenseKey) {
      return false;
    }
    const licenseKeyUrl = this.configService.get("api.licenseKeyUrl") + `?key=${licenseKey}`;
    const cachedData = await this.redisService.redis.get(getLicenseCacheKey(licenseKey));
    if (cachedData) {
      return JSON.parse(cachedData)?.valid;
    }
    const response = await fetch(licenseKeyUrl, { mode: "cors" });
    const data = await response.json();
    const cacheKey = getLicenseCacheKey(licenseKey);
    this.redisService.redis.set(cacheKey, JSON.stringify(data), "EX", CACHING_TIME);
    return data.valid;
  }
};
DeploymentsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      deployments_repository_1.DeploymentsRepository,
      config_1.ConfigService,
      redis_service_1.RedisService,
    ]),
  ],
  DeploymentsService
);
exports.DeploymentsService = DeploymentsService;
//# sourceMappingURL=deployments.service.js.map
