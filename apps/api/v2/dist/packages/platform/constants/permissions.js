"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSIONS_GROUPED_MAP =
  exports.PERMISSION_MAP =
  exports.PERMISSIONS =
  exports.PROFILE_WRITE =
  exports.PROFILE_READ =
  exports.APPS_WRITE =
  exports.APPS_READ =
  exports.SCHEDULE_WRITE =
  exports.SCHEDULE_READ =
  exports.BOOKING_WRITE =
  exports.BOOKING_READ =
  exports.EVENT_TYPE_WRITE =
  exports.EVENT_TYPE_READ =
    void 0;
exports.EVENT_TYPE_READ = 1;
exports.EVENT_TYPE_WRITE = 2;
exports.BOOKING_READ = 4;
exports.BOOKING_WRITE = 8;
exports.SCHEDULE_READ = 16;
exports.SCHEDULE_WRITE = 32;
exports.APPS_READ = 64;
exports.APPS_WRITE = 128;
exports.PROFILE_READ = 256;
exports.PROFILE_WRITE = 512;
exports.PERMISSIONS = [
  exports.EVENT_TYPE_READ,
  exports.EVENT_TYPE_WRITE,
  exports.BOOKING_READ,
  exports.BOOKING_WRITE,
  exports.SCHEDULE_READ,
  exports.SCHEDULE_WRITE,
  exports.APPS_READ,
  exports.APPS_WRITE,
  exports.PROFILE_READ,
  exports.PROFILE_WRITE,
];
exports.PERMISSION_MAP = {
  EVENT_TYPE_READ: exports.EVENT_TYPE_READ,
  EVENT_TYPE_WRITE: exports.EVENT_TYPE_WRITE,
  BOOKING_READ: exports.BOOKING_READ,
  BOOKING_WRITE: exports.BOOKING_WRITE,
  SCHEDULE_READ: exports.SCHEDULE_READ,
  SCHEDULE_WRITE: exports.SCHEDULE_WRITE,
  APPS_READ: exports.APPS_READ,
  APPS_WRITE: exports.APPS_WRITE,
  PROFILE_READ: exports.PROFILE_READ,
  PROFILE_WRITE: exports.PROFILE_WRITE,
};
exports.PERMISSIONS_GROUPED_MAP = {
  EVENT_TYPE: {
    read: exports.EVENT_TYPE_READ,
    write: exports.EVENT_TYPE_WRITE,
    key: "eventType",
    label: "Event Type",
  },
  BOOKING: {
    read: exports.BOOKING_READ,
    write: exports.BOOKING_WRITE,
    key: "booking",
    label: "Booking",
  },
  SCHEDULE: {
    read: exports.SCHEDULE_READ,
    write: exports.SCHEDULE_WRITE,
    key: "schedule",
    label: "Schedule",
  },
  APPS: {
    read: exports.APPS_READ,
    write: exports.APPS_WRITE,
    key: "apps",
    label: "Apps",
  },
  PROFILE: {
    read: exports.PROFILE_READ,
    write: exports.PROFILE_WRITE,
    key: "profile",
    label: "Profile",
  },
};
//# sourceMappingURL=permissions.js.map
