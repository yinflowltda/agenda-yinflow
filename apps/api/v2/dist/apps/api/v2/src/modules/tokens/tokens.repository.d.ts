import { PlatformAuthorizationToken } from "@prisma/client";
import { JwtService } from "src/modules/jwt/jwt.service";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class TokensRepository {
  private readonly dbRead;
  private readonly dbWrite;
  private readonly jwtService;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService, jwtService: JwtService);
  createAuthorizationToken(clientId: string, userId: number): Promise<PlatformAuthorizationToken>;
  invalidateAuthorizationToken(tokenId: string): Promise<{
    id: string;
    platformOAuthClientId: string;
    userId: number;
    createdAt: Date;
  }>;
  getAuthorizationTokenByClientUserIds(
    clientId: string,
    userId: number
  ): Promise<{
    id: string;
    platformOAuthClientId: string;
    userId: number;
    createdAt: Date;
  } | null>;
  createOAuthTokens(
    clientId: string,
    ownerId: number,
    deleteOld?: boolean
  ): Promise<{
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
  }>;
  getAccessTokenExpiryDate(accessTokenSecret: string): Promise<Date | undefined>;
  getAccessTokenOwnerId(accessTokenSecret: string): Promise<number | undefined>;
  refreshOAuthTokens(
    clientId: string,
    refreshTokenSecret: string,
    tokenUserId: number
  ): Promise<{
    accessToken: {
      id: number;
      secret: string;
      createdAt: Date;
      expiresAt: Date;
      platformOAuthClientId: string;
      userId: number;
    };
    refreshToken: {
      id: number;
      secret: string;
      createdAt: Date;
      expiresAt: Date;
      platformOAuthClientId: string;
      userId: number;
    };
  }>;
  getAccessTokenClient(accessToken: string): Promise<
    | {
        id: string;
        name: string;
        secret: string;
        permissions: number;
        logo: string | null;
        redirectUris: string[];
        organizationId: number;
        bookingRedirectUri: string | null;
        bookingCancelRedirectUri: string | null;
        bookingRescheduleRedirectUri: string | null;
        areEmailsEnabled: boolean;
        createdAt: Date;
      }
    | undefined
  >;
}
