import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class BusyTimesOutput {
  start: Date;
  end: Date;
  source?: string | null;
}
export declare class GetBusyTimesOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: BusyTimesOutput[];
}
