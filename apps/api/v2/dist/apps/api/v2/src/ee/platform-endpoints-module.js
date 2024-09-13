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
exports.PlatformEndpointsModule = void 0;
const common_1 = require("@nestjs/common");
const bookings_module_1 = require("./bookings/bookings.module");
const calendars_module_1 = require("./calendars/calendars.module");
const event_types_module_1 = require("./event-types/event-types_2024_04_15/event-types.module");
const event_types_module_2 = require("./event-types/event-types_2024_06_14/event-types.module");
const gcal_module_1 = require("./gcal/gcal.module");
const me_module_1 = require("./me/me.module");
const provider_module_1 = require("./provider/provider.module");
const schedules_module_1 = require("./schedules/schedules_2024_04_15/schedules.module");
const schedules_module_2 = require("./schedules/schedules_2024_06_11/schedules.module");
const slots_module_1 = require("../modules/slots/slots.module");
let PlatformEndpointsModule = class PlatformEndpointsModule {
  configure(_consumer) {}
};
PlatformEndpointsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        gcal_module_1.GcalModule,
        provider_module_1.ProviderModule,
        schedules_module_1.SchedulesModule_2024_04_15,
        schedules_module_2.SchedulesModule_2024_06_11,
        me_module_1.MeModule,
        event_types_module_1.EventTypesModule_2024_04_15,
        event_types_module_2.EventTypesModule_2024_06_14,
        calendars_module_1.CalendarsModule,
        bookings_module_1.BookingsModule,
        slots_module_1.SlotsModule,
      ],
    }),
  ],
  PlatformEndpointsModule
);
exports.PlatformEndpointsModule = PlatformEndpointsModule;
//# sourceMappingURL=platform-endpoints-module.js.map
