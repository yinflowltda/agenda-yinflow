"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = exports.logLevels = void 0;
const winston_1 = require("winston");
const formattedTimestamp = winston_1.format.timestamp({
  format: "YYYY-MM-DD HH:mm:ss.SSS",
});
const colorizer = winston_1.format.colorize({
  colors: {
    fatal: "red",
    error: "red",
    warn: "yellow",
    info: "blue",
    debug: "white",
    trace: "grey",
  },
});
const WINSTON_DEV_FORMAT = winston_1.format.combine(
  winston_1.format.errors({ stack: true }),
  colorizer,
  formattedTimestamp,
  winston_1.format.simple()
);
const WINSTON_PROD_FORMAT = winston_1.format.combine(
  winston_1.format.errors({ stack: true }),
  formattedTimestamp,
  winston_1.format.json()
);
exports.logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};
const loggerConfig = () => {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    levels: exports.logLevels,
    level: process.env.LOG_LEVEL ?? "info",
    format: isProduction ? WINSTON_PROD_FORMAT : WINSTON_DEV_FORMAT,
    transports: [new winston_1.transports.Console()],
    exceptionHandlers: [new winston_1.transports.Console()],
    rejectionHandlers: [new winston_1.transports.Console()],
    defaultMeta: {
      service: "cal-platform-api",
    },
  };
};
exports.loggerConfig = loggerConfig;
//# sourceMappingURL=logger.js.map
