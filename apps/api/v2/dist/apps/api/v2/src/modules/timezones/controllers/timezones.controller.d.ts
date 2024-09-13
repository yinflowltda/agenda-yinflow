import { TimezonesService } from "src/modules/timezones/services/timezones.service";

import type { CityTimezones } from "@calcom/platform-libraries";
import { ApiResponse } from "@calcom/platform-types";

export declare class TimezonesController {
  private readonly timezonesService;
  constructor(timezonesService: TimezonesService);
  getTimeZones(): Promise<ApiResponse<CityTimezones>>;
}
