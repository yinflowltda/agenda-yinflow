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
exports.SchedulesModule_2024_04_15 = void 0;
const common_1 = require("@nestjs/common");
const schedules_controller_1 = require("./controllers/schedules.controller");
const schedules_repository_1 = require("./schedules.repository");
const schedules_service_1 = require("./services/schedules.service");
const prisma_module_1 = require("../../../modules/prisma/prisma.module");
const tokens_module_1 = require("../../../modules/tokens/tokens.module");
const users_module_1 = require("../../../modules/users/users.module");
let SchedulesModule_2024_04_15 = class SchedulesModule_2024_04_15 {};
SchedulesModule_2024_04_15 = __decorate(
  [
    (0, common_1.Module)({
      imports: [prisma_module_1.PrismaModule, users_module_1.UsersModule, tokens_module_1.TokensModule],
      providers: [
        schedules_repository_1.SchedulesRepository_2024_04_15,
        schedules_service_1.SchedulesService_2024_04_15,
      ],
      controllers: [schedules_controller_1.SchedulesController_2024_04_15],
      exports: [
        schedules_service_1.SchedulesService_2024_04_15,
        schedules_repository_1.SchedulesRepository_2024_04_15,
      ],
    }),
  ],
  SchedulesModule_2024_04_15
);
exports.SchedulesModule_2024_04_15 = SchedulesModule_2024_04_15;
//# sourceMappingURL=schedules.module.js.map
