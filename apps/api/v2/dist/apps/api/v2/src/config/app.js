"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
const loadConfig = () => {
  return {
    env: {
      type: (0, env_1.getEnv)("NODE_ENV", "development"),
    },
    api: {
      port: Number((0, env_1.getEnv)("API_PORT", "5555")),
      path: (0, env_1.getEnv)("API_URL", "http://localhost"),
      url: `${(0, env_1.getEnv)("API_URL", "http://localhost")}${
        process.env.API_PORT && (0, env_1.getEnv)("NODE_ENV", "development") === "development"
          ? `:${Number((0, env_1.getEnv)("API_PORT", "5555"))}`
          : ""
      }/v2`,
      keyPrefix: (0, env_1.getEnv)("API_KEY_PREFIX", "cal_"),
      licenseKey: (0, env_1.getEnv)("CALCOM_LICENSE_KEY", ""),
      licenseKeyUrl: (0, env_1.getEnv)("GET_LICENSE_KEY_URL", "https://console.cal.com/api/license"),
    },
    db: {
      readUrl: (0, env_1.getEnv)("DATABASE_READ_URL"),
      writeUrl: (0, env_1.getEnv)("DATABASE_WRITE_URL"),
      redisUrl: (0, env_1.getEnv)("REDIS_URL"),
    },
    next: {
      authSecret: (0, env_1.getEnv)("NEXTAUTH_SECRET"),
    },
    stripe: {
      apiKey: (0, env_1.getEnv)("STRIPE_API_KEY"),
      webhookSecret: (0, env_1.getEnv)("STRIPE_WEBHOOK_SECRET"),
    },
    app: {
      baseUrl: (0, env_1.getEnv)("WEB_APP_URL", "https://app.cal.com"),
    },
    e2e: (0, env_1.getEnv)("IS_E2E", false),
  };
};
exports.default = loadConfig;
//# sourceMappingURL=app.js.map
