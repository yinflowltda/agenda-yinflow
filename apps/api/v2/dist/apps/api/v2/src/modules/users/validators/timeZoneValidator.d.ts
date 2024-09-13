import type { ValidatorConstraintInterface } from "class-validator";

export declare class TimeZoneValidator implements ValidatorConstraintInterface {
  validate(timeZone: string): boolean;
  defaultMessage(): string;
}
