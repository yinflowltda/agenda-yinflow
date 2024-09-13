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
exports.DestinationCalendarsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
let DestinationCalendarsRepository = class DestinationCalendarsRepository {
  constructor(dbWrite) {
    this.dbWrite = dbWrite;
  }
  async updateCalendar(integration, externalId, credentialId, userId, primaryEmail) {
    return await this.dbWrite.prisma.destinationCalendar.upsert({
      update: {
        integration,
        externalId,
        credentialId,
        primaryEmail,
      },
      create: {
        integration,
        externalId,
        credentialId,
        primaryEmail,
        userId,
      },
      where: {
        userId: userId,
      },
    });
  }
};
DestinationCalendarsRepository = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [prisma_write_service_1.PrismaWriteService])],
  DestinationCalendarsRepository
);
exports.DestinationCalendarsRepository = DestinationCalendarsRepository;
//# sourceMappingURL=destination-calendars.repository.js.map
