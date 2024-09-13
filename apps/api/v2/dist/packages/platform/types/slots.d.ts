export declare class GetAvailableSlotsInput {
  startTime: string;
  endTime: string;
  eventTypeId?: number;
  eventTypeSlug?: string;
  usernameList?: string[];
  debug?: boolean;
  duration?: number;
  rescheduleUid?: string | null;
  timeZone?: string;
  orgSlug?: string;
}
export declare class RemoveSelectedSlotInput {
  uid?: string;
}
export declare class ReserveSlotInput {
  eventTypeId: number;
  slotUtcStartDate: string;
  slotUtcEndDate: string;
  bookingUid?: string;
}
