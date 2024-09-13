import type { PlatformOAuthClient } from "@prisma/client";
import { JwtService } from "src/modules/jwt/jwt.service";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

import type { CreateOAuthClientInput } from "@calcom/platform-types";

export declare class OAuthClientRepository {
  private readonly dbRead;
  private readonly dbWrite;
  private jwtService;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService, jwtService: JwtService);
  createOAuthClient(
    organizationId: number,
    data: CreateOAuthClientInput
  ): Promise<{
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
  }>;
  getOAuthClient(clientId: string): Promise<PlatformOAuthClient | null>;
  getOAuthClientWithAuthTokens(
    tokenId: string,
    clientId: string,
    clientSecret: string
  ): Promise<
    | ({
        authorizationTokens: ({
          owner: {
            id: number;
          };
        } & {
          id: string;
          platformOAuthClientId: string;
          userId: number;
          createdAt: Date;
        })[];
      } & {
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
      })
    | null
  >;
  getOAuthClientWithRefreshSecret(
    clientId: string,
    clientSecret: string,
    refreshToken: string
  ): Promise<
    | ({
        refreshToken: {
          id: number;
          secret: string;
          createdAt: Date;
          expiresAt: Date;
          platformOAuthClientId: string;
          userId: number;
        }[];
      } & {
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
      })
    | null
  >;
  getOrganizationOAuthClients(organizationId: number): Promise<PlatformOAuthClient[]>;
  updateOAuthClient(
    clientId: string,
    updateData: Partial<CreateOAuthClientInput>
  ): Promise<PlatformOAuthClient>;
  deleteOAuthClient(clientId: string): Promise<PlatformOAuthClient>;
}
