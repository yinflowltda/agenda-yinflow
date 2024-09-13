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
exports.CalendarsRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_read_service_1 = require("../../modules/prisma/prisma-read.service");
const prisma_write_service_1 = require("../../modules/prisma/prisma-write.service");
const credentialForCalendarRepositorySelect = client_1.Prisma.validator()({
  id: true,
  appId: true,
  type: true,
  userId: true,
  user: {
    select: {
      email: true,
    },
  },
  teamId: true,
  key: true,
  invalid: true,
});
let CalendarsRepository = class CalendarsRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async getCalendarCredentials(credentialId, userId) {
    return await this.dbRead.prisma.credential.findFirst({
      where: {
        id: credentialId,
        userId,
      },
      select: {
        ...credentialForCalendarRepositorySelect,
        app: {
          select: {
            slug: true,
            categories: true,
            dirName: true,
          },
        },
      },
    });
  }
  async deleteCredentials(credentialId) {
    return await this.dbWrite.prisma.credential.delete({
      where: {
        id: credentialId,
      },
    });
  }
};
CalendarsRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  CalendarsRepository
);
exports.CalendarsRepository = CalendarsRepository;
//# sourceMappingURL=calendars.repository.js.map
