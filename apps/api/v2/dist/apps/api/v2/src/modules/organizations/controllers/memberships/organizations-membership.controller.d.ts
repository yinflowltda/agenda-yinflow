import { CreateOrgMembershipDto } from "src/modules/organizations/inputs/create-organization-membership.input";
import { UpdateOrgMembershipDto } from "src/modules/organizations/inputs/update-organization-membership.input";
import { CreateOrgMembershipOutput } from "src/modules/organizations/outputs/organization-membership/create-membership.output";
import { DeleteOrgMembership } from "src/modules/organizations/outputs/organization-membership/delete-membership.output";
import { GetAllOrgMemberships } from "src/modules/organizations/outputs/organization-membership/get-all-memberships.output";
import { GetOrgMembership } from "src/modules/organizations/outputs/organization-membership/get-membership.output";
import { UpdateOrgMembership } from "src/modules/organizations/outputs/organization-membership/update-membership.output";
import { OrganizationsMembershipService } from "src/modules/organizations/services/organizations-membership.service";

import { SkipTakePagination } from "@calcom/platform-types";
import { Membership } from "@calcom/prisma/client";

export declare class OrganizationsMembershipsController {
  private organizationsMembershipService;
  constructor(organizationsMembershipService: OrganizationsMembershipService);
  getAllMemberships(orgId: number, queryParams: SkipTakePagination): Promise<GetAllOrgMemberships>;
  createMembership(orgId: number, body: CreateOrgMembershipDto): Promise<CreateOrgMembershipOutput>;
  getUserSchedule(membership: Membership): Promise<GetOrgMembership>;
  deleteMembership(orgId: number, membershipId: number): Promise<DeleteOrgMembership>;
  updateMembership(
    orgId: number,
    membershipId: number,
    body: UpdateOrgMembershipDto
  ): Promise<UpdateOrgMembership>;
}
