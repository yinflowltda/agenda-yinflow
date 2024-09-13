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
exports.GcalModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const calendars_repository_1 = require("../calendars/calendars.repository");
const calendars_service_1 = require("../calendars/services/calendars.service");
const gcal_controller_1 = require("./gcal.controller");
const apps_repository_1 = require("../../modules/apps/apps.repository");
const gcal_service_1 = require("../../modules/apps/services/gcal.service");
const credentials_repository_1 = require("../../modules/credentials/credentials.repository");
const oauth_client_module_1 = require("../../modules/oauth-clients/oauth-client.module");
const prisma_module_1 = require("../../modules/prisma/prisma.module");
const selected_calendars_repository_1 = require("../../modules/selected-calendars/selected-calendars.repository");
const tokens_module_1 = require("../../modules/tokens/tokens.module");
const users_repository_1 = require("../../modules/users/users.repository");
let GcalModule = class GcalModule {};
GcalModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        tokens_module_1.TokensModule,
        oauth_client_module_1.OAuthClientModule,
      ],
      providers: [
        apps_repository_1.AppsRepository,
        config_1.ConfigService,
        credentials_repository_1.CredentialsRepository,
        selected_calendars_repository_1.SelectedCalendarsRepository,
        gcal_service_1.GCalService,
        calendars_service_1.CalendarsService,
        users_repository_1.UsersRepository,
        calendars_repository_1.CalendarsRepository,
      ],
      controllers: [gcal_controller_1.GcalController],
    }),
  ],
  GcalModule
);
exports.GcalModule = GcalModule;
//# sourceMappingURL=gcal.module.js.map
