import { EventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/event-type.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class EventTypeGroup {
  eventTypes: EventTypeOutput[];
}
export declare class GetEventTypesData {
  eventTypeGroups: EventTypeGroup[];
}
export declare class GetEventTypesOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: GetEventTypesData;
}
export {};
