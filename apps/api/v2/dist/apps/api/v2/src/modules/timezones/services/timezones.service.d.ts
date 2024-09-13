import { RedisService } from "src/modules/redis/redis.service";

import type { CityTimezones } from "@calcom/platform-libraries";

export declare class TimezonesService {
  private readonly redisService;
  private cacheKey;
  constructor(redisService: RedisService);
  getCityTimeZones(): Promise<CityTimezones>;
}
