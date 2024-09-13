import {
  APPLE_CALENDAR_TYPE,
  GOOGLE_CALENDAR_TYPE,
  OFFICE_365_CALENDAR_TYPE,
} from "@calcom/platform-constants";

export declare class DestinationCalendarsInputBodyDto {
  readonly integration:
    | typeof APPLE_CALENDAR_TYPE
    | typeof GOOGLE_CALENDAR_TYPE
    | typeof OFFICE_365_CALENDAR_TYPE;
  readonly externalId: string;
}
