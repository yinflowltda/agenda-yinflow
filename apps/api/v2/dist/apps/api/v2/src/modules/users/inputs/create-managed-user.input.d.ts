import { Locales } from "src/lib/enums/locales";

export type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
export type TimeFormat = 12 | 24;
export declare class CreateManagedUserInput {
  email: string;
  name?: string;
  timeFormat?: TimeFormat;
  weekStart?: WeekDay;
  timeZone?: string;
  locale?: Locales;
}
