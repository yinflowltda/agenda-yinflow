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
exports.OAuthClientModule = void 0;
const common_1 = require("@nestjs/common");
const event_types_module_1 = require("../../ee/event-types/event-types_2024_04_15/event-types.module");
const schedules_module_1 = require("../../ee/schedules/schedules_2024_04_15/schedules.module");
const auth_module_1 = require("../auth/auth.module");
const billing_module_1 = require("../billing/billing.module");
const memberships_module_1 = require("../memberships/memberships.module");
const oauth_client_users_controller_1 = require("./controllers/oauth-client-users/oauth-client-users.controller");
const oauth_clients_controller_1 = require("./controllers/oauth-clients/oauth-clients.controller");
const oauth_flow_controller_1 = require("./controllers/oauth-flow/oauth-flow.controller");
const oauth_client_repository_1 = require("./oauth-client.repository");
const oauth_clients_users_service_1 = require("./services/oauth-clients-users.service");
const oauth_flow_service_1 = require("./services/oauth-flow.service");
const organizations_module_1 = require("../organizations/organizations.module");
const organizations_teams_service_1 = require("../organizations/services/organizations-teams.service");
const prisma_module_1 = require("../prisma/prisma.module");
const redis_module_1 = require("../redis/redis.module");
const stripe_module_1 = require("../stripe/stripe.module");
const tokens_module_1 = require("../tokens/tokens.module");
const tokens_repository_1 = require("../tokens/tokens.repository");
const users_module_1 = require("../users/users.module");
let OAuthClientModule = class OAuthClientModule {};
OAuthClientModule = __decorate(
  [
    (0, common_1.Global)(),
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        redis_module_1.RedisModule,
        auth_module_1.AuthModule,
        users_module_1.UsersModule,
        tokens_module_1.TokensModule,
        memberships_module_1.MembershipsModule,
        event_types_module_1.EventTypesModule_2024_04_15,
        organizations_module_1.OrganizationsModule,
        stripe_module_1.StripeModule,
        billing_module_1.BillingModule,
        schedules_module_1.SchedulesModule_2024_04_15,
      ],
      providers: [
        oauth_client_repository_1.OAuthClientRepository,
        tokens_repository_1.TokensRepository,
        oauth_flow_service_1.OAuthFlowService,
        oauth_clients_users_service_1.OAuthClientUsersService,
        organizations_teams_service_1.OrganizationsTeamsService,
      ],
      controllers: [
        oauth_client_users_controller_1.OAuthClientUsersController,
        oauth_clients_controller_1.OAuthClientsController,
        oauth_flow_controller_1.OAuthFlowController,
      ],
      exports: [oauth_client_repository_1.OAuthClientRepository],
    }),
  ],
  OAuthClientModule
);
exports.OAuthClientModule = OAuthClientModule;
//# sourceMappingURL=oauth-client.module.js.map
