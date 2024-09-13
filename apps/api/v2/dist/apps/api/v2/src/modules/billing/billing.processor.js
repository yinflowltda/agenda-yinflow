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
var BillingProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingProcessor = exports.BILLING_QUEUE = exports.INCREMENT_JOB = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const billing_repository_1 = require("./billing.repository");
const organizations_repository_1 = require("../organizations/organizations.repository");
const stripe_service_1 = require("../stripe/stripe.service");
exports.INCREMENT_JOB = "increment";
exports.BILLING_QUEUE = "billing";
let BillingProcessor = (BillingProcessor_1 = class BillingProcessor {
  constructor(stripeService, billingRepository, teamsRepository) {
    this.stripeService = stripeService;
    this.billingRepository = billingRepository;
    this.teamsRepository = teamsRepository;
    this.logger = new common_1.Logger(BillingProcessor_1.name);
  }
  async handleIncrement(job) {
    const { userId } = job.data;
    try {
      const team = await this.teamsRepository.findPlatformOrgFromUserId(userId);
      const teamId = team.id;
      if (!team.id) {
        this.logger.error(`User (${userId}) is not part of the platform organization (${teamId}) `, {
          teamId,
          userId,
        });
        return;
      }
      const billingSubscription = await this.billingRepository.getBillingForTeam(teamId);
      if (!billingSubscription || !billingSubscription?.subscriptionId) {
        this.logger.error(`Team ${teamId} did not have stripe subscription associated to it`, {
          teamId,
        });
        return;
      }
      const stripeSubscription = await this.stripeService.stripe.subscriptions.retrieve(
        billingSubscription.subscriptionId
      );
      if (!stripeSubscription?.id) {
        this.logger.error(`Failed to retrieve stripe subscription (${billingSubscription.subscriptionId})`, {
          teamId,
          subscriptionId: billingSubscription.subscriptionId,
        });
        return;
      }
      const meteredItem = stripeSubscription.items.data.find(
        (item) => item.price?.recurring?.usage_type === "metered"
      );
      if (!meteredItem) {
        this.logger.error(`Stripe subscription (${stripeSubscription.id} is not usage based`, {
          teamId,
          subscriptionId: stripeSubscription.id,
        });
        return;
      }
      await this.stripeService.stripe.subscriptionItems.createUsageRecord(meteredItem.id, {
        action: "increment",
        quantity: 1,
        timestamp: "now",
      });
      this.logger.log("Increased organization usage for subscription", {
        subscriptionId: billingSubscription.subscriptionId,
        teamId,
        userId,
        itemId: meteredItem.id,
      });
    } catch (err) {
      this.logger.error("Failed to increase usage for Organization", {
        userId,
        err,
      });
    }
    return;
  }
});
__decorate(
  [
    (0, bull_1.Process)(exports.INCREMENT_JOB),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  BillingProcessor.prototype,
  "handleIncrement",
  null
);
BillingProcessor = BillingProcessor_1 = __decorate(
  [
    (0, bull_1.Processor)(exports.BILLING_QUEUE),
    __metadata("design:paramtypes", [
      stripe_service_1.StripeService,
      billing_repository_1.BillingRepository,
      organizations_repository_1.OrganizationsRepository,
    ]),
  ],
  BillingProcessor
);
exports.BillingProcessor = BillingProcessor;
//# sourceMappingURL=billing.processor.js.map
