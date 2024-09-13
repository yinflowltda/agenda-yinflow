import type { ValidatorConstraintInterface } from "class-validator";

export declare class LocaleValidator implements ValidatorConstraintInterface {
  validate(locale: string): boolean;
  defaultMessage(): string;
}
