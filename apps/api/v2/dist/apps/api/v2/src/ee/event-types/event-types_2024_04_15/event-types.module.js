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
exports.EventTypesModule_2024_04_15 = void 0;
const common_1 = require("@nestjs/common");
const event_types_controller_1 = require("./controllers/event-types.controller");
const event_types_repository_1 = require("./event-types.repository");
const event_types_service_1 = require("./services/event-types.service");
const memberships_module_1 = require("../../../modules/memberships/memberships.module");
const prisma_module_1 = require("../../../modules/prisma/prisma.module");
const selected_calendars_module_1 = require("../../../modules/selected-calendars/selected-calendars.module");
const tokens_module_1 = require("../../../modules/tokens/tokens.module");
const users_module_1 = require("../../../modules/users/users.module");
let EventTypesModule_2024_04_15 = class EventTypesModule_2024_04_15 {};
EventTypesModule_2024_04_15 = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        memberships_module_1.MembershipsModule,
        tokens_module_1.TokensModule,
        users_module_1.UsersModule,
        selected_calendars_module_1.SelectedCalendarsModule,
      ],
      providers: [
        event_types_repository_1.EventTypesRepository_2024_04_15,
        event_types_service_1.EventTypesService_2024_04_15,
      ],
      controllers: [event_types_controller_1.EventTypesController_2024_04_15],
      exports: [
        event_types_service_1.EventTypesService_2024_04_15,
        event_types_repository_1.EventTypesRepository_2024_04_15,
      ],
    }),
  ],
  EventTypesModule_2024_04_15
);
exports.EventTypesModule_2024_04_15 = EventTypesModule_2024_04_15;
//# sourceMappingURL=event-types.module.js.map
