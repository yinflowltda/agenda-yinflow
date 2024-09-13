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
exports.TimezonesService = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../../redis/redis.service");
const platform_libraries_1 = require("@calcom/platform-libraries");
let TimezonesService = class TimezonesService {
  constructor(redisService) {
    this.redisService = redisService;
    this.cacheKey = "cityTimezones";
  }
  async getCityTimeZones() {
    const cachedTimezones = await this.redisService.redis.get(this.cacheKey);
    if (!cachedTimezones) {
      const timezones = await (0, platform_libraries_1.cityTimezonesHandler)();
      await this.redisService.redis.set(this.cacheKey, JSON.stringify(timezones), "EX", 60 * 60 * 24);
      return timezones;
    } else {
      return JSON.parse(cachedTimezones);
    }
  }
};
TimezonesService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [redis_service_1.RedisService])],
  TimezonesService
);
exports.TimezonesService = TimezonesService;
//# sourceMappingURL=timezones.service.js.map
