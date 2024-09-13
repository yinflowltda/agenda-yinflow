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
exports.OrganizationsUsersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../../prisma/prisma-read.service");
const prisma_write_service_1 = require("../../prisma/prisma-write.service");
let OrganizationsUsersRepository = class OrganizationsUsersRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  filterOnOrgMembership(orgId) {
    return {
      profiles: {
        some: {
          organizationId: orgId,
        },
      },
    };
  }
  async getOrganizationUsersByEmails(orgId, emailArray, skip, take) {
    return await this.dbRead.prisma.user.findMany({
      where: {
        ...this.filterOnOrgMembership(orgId),
        ...(emailArray && emailArray.length ? { email: { in: emailArray } } : {}),
      },
      skip,
      take,
    });
  }
  async getOrganizationUserByUsername(orgId, username) {
    return await this.dbRead.prisma.user.findFirst({
      where: {
        username,
        ...this.filterOnOrgMembership(orgId),
      },
    });
  }
  async getOrganizationUserByEmail(orgId, email) {
    return await this.dbRead.prisma.user.findFirst({
      where: {
        email,
        ...this.filterOnOrgMembership(orgId),
      },
    });
  }
  async createOrganizationUser(orgId, createUserBody) {
    const createdUser = await this.dbWrite.prisma.user.create({
      data: createUserBody,
    });
    return createdUser;
  }
  async updateOrganizationUser(orgId, userId, updateUserBody) {
    return await this.dbWrite.prisma.user.update({
      where: {
        id: userId,
        organizationId: orgId,
      },
      data: updateUserBody,
    });
  }
  async deleteUser(orgId, userId) {
    return await this.dbWrite.prisma.user.delete({
      where: {
        id: userId,
        organizationId: orgId,
      },
    });
  }
};
OrganizationsUsersRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  OrganizationsUsersRepository
);
exports.OrganizationsUsersRepository = OrganizationsUsersRepository;
//# sourceMappingURL=organizations-users.repository.js.map
