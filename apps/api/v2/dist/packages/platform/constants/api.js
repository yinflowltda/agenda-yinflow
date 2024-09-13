"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAL_API_VERSION_HEADER =
  exports.API_VERSIONS =
  exports.VERSION_2024_04_15 =
  exports.VERSION_2024_06_11 =
  exports.VERSION_2024_06_14 =
  exports.HTTP_CODE_TOKEN_EXPIRED =
  exports.X_CAL_CLIENT_ID =
  exports.X_CAL_SECRET_KEY =
  exports.API_ERROR_CODES =
  exports.DUPLICATE_RESOURCE =
  exports.RESOURCE_NOT_FOUND =
  exports.INVALID_API_KEY =
  exports.MISSING_PARAMETER =
  exports.INVALID_PARAMETER =
  exports.INTERNAL_SERVER_ERROR =
  exports.INVALID_ACCESS_TOKEN =
  exports.ACCESS_TOKEN_EXPIRED =
  exports.UNPROCESSABLE_ENTITY =
  exports.METHOD_NOT_ALLOWED =
  exports.NOT_FOUND =
  exports.FORBIDDEN =
  exports.UNAUTHORIZED =
  exports.BAD_REQUEST =
  exports.REDIRECT_STATUS =
  exports.ERROR_STATUS =
  exports.SUCCESS_STATUS =
  exports.V2_ENDPOINTS =
  exports.BASE_URL =
    void 0;
exports.BASE_URL = "http://localhost:5555";
exports.V2_ENDPOINTS = {
  me: "me",
  availability: "schedules",
  eventTypes: "event-types",
  bookings: "bookings",
};
exports.SUCCESS_STATUS = "success";
exports.ERROR_STATUS = "error";
exports.REDIRECT_STATUS = "redirect";
exports.BAD_REQUEST = "BAD_REQUEST";
exports.UNAUTHORIZED = "UNAUTHORIZED";
exports.FORBIDDEN = "FORBIDDEN";
exports.NOT_FOUND = "NOT_FOUND";
exports.METHOD_NOT_ALLOWED = "METHOD_NOT_ALLOWED";
exports.UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY";
exports.ACCESS_TOKEN_EXPIRED = "ACCESS_TOKEN_IS_EXPIRED";
exports.INVALID_ACCESS_TOKEN = "Invalid Access Token.";
exports.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR";
exports.INVALID_PARAMETER = "INVALID_PARAMETER";
exports.MISSING_PARAMETER = "MISSING_PARAMETER";
exports.INVALID_API_KEY = "INVALID_API_KEY";
exports.RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND";
exports.DUPLICATE_RESOURCE = "DUPLICATE_RESOURCE";
exports.API_ERROR_CODES = [
  exports.BAD_REQUEST,
  exports.UNAUTHORIZED,
  exports.FORBIDDEN,
  exports.NOT_FOUND,
  exports.METHOD_NOT_ALLOWED,
  exports.UNPROCESSABLE_ENTITY,
  exports.INTERNAL_SERVER_ERROR,
  exports.INVALID_PARAMETER,
  exports.MISSING_PARAMETER,
  exports.INVALID_API_KEY,
  exports.RESOURCE_NOT_FOUND,
  exports.DUPLICATE_RESOURCE,
];
exports.X_CAL_SECRET_KEY = "x-cal-secret-key";
exports.X_CAL_CLIENT_ID = "x-cal-client-id";
exports.HTTP_CODE_TOKEN_EXPIRED = 498;
exports.VERSION_2024_06_14 = "2024-06-14";
exports.VERSION_2024_06_11 = "2024-06-11";
exports.VERSION_2024_04_15 = "2024-04-15";
exports.API_VERSIONS = [exports.VERSION_2024_06_14, exports.VERSION_2024_06_11, exports.VERSION_2024_04_15];
exports.CAL_API_VERSION_HEADER = "cal-api-version";
//# sourceMappingURL=api.js.map
