import type { LoggerOptions } from "winston";

export declare const logLevels: {
  readonly fatal: 0;
  readonly error: 1;
  readonly warn: 2;
  readonly info: 3;
  readonly debug: 4;
  readonly trace: 5;
};
export declare const loggerConfig: () => LoggerOptions;
