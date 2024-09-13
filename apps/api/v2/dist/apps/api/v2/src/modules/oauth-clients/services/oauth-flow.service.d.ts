import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { RedisService } from "src/modules/redis/redis.service";
import { TokensRepository } from "src/modules/tokens/tokens.repository";

export declare class OAuthFlowService {
  private readonly tokensRepository;
  private readonly oAuthClientRepository;
  private readonly redisService;
  private logger;
  constructor(
    tokensRepository: TokensRepository,
    oAuthClientRepository: OAuthClientRepository,
    redisService: RedisService
  );
  propagateAccessToken(accessToken: string): Promise<void>;
  getOwnerId(accessToken: string): Promise<number>;
  validateAccessToken(secret: string): Promise<boolean>;
  private readFromCache;
  exchangeAuthorizationToken(
    tokenId: string,
    clientId: string,
    clientSecret: string
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
  }>;
  refreshToken(
    clientId: string,
    clientSecret: string,
    tokenSecret: string
  ): Promise<{
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
  }>;
  private _generateActKey;
  private _generateOwnerIdKey;
}
