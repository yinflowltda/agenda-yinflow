import { Injectable } from "@nestjs/common";

import { MembershipsRepository } from "../../../../memberships/memberships.repository";
import { CreateOrgTeamDto } from "../../../../organizations/teams/index/inputs/create-organization-team.input";
import { UpdateOrgTeamDto } from "../../../../organizations/teams/index/inputs/update-organization-team.input";
import { OrganizationsTeamsRepository } from "../../../../organizations/teams/index/organizations-teams.repository";
import { UserWithProfile } from "../../../../users/users.repository";

@Injectable()
export class OrganizationsTeamsService {
  constructor(
    private readonly organizationsTeamRepository: OrganizationsTeamsRepository,
    private readonly membershipsRepository: MembershipsRepository
  ) {}

  async getPaginatedOrgUserTeams(organizationId: number, userId: number, skip = 0, take = 250) {
    const teams = await this.organizationsTeamRepository.findOrgUserTeamsPaginated(
      organizationId,
      userId,
      skip,
      take
    );
    return teams;
  }

  async getPaginatedOrgTeams(organizationId: number, skip = 0, take = 250) {
    const teams = await this.organizationsTeamRepository.findOrgTeamsPaginated(organizationId, skip, take);
    return teams;
  }

  async deleteOrgTeam(organizationId: number, teamId: number) {
    const team = await this.organizationsTeamRepository.deleteOrgTeam(organizationId, teamId);
    return team;
  }

  async updateOrgTeam(organizationId: number, teamId: number, data: UpdateOrgTeamDto) {
    const team = await this.organizationsTeamRepository.updateOrgTeam(organizationId, teamId, data);
    return team;
  }

  async createOrgTeam(organizationId: number, data: CreateOrgTeamDto, user: UserWithProfile) {
    const { autoAcceptCreator, ...rest } = data;

    const team = await this.organizationsTeamRepository.createOrgTeam(organizationId, rest);

    if (user.role !== "ADMIN") {
      await this.membershipsRepository.createMembership(team.id, user.id, "OWNER", !!autoAcceptCreator);
    }
    return team;
  }

  async createPlatformOrgTeam(
    organizationId: number,
    oAuthClientId: string,
    data: CreateOrgTeamDto,
    user: UserWithProfile
  ) {
    const { autoAcceptCreator, ...rest } = data;

    const team = await this.organizationsTeamRepository.createPlatformOrgTeam(
      organizationId,
      oAuthClientId,
      rest
    );

    if (user.role !== "ADMIN") {
      await this.membershipsRepository.createMembership(team.id, user.id, "OWNER", !!autoAcceptCreator);
    }
    return team;
  }
}
