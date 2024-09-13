import { Job } from "bull";
import { BillingRepository } from "src/modules/billing/billing.repository";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";
import { StripeService } from "src/modules/stripe/stripe.service";

export declare const INCREMENT_JOB = "increment";
export declare const BILLING_QUEUE = "billing";
export type IncrementJobDataType = {
  userId: number;
};
export type DecrementJobDataType = IncrementJobDataType;
export declare class BillingProcessor {
  readonly stripeService: StripeService;
  private readonly billingRepository;
  private readonly teamsRepository;
  private readonly logger;
  constructor(
    stripeService: StripeService,
    billingRepository: BillingRepository,
    teamsRepository: OrganizationsRepository
  );
  handleIncrement(job: Job<IncrementJobDataType>): Promise<void>;
}
