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
exports.CredentialsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
const platform_constants_1 = require("@calcom/platform-constants");
let CredentialsRepository = class CredentialsRepository {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async createAppCredential(type, key, userId) {
    const credential = await this.getByTypeAndUserId(type, userId);
    return this.dbWrite.prisma.credential.upsert({
      create: {
        type,
        key,
        userId,
        appId: platform_constants_1.APPS_TYPE_ID_MAPPING[type],
      },
      update: {
        key,
        invalid: false,
      },
      where: {
        id: credential?.id ?? 0,
      },
    });
  }
  getByTypeAndUserId(type, userId) {
    return this.dbWrite.prisma.credential.findFirst({ where: { type, userId } });
  }
  getUserCredentialsByIds(userId, credentialIds) {
    return this.dbRead.prisma.credential.findMany({
      where: {
        id: {
          in: credentialIds,
        },
        userId: userId,
      },
      select: {
        id: true,
        type: true,
        key: true,
        userId: true,
        teamId: true,
        appId: true,
        invalid: true,
        user: {
          select: {
            email: true,
          },
        },
      },
    });
  }
};
CredentialsRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  CredentialsRepository
);
exports.CredentialsRepository = CredentialsRepository;
//# sourceMappingURL=credentials.repository.js.map
