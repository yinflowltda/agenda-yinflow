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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const api_key_module_1 = require("../api-key/api-key.module");
const api_auth_guard_1 = require("./guards/api-auth/api-auth.guard");
const next_auth_guard_1 = require("./guards/next-auth/next-auth.guard");
const api_auth_strategy_1 = require("./strategies/api-auth/api-auth.strategy");
const next_auth_strategy_1 = require("./strategies/next-auth/next-auth.strategy");
const deployments_module_1 = require("../deployments/deployments.module");
const memberships_module_1 = require("../memberships/memberships.module");
const oauth_flow_service_1 = require("../oauth-clients/services/oauth-flow.service");
const profiles_module_1 = require("../profiles/profiles.module");
const redis_module_1 = require("../redis/redis.module");
const tokens_module_1 = require("../tokens/tokens.module");
const users_module_1 = require("../users/users.module");
let AuthModule = class AuthModule {};
AuthModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        passport_1.PassportModule,
        redis_module_1.RedisModule,
        api_key_module_1.ApiKeyModule,
        users_module_1.UsersModule,
        memberships_module_1.MembershipsModule,
        tokens_module_1.TokensModule,
        deployments_module_1.DeploymentsModule,
        profiles_module_1.ProfilesModule,
      ],
      providers: [
        next_auth_guard_1.NextAuthGuard,
        next_auth_strategy_1.NextAuthStrategy,
        api_auth_guard_1.ApiAuthGuard,
        api_auth_strategy_1.ApiAuthStrategy,
        oauth_flow_service_1.OAuthFlowService,
      ],
      exports: [next_auth_guard_1.NextAuthGuard, api_auth_guard_1.ApiAuthGuard],
    }),
  ],
  AuthModule
);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
