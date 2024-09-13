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
exports.OAuthClientRepository = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../jwt/jwt.service");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
let OAuthClientRepository = class OAuthClientRepository {
  constructor(dbRead, dbWrite, jwtService) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
    this.jwtService = jwtService;
  }
  async createOAuthClient(organizationId, data) {
    return this.dbWrite.prisma.platformOAuthClient.create({
      data: {
        ...data,
        secret: this.jwtService.sign(data),
        organizationId,
      },
    });
  }
  async getOAuthClient(clientId) {
    return this.dbRead.prisma.platformOAuthClient.findUnique({
      where: { id: clientId },
    });
  }
  async getOAuthClientWithAuthTokens(tokenId, clientId, clientSecret) {
    return this.dbRead.prisma.platformOAuthClient.findUnique({
      where: {
        id: clientId,
        secret: clientSecret,
        authorizationTokens: {
          some: {
            id: tokenId,
          },
        },
      },
      include: {
        authorizationTokens: {
          where: {
            id: tokenId,
          },
          include: {
            owner: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });
  }
  async getOAuthClientWithRefreshSecret(clientId, clientSecret, refreshToken) {
    return this.dbRead.prisma.platformOAuthClient.findFirst({
      where: {
        id: clientId,
        secret: clientSecret,
      },
      include: {
        refreshToken: {
          where: {
            secret: refreshToken,
          },
        },
      },
    });
  }
  async getOrganizationOAuthClients(organizationId) {
    return this.dbRead.prisma.platformOAuthClient.findMany({
      where: {
        organization: {
          id: organizationId,
        },
      },
    });
  }
  async updateOAuthClient(clientId, updateData) {
    return this.dbWrite.prisma.platformOAuthClient.update({
      where: { id: clientId },
      data: updateData,
    });
  }
  async deleteOAuthClient(clientId) {
    return this.dbWrite.prisma.platformOAuthClient.delete({
      where: { id: clientId },
    });
  }
};
OAuthClientRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
      jwt_service_1.JwtService,
    ]),
  ],
  OAuthClientRepository
);
exports.OAuthClientRepository = OAuthClientRepository;
//# sourceMappingURL=oauth-client.repository.js.map
