import type { PLATFORM_PERMISSION } from "@calcom/platform-types";

export declare const hasPermission: (userPermissions: number, permission: PLATFORM_PERMISSION) => boolean;
export declare const hasPermissions: (userPermissions: number, permissions: PLATFORM_PERMISSION[]) => boolean;
export declare const hasEventTypeReadPermission: (userPermissions: number) => boolean;
export declare const hasEventTypeWritePermission: (userPermissions: number) => boolean;
export declare const hasBookingReadPermission: (userPermissions: number) => boolean;
export declare const hasBookingWritePermission: (userPermissions: number) => boolean;
export declare const hasScheduleReadPermission: (userPermissions: number) => boolean;
export declare const hasScheduleWritePermission: (userPermissions: number) => boolean;
export declare const hasAppsReadPermission: (userPermissions: number) => boolean;
export declare const hasAppsWritePermission: (userPermissions: number) => boolean;
export declare const hasProfileReadPermission: (userPermissions: number) => boolean;
export declare const hasProfileWritePermission: (userPermissions: number) => boolean;
export declare const listPermissions: (userPermissions: number) => PLATFORM_PERMISSION[];
