import { z } from "zod";

export declare const schemaScheduleResponse_2024_04_15: z.ZodObject<
  z.objectUtil.extendShape<
    z.objectUtil.extendShape<
      {},
      {
        id: z.ZodNumber;
        userId: z.ZodNumber;
        name: z.ZodString;
        timeZone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
      }
    >,
    {
      availability: z.ZodOptional<
        z.ZodEffects<
          z.ZodArray<
            z.ZodObject<
              {
                id: z.ZodNumber;
                days: z.ZodArray<z.ZodNumber, "many">;
                startTime: z.ZodDate;
                endTime: z.ZodDate;
              },
              "strip",
              z.ZodTypeAny,
              {
                id: number;
                startTime: Date;
                endTime: Date;
                days: number[];
              },
              {
                id: number;
                startTime: Date;
                endTime: Date;
                days: number[];
              }
            >,
            "many"
          >,
          {
            startTime: string;
            endTime: string;
            id: number;
            days: number[];
          }[],
          {
            id: number;
            startTime: Date;
            endTime: Date;
            days: number[];
          }[]
        >
      >;
    }
  >,
  "strip",
  z.ZodTypeAny,
  {
    name: string;
    id: number;
    userId: number;
    timeZone?: string | null | undefined;
    availability?:
      | {
          startTime: string;
          endTime: string;
          id: number;
          days: number[];
        }[]
      | undefined;
  },
  {
    name: string;
    id: number;
    userId: number;
    timeZone?: string | null | undefined;
    availability?:
      | {
          id: number;
          startTime: Date;
          endTime: Date;
          days: number[];
        }[]
      | undefined;
  }
>;
export type ScheduleResponse = z.infer<typeof schemaScheduleResponse_2024_04_15>;
declare class ScheduleItem {
  start: Date;
  end: Date;
}
declare class DateOverride {
  start: Date;
  end: Date;
}
export declare class UpdateScheduleInput_2024_04_15 {
  timeZone?: string;
  name?: string;
  isDefault?: boolean;
  schedule?: ScheduleItem[][];
  dateOverrides?: DateOverride[];
}
export {};
