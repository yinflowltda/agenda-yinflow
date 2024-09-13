export declare class Calendar {
  credentialId: number;
  externalId: string;
}
export declare class CalendarBusyTimesInput {
  loggedInUsersTz: string;
  dateFrom?: string | null;
  dateTo?: string | null;
  calendarsToLoad: Calendar[];
}
