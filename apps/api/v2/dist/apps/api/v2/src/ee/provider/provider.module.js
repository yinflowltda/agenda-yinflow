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
exports.ProviderModule = void 0;
const common_1 = require("@nestjs/common");
const provider_controller_1 = require("./provider.controller");
const credentials_repository_1 = require("../../modules/credentials/credentials.repository");
const oauth_client_module_1 = require("../../modules/oauth-clients/oauth-client.module");
const prisma_module_1 = require("../../modules/prisma/prisma.module");
const tokens_module_1 = require("../../modules/tokens/tokens.module");
let ProviderModule = class ProviderModule {};
ProviderModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        tokens_module_1.TokensModule,
        oauth_client_module_1.OAuthClientModule,
      ],
      providers: [credentials_repository_1.CredentialsRepository],
      controllers: [provider_controller_1.CalProviderController],
    }),
  ],
  ProviderModule
);
exports.ProviderModule = ProviderModule;
//# sourceMappingURL=provider.module.js.map
