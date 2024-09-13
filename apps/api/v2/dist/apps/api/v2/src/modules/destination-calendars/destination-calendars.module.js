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
exports.DestinationCalendarsModule = void 0;
const common_1 = require("@nestjs/common");
const calendars_repository_1 = require("../../ee/calendars/calendars.repository");
const calendars_service_1 = require("../../ee/calendars/services/calendars.service");
const apps_repository_1 = require("../apps/apps.repository");
const credentials_repository_1 = require("../credentials/credentials.repository");
const destination_calendars_controller_1 = require("./controllers/destination-calendars.controller");
const destination_calendars_repository_1 = require("./destination-calendars.repository");
const destination_calendars_service_1 = require("./services/destination-calendars.service");
const prisma_module_1 = require("../prisma/prisma.module");
const users_repository_1 = require("../users/users.repository");
let DestinationCalendarsModule = class DestinationCalendarsModule {};
DestinationCalendarsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [prisma_module_1.PrismaModule],
      providers: [
        calendars_repository_1.CalendarsRepository,
        calendars_service_1.CalendarsService,
        destination_calendars_service_1.DestinationCalendarsService,
        destination_calendars_repository_1.DestinationCalendarsRepository,
        users_repository_1.UsersRepository,
        credentials_repository_1.CredentialsRepository,
        apps_repository_1.AppsRepository,
      ],
      controllers: [destination_calendars_controller_1.DestinationCalendarsController],
      exports: [destination_calendars_repository_1.DestinationCalendarsRepository],
    }),
  ],
  DestinationCalendarsModule
);
exports.DestinationCalendarsModule = DestinationCalendarsModule;
//# sourceMappingURL=destination-calendars.module.js.map
