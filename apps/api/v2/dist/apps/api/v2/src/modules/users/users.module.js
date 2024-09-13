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
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const event_types_module_1 = require("../../ee/event-types/event-types_2024_06_14/event-types.module");
const prisma_module_1 = require("../prisma/prisma.module");
const tokens_module_1 = require("../tokens/tokens.module");
const users_service_1 = require("./services/users.service");
const users_repository_1 = require("./users.repository");
let UsersModule = class UsersModule {};
UsersModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        event_types_module_1.EventTypesModule_2024_06_14,
        tokens_module_1.TokensModule,
      ],
      providers: [users_repository_1.UsersRepository, users_service_1.UsersService],
      exports: [users_repository_1.UsersRepository, users_service_1.UsersService],
    }),
  ],
  UsersModule
);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map
