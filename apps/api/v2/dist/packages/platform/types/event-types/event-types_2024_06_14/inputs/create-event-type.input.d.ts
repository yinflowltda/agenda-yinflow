import { SchedulingType } from "@calcom/platform-enums";

import type { BookingField_2024_06_14 } from "./booking-fields.input";
import { BookingLimitsCount_2024_06_14 } from "./booking-limits-count.input";
import { BookingLimitsDuration_2024_06_14 } from "./booking-limits-duration.input";
import type { BookingWindow_2024_06_14 } from "./booking-window.input";
import type { Location_2024_06_14 } from "./locations.input";
import { Recurrence_2024_06_14 } from "./recurrence.input";

export declare const CREATE_EVENT_LENGTH_EXAMPLE = 60;
export declare const CREATE_EVENT_TITLE_EXAMPLE = "Learn the secrets of masterchief!";
export declare const CREATE_EVENT_DESCRIPTION_EXAMPLE =
  "Discover the culinary wonders of the Argentina by making the best flan ever!";
export declare class CreateEventTypeInput_2024_06_14 {
  lengthInMinutes: number;
  title: string;
  slug: string;
  description?: string;
  locations?: Location_2024_06_14[];
  bookingFields?: BookingField_2024_06_14[];
  disableGuests?: boolean;
  slotInterval?: number;
  minimumBookingNotice?: number;
  beforeEventBuffer?: number;
  afterEventBuffer?: number;
  scheduleId?: number;
  bookingLimitsCount?: BookingLimitsCount_2024_06_14;
  onlyShowFirstAvailableSlot?: boolean;
  bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;
  bookingWindow?: BookingWindow_2024_06_14;
  offsetStart?: number;
  recurrence?: Recurrence_2024_06_14;
}
export declare enum HostPriority {
  lowest = "lowest",
  low = "low",
  medium = "medium",
  high = "high",
  highest = "highest",
}
export declare class Host {
  userId: number;
  mandatory?: boolean;
  priority?: keyof typeof HostPriority;
}
export declare class CreateTeamEventTypeInput_2024_06_14 extends CreateEventTypeInput_2024_06_14 {
  schedulingType: keyof typeof SchedulingType;
  hosts: Host[];
  assignAllTeamMembers?: boolean;
}
