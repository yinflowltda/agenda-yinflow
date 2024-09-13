export declare class MeOrgOutput {
  isPlatform: boolean;
  id: number;
}
export declare class MeOutput {
  id: number;
  username: string;
  email: string;
  timeFormat: number;
  defaultScheduleId: number | null;
  weekStart: string;
  timeZone: string;
  organizationId: number | null;
  organization?: MeOrgOutput;
}
