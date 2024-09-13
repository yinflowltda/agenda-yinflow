import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class Metadata {
  videoCallUrl: string;
}
declare class Location {
  optionValue: string;
  value: string;
}
declare class Response {
  name: string;
  email: string;
  notes: string;
  guests: string[];
  location: Location;
}
declare class User {
  id: number;
  name: string | null;
  email: string;
  username: string | null;
  timeZone: string;
}
declare class Attendee {
  name: string;
  email: string;
  timeZone: string;
}
declare class EventType {
  eventName: string | null;
  slug: string;
  timeZone: string | null;
}
declare class GetBookingData {
  title: string;
  id: number;
  uid: string;
  description: string | null;
  customInputs: any;
  smsReminderNumber: string | null;
  recurringEventId: string | null;
  startTime: Date;
  endTime: Date;
  location: string | null;
  status: string;
  metadata: Metadata | any;
  cancellationReason: string | null;
  responses: Response | any;
  rejectionReason: string | null;
  userPrimaryEmail: string | null;
  user: User | null;
  attendees: Attendee[];
  eventTypeId: number | null;
  eventType: EventType | null;
}
export declare class GetBookingOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: GetBookingData;
}
export {};
