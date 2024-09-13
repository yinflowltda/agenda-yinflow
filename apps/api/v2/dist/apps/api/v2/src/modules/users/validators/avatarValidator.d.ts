import type { ValidatorConstraintInterface } from "class-validator";

export declare class AvatarValidator implements ValidatorConstraintInterface {
  validate(avatarString: string): boolean;
}
