import { z } from "zod";

export declare class CreateOAuthClientInput {
  logo?: string;
  name: string;
  redirectUris: string[];
  permissions: number;
  bookingRedirectUri?: string;
  bookingCancelRedirectUri?: string;
  bookingRescheduleRedirectUri?: string;
  areEmailsEnabled?: boolean;
}
export declare class DeleteOAuthClientInput {
  id: string;
}
export declare const userSchemaResponse: z.ZodObject<
  {
    id: z.ZodNumber;
    email: z.ZodString;
    timeFormat: z.ZodDefault<z.ZodNumber>;
    defaultScheduleId: z.ZodNullable<z.ZodNumber>;
    weekStart: z.ZodString;
    timeZone: z.ZodDefault<z.ZodString>;
    username: z.ZodString;
    organizationId: z.ZodNullable<z.ZodNumber>;
    organization: z.ZodOptional<
      z.ZodObject<
        {
          isPlatform: z.ZodBoolean;
          id: z.ZodNumber;
        },
        "strip",
        z.ZodTypeAny,
        {
          id: number;
          isPlatform: boolean;
        },
        {
          id: number;
          isPlatform: boolean;
        }
      >
    >;
  },
  "strip",
  z.ZodTypeAny,
  {
    id: number;
    email: string;
    timeFormat: number;
    defaultScheduleId: number | null;
    weekStart: string;
    timeZone: string;
    username: string;
    organizationId: number | null;
    organization?:
      | {
          id: number;
          isPlatform: boolean;
        }
      | undefined;
  },
  {
    id: number;
    email: string;
    defaultScheduleId: number | null;
    weekStart: string;
    username: string;
    organizationId: number | null;
    timeFormat?: number | undefined;
    timeZone?: string | undefined;
    organization?:
      | {
          id: number;
          isPlatform: boolean;
        }
      | undefined;
  }
>;
export type UserResponse = z.infer<typeof userSchemaResponse>;
