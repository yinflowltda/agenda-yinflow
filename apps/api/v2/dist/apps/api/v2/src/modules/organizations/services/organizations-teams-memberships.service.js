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
exports.OrganizationsTeamsMembershipsService = void 0;
const common_1 = require("@nestjs/common");
const organizations_teams_memberships_repository_1 = require("../repositories/organizations-teams-memberships.repository");
let OrganizationsTeamsMembershipsService = class OrganizationsTeamsMembershipsService {
  constructor(organizationsTeamsMembershipsRepository) {
    this.organizationsTeamsMembershipsRepository = organizationsTeamsMembershipsRepository;
  }
  async createOrgTeamMembership(teamId, data) {
    const teamMembership = await this.organizationsTeamsMembershipsRepository.createOrgTeamMembership(
      teamId,
      data
    );
    return teamMembership;
  }
  async getPaginatedOrgTeamMemberships(organizationId, teamId, skip = 0, take = 250) {
    const teamMemberships =
      await this.organizationsTeamsMembershipsRepository.findOrgTeamMembershipsPaginated(
        organizationId,
        teamId,
        skip,
        take
      );
    return teamMemberships;
  }
  async getOrgTeamMembership(organizationId, teamId, membershipId) {
    const teamMemberships = await this.organizationsTeamsMembershipsRepository.findOrgTeamMembership(
      organizationId,
      teamId,
      membershipId
    );
    if (!teamMemberships) {
      throw new common_1.NotFoundException("Organization's Team membership not found");
    }
    return teamMemberships;
  }
  async updateOrgTeamMembership(organizationId, teamId, membershipId, data) {
    const teamMembership = await this.organizationsTeamsMembershipsRepository.updateOrgTeamMembershipById(
      organizationId,
      teamId,
      membershipId,
      data
    );
    return teamMembership;
  }
  async deleteOrgTeamMembership(organizationId, teamId, membershipId) {
    const teamMembership = await this.organizationsTeamsMembershipsRepository.deleteOrgTeamMembershipById(
      organizationId,
      teamId,
      membershipId
    );
    return teamMembership;
  }
};
OrganizationsTeamsMembershipsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_teams_memberships_repository_1.OrganizationsTeamsMembershipsRepository,
    ]),
  ],
  OrganizationsTeamsMembershipsService
);
exports.OrganizationsTeamsMembershipsService = OrganizationsTeamsMembershipsService;
//# sourceMappingURL=organizations-teams-memberships.service.js.map
