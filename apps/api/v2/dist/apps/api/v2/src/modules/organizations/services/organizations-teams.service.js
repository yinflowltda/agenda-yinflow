"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsTeamsService = void 0;
const common_1 = require("@nestjs/common");
const memberships_repository_1 = require("../../memberships/memberships.repository");
const organizations_teams_repository_1 = require("../repositories/organizations-teams.repository");
const platform_libraries_1 = require("@calcom/platform-libraries");
let OrganizationsTeamsService = class OrganizationsTeamsService {
  constructor(organizationsTeamRepository, membershipsRepository) {
    this.organizationsTeamRepository = organizationsTeamRepository;
    this.membershipsRepository = membershipsRepository;
  }
  async getPaginatedOrgUserTeams(organizationId, userId, skip = 0, take = 250) {
    const teams = await this.organizationsTeamRepository.findOrgUserTeamsPaginated(
      organizationId,
      userId,
      skip,
      take
    );
    return teams;
  }
  async getPaginatedOrgTeams(organizationId, skip = 0, take = 250) {
    const teams = await this.organizationsTeamRepository.findOrgTeamsPaginated(organizationId, skip, take);
    return teams;
  }
  async deleteOrgTeam(organizationId, teamId) {
    const team = await this.organizationsTeamRepository.deleteOrgTeam(organizationId, teamId);
    return team;
  }
  async updateOrgTeam(organizationId, teamId, data) {
    const team = await this.organizationsTeamRepository.updateOrgTeam(organizationId, teamId, data);
    return team;
  }
  async createOrgTeam(organizationId, data, user) {
    const { autoAcceptCreator, ...rest } = data;
    const team = await this.organizationsTeamRepository.createOrgTeam(organizationId, rest);
    if (user.role !== "ADMIN") {
      await this.membershipsRepository.createMembership(team.id, user.id, "OWNER", !!autoAcceptCreator);
    }
    return team;
  }
  async createPlatformOrgTeam(organizationId, oAuthClientId, data, user) {
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
  async addUserToTeamEvents(userId, organizationId) {
    const orgTeams = await this.organizationsTeamRepository.findOrgTeams(organizationId);
    for (const team of orgTeams) {
      await (0, platform_libraries_1.updateNewTeamMemberEventTypes)(userId, team.id);
    }
  }
  async addUserToPlatformTeamEvents(userId, organizationId, oAuthClientId) {
    const oAuthClientTeams = await this.organizationsTeamRepository.getPlatformOrgTeams(
      organizationId,
      oAuthClientId
    );
    for (const team of oAuthClientTeams) {
      await (0, platform_libraries_1.updateNewTeamMemberEventTypes)(userId, team.id);
    }
  }
};
OrganizationsTeamsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_teams_repository_1.OrganizationsTeamsRepository,
      memberships_repository_1.MembershipsRepository,
    ]),
  ],
  OrganizationsTeamsService
);
exports.OrganizationsTeamsService = OrganizationsTeamsService;
//# sourceMappingURL=organizations-teams.service.js.map
