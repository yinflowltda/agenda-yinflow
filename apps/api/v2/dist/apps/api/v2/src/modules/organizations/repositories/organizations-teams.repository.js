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
exports.OrganizationsTeamsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../../prisma/prisma-read.service");
let OrganizationsTeamsRepository = class OrganizationsTeamsRepository {
  constructor(dbRead) {
    this.dbRead = dbRead;
  }
  async findOrgTeam(organizationId, teamId) {
    return this.dbRead.prisma.team.findUnique({
      where: {
        id: teamId,
        isOrganization: false,
        parentId: organizationId,
      },
    });
  }
  async findOrgTeams(organizationId) {
    return this.dbRead.prisma.team.findMany({
      where: {
        parentId: organizationId,
      },
    });
  }
  async deleteOrgTeam(organizationId, teamId) {
    return this.dbRead.prisma.team.delete({
      where: {
        id: teamId,
        isOrganization: false,
        parentId: organizationId,
      },
    });
  }
  async createOrgTeam(organizationId, data) {
    return this.dbRead.prisma.team.create({
      data: { ...data, parentId: organizationId },
    });
  }
  async createPlatformOrgTeam(organizationId, oAuthClientId, data) {
    return this.dbRead.prisma.team.create({
      data: {
        ...data,
        parentId: organizationId,
        createdByOAuthClientId: oAuthClientId,
      },
    });
  }
  async getPlatformOrgTeams(organizationId, oAuthClientId) {
    return this.dbRead.prisma.team.findMany({
      where: {
        parentId: organizationId,
        createdByOAuthClientId: oAuthClientId,
      },
    });
  }
  async updateOrgTeam(organizationId, teamId, data) {
    return this.dbRead.prisma.team.update({
      data: { ...data },
      where: { id: teamId, parentId: organizationId, isOrganization: false },
    });
  }
  async findOrgTeamsPaginated(organizationId, skip, take) {
    return this.dbRead.prisma.team.findMany({
      where: {
        parentId: organizationId,
      },
      skip,
      take,
    });
  }
  async findOrgUserTeamsPaginated(organizationId, userId, skip, take) {
    return this.dbRead.prisma.team.findMany({
      where: {
        parentId: organizationId,
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        members: { select: { accepted: true, userId: true } },
      },
      skip,
      take,
    });
  }
  async getTeamMembersIds(teamId) {
    const team = await this.dbRead.prisma.team.findUnique({
      where: {
        id: teamId,
      },
      include: {
        members: true,
      },
    });
    if (!team) {
      return [];
    }
    return team.members.map((member) => member.userId);
  }
};
OrganizationsTeamsRepository = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [prisma_read_service_1.PrismaReadService])],
  OrganizationsTeamsRepository
);
exports.OrganizationsTeamsRepository = OrganizationsTeamsRepository;
//# sourceMappingURL=organizations-teams.repository.js.map
