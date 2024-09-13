"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class ApiAuthGuard extends (0, passport_1.AuthGuard)("api-auth") {
  constructor() {
    super();
  }
}
exports.ApiAuthGuard = ApiAuthGuard;
//# sourceMappingURL=api-auth.guard.js.map
