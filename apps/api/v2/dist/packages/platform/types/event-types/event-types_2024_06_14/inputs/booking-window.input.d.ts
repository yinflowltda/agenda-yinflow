import type { ValidationOptions } from "class-validator";

export type BookingWindowPeriodInputType_2024_06_14 = "businessDays" | "calendarDays" | "range";
export type BookingWindowPeriodOutputType_2024_06_14 = "RANGE" | "ROLLING_WINDOW" | "ROLLING";
export type TransformFutureBookingsLimitSchema_2024_06_14 = {
  periodType: BookingWindowPeriodOutputType_2024_06_14;
  periodDays?: number;
  periodCountCalendarDays?: boolean;
  periodStartDate?: Date;
  periodEndDate?: Date;
};
declare class BookingWindowBase {
  type: BookingWindowPeriodInputType_2024_06_14;
}
export declare class BusinessDaysWindow_2024_06_14 extends BookingWindowBase {
  value: number;
  rolling?: boolean;
}
export declare class CalendarDaysWindow_2024_06_14 extends BookingWindowBase {
  value: number;
  rolling?: boolean;
}
export declare class RangeWindow_2024_06_14 extends BookingWindowBase {
  value: string[];
}
export type BookingWindow_2024_06_14 =
  | BusinessDaysWindow_2024_06_14
  | CalendarDaysWindow_2024_06_14
  | RangeWindow_2024_06_14;
export declare function ValidateBookingWindow(
  validationOptions?: ValidationOptions
): (object: any, propertyName: string) => void;
export {};
