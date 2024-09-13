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
exports.MembershipsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
let MembershipsRepository = class MembershipsRepository {
  constructor(dbRead) {
    this.dbRead = dbRead;
  }
  async findOrgUserMembership(organizationId, userId) {
    const membership = await this.dbRead.prisma.membership.findUniqueOrThrow({
      where: {
        userId_teamId: {
          userId: userId,
          teamId: organizationId,
        },
      },
    });
    return membership;
  }
  async findMembershipByTeamId(teamId, userId) {
    const membership = await this.dbRead.prisma.membership.findUnique({
      where: {
        userId_teamId: {
          userId: userId,
          teamId: teamId,
        },
      },
    });
    return membership;
  }
  async findMembershipByOrgId(orgId, userId) {
    return this.findMembershipByTeamId(orgId, userId);
  }
  async isUserOrganizationAdmin(userId, organizationId) {
    const adminMembership = await this.dbRead.prisma.membership.findFirst({
      where: {
        userId,
        teamId: organizationId,
        accepted: true,
        OR: [{ role: "ADMIN" }, { role: "OWNER" }],
      },
    });
    return !!adminMembership;
  }
  async createMembership(teamId, userId, role, accepted) {
    const membership = await this.dbRead.prisma.membership.create({
      data: {
        role,
        teamId,
        userId,
        accepted,
      },
    });
    return membership;
  }
};
MembershipsRepository = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [prisma_read_service_1.PrismaReadService])],
  MembershipsRepository
);
exports.MembershipsRepository = MembershipsRepository;
//# sourceMappingURL=memberships.repository.js.map
