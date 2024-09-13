import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class AuthUrlData {
  authUrl: string;
}
export declare class GcalAuthUrlOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: AuthUrlData;
}
export {};
