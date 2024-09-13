import { CreateBookingInput } from "src/ee/bookings/inputs/create-booking.input";

import type { AppsStatus } from "@calcom/platform-libraries";

export declare class CreateRecurringBookingInput extends CreateBookingInput {
  noEmail?: boolean;
  recurringCount?: number;
  appsStatus?: AppsStatus[] | undefined;
  allRecurringDates?: Record<string, string>[];
  currentRecurringIndex?: number;
}
