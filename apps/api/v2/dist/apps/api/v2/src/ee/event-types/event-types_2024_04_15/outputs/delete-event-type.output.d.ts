import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class DeleteData {
  id: number;
  length: number;
  slug: string;
  title: string;
}
export declare class DeleteEventTypeOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: DeleteData;
}
export {};
