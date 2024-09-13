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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const api_versions_1 = require("../../../lib/api-versions");
const membership_roles_decorator_1 = require("../../auth/decorators/roles/membership-roles.decorator");
const next_auth_guard_1 = require("../../auth/guards/next-auth/next-auth.guard");
const organization_roles_guard_1 = require("../../auth/guards/organization-roles/organization-roles.guard");
const subscribe_to_plan_input_1 = require("./inputs/subscribe-to-plan.input");
const billing_service_1 = require("../services/billing.service");
const types_1 = require("../types");
let BillingController = class BillingController {
  constructor(billingService, configService) {
    this.billingService = billingService;
    this.configService = configService;
    this.logger = new common_1.Logger("Billing Controller");
    this.stripeWhSecret = configService.get("stripe.webhookSecret", { infer: true }) ?? "";
  }
  async checkTeamBilling(teamId) {
    const { status, plan } = await this.billingService.getBillingData(teamId);
    return {
      status: "success",
      data: {
        valid: status === "valid",
        plan,
      },
    };
  }
  async subscribeTeamToStripe(teamId, input) {
    const { status } = await this.billingService.getBillingData(teamId);
    if (status === "valid") {
      throw new common_1.BadRequestException("This team is already subscribed to a plan.");
    }
    const { action, url } = await this.billingService.createSubscriptionForTeam(teamId, input.plan);
    if (action === "redirect") {
      return {
        status: "success",
        data: {
          action: "redirect",
          url,
        },
      };
    }
    return {
      status: "success",
    };
  }
  async stripeWebhook(request, stripeSignature) {
    const event = await this.billingService.stripeService.stripe.webhooks.constructEventAsync(
      request.body,
      stripeSignature,
      this.stripeWhSecret
    );
    if (event.type === "customer.subscription.created" || event.type === "customer.subscription.updated") {
      const subscription = event.data.object;
      if (!subscription.metadata?.teamId) {
        return {
          status: "success",
        };
      }
      const teamId = Number.parseInt(subscription.metadata.teamId);
      const plan = subscription.metadata.plan;
      if (!plan || !teamId) {
        this.logger.log("Webhook received but not pertaining to Platform, discarding.");
        return {
          status: "success",
        };
      }
      await this.billingService.setSubscriptionForTeam(
        teamId,
        subscription,
        types_1.PlatformPlan[plan.toUpperCase()]
      );
      return {
        status: "success",
      };
    }
    return {
      status: "success",
    };
  }
};
__decorate(
  [
    (0, common_1.Get)("/:teamId/check"),
    (0, common_1.UseGuards)(
      next_auth_guard_1.NextAuthGuard,
      organization_roles_guard_1.OrganizationRolesGuard
    ),
    (0, membership_roles_decorator_1.MembershipRoles)(["OWNER", "ADMIN", "MEMBER"]),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("teamId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise),
  ],
  BillingController.prototype,
  "checkTeamBilling",
  null
);
__decorate(
  [
    (0, common_1.Post)("/:teamId/subscribe"),
    (0, common_1.UseGuards)(
      next_auth_guard_1.NextAuthGuard,
      organization_roles_guard_1.OrganizationRolesGuard
    ),
    (0, membership_roles_decorator_1.MembershipRoles)(["OWNER", "ADMIN"]),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)("teamId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, subscribe_to_plan_input_1.SubscribeToPlanInput]),
    __metadata("design:returntype", Promise),
  ],
  BillingController.prototype,
  "subscribeTeamToStripe",
  null
);
__decorate(
  [
    (0, common_1.Post)("/webhook"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)("stripe-signature")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise),
  ],
  BillingController.prototype,
  "stripeWebhook",
  null
);
BillingController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/billing",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiExcludeController)(true),
    __metadata("design:paramtypes", [billing_service_1.BillingService, config_1.ConfigService]),
  ],
  BillingController
);
exports.BillingController = BillingController;
//# sourceMappingURL=billing.controller.js.map
