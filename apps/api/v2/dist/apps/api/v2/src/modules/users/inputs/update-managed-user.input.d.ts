import { Locales } from "src/lib/enums/locales";
import { TimeFormat, WeekDay } from "src/modules/users/inputs/create-managed-user.input";

export declare class UpdateManagedUserInput {
  email?: string;
  name?: string;
  timeFormat?: TimeFormat;
  defaultScheduleId?: number;
  weekStart?: WeekDay;
  timeZone?: string;
  locale?: Locales;
}
