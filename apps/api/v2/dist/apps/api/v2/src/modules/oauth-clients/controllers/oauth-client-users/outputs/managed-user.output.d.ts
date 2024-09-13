import { Locales } from "src/lib/enums/locales";

export declare class ManagedUserOutput {
  id: number;
  email: string;
  username: string | null;
  timeZone: string;
  weekStart: string;
  createdDate: Date;
  timeFormat: number | null;
  defaultScheduleId: number | null;
  locale?: Locales;
}
