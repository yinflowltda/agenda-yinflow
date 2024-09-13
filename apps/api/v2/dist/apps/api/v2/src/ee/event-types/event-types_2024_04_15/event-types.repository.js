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
exports.EventTypesRepository_2024_04_15 = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../../../modules/prisma/prisma-read.service");
const prisma_write_service_1 = require("../../../modules/prisma/prisma-write.service");
const users_service_1 = require("../../../modules/users/services/users.service");
const platform_libraries_1 = require("@calcom/platform-libraries");
let EventTypesRepository_2024_04_15 = class EventTypesRepository_2024_04_15 {
  constructor(dbRead, dbWrite, usersService) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
    this.usersService = usersService;
  }
  async createUserEventType(userId, body) {
    return this.dbWrite.prisma.eventType.create({
      data: {
        ...body,
        userId,
        users: { connect: { id: userId } },
      },
    });
  }
  async getEventTypeWithSeats(eventTypeId) {
    return this.dbRead.prisma.eventType.findUnique({
      where: { id: eventTypeId },
      select: { users: { select: { id: true } }, seatsPerTimeSlot: true },
    });
  }
  async getUserEventType(userId, eventTypeId) {
    return this.dbRead.prisma.eventType.findFirst({
      where: {
        id: eventTypeId,
        userId,
      },
    });
  }
  async getUserEventTypeForAtom(user, isUserOrganizationAdmin, eventTypeId) {
    return await (0, platform_libraries_1.getEventTypeById)({
      currentOrganizationId: this.usersService.getUserMainOrgId(user),
      eventTypeId,
      userId: user.id,
      prisma: this.dbRead.prisma,
      isUserOrganizationAdmin,
      isTrpcCall: true,
    });
  }
  async getEventTypeById(eventTypeId) {
    return this.dbRead.prisma.eventType.findUnique({ where: { id: eventTypeId } });
  }
  async getUserEventTypeBySlug(userId, slug) {
    return this.dbRead.prisma.eventType.findUnique({
      where: {
        userId_slug: {
          userId: userId,
          slug: slug,
        },
      },
    });
  }
  async deleteEventType(eventTypeId) {
    return this.dbWrite.prisma.eventType.delete({ where: { id: eventTypeId } });
  }
};
EventTypesRepository_2024_04_15 = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
      users_service_1.UsersService,
    ]),
  ],
  EventTypesRepository_2024_04_15
);
exports.EventTypesRepository_2024_04_15 = EventTypesRepository_2024_04_15;
//# sourceMappingURL=event-types.repository.js.map
