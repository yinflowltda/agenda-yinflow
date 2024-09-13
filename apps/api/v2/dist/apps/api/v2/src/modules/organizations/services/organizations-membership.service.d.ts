import { CreateOrgMembershipDto } from "src/modules/organizations/inputs/create-organization-membership.input";
import { OrganizationsMembershipRepository } from "src/modules/organizations/repositories/organizations-membership.repository";

import { UpdateOrgMembershipDto } from "../inputs/update-organization-membership.input";

export declare class OrganizationsMembershipService {
  private readonly organizationsMembershipRepository;
  constructor(organizationsMembershipRepository: OrganizationsMembershipRepository);
  getOrgMembership(
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
  getPaginatedOrgMemberships(
    organizationId: number,
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
}
