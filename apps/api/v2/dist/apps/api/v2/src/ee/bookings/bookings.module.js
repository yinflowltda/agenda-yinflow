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
exports.BookingsModule = void 0;
const common_1 = require("@nestjs/common");
const bookings_controller_1 = require("./controllers/bookings.controller");
const billing_module_1 = require("../../modules/billing/billing.module");
const oauth_client_repository_1 = require("../../modules/oauth-clients/oauth-client.repository");
const oauth_flow_service_1 = require("../../modules/oauth-clients/services/oauth-flow.service");
const prisma_module_1 = require("../../modules/prisma/prisma.module");
const redis_module_1 = require("../../modules/redis/redis.module");
const tokens_module_1 = require("../../modules/tokens/tokens.module");
const tokens_repository_1 = require("../../modules/tokens/tokens.repository");
let BookingsModule = class BookingsModule {};
BookingsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        redis_module_1.RedisModule,
        tokens_module_1.TokensModule,
        billing_module_1.BillingModule,
      ],
      providers: [
        tokens_repository_1.TokensRepository,
        oauth_flow_service_1.OAuthFlowService,
        oauth_client_repository_1.OAuthClientRepository,
      ],
      controllers: [bookings_controller_1.BookingsController],
    }),
  ],
  BookingsModule
);
exports.BookingsModule = BookingsModule;
//# sourceMappingURL=bookings.module.js.map
