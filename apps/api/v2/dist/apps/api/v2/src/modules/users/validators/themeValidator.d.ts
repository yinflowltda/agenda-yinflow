import type { ValidatorConstraintInterface } from "class-validator";

export declare class ThemeValidator implements ValidatorConstraintInterface {
  validate(theme: string): boolean;
  defaultMessage(): string;
}
