declare class AvailabilityModel {
  id: number;
  userId?: number | null;
  eventTypeId?: number | null;
  days: number[];
  startTime: Date;
  endTime: Date;
  date?: Date | null;
  scheduleId?: number | null;
}
declare class WorkingHours {
  days: number[];
  startTime: number;
  endTime: number;
  userId?: number | null;
}
declare class TimeRange {
  userId?: number | null;
  start: Date;
  end: Date;
}
export declare class ScheduleOutput {
  id: number;
  name: string;
  isManaged: boolean;
  workingHours: WorkingHours[];
  schedule: AvailabilityModel[];
  availability: TimeRange[][];
  timeZone: string;
  dateOverrides: unknown[];
  isDefault: boolean;
  isLastSchedule: boolean;
  readOnly: boolean;
}
export {};
