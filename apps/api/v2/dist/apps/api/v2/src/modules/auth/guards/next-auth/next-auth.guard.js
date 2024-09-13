"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class NextAuthGuard extends (0, passport_1.AuthGuard)("next-auth") {
  constructor() {
    super();
  }
}
exports.NextAuthGuard = NextAuthGuard;
//# sourceMappingURL=next-auth.guard.js.map
