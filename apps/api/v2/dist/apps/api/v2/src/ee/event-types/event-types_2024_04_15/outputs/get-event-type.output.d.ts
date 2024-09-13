import { EventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/event-type.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class Data {
  eventType: EventTypeOutput;
}
export declare class GetEventTypeOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: Data;
}
export {};
