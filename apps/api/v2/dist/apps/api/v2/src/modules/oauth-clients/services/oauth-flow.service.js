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
exports.OAuthFlowService = void 0;
const common_1 = require("@nestjs/common");
const luxon_1 = require("luxon");
const token_expired_exception_1 = require("../../auth/guards/api-auth/token-expired.exception");
const oauth_client_repository_1 = require("../oauth-client.repository");
const redis_service_1 = require("../../redis/redis.service");
const tokens_repository_1 = require("../../tokens/tokens.repository");
const platform_constants_1 = require("@calcom/platform-constants");
let OAuthFlowService = class OAuthFlowService {
  constructor(tokensRepository, oAuthClientRepository, redisService) {
    this.tokensRepository = tokensRepository;
    this.oAuthClientRepository = oAuthClientRepository;
    this.redisService = redisService;
    this.logger = new common_1.Logger("OAuthFlowService");
  }
  async propagateAccessToken(accessToken) {
    try {
      const ownerId = await this.tokensRepository.getAccessTokenOwnerId(accessToken);
      let expiry = await this.tokensRepository.getAccessTokenExpiryDate(accessToken);
      if (!expiry) {
        this.logger.warn(`Token for ${ownerId} had no expiry time, assuming it's new.`);
        expiry = luxon_1.DateTime.now().plus({ minute: 60 }).startOf("minute").toJSDate();
      }
      const cacheKey = this._generateActKey(accessToken);
      await this.redisService.redis.hmset(cacheKey, {
        ownerId: ownerId,
        expiresAt: expiry?.toJSON(),
      });
      await this.redisService.redis.expireat(cacheKey, Math.floor(expiry.getTime() / 1000));
    } catch (err) {
      this.logger.error("Access Token Propagation Failed, falling back to DB...", err);
    }
  }
  async getOwnerId(accessToken) {
    const cacheKey = this._generateOwnerIdKey(accessToken);
    try {
      const ownerId = await this.redisService.redis.get(cacheKey);
      if (ownerId) {
        return Number.parseInt(ownerId);
      }
    } catch (err) {
      this.logger.warn("Cache#getOwnerId fetch failed, falling back to DB...");
    }
    const ownerIdFromDb = await this.tokensRepository.getAccessTokenOwnerId(accessToken);
    if (!ownerIdFromDb) throw new Error("Invalid Access Token, not present in Redis or DB");
    void (await this.redisService.redis.setex(cacheKey, 3600, ownerIdFromDb));
    return ownerIdFromDb;
  }
  async validateAccessToken(secret) {
    const { status, cacheKey } = await this.readFromCache(secret);
    if (status === "CACHE_HIT") {
      return true;
    }
    const tokenExpiresAt = await this.tokensRepository.getAccessTokenExpiryDate(secret);
    if (!tokenExpiresAt) {
      throw new common_1.UnauthorizedException(platform_constants_1.INVALID_ACCESS_TOKEN);
    }
    if (new Date() > tokenExpiresAt) {
      throw new token_expired_exception_1.TokenExpiredException();
    }
    void (await this.redisService.redis.hmset(cacheKey, { expiresAt: tokenExpiresAt.toJSON() }));
    void (await this.redisService.redis.expireat(cacheKey, Math.floor(tokenExpiresAt.getTime() / 1000)));
    return true;
  }
  async readFromCache(secret) {
    const cacheKey = this._generateActKey(secret);
    const tokenData = await this.redisService.redis.hgetall(cacheKey);
    if (tokenData && new Date() < new Date(tokenData.expiresAt)) {
      return { status: "CACHE_HIT", cacheKey };
    }
    return { status: "CACHE_MISS", cacheKey };
  }
  async exchangeAuthorizationToken(tokenId, clientId, clientSecret) {
    const oauthClient = await this.oAuthClientRepository.getOAuthClientWithAuthTokens(
      tokenId,
      clientId,
      clientSecret
    );
    if (!oauthClient) {
      throw new common_1.BadRequestException("Invalid OAuth Client.");
    }
    const authorizationToken = oauthClient.authorizationTokens[0];
    if (!authorizationToken || !authorizationToken.owner.id) {
      throw new common_1.BadRequestException("Invalid Authorization Token.");
    }
    const { accessToken, refreshToken, accessTokenExpiresAt } = await this.tokensRepository.createOAuthTokens(
      clientId,
      authorizationToken.owner.id
    );
    await this.tokensRepository.invalidateAuthorizationToken(authorizationToken.id);
    void this.propagateAccessToken(accessToken);
    return {
      accessToken,
      accessTokenExpiresAt,
      refreshToken,
    };
  }
  async refreshToken(clientId, clientSecret, tokenSecret) {
    const oauthClient = await this.oAuthClientRepository.getOAuthClientWithRefreshSecret(
      clientId,
      clientSecret,
      tokenSecret
    );
    if (!oauthClient) {
      throw new common_1.BadRequestException("Invalid OAuthClient credentials.");
    }
    const currentRefreshToken = oauthClient.refreshToken[0];
    if (!currentRefreshToken) {
      throw new common_1.BadRequestException("Invalid refresh token");
    }
    const { accessToken, refreshToken } = await this.tokensRepository.refreshOAuthTokens(
      clientId,
      currentRefreshToken.secret,
      currentRefreshToken.userId
    );
    return {
      accessToken: accessToken.secret,
      accessTokenExpiresAt: accessToken.expiresAt,
      refreshToken: refreshToken.secret,
    };
  }
  _generateActKey(accessToken) {
    return `act_${accessToken}`;
  }
  _generateOwnerIdKey(accessToken) {
    return `owner_${accessToken}`;
  }
};
OAuthFlowService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      tokens_repository_1.TokensRepository,
      oauth_client_repository_1.OAuthClientRepository,
      redis_service_1.RedisService,
    ]),
  ],
  OAuthFlowService
);
exports.OAuthFlowService = OAuthFlowService;
//# sourceMappingURL=oauth-flow.service.js.map
