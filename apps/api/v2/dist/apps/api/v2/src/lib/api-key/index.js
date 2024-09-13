"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripApiKey = exports.isApiKey = exports.hashAPIKey = void 0;
const crypto_1 = require("crypto");
const hashAPIKey = (apiKey) => (0, crypto_1.createHash)("sha256").update(apiKey).digest("hex");
exports.hashAPIKey = hashAPIKey;
const isApiKey = (authString, prefix) => authString?.startsWith(prefix ?? "cal_");
exports.isApiKey = isApiKey;
const stripApiKey = (apiKey, prefix) => apiKey.replace(prefix ?? "cal_", "");
exports.stripApiKey = stripApiKey;
//# sourceMappingURL=index.js.map
