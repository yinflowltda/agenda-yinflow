import { Injectable, NotFoundException } from "@nestjs/common";

import { PlatformPlan } from "../../billing/types";
import { PrismaReadService } from "../../prisma/prisma-read.service";
import { PrismaWriteService } from "../../prisma/prisma-write.service";

@Injectable()
export class ManagedOrganizationsBillingService {
  constructor(private readonly dbRead: PrismaReadService, private readonly dbWrite: PrismaWriteService) {}

  async createManagedOrganizationBilling(managerOrgId: number, managedOrgId: number) {
    const managerOrgBilling = await this.dbRead.prisma.platformBilling.findUnique({
      where: { id: managerOrgId },
    });
    if (!managerOrgBilling) {
      throw new NotFoundException("Manager organization billing not found.");
    }
    if (managerOrgBilling.plan !== PlatformPlan.SCALE) {
      throw new NotFoundException("Manager organization billing plan is not SCALE.");
    }

    return this.dbWrite.prisma.platformBilling.create({
      data: {
        id: managedOrgId,
        customerId: managerOrgBilling.customerId,
        subscriptionId: managerOrgBilling.subscriptionId,
        plan: managerOrgBilling.plan,
        billingCycleStart: managerOrgBilling.billingCycleStart,
        billingCycleEnd: managerOrgBilling.billingCycleEnd,
        overdue: managerOrgBilling.overdue,
        managerBillingId: managerOrgBilling.id,
      },
    });
  }
}
