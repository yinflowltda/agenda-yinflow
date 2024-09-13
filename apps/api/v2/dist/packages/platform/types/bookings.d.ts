export declare enum Status {
  upcoming = "upcoming",
  recurring = "recurring",
  past = "past",
  cancelled = "cancelled",
  unconfirmed = "unconfirmed",
}
type BookingStatus = `${Status}`;
declare class Filters {
  teamsIds?: number[];
  userIds?: number[];
  status: BookingStatus;
  eventTypeIds?: number[];
}
export declare class GetBookingsInput {
  filters: Filters;
  limit?: number;
  cursor?: number | null;
}
export declare class CancelBookingInput {
  id?: number;
  uid?: string;
  allRemainingBookings?: boolean;
  cancellationReason?: string;
  seatReferenceUid?: string;
}
export {};
