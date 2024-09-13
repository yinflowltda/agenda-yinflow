declare class EventTypeModel_2024_04_15 {
  id: number;
  eventName?: string | null;
}
declare class AvailabilityModel_2024_04_15 {
  id: number;
  userId?: number | null;
  scheduleId?: number | null;
  eventTypeId?: number | null;
  days: number[];
  startTime?: Date;
  endTime?: Date;
  date?: Date | null;
}
declare class ScheduleModel_2024_04_15 {
  id: number;
  userId: number;
  name: string;
  timeZone?: string | null;
  eventType?: EventTypeModel_2024_04_15[];
  availability?: AvailabilityModel_2024_04_15[];
}
export declare class UpdatedScheduleOutput_2024_04_15 {
  schedule: ScheduleModel_2024_04_15;
  isDefault: boolean;
  timeZone?: string;
  prevDefaultId?: number | null;
  currentDefaultId?: number | null;
}
export {};
