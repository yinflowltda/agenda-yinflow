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
exports.OrganizationsMembershipRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../../prisma/prisma-read.service");
const prisma_write_service_1 = require("../../prisma/prisma-write.service");
let OrganizationsMembershipRepository = class OrganizationsMembershipRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async findOrgMembership(organizationId, membershipId) {
    return this.dbRead.prisma.membership.findUnique({
      where: {
        id: membershipId,
        teamId: organizationId,
      },
    });
  }
  async deleteOrgMembership(organizationId, membershipId) {
    return this.dbWrite.prisma.membership.delete({
      where: {
        id: membershipId,
        teamId: organizationId,
      },
    });
  }
  async createOrgMembership(organizationId, data) {
    return this.dbWrite.prisma.membership.create({
      data: { ...data, teamId: organizationId },
    });
  }
  async updateOrgMembership(organizationId, membershipId, data) {
    return this.dbWrite.prisma.membership.update({
      data: { ...data },
      where: { id: membershipId, teamId: organizationId },
    });
  }
  async findOrgMembershipsPaginated(organizationId, skip, take) {
    return this.dbRead.prisma.membership.findMany({
      where: {
        teamId: organizationId,
      },
      skip,
      take,
    });
  }
};
OrganizationsMembershipRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  OrganizationsMembershipRepository
);
exports.OrganizationsMembershipRepository = OrganizationsMembershipRepository;
//# sourceMappingURL=organizations-membership.repository.js.map
