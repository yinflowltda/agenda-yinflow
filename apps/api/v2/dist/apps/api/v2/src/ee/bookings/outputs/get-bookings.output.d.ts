import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class Attendee {
  id: number;
  email: string;
  name: string;
  timeZone: string;
  locale: string | null;
  bookingId: number | null;
}
declare class EventType {
  slug?: string;
  id?: number;
  eventName?: string | null;
  price: number;
  recurringEvent?: any;
  currency: string;
  metadata: any;
  seatsShowAttendees?: boolean | undefined | null;
  seatsShowAvailabilityCount?: boolean | undefined | null;
  team?: any | null;
}
declare class Reference {
  id: number;
  type: string;
  uid: string;
  meetingId?: string | null;
  thirdPartyRecurringEventId?: string | null;
  meetingPassword: string | null;
  meetingUrl?: string | null;
  bookingId: number | null;
  externalCalendarId: string | null;
  deleted?: any;
  credentialId: number | null;
}
declare class User {
  id: number;
  name: string | null;
  email: string;
}
declare class GetBookingsDataEntry {
  id: number;
  title: string;
  userPrimaryEmail?: string | null;
  description: string | null;
  customInputs: object | any;
  startTime: string;
  endTime: string;
  attendees: Attendee[];
  metadata: any;
  uid: string;
  recurringEventId: string | null;
  location: string | null;
  eventType: EventType;
  status: "CANCELLED" | "REJECTED" | "ACCEPTED" | "PENDING" | "AWAITING_HOST";
  paid: boolean;
  payment: any[];
  references: Reference[];
  isRecorded: boolean;
  seatsReferences: any[];
  user: User | null;
  rescheduled?: any;
}
declare class GetBookingsData {
  bookings: GetBookingsDataEntry[];
  recurringInfo: any[];
  nextCursor: number | null;
}
export declare class GetBookingsOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: GetBookingsData;
}
export {};
