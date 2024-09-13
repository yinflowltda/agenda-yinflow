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
exports.SlotsModule = void 0;
const common_1 = require("@nestjs/common");
const event_types_module_1 = require("../../ee/event-types/event-types_2024_04_15/event-types.module");
const prisma_module_1 = require("../prisma/prisma.module");
const slots_controller_1 = require("./controllers/slots.controller");
const slots_service_1 = require("./services/slots.service");
const slots_repository_1 = require("./slots.repository");
let SlotsModule = class SlotsModule {};
SlotsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [prisma_module_1.PrismaModule, event_types_module_1.EventTypesModule_2024_04_15],
      providers: [slots_repository_1.SlotsRepository, slots_service_1.SlotsService],
      controllers: [slots_controller_1.SlotsController],
      exports: [slots_service_1.SlotsService],
    }),
  ],
  SlotsModule
);
exports.SlotsModule = SlotsModule;
//# sourceMappingURL=slots.module.js.map
