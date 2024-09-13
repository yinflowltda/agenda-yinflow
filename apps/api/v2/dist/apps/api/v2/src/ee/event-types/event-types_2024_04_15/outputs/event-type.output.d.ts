import { PeriodType } from "src/ee/event-types/event-types_2024_04_15/inputs/enums/period-type";
import { SchedulingType } from "src/ee/event-types/event-types_2024_04_15/inputs/enums/scheduling-type";
import { EventTypeLocation_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/event-type-location.input";
import {
  BookingField_2024_04_15,
  IntervalLimits_2024_04_15,
  RecurringEvent_2024_04_15,
} from "src/ee/event-types/event-types_2024_04_15/inputs/update-event-type.input";

export declare class EventTypeOutput {
  id: number;
  length: number;
  slug: string;
  title: string;
  description: string | null;
  hidden: boolean;
  locations: EventTypeLocation_2024_04_15[] | null;
  position?: number;
  offsetStart: number;
  userId: number | null;
  profileId?: number | null;
  teamId: number | null;
  eventName: string | null;
  parentId?: number | null;
  bookingFields: BookingField_2024_04_15[] | null;
  timeZone: string | null;
  periodType: PeriodType | null;
  periodStartDate: Date | null;
  periodEndDate: Date | null;
  periodDays: number | null;
  periodCountCalendarDays: boolean | null;
  lockTimeZoneToggleOnBookingPage: boolean;
  requiresConfirmation: boolean;
  requiresBookerEmailVerification: boolean;
  recurringEvent: RecurringEvent_2024_04_15 | null;
  disableGuests: boolean;
  hideCalendarNotes: boolean;
  minimumBookingNotice: number;
  beforeEventBuffer: number;
  afterEventBuffer: number;
  seatsPerTimeSlot: number | null;
  onlyShowFirstAvailableSlot: boolean;
  seatsShowAttendees: boolean;
  seatsShowAvailabilityCount: boolean;
  schedulingType: SchedulingType | null;
  scheduleId?: number | null;
  price: number;
  currency: string;
  slotInterval: number | null;
  metadata: Record<string, any> | null;
  successRedirectUrl: string | null;
  bookingLimits: IntervalLimits_2024_04_15;
  durationLimits: IntervalLimits_2024_04_15;
  isInstantEvent: boolean;
  assignAllTeamMembers: boolean;
  useEventTypeDestinationCalendarEmail: boolean;
  secondaryEmailId: number | null;
}
