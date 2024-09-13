import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class Integration {
  appData?: object | null;
  dirName?: string;
  __template?: string;
  name: string;
  description: string;
  installed?: boolean;
  type: string;
  title?: string;
  variant: string;
  category?: string;
  categories: string[];
  logo: string;
  publisher: string;
  slug: string;
  url: string;
  email: string;
  locationOption: object | null;
}
declare class Primary {
  externalId: string;
  integration?: string;
  name?: string;
  primary: boolean | null;
  readOnly: boolean;
  email?: string;
  isSelected: boolean;
  credentialId: number;
}
export declare class Calendar {
  externalId: string;
  integration?: string;
  name?: string;
  primary?: boolean | null;
  readOnly: boolean;
  email?: string;
  isSelected: boolean;
  credentialId: number;
}
export declare class ConnectedCalendar {
  integration: Integration;
  credentialId: number;
  primary?: Primary;
  calendars?: Calendar[];
}
declare class DestinationCalendar {
  id: number;
  integration: string;
  externalId: string;
  primaryEmail: string | null;
  userId: number | null;
  eventTypeId: number | null;
  credentialId: number | null;
  name?: string | null;
  primary?: boolean;
  readOnly?: boolean;
  email?: string;
  integrationTitle?: string;
}
declare class ConnectedCalendarsData {
  connectedCalendars: ConnectedCalendar[];
  destinationCalendar: DestinationCalendar;
}
export declare class ConnectedCalendarsOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: ConnectedCalendarsData;
}
export {};
