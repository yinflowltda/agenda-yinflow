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
exports.JwtModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const env_1 = require("../../env");
const jwt_service_1 = require("./jwt.service");
let JwtModule = class JwtModule {};
JwtModule = __decorate(
  [
    (0, common_1.Global)(),
    (0, common_1.Module)({
      imports: [jwt_1.JwtModule.register({ secret: (0, env_1.getEnv)("JWT_SECRET") })],
      providers: [jwt_service_1.JwtService],
      exports: [jwt_service_1.JwtService],
    }),
  ],
  JwtModule
);
exports.JwtModule = JwtModule;
//# sourceMappingURL=jwt.module.js.map
