import { PlatformPlan } from "src/modules/billing/types";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class BillingRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getBillingForTeam: (teamId: number) => import(".prisma/client").Prisma.Prisma__PlatformBillingClient<
    {
      id: number;
      customerId: string;
      subscriptionId: string | null;
      plan: string;
      billingCycleStart: number | null;
      billingCycleEnd: number | null;
      overdue: boolean | null;
    } | null,
    null,
    import("@prisma/client/runtime/library").DefaultArgs
  >;
  updateTeamBilling(
    teamId: number,
    billingStart: number,
    billingEnd: number,
    plan: PlatformPlan,
    subscription?: string
  ): Promise<{
    id: number;
    customerId: string;
    subscriptionId: string | null;
    plan: string;
    billingCycleStart: number | null;
    billingCycleEnd: number | null;
    overdue: boolean | null;
  }>;
}
