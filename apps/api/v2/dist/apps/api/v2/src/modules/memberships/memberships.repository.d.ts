import { PrismaReadService } from "src/modules/prisma/prisma-read.service";

import { MembershipRole } from "@calcom/prisma/client";

export declare class MembershipsRepository {
  private readonly dbRead;
  constructor(dbRead: PrismaReadService);
  findOrgUserMembership(
    organizationId: number,
    userId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
  findMembershipByTeamId(
    teamId: number,
    userId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  } | null>;
  findMembershipByOrgId(
    orgId: number,
    userId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  } | null>;
  isUserOrganizationAdmin(userId: number, organizationId: number): Promise<boolean>;
  createMembership(
    teamId: number,
    userId: number,
    role: MembershipRole,
    accepted: boolean
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
}
