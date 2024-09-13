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
exports.IsTeamInOrg = void 0;
const common_1 = require("@nestjs/common");
const organizations_teams_repository_1 = require("../../../organizations/repositories/organizations-teams.repository");
let IsTeamInOrg = class IsTeamInOrg {
  constructor(organizationsTeamsRepository) {
    this.organizationsTeamsRepository = organizationsTeamsRepository;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const teamId = request.params.teamId;
    const orgId = request.params.orgId;
    if (!orgId) {
      throw new common_1.ForbiddenException("No org id found in request params.");
    }
    if (!teamId) {
      throw new common_1.ForbiddenException("No team id found in request params.");
    }
    const team = await this.organizationsTeamsRepository.findOrgTeam(Number(orgId), Number(teamId));
    if (team && !team.isOrganization && team.parentId === Number(orgId)) {
      request.team = team;
      return true;
    }
    if (!team) {
      throw new common_1.NotFoundException(`Team (${teamId}) not found.`);
    }
    return false;
  }
};
IsTeamInOrg = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [organizations_teams_repository_1.OrganizationsTeamsRepository]),
  ],
  IsTeamInOrg
);
exports.IsTeamInOrg = IsTeamInOrg;
//# sourceMappingURL=is-team-in-org.guard.js.map
