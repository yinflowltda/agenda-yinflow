import { CreateOrgTeamDto } from "src/modules/organizations/inputs/create-organization-team.input";
import { UpdateOrgTeamDto } from "src/modules/organizations/inputs/update-organization-team.input";
import {
  OrgMeTeamsOutputResponseDto,
  OrgTeamOutputResponseDto,
  OrgTeamsOutputResponseDto,
} from "src/modules/organizations/outputs/organization-team.output";
import { OrganizationsTeamsService } from "src/modules/organizations/services/organizations-teams.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import { SkipTakePagination } from "@calcom/platform-types";
import { Team } from "@calcom/prisma/client";

export declare class OrganizationsTeamsController {
  private organizationsTeamsService;
  constructor(organizationsTeamsService: OrganizationsTeamsService);
  getAllTeams(orgId: number, queryParams: SkipTakePagination): Promise<OrgTeamsOutputResponseDto>;
  getMyTeams(
    orgId: number,
    queryParams: SkipTakePagination,
    user: UserWithProfile
  ): Promise<OrgMeTeamsOutputResponseDto>;
  getTeam(team: Team): Promise<OrgTeamOutputResponseDto>;
  deleteTeam(orgId: number, teamId: number): Promise<OrgTeamOutputResponseDto>;
  updateTeam(orgId: number, teamId: number, body: UpdateOrgTeamDto): Promise<OrgTeamOutputResponseDto>;
  createTeam(
    orgId: number,
    body: CreateOrgTeamDto,
    user: UserWithProfile,
    oAuthClientId?: string
  ): Promise<OrgTeamOutputResponseDto>;
}
