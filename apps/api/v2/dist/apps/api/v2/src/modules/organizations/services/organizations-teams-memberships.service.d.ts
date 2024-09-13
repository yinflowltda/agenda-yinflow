import { CreateOrgTeamMembershipDto } from "src/modules/organizations/inputs/create-organization-team-membership.input";
import { UpdateOrgTeamMembershipDto } from "src/modules/organizations/inputs/update-organization-team-membership.input";
import { OrganizationsTeamsMembershipsRepository } from "src/modules/organizations/repositories/organizations-teams-memberships.repository";

export declare class OrganizationsTeamsMembershipsService {
  private readonly organizationsTeamsMembershipsRepository;
  constructor(organizationsTeamsMembershipsRepository: OrganizationsTeamsMembershipsRepository);
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
  getPaginatedOrgTeamMemberships(
    organizationId: number,
    teamId: number,
    skip?: number,
    take?: number
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
  getOrgTeamMembership(
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
  updateOrgTeamMembership(
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
  deleteOrgTeamMembership(
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
}
