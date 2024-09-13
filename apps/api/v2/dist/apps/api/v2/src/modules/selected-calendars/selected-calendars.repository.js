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
exports.SelectedCalendarsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
let SelectedCalendarsRepository = class SelectedCalendarsRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  createSelectedCalendar(externalId, credentialId, userId, integration) {
    return this.dbWrite.prisma.selectedCalendar.upsert({
      create: {
        userId,
        externalId,
        credentialId,
        integration,
      },
      update: {
        userId,
        externalId,
        credentialId,
        integration,
      },
      where: {
        userId_integration_externalId: {
          userId,
          integration,
          externalId,
        },
      },
    });
  }
  getUserSelectedCalendars(userId) {
    return this.dbRead.prisma.selectedCalendar.findMany({
      where: {
        userId,
      },
    });
  }
  async addUserSelectedCalendar(userId, integration, externalId, credentialId) {
    return await this.dbWrite.prisma.selectedCalendar.upsert({
      where: {
        userId_integration_externalId: {
          userId,
          integration,
          externalId,
        },
      },
      create: {
        userId,
        integration,
        externalId,
        credentialId,
      },
      update: {},
    });
  }
  async removeUserSelectedCalendar(userId, integration, externalId) {
    return await this.dbWrite.prisma.selectedCalendar.delete({
      where: {
        userId_integration_externalId: {
          userId,
          externalId,
          integration,
        },
      },
    });
  }
};
SelectedCalendarsRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  SelectedCalendarsRepository
);
exports.SelectedCalendarsRepository = SelectedCalendarsRepository;
//# sourceMappingURL=selected-calendars.repository.js.map
