import type { ValidationOptions } from "class-validator";

export declare class BookingLimitsDuration_2024_06_14 {
  day?: number;
  week?: number;
  month?: number;
  year?: number;
}
export declare function ValidateBookingLimistsDuration(
  validationOptions?: ValidationOptions
): (object: any, propertyName: string) => void;
