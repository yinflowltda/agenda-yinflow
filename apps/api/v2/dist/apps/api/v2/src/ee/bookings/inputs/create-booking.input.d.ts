declare class Location {
  optionValue: string;
  value: string;
}
declare class Response {
  name: string;
  email: string;
  guests: string[];
  location?: Location;
  notes?: string;
}
export declare class CreateBookingInput {
  end?: string;
  start: string;
  eventTypeId: number;
  eventTypeSlug?: string;
  rescheduleUid?: string;
  recurringEventId?: string;
  timeZone: string;
  user?: string[];
  language: string;
  bookingUid?: string;
  metadata: Record<string, string>;
  hasHashedBookingLink?: boolean;
  hashedLink: string | null;
  seatReferenceUid?: string;
  responses: Response;
  orgSlug?: string;
  locationUrl?: string;
}
export {};
