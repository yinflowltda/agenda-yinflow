import { CreateEventTypeInput_2024_06_14, UpdateEventTypeInput_2024_06_14 } from "@calcom/platform-types";

export declare class InputEventTypesService_2024_06_14 {
  transformInputCreateEventType(inputEventType: CreateEventTypeInput_2024_06_14): any;
  transformInputUpdateEventType(inputEventType: UpdateEventTypeInput_2024_06_14): any;
  transformInputLocations(inputLocations: CreateEventTypeInput_2024_06_14["locations"]): any;
  transformInputBookingFields(inputBookingFields: CreateEventTypeInput_2024_06_14["bookingFields"]): any;
  transformInputIntervalLimits(
    inputBookingFields: CreateEventTypeInput_2024_06_14["bookingLimitsCount"]
  ): any;
  transformInputBookingWindow(inputBookingWindow: CreateEventTypeInput_2024_06_14["bookingWindow"]): any;
  transformInputRecurrignEvent(recurrence: CreateEventTypeInput_2024_06_14["recurrence"]): any;
}
