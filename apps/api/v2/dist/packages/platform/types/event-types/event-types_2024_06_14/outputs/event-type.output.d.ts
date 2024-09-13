import type { Location_2024_06_14, BookingField_2024_06_14, BookingWindow_2024_06_14 } from "../inputs";
import { Host as TeamEventTypeHostInput, BookingLimitsDuration_2024_06_14 } from "../inputs";
import { Recurrence_2024_06_14 } from "../inputs";
import type { BookingLimitsCount_2024_06_14 } from "../inputs/booking-limits-count.input";

export type EventTypesOutputSchedulingType = "ROUND_ROBIN" | "COLLECTIVE" | "MANAGED";
declare class User_2024_06_14 {
  id: number;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
  weekStart: string;
  brandColor: string | null;
  darkBrandColor: string | null;
  metadata: Record<string, unknown>;
}
export declare class EventTypeOutput_2024_06_14 {
  id: number;
  ownerId: number;
  lengthInMinutes: number;
  title: string;
  slug: string;
  description: string;
  locations: Location_2024_06_14[];
  bookingFields: BookingField_2024_06_14[];
  disableGuests: boolean;
  slotInterval?: number | null;
  minimumBookingNotice?: number;
  beforeEventBuffer?: number;
  afterEventBuffer?: number;
  schedulingType: EventTypesOutputSchedulingType | null;
  recurrence: Recurrence_2024_06_14 | null;
  metadata: Record<string, unknown>;
  requiresConfirmation: boolean;
  price: number;
  currency: string;
  lockTimeZoneToggleOnBookingPage: boolean;
  seatsPerTimeSlot: number | null;
  forwardParamsSuccessRedirect: boolean | null;
  successRedirectUrl: string | null;
  seatsShowAvailabilityCount: boolean | null;
  isInstantEvent: boolean;
  users: User_2024_06_14[];
  scheduleId: number | null;
  bookingLimitsCount?: BookingLimitsCount_2024_06_14;
  onlyShowFirstAvailableSlot?: boolean;
  bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;
  bookingWindow?: BookingWindow_2024_06_14;
  offsetStart?: number;
}
export declare class TeamEventTypeResponseHost extends TeamEventTypeHostInput {
  name: string;
}
export declare class TeamEventTypeOutput_2024_06_14 {
  id: number;
  lengthInMinutes: number;
  title: string;
  slug: string;
  description: string;
  locations: Location_2024_06_14[];
  bookingFields: BookingField_2024_06_14[];
  disableGuests: boolean;
  slotInterval?: number | null;
  minimumBookingNotice?: number;
  beforeEventBuffer?: number;
  afterEventBuffer?: number;
  schedulingType: EventTypesOutputSchedulingType | null;
  recurrence: Recurrence_2024_06_14 | null;
  metadata: Record<string, unknown>;
  requiresConfirmation: boolean;
  price: number;
  currency: string;
  lockTimeZoneToggleOnBookingPage: boolean;
  seatsPerTimeSlot: number | null;
  forwardParamsSuccessRedirect: boolean | null;
  successRedirectUrl: string | null;
  seatsShowAvailabilityCount: boolean | null;
  isInstantEvent: boolean;
  scheduleId: number | null;
  teamId?: number | null;
  ownerId?: number | null;
  parentEventTypeId?: number | null;
  hosts: TeamEventTypeResponseHost[];
  assignAllTeamMembers?: boolean;
  bookingLimitsCount?: BookingLimitsCount_2024_06_14;
  onlyShowFirstAvailableSlot?: boolean;
  bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;
  bookingWindow?: BookingWindow_2024_06_14;
  offsetStart?: number;
}
export {};
