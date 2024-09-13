import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class Location {
  type: string;
}
declare class Source {
  id: string;
  type: string;
  label: string;
}
declare class OptionInput {
  type: string;
  required?: boolean;
  placeholder?: string;
}
declare class BookingField {
  name: string;
  type: string;
  defaultLabel?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  getOptionsAt?: string;
  optionsInputs?: {
    [key: string]: OptionInput;
  };
  hideWhenJustOneOption?: boolean;
  editable?: string;
  sources?: Source[];
  disableOnPrefill?: boolean;
}
declare class Organization {
  id: number;
  slug?: string | null;
  name: string;
  metadata: Record<string, any>;
}
declare class Profile {
  username: string | null;
  id: number | null;
  userId?: number;
  uid?: string;
  name?: string;
  organizationId: number | null;
  organization?: Organization | null;
  upId: string;
  image?: string;
  brandColor?: string;
  darkBrandColor?: string;
  theme?: string;
  bookerLayouts?: any;
}
declare class Owner {
  id: number;
  avatarUrl?: string | null;
  username: string | null;
  name: string | null;
  weekStart: string;
  brandColor?: string | null;
  darkBrandColor?: string | null;
  theme?: string | null;
  metadata: any;
  defaultScheduleId?: number | null;
  nonProfileUsername: string | null;
  profile: Profile;
}
declare class User {
  username: string | null;
  name: string | null;
  weekStart: string;
  organizationId?: number;
  avatarUrl?: string | null;
  profile: Profile;
  bookerUrl: string;
}
declare class Schedule {
  id: number;
  timeZone: string | null;
}
declare class PublicEventTypeOutput {
  id: number;
  title: string;
  description: string;
  eventName?: string | null;
  slug: string;
  isInstantEvent: boolean;
  aiPhoneCallConfig?: any;
  schedulingType?: any;
  length: number;
  locations: Location[];
  customInputs: any[];
  disableGuests: boolean;
  metadata: object | null;
  lockTimeZoneToggleOnBookingPage: boolean;
  requiresConfirmation: boolean;
  requiresBookerEmailVerification: boolean;
  recurringEvent?: any;
  price: number;
  currency: string;
  seatsPerTimeSlot?: number | null;
  seatsShowAvailabilityCount: boolean | null;
  bookingFields: BookingField[];
  team?: any;
  successRedirectUrl?: string | null;
  workflows: any[];
  hosts: any[];
  owner: Owner | null;
  schedule: Schedule | null;
  hidden: boolean;
  assignAllTeamMembers: boolean;
  bookerLayouts?: any;
  users: User[];
  entity: object;
  isDynamic: boolean;
}
export declare class GetEventTypePublicOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: PublicEventTypeOutput | null;
}
export {};
