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
exports.AppsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const apps_repository_1 = require("./apps.repository");
const credentials_repository_1 = require("../credentials/credentials.repository");
const prisma_module_1 = require("../prisma/prisma.module");
const selected_calendars_repository_1 = require("../selected-calendars/selected-calendars.repository");
const tokens_module_1 = require("../tokens/tokens.module");
let AppsModule = class AppsModule {};
AppsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [prisma_module_1.PrismaModule, tokens_module_1.TokensModule],
      providers: [
        apps_repository_1.AppsRepository,
        config_1.ConfigService,
        credentials_repository_1.CredentialsRepository,
        selected_calendars_repository_1.SelectedCalendarsRepository,
      ],
      exports: [],
    }),
  ],
  AppsModule
);
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map
