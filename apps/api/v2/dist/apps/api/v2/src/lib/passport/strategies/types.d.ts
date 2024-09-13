import { UserWithProfile } from "src/modules/users/users.repository";

export declare class BaseStrategy {
  success: (user: unknown) => void;
  error: (error: Error) => void;
}
export declare class NextAuthPassportStrategy {
  success: (user: UserWithProfile) => void;
  error: (error: Error) => void;
}
