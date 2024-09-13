import type { ValidatorConstraintInterface } from "class-validator";

export declare class WeekdayValidator implements ValidatorConstraintInterface {
  validate(weekday: string): boolean;
  defaultMessage(): string;
}
