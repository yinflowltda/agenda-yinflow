import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Queue } from "bull";
import { AppConfig } from "src/config/type";
import { BillingRepository } from "src/modules/billing/billing.repository";
import { BillingConfigService } from "src/modules/billing/services/billing.config.service";
import { PlatformPlan } from "src/modules/billing/types";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";
import { StripeService } from "src/modules/stripe/stripe.service";
import Stripe from "stripe";

export declare class BillingService implements OnModuleDestroy {
  private readonly teamsRepository;
  readonly stripeService: StripeService;
  private readonly billingRepository;
  private readonly configService;
  private readonly billingConfigService;
  private readonly billingQueue;
  private logger;
  private readonly webAppUrl;
  constructor(
    teamsRepository: OrganizationsRepository,
    stripeService: StripeService,
    billingRepository: BillingRepository,
    configService: ConfigService<AppConfig>,
    billingConfigService: BillingConfigService,
    billingQueue: Queue
  );
  getBillingData(teamId: number): Promise<{
    team:
      | ({
          platformBilling: {
            id: number;
            customerId: string;
            subscriptionId: string | null;
            plan: string;
            billingCycleStart: number | null;
            billingCycleEnd: number | null;
            overdue: boolean | null;
          } | null;
        } & {
          id: number;
          name: string;
          slug: string | null;
          logoUrl: string | null;
          calVideoLogo: string | null;
          appLogo: string | null;
          appIconLogo: string | null;
          bio: string | null;
          hideBranding: boolean;
          isPrivate: boolean;
          hideBookATeamMember: boolean;
          createdAt: Date;
          metadata: import("@prisma/client/runtime/library").JsonValue;
          theme: string | null;
          brandColor: string | null;
          darkBrandColor: string | null;
          bannerUrl: string | null;
          parentId: number | null;
          timeFormat: number | null;
          timeZone: string;
          weekStart: string;
          isOrganization: boolean;
          pendingPayment: boolean;
          isPlatform: boolean;
          createdByOAuthClientId: string | null;
          smsLockState: import(".prisma/client").$Enums.SMSLockState;
          smsLockReviewedByAdmin: boolean;
        })
      | null;
    status: string;
    plan: string;
  }>;
  createSubscriptionForTeam(
    teamId: number,
    plan: PlatformPlan
  ): Promise<
    | {
        action: string;
        url: string;
      }
    | {
        action: string;
        url?: undefined;
      }
  >;
  setSubscriptionForTeam(
    teamId: number,
    subscription: Stripe.Subscription,
    plan: PlatformPlan
  ): Promise<{
    id: number;
    customerId: string;
    subscriptionId: string | null;
    plan: string;
    billingCycleStart: number | null;
    billingCycleEnd: number | null;
    overdue: boolean | null;
  }>;
  increaseUsageByUserId(
    userId: number,
    booking: {
      uid: string;
      startTime: Date;
      fromReschedule?: string | null;
    }
  ): Promise<void>;
  cancelUsageByBookingUid(bookingUid: string): Promise<void>;
  onModuleDestroy(): Promise<void>;
}
