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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
let UsersRepository = class UsersRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async create(user, username, oAuthClientId, isPlatformManaged) {
    this.formatInput(user);
    return this.dbWrite.prisma.user.create({
      data: {
        ...user,
        username,
        platformOAuthClients: {
          connect: { id: oAuthClientId },
        },
        isPlatformManaged,
      },
    });
  }
  async addToOAuthClient(userId, oAuthClientId) {
    return this.dbWrite.prisma.user.update({
      data: {
        platformOAuthClients: {
          connect: { id: oAuthClientId },
        },
      },
      where: { id: userId },
    });
  }
  async findById(userId) {
    return this.dbRead.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
  async findByIdWithinPlatformScope(userId, clientId) {
    return this.dbRead.prisma.user.findFirst({
      where: {
        id: userId,
        isPlatformManaged: true,
        platformOAuthClients: {
          some: {
            id: clientId,
          },
        },
      },
    });
  }
  async findByIdWithProfile(userId) {
    console.log("findByIdWithProfile");
    return this.dbRead.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        movedToProfile: {
          include: { organization: { select: { isPlatform: true, name: true, slug: true, id: true } } },
        },
        profiles: {
          include: { organization: { select: { isPlatform: true, name: true, slug: true, id: true } } },
        },
      },
    });
  }
  async findByIdsWithEventTypes(userIds) {
    return this.dbRead.prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      include: {
        eventTypes: true,
      },
    });
  }
  async findByIds(userIds) {
    return this.dbRead.prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
    });
  }
  async findByIdWithCalendars(userId) {
    return this.dbRead.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        selectedCalendars: true,
        destinationCalendar: true,
      },
    });
  }
  async findByEmail(email) {
    return this.dbRead.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async findByEmailWithProfile(email) {
    return this.dbRead.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        movedToProfile: {
          include: { organization: { select: { isPlatform: true, name: true, slug: true, id: true } } },
        },
        profiles: {
          include: { organization: { select: { isPlatform: true, name: true, slug: true, id: true } } },
        },
      },
    });
  }
  async findByUsername(username) {
    return this.dbRead.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }
  async findManagedUsersByOAuthClientId(oauthClientId, cursor, limit) {
    return this.dbRead.prisma.user.findMany({
      where: {
        platformOAuthClients: {
          some: {
            id: oauthClientId,
          },
        },
        isPlatformManaged: true,
      },
      take: limit,
      skip: cursor,
    });
  }
  async update(userId, updateData) {
    this.formatInput(updateData);
    return this.dbWrite.prisma.user.update({
      where: { id: userId },
      data: updateData,
    });
  }
  async updateUsername(userId, newUsername) {
    return this.dbWrite.prisma.user.update({
      where: { id: userId },
      data: {
        username: newUsername,
      },
    });
  }
  async delete(userId) {
    return this.dbWrite.prisma.user.delete({
      where: { id: userId },
    });
  }
  formatInput(userInput) {
    if (userInput.weekStart) {
      userInput.weekStart = userInput.weekStart;
    }
  }
  setDefaultSchedule(userId, scheduleId) {
    return this.dbWrite.prisma.user.update({
      where: { id: userId },
      data: {
        defaultScheduleId: scheduleId,
      },
    });
  }
  async getUserScheduleDefaultId(userId) {
    const user = await this.findById(userId);
    if (!user?.defaultScheduleId) return null;
    return user?.defaultScheduleId;
  }
  async getOrganizationUsers(organizationId) {
    const profiles = await this.dbRead.prisma.profile.findMany({
      where: {
        organizationId,
      },
      include: {
        user: true,
      },
    });
    return profiles.map((profile) => profile.user);
  }
};
UsersRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  UsersRepository
);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map
