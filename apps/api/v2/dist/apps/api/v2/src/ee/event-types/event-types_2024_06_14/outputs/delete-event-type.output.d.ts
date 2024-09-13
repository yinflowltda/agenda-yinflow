import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class DeleteData_2024_06_14 {
  id: number;
  lengthInMinutes: number;
  slug: string;
  title: string;
}
export declare class DeleteEventTypeOutput_2024_06_14 {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: DeleteData_2024_06_14;
}
export {};
