"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenExpiredException = void 0;
const common_1 = require("@nestjs/common");
const platform_constants_1 = require("@calcom/platform-constants");
class TokenExpiredException extends common_1.HttpException {
  constructor() {
    super(platform_constants_1.ACCESS_TOKEN_EXPIRED, platform_constants_1.HTTP_CODE_TOKEN_EXPIRED);
  }
}
exports.TokenExpiredException = TokenExpiredException;
//# sourceMappingURL=token-expired.exception.js.map
