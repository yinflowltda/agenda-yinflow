"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextAuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("next-auth/jwt");
const types_1 = require("../../../../lib/passport/strategies/types");
const users_repository_1 = require("../../../users/users.repository");
let NextAuthStrategy = class NextAuthStrategy extends (0, passport_1.PassportStrategy)(
  types_1.NextAuthPassportStrategy,
  "next-auth"
) {
  constructor(userRepository, config) {
    super();
    this.userRepository = userRepository;
    this.config = config;
  }
  async authenticate(req) {
    try {
      const nextAuthSecret = this.config.get("next.authSecret", { infer: true });
      const payload = await (0, jwt_1.getToken)({ req, secret: nextAuthSecret });
      if (!payload) {
        throw new common_1.UnauthorizedException("Authentication token is missing or invalid.");
      }
      if (!payload.email) {
        throw new common_1.UnauthorizedException("Email not found in the authentication token.");
      }
      const user = await this.userRepository.findByEmailWithProfile(payload.email);
      if (!user) {
        throw new common_1.UnauthorizedException(
          "User associated with the authentication token email not found."
        );
      }
      return this.success(user);
    } catch (error) {
      if (error instanceof Error) return this.error(error);
      return this.error(
        new common_1.InternalServerErrorException("An error occurred while authenticating the request")
      );
    }
  }
};
NextAuthStrategy = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository, config_1.ConfigService]),
  ],
  NextAuthStrategy
);
exports.NextAuthStrategy = NextAuthStrategy;
//# sourceMappingURL=next-auth.strategy.js.map
