import type { ValidatorConstraintInterface } from "class-validator";

export declare class IsYearMonthDays implements ValidatorConstraintInterface {
  validate(dateString: string): boolean;
  defaultMessage(): string;
}
