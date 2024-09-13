import { PlatformPlan } from "src/modules/billing/types";

export declare class BillingConfigService {
  private readonly config;
  constructor();
  get(plan: PlatformPlan):
    | {
        base: string;
        overage: string;
      }
    | undefined;
}
