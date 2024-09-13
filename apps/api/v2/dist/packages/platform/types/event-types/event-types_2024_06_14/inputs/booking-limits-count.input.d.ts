import type { ValidationOptions } from "class-validator";

export type BookingLimitsKeyOutputType_2024_06_14 = "PER_DAY" | "PER_WEEK" | "PER_MONTH" | "PER_YEAR";
export type BookingLimitsKeysInputType = "day" | "week" | "month" | "year";
export type TransformBookingLimitsSchema_2024_06_14 = {
  [K in BookingLimitsKeyOutputType_2024_06_14]?: number;
};
export declare class BookingLimitsCount_2024_06_14 {
  day?: number;
  week?: number;
  month?: number;
  year?: number;
}
export declare function ValidateBookingLimistsCount(
  validationOptions?: ValidationOptions
): (object: any, propertyName: string) => void;
