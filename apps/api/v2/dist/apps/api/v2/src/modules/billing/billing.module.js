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
exports.BillingModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const billing_processor_1 = require("./billing.processor");
const billing_repository_1 = require("./billing.repository");
const billing_controller_1 = require("./controllers/billing.controller");
const billing_config_service_1 = require("./services/billing.config.service");
const billing_service_1 = require("./services/billing.service");
const memberships_module_1 = require("../memberships/memberships.module");
const organizations_module_1 = require("../organizations/organizations.module");
const prisma_module_1 = require("../prisma/prisma.module");
const stripe_module_1 = require("../stripe/stripe.module");
const users_module_1 = require("../users/users.module");
let BillingModule = class BillingModule {};
BillingModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        stripe_module_1.StripeModule,
        memberships_module_1.MembershipsModule,
        organizations_module_1.OrganizationsModule,
        bull_1.BullModule.registerQueue({
          name: "billing",
          limiter: {
            max: 1,
            duration: 1000,
          },
        }),
        users_module_1.UsersModule,
      ],
      providers: [
        billing_config_service_1.BillingConfigService,
        billing_service_1.BillingService,
        billing_repository_1.BillingRepository,
        billing_processor_1.BillingProcessor,
      ],
      exports: [billing_service_1.BillingService, billing_repository_1.BillingRepository],
      controllers: [billing_controller_1.BillingController],
    }),
  ],
  BillingModule
);
exports.BillingModule = BillingModule;
//# sourceMappingURL=billing.module.js.map
