import { CreateOrgMembershipDto } from "src/modules/organizations/inputs/create-organization-membership.input";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

import { UpdateOrgMembershipDto } from "../inputs/update-organization-membership.input";

export declare class OrganizationsMembershipRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  findOrgMembership(
    organizationId: number,
    membershipId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  } | null>;
  deleteOrgMembership(
    organizationId: number,
    membershipId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
  createOrgMembership(
    organizationId: number,
    data: CreateOrgMembershipDto
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
  updateOrgMembership(
    organizationId: number,
    membershipId: number,
    data: UpdateOrgMembershipDto
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
  findOrgMembershipsPaginated(
    organizationId: number,
    skip: number,
    take: number
  ): Promise<
    {
      id: number;
      teamId: number;
      userId: number;
      accepted: boolean;
      role: import(".prisma/client").$Enums.MembershipRole;
      disableImpersonation: boolean;
    }[]
  >;
}
