"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
const getEnv = (key, fallback) => {
  const value = process.env[key];
  if (!value) {
    if (fallback) {
      return fallback;
    }
    throw new Error(`Missing environment variable: ${key}.`);
  }
  return value;
};
exports.getEnv = getEnv;
//# sourceMappingURL=env.js.map
