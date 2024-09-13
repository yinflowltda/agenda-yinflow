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
exports.BillingService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const luxon_1 = require("luxon");
const billing_processor_1 = require("../billing.processor");
const billing_repository_1 = require("../billing.repository");
const billing_config_service_1 = require("./billing.config.service");
const organizations_repository_1 = require("../../organizations/organizations.repository");
const stripe_service_1 = require("../../stripe/stripe.service");
let BillingService = class BillingService {
  constructor(
    teamsRepository,
    stripeService,
    billingRepository,
    configService,
    billingConfigService,
    billingQueue
  ) {
    this.teamsRepository = teamsRepository;
    this.stripeService = stripeService;
    this.billingRepository = billingRepository;
    this.configService = configService;
    this.billingConfigService = billingConfigService;
    this.billingQueue = billingQueue;
    this.logger = new common_1.Logger("BillingService");
    this.webAppUrl = this.configService.get("app.baseUrl", { infer: true }) ?? "https://app.cal.com";
  }
  async getBillingData(teamId) {
    const teamWithBilling = await this.teamsRepository.findByIdIncludeBilling(teamId);
    if (teamWithBilling?.platformBilling) {
      if (!teamWithBilling?.platformBilling.subscriptionId) {
        return { team: teamWithBilling, status: "no_subscription", plan: "none" };
      }
      return { team: teamWithBilling, status: "valid", plan: teamWithBilling.platformBilling.plan };
    } else {
      return { team: teamWithBilling, status: "no_billing", plan: "none" };
    }
  }
  async createSubscriptionForTeam(teamId, plan) {
    const teamWithBilling = await this.teamsRepository.findByIdIncludeBilling(teamId);
    let brandNewBilling = false;
    let customerId = teamWithBilling?.platformBilling?.customerId;
    if (!teamWithBilling?.platformBilling) {
      brandNewBilling = true;
      customerId = await this.teamsRepository.createNewBillingRelation(teamId);
      this.logger.log("Team had no Stripe Customer ID, created one for them.", {
        id: teamId,
        stripeId: customerId,
      });
    }
    if (brandNewBilling || !teamWithBilling?.platformBilling?.subscriptionId) {
      const { url } = await this.stripeService.stripe.checkout.sessions.create({
        customer: customerId,
        line_items: [
          {
            price: this.billingConfigService.get(plan)?.overage,
          },
          {
            price: this.billingConfigService.get(plan)?.base,
            quantity: 1,
          },
        ],
        success_url: `${this.webAppUrl}/settings/platform/`,
        cancel_url: `${this.webAppUrl}/settings/platform/`,
        mode: "subscription",
        metadata: {
          teamId: teamId.toString(),
          plan: plan.toString(),
        },
        subscription_data: {
          metadata: {
            teamId: teamId.toString(),
            plan: plan.toString(),
          },
        },
        allow_promotion_codes: true,
      });
      if (!url) throw new common_1.InternalServerErrorException("Failed to create Stripe session.");
      return { action: "redirect", url };
    }
    return { action: "none" };
  }
  async setSubscriptionForTeam(teamId, subscription, plan) {
    const billingCycleStart = luxon_1.DateTime.now().get("day");
    const billingCycleEnd = luxon_1.DateTime.now().plus({ month: 1 }).get("day");
    return this.billingRepository.updateTeamBilling(
      teamId,
      billingCycleStart,
      billingCycleEnd,
      plan,
      subscription.id
    );
  }
  async increaseUsageByUserId(userId, booking) {
    const { uid, startTime, fromReschedule } = booking;
    const delay = startTime.getTime() - Date.now();
    if (fromReschedule) {
      await this.cancelUsageByBookingUid(fromReschedule);
      this.logger.log(`Cancelled usage increment job for rescheduled booking uid: ${fromReschedule}`);
    }
    await this.billingQueue.add(
      billing_processor_1.INCREMENT_JOB,
      {
        userId,
      },
      { delay: delay > 0 ? delay : 0, jobId: `increment-${uid}`, removeOnComplete: true }
    );
    this.logger.log(`Added stripe usage increment job for booking ${uid} and user ${userId}`);
  }
  async cancelUsageByBookingUid(bookingUid) {
    const job = await this.billingQueue.getJob(`increment-${bookingUid}`);
    if (job) {
      await job.remove();
      this.logger.log(`Removed increment job for cancelled booking ${bookingUid}`);
    }
  }
  async onModuleDestroy() {
    try {
      await this.billingQueue.close();
    } catch (err) {
      this.logger.error(err);
    }
  }
};
BillingService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(5, (0, bull_1.InjectQueue)(billing_processor_1.BILLING_QUEUE)),
    __metadata("design:paramtypes", [
      organizations_repository_1.OrganizationsRepository,
      stripe_service_1.StripeService,
      billing_repository_1.BillingRepository,
      config_1.ConfigService,
      billing_config_service_1.BillingConfigService,
      Object,
    ]),
  ],
  BillingService
);
exports.BillingService = BillingService;
//# sourceMappingURL=billing.service.js.map
