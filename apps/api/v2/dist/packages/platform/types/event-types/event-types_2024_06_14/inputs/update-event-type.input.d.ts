import type { BookingField_2024_06_14 } from "./booking-fields.input";
import { BookingLimitsCount_2024_06_14 } from "./booking-limits-count.input";
import { BookingLimitsDuration_2024_06_14 } from "./booking-limits-duration.input";
import { type BookingWindow_2024_06_14 } from "./booking-window.input";
import { Host } from "./create-event-type.input";
import type { Location_2024_06_14 } from "./locations.input";
import { Recurrence_2024_06_14 } from "./recurrence.input";

export declare class UpdateEventTypeInput_2024_06_14 {
  lengthInMinutes?: number;
  title?: string;
  slug?: string;
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
export declare class UpdateTeamEventTypeInput_2024_06_14 {
  lengthInMinutes?: number;
  title?: string;
  slug?: string;
  description?: string;
  locations?: Location_2024_06_14[];
  bookingFields?: BookingField_2024_06_14[];
  disableGuests?: boolean;
  slotInterval?: number;
  minimumBookingNotice?: number;
  beforeEventBuffer?: number;
  afterEventBuffer?: number;
  hosts?: Host[];
  assignAllTeamMembers?: boolean;
  bookingLimitsCount?: BookingLimitsCount_2024_06_14;
  onlyShowFirstAvailableSlot?: boolean;
  bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;
  bookingWindow?: BookingWindow_2024_06_14;
  offsetStart?: number;
  recurrence?: Recurrence_2024_06_14;
}
