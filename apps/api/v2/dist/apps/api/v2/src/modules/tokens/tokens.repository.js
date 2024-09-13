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
exports.TokensRepository = void 0;
const common_1 = require("@nestjs/common");
const luxon_1 = require("luxon");
const jwt_service_1 = require("../jwt/jwt.service");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
let TokensRepository = class TokensRepository {
  constructor(dbRead, dbWrite, jwtService) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
    this.jwtService = jwtService;
  }
  async createAuthorizationToken(clientId, userId) {
    return this.dbWrite.prisma.platformAuthorizationToken.create({
      data: {
        client: {
          connect: {
            id: clientId,
          },
        },
        owner: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  async invalidateAuthorizationToken(tokenId) {
    return this.dbWrite.prisma.platformAuthorizationToken.delete({
      where: {
        id: tokenId,
      },
    });
  }
  async getAuthorizationTokenByClientUserIds(clientId, userId) {
    return this.dbRead.prisma.platformAuthorizationToken.findFirst({
      where: {
        platformOAuthClientId: clientId,
        userId: userId,
      },
    });
  }
  async createOAuthTokens(clientId, ownerId, deleteOld) {
    if (deleteOld) {
      try {
        await this.dbWrite.prisma.$transaction([
          this.dbWrite.prisma.accessToken.deleteMany({
            where: { client: { id: clientId }, userId: ownerId, expiresAt: { lte: new Date() } },
          }),
          this.dbWrite.prisma.refreshToken.deleteMany({
            where: {
              client: { id: clientId },
              userId: ownerId,
            },
          }),
        ]);
      } catch (err) {}
    }
    const accessExpiry = luxon_1.DateTime.now().plus({ minute: 60 }).startOf("minute").toJSDate();
    const refreshExpiry = luxon_1.DateTime.now().plus({ year: 1 }).startOf("day").toJSDate();
    const [accessToken, refreshToken] = await this.dbWrite.prisma.$transaction([
      this.dbWrite.prisma.accessToken.create({
        data: {
          secret: this.jwtService.signAccessToken({ clientId, ownerId }),
          expiresAt: accessExpiry,
          client: { connect: { id: clientId } },
          owner: { connect: { id: ownerId } },
        },
      }),
      this.dbWrite.prisma.refreshToken.create({
        data: {
          secret: this.jwtService.signRefreshToken({ clientId, ownerId }),
          expiresAt: refreshExpiry,
          client: { connect: { id: clientId } },
          owner: { connect: { id: ownerId } },
        },
      }),
    ]);
    return {
      accessToken: accessToken.secret,
      accessTokenExpiresAt: accessToken.expiresAt,
      refreshToken: refreshToken.secret,
    };
  }
  async getAccessTokenExpiryDate(accessTokenSecret) {
    const accessToken = await this.dbRead.prisma.accessToken.findFirst({
      where: {
        secret: accessTokenSecret,
      },
      select: {
        expiresAt: true,
      },
    });
    return accessToken?.expiresAt;
  }
  async getAccessTokenOwnerId(accessTokenSecret) {
    const accessToken = await this.dbRead.prisma.accessToken.findFirst({
      where: {
        secret: accessTokenSecret,
      },
      select: {
        userId: true,
      },
    });
    return accessToken?.userId;
  }
  async refreshOAuthTokens(clientId, refreshTokenSecret, tokenUserId) {
    const accessExpiry = luxon_1.DateTime.now().plus({ minute: 60 }).startOf("minute").toJSDate();
    const refreshExpiry = luxon_1.DateTime.now().plus({ year: 1 }).startOf("day").toJSDate();
    const [_, _refresh, accessToken, refreshToken] = await this.dbWrite.prisma.$transaction([
      this.dbWrite.prisma.accessToken.deleteMany({
        where: { client: { id: clientId }, expiresAt: { lte: new Date() } },
      }),
      this.dbWrite.prisma.refreshToken.delete({ where: { secret: refreshTokenSecret } }),
      this.dbWrite.prisma.accessToken.create({
        data: {
          secret: this.jwtService.signAccessToken({ clientId, userId: tokenUserId }),
          expiresAt: accessExpiry,
          client: { connect: { id: clientId } },
          owner: { connect: { id: tokenUserId } },
        },
      }),
      this.dbWrite.prisma.refreshToken.create({
        data: {
          secret: this.jwtService.signRefreshToken({ clientId, userId: tokenUserId }),
          expiresAt: refreshExpiry,
          client: { connect: { id: clientId } },
          owner: { connect: { id: tokenUserId } },
        },
      }),
    ]);
    return { accessToken, refreshToken };
  }
  async getAccessTokenClient(accessToken) {
    const token = await this.dbRead.prisma.accessToken.findFirst({
      where: {
        secret: accessToken,
      },
      select: {
        client: true,
      },
    });
    return token?.client;
  }
};
TokensRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
      jwt_service_1.JwtService,
    ]),
  ],
  TokensRepository
);
exports.TokensRepository = TokensRepository;
//# sourceMappingURL=tokens.repository.js.map
