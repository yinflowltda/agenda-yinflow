import type { ValidatorConstraintInterface } from "class-validator";

export declare class TimeFormatValidator implements ValidatorConstraintInterface {
  validate(timeFormat: number): boolean;
  defaultMessage(): string;
}
