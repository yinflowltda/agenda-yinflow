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
exports.OrganizationsEventTypesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../../prisma/prisma-read.service");
const prisma_write_service_1 = require("../../prisma/prisma-write.service");
let OrganizationsEventTypesRepository = class OrganizationsEventTypesRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async getTeamEventType(teamId, eventTypeId) {
    return this.dbRead.prisma.eventType.findUnique({
      where: {
        id: eventTypeId,
        teamId,
      },
      include: { users: true, schedule: true, hosts: true },
    });
  }
  async getTeamEventTypeBySlug(teamId, eventTypeSlug) {
    return this.dbRead.prisma.eventType.findUnique({
      where: {
        teamId_slug: {
          teamId,
          slug: eventTypeSlug,
        },
      },
      include: { users: true, schedule: true, hosts: true },
    });
  }
  async getTeamEventTypes(teamId) {
    return this.dbRead.prisma.eventType.findMany({
      where: {
        teamId,
      },
      include: { users: true, schedule: true, hosts: true },
    });
  }
  async getEventTypeById(eventTypeId) {
    return this.dbRead.prisma.eventType.findUnique({
      where: { id: eventTypeId },
      include: { users: true, schedule: true, hosts: true },
    });
  }
  async getEventTypeChildren(eventTypeId) {
    return this.dbRead.prisma.eventType.findMany({
      where: { parentId: eventTypeId },
      include: { users: true, schedule: true, hosts: true },
    });
  }
  async getTeamsEventTypes(orgId, skip, take) {
    return this.dbRead.prisma.eventType.findMany({
      where: {
        team: {
          parentId: orgId,
        },
      },
      skip,
      take,
      include: { users: true, schedule: true, hosts: true },
    });
  }
  async getEventTypeByIdWithChildren(eventTypeId) {
    return this.dbRead.prisma.eventType.findUnique({
      where: { id: eventTypeId },
      include: { children: true },
    });
  }
};
OrganizationsEventTypesRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  OrganizationsEventTypesRepository
);
exports.OrganizationsEventTypesRepository = OrganizationsEventTypesRepository;
//# sourceMappingURL=organizations-event-types.repository.js.map
