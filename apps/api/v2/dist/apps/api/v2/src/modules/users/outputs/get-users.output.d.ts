export declare class GetUserOutput {
  id: number;
  username: string | null;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  bio: string | null;
  avatarUrl: string | null;
  timeZone: string;
  weekStart: string;
  appTheme: string | null;
  theme: string | null;
  defaultScheduleId: number | null;
  locale: string | null;
  timeFormat: number | null;
  hideBranding: boolean;
  brandColor: string | null;
  darkBrandColor: string | null;
  allowDynamicBooking: boolean | null;
  createdDate: Date;
  verified: boolean | null;
  invitedTo: number | null;
}
export declare class GetUsersOutput {
  users: GetUserOutput[];
}
