import { CreateOrgTeamMembershipDto } from "src/modules/organizations/inputs/create-organization-team-membership.input";
import { UpdateOrgTeamMembershipDto } from "src/modules/organizations/inputs/update-organization-team-membership.input";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";
import {
  OrgTeamMembershipsOutputResponseDto,
  OrgTeamMembershipOutputResponseDto,
} from "src/modules/organizations/outputs/organization-teams-memberships.output";
import { OrganizationsTeamsMembershipsService } from "src/modules/organizations/services/organizations-teams-memberships.service";

import { SkipTakePagination } from "@calcom/platform-types";

export declare class OrganizationsTeamsMembershipsController {
  private organizationsTeamsMembershipsService;
  private readonly organizationsRepository;
  constructor(
    organizationsTeamsMembershipsService: OrganizationsTeamsMembershipsService,
    organizationsRepository: OrganizationsRepository
  );
  getAllOrgTeamMemberships(
    orgId: number,
    teamId: number,
    queryParams: SkipTakePagination
  ): Promise<OrgTeamMembershipsOutputResponseDto>;
  getOrgTeamMembership(
    orgId: number,
    teamId: number,
    membershipId: number
  ): Promise<OrgTeamMembershipOutputResponseDto>;
  deleteOrgTeamMembership(
    orgId: number,
    teamId: number,
    membershipId: number
  ): Promise<OrgTeamMembershipOutputResponseDto>;
  updateOrgTeamMembership(
    orgId: number,
    teamId: number,
    membershipId: number,
    data: UpdateOrgTeamMembershipDto
  ): Promise<OrgTeamMembershipOutputResponseDto>;
  createOrgTeamMembership(
    orgId: number,
    teamId: number,
    data: CreateOrgTeamMembershipDto
  ): Promise<OrgTeamMembershipOutputResponseDto>;
}
