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
exports.EndpointsModule = void 0;
const common_1 = require("@nestjs/common");
const platform_endpoints_module_1 = require("../ee/platform-endpoints-module");
const billing_module_1 = require("./billing/billing.module");
const destination_calendars_module_1 = require("./destination-calendars/destination-calendars.module");
const oauth_client_module_1 = require("./oauth-clients/oauth-client.module");
const timezones_module_1 = require("./timezones/timezones.module");
const users_module_1 = require("./users/users.module");
const webhooks_module_1 = require("./webhooks/webhooks.module");
let EndpointsModule = class EndpointsModule {
  configure(_consumer) {}
};
EndpointsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        oauth_client_module_1.OAuthClientModule,
        billing_module_1.BillingModule,
        platform_endpoints_module_1.PlatformEndpointsModule,
        timezones_module_1.TimezoneModule,
        users_module_1.UsersModule,
        webhooks_module_1.WebhooksModule,
        destination_calendars_module_1.DestinationCalendarsModule,
      ],
    }),
  ],
  EndpointsModule
);
exports.EndpointsModule = EndpointsModule;
//# sourceMappingURL=endpoints.module.js.map
