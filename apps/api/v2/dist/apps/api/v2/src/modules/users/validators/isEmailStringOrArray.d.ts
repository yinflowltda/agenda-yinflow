import type { ValidatorConstraintInterface } from "class-validator";

export declare class IsEmailStringOrArray implements ValidatorConstraintInterface {
  validate(value: any): boolean;
  validateEmail(email: string): boolean;
  defaultMessage(): string;
}
