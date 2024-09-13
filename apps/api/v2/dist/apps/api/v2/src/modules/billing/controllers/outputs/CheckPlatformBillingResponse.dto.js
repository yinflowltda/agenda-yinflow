"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPlatformBillingResponseDto = void 0;
const openapi = require("@nestjs/swagger");
class CheckPlatformBillingResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return { valid: { required: true, type: () => Boolean }, plan: { required: false, type: () => String } };
  }
}
exports.CheckPlatformBillingResponseDto = CheckPlatformBillingResponseDto;
//# sourceMappingURL=CheckPlatformBillingResponse.dto.js.map
