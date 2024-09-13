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
exports.WebhooksModule = void 0;
const common_1 = require("@nestjs/common");
const event_types_module_1 = require("../../ee/event-types/event-types_2024_06_14/event-types.module");
const event_types_webhooks_controller_1 = require("../event-types/controllers/event-types-webhooks.controller");
const oauth_client_webhooks_controller_1 = require("../oauth-clients/controllers/oauth-client-webhooks/oauth-client-webhooks.controller");
const oauth_client_module_1 = require("../oauth-clients/oauth-client.module");
const memberships_module_1 = require("../memberships/memberships.module");
const organizations_module_1 = require("../organizations/organizations.module");
const prisma_module_1 = require("../prisma/prisma.module");
const users_module_1 = require("../users/users.module");
const webhooks_controller_1 = require("./controllers/webhooks.controller");
const event_type_webhooks_service_1 = require("./services/event-type-webhooks.service");
const oauth_clients_webhooks_service_1 = require("./services/oauth-clients-webhooks.service");
const user_webhooks_service_1 = require("./services/user-webhooks.service");
const webhooks_service_1 = require("./services/webhooks.service");
const webhooks_repository_1 = require("./webhooks.repository");
let WebhooksModule = class WebhooksModule {};
WebhooksModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        users_module_1.UsersModule,
        event_types_module_1.EventTypesModule_2024_06_14,
        oauth_client_module_1.OAuthClientModule,
        organizations_module_1.OrganizationsModule,
        memberships_module_1.MembershipsModule,
        oauth_client_module_1.OAuthClientModule,
      ],
      controllers: [
        webhooks_controller_1.WebhooksController,
        event_types_webhooks_controller_1.EventTypeWebhooksController,
        oauth_client_webhooks_controller_1.OAuthClientWebhooksController,
      ],
      providers: [
        webhooks_service_1.WebhooksService,
        webhooks_repository_1.WebhooksRepository,
        user_webhooks_service_1.UserWebhooksService,
        event_type_webhooks_service_1.EventTypeWebhooksService,
        oauth_clients_webhooks_service_1.OAuthClientWebhooksService,
      ],
      exports: [
        webhooks_service_1.WebhooksService,
        webhooks_repository_1.WebhooksRepository,
        user_webhooks_service_1.UserWebhooksService,
        event_type_webhooks_service_1.EventTypeWebhooksService,
        oauth_clients_webhooks_service_1.OAuthClientWebhooksService,
      ],
    }),
  ],
  WebhooksModule
);
exports.WebhooksModule = WebhooksModule;
//# sourceMappingURL=webhooks.module.js.map
