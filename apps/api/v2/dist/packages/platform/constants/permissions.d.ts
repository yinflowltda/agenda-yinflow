export declare const EVENT_TYPE_READ = 1;
export declare const EVENT_TYPE_WRITE = 2;
export declare const BOOKING_READ = 4;
export declare const BOOKING_WRITE = 8;
export declare const SCHEDULE_READ = 16;
export declare const SCHEDULE_WRITE = 32;
export declare const APPS_READ = 64;
export declare const APPS_WRITE = 128;
export declare const PROFILE_READ = 256;
export declare const PROFILE_WRITE = 512;
export declare const PERMISSIONS: readonly [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
export declare const PERMISSION_MAP: {
  readonly EVENT_TYPE_READ: 1;
  readonly EVENT_TYPE_WRITE: 2;
  readonly BOOKING_READ: 4;
  readonly BOOKING_WRITE: 8;
  readonly SCHEDULE_READ: 16;
  readonly SCHEDULE_WRITE: 32;
  readonly APPS_READ: 64;
  readonly APPS_WRITE: 128;
  readonly PROFILE_READ: 256;
  readonly PROFILE_WRITE: 512;
};
export declare const PERMISSIONS_GROUPED_MAP: {
  readonly EVENT_TYPE: {
    readonly read: 1;
    readonly write: 2;
    readonly key: "eventType";
    readonly label: "Event Type";
  };
  readonly BOOKING: {
    readonly read: 4;
    readonly write: 8;
    readonly key: "booking";
    readonly label: "Booking";
  };
  readonly SCHEDULE: {
    readonly read: 16;
    readonly write: 32;
    readonly key: "schedule";
    readonly label: "Schedule";
  };
  readonly APPS: {
    readonly read: 64;
    readonly write: 128;
    readonly key: "apps";
    readonly label: "Apps";
  };
  readonly PROFILE: {
    readonly read: 256;
    readonly write: 512;
    readonly key: "profile";
    readonly label: "Profile";
  };
};
