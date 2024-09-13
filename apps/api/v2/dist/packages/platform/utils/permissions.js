"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPermissions =
  exports.hasProfileWritePermission =
  exports.hasProfileReadPermission =
  exports.hasAppsWritePermission =
  exports.hasAppsReadPermission =
  exports.hasScheduleWritePermission =
  exports.hasScheduleReadPermission =
  exports.hasBookingWritePermission =
  exports.hasBookingReadPermission =
  exports.hasEventTypeWritePermission =
  exports.hasEventTypeReadPermission =
  exports.hasPermissions =
  exports.hasPermission =
    void 0;
const platform_constants_1 = require("@calcom/platform-constants");
const hasPermission = (userPermissions, permission) => {
  return (userPermissions & permission) === permission;
};
exports.hasPermission = hasPermission;
const hasPermissions = (userPermissions, permissions) => {
  return permissions.every((permission) => (0, exports.hasPermission)(userPermissions, permission));
};
exports.hasPermissions = hasPermissions;
const hasEventTypeReadPermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.EVENT_TYPE_READ);
};
exports.hasEventTypeReadPermission = hasEventTypeReadPermission;
const hasEventTypeWritePermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.EVENT_TYPE_WRITE);
};
exports.hasEventTypeWritePermission = hasEventTypeWritePermission;
const hasBookingReadPermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.BOOKING_READ);
};
exports.hasBookingReadPermission = hasBookingReadPermission;
const hasBookingWritePermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.BOOKING_WRITE);
};
exports.hasBookingWritePermission = hasBookingWritePermission;
const hasScheduleReadPermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.SCHEDULE_READ);
};
exports.hasScheduleReadPermission = hasScheduleReadPermission;
const hasScheduleWritePermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.SCHEDULE_WRITE);
};
exports.hasScheduleWritePermission = hasScheduleWritePermission;
const hasAppsReadPermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.APPS_READ);
};
exports.hasAppsReadPermission = hasAppsReadPermission;
const hasAppsWritePermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.APPS_WRITE);
};
exports.hasAppsWritePermission = hasAppsWritePermission;
const hasProfileReadPermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.PROFILE_READ);
};
exports.hasProfileReadPermission = hasProfileReadPermission;
const hasProfileWritePermission = (userPermissions) => {
  return (0, exports.hasPermission)(userPermissions, platform_constants_1.PROFILE_WRITE);
};
exports.hasProfileWritePermission = hasProfileWritePermission;
const listPermissions = (userPermissions) => {
  return platform_constants_1.PERMISSIONS.reduce((acc, permission) => {
    if ((0, exports.hasPermission)(userPermissions, permission)) {
      return [...acc, permission];
    }
    return acc;
  }, []);
};
exports.listPermissions = listPermissions;
//# sourceMappingURL=permissions.js.map
