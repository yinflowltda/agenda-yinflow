export declare const BASE_URL = "http://localhost:5555";
export declare const V2_ENDPOINTS: {
  me: string;
  availability: string;
  eventTypes: string;
  bookings: string;
};
export declare const SUCCESS_STATUS = "success";
export declare const ERROR_STATUS = "error";
export declare const REDIRECT_STATUS = "redirect";
export declare const BAD_REQUEST = "BAD_REQUEST";
export declare const UNAUTHORIZED = "UNAUTHORIZED";
export declare const FORBIDDEN = "FORBIDDEN";
export declare const NOT_FOUND = "NOT_FOUND";
export declare const METHOD_NOT_ALLOWED = "METHOD_NOT_ALLOWED";
export declare const UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY";
export declare const ACCESS_TOKEN_EXPIRED = "ACCESS_TOKEN_IS_EXPIRED";
export declare const INVALID_ACCESS_TOKEN = "Invalid Access Token.";
export declare const INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR";
export declare const INVALID_PARAMETER = "INVALID_PARAMETER";
export declare const MISSING_PARAMETER = "MISSING_PARAMETER";
export declare const INVALID_API_KEY = "INVALID_API_KEY";
export declare const RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND";
export declare const DUPLICATE_RESOURCE = "DUPLICATE_RESOURCE";
export declare const API_ERROR_CODES: readonly [
  "BAD_REQUEST",
  "UNAUTHORIZED",
  "FORBIDDEN",
  "NOT_FOUND",
  "METHOD_NOT_ALLOWED",
  "UNPROCESSABLE_ENTITY",
  "INTERNAL_SERVER_ERROR",
  "INVALID_PARAMETER",
  "MISSING_PARAMETER",
  "INVALID_API_KEY",
  "RESOURCE_NOT_FOUND",
  "DUPLICATE_RESOURCE"
];
export declare const X_CAL_SECRET_KEY = "x-cal-secret-key";
export declare const X_CAL_CLIENT_ID = "x-cal-client-id";
export declare const HTTP_CODE_TOKEN_EXPIRED = 498;
export declare const VERSION_2024_06_14 = "2024-06-14";
export declare const VERSION_2024_06_11 = "2024-06-11";
export declare const VERSION_2024_04_15 = "2024-04-15";
export declare const API_VERSIONS: readonly ["2024-06-14", "2024-06-11", "2024-04-15"];
export type API_VERSIONS_ENUM = (typeof API_VERSIONS)[number];
export type API_VERSIONS_TYPE = typeof API_VERSIONS;
export declare const CAL_API_VERSION_HEADER = "cal-api-version";
