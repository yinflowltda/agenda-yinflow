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
exports.CalendarsModule = void 0;
const common_1 = require("@nestjs/common");
const calendars_repository_1 = require("./calendars.repository");
const calendars_controller_1 = require("./controllers/calendars.controller");
const apple_calendar_service_1 = require("./services/apple-calendar.service");
const calendars_service_1 = require("./services/calendars.service");
const gcal_service_1 = require("./services/gcal.service");
const outlook_service_1 = require("./services/outlook.service");
const apps_repository_1 = require("../../modules/apps/apps.repository");
const credentials_repository_1 = require("../../modules/credentials/credentials.repository");
const prisma_module_1 = require("../../modules/prisma/prisma.module");
const selected_calendars_repository_1 = require("../../modules/selected-calendars/selected-calendars.repository");
const tokens_module_1 = require("../../modules/tokens/tokens.module");
const users_module_1 = require("../../modules/users/users.module");
let CalendarsModule = class CalendarsModule {};
CalendarsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [prisma_module_1.PrismaModule, users_module_1.UsersModule, tokens_module_1.TokensModule],
      providers: [
        credentials_repository_1.CredentialsRepository,
        calendars_service_1.CalendarsService,
        outlook_service_1.OutlookService,
        gcal_service_1.GoogleCalendarService,
        apple_calendar_service_1.AppleCalendarService,
        selected_calendars_repository_1.SelectedCalendarsRepository,
        apps_repository_1.AppsRepository,
        calendars_repository_1.CalendarsRepository,
      ],
      controllers: [calendars_controller_1.CalendarsController],
      exports: [calendars_service_1.CalendarsService],
    }),
  ],
  CalendarsModule
);
exports.CalendarsModule = CalendarsModule;
//# sourceMappingURL=calendars.module.js.map
