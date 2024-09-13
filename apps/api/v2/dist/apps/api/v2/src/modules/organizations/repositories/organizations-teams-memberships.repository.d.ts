import { CreateOrgTeamMembershipDto } from "src/modules/organizations/inputs/create-organization-team-membership.input";
import { UpdateOrgTeamMembershipDto } from "src/modules/organizations/inputs/update-organization-team-membership.input";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class OrganizationsTeamsMembershipsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  findOrgTeamMembershipsPaginated(
    organizationId: number,
    teamId: number,
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
  findOrgTeamMembership(
    organizationId: number,
    teamId: number,
    membershipId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  } | null>;
  deleteOrgTeamMembershipById(
    organizationId: number,
    teamId: number,
    membershipId: number
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
  updateOrgTeamMembershipById(
    organizationId: number,
    teamId: number,
    membershipId: number,
    data: UpdateOrgTeamMembershipDto
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
  createOrgTeamMembership(
    teamId: number,
    data: CreateOrgTeamMembershipDto
  ): Promise<{
    id: number;
    teamId: number;
    userId: number;
    accepted: boolean;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
  }>;
}
