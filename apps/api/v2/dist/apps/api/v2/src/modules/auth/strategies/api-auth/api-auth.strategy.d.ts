/// <reference types="cookie-parser" />
import { ConfigService } from "@nestjs/config";
import type { Request } from "express";
import { BaseStrategy } from "src/lib/passport/strategies/types";
import { ApiKeyRepository } from "src/modules/api-key/api-key-repository";
import { DeploymentsService } from "src/modules/deployments/deployments.service";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { OAuthFlowService } from "src/modules/oauth-clients/services/oauth-flow.service";
import { ProfilesRepository } from "src/modules/profiles/profiles.repository";
import { TokensRepository } from "src/modules/tokens/tokens.repository";
import { UserWithProfile, UsersRepository } from "src/modules/users/users.repository";

declare const ApiAuthStrategy_base: new (...args: any[]) => BaseStrategy;
export declare class ApiAuthStrategy extends ApiAuthStrategy_base {
  private readonly deploymentsService;
  private readonly config;
  private readonly oauthFlowService;
  private readonly tokensRepository;
  private readonly userRepository;
  private readonly apiKeyRepository;
  private readonly oauthRepository;
  private readonly profilesRepository;
  constructor(
    deploymentsService: DeploymentsService,
    config: ConfigService,
    oauthFlowService: OAuthFlowService,
    tokensRepository: TokensRepository,
    userRepository: UsersRepository,
    apiKeyRepository: ApiKeyRepository,
    oauthRepository: OAuthClientRepository,
    profilesRepository: ProfilesRepository
  );
  authenticate(request: Request): Promise<void>;
  authenticateNextAuth(token: { email?: string | null }): Promise<void>;
  authenticateOAuthClient(oAuthClientId: string, oAuthClientSecret: string): Promise<void>;
  oAuthClientStrategy(oAuthClientId: string, oAuthClientSecret: string): Promise<UserWithProfile>;
  authenticateBearerToken(authString: string, requestOrigin: string | undefined): Promise<void>;
  apiKeyStrategy(apiKey: string): Promise<UserWithProfile | null>;
  accessTokenStrategy(accessToken: string, origin?: string): Promise<UserWithProfile | null>;
  nextAuthStrategy(token: { email?: string | null }): Promise<
    {
      profiles: ({
        organization: {
          name: string;
          id: number;
          isPlatform: boolean;
          slug: string | null;
        };
      } & {
        id: number;
        uid: string;
        userId: number;
        organizationId: number;
        username: string;
        createdAt: Date;
        updatedAt: Date;
      })[];
      movedToProfile:
        | ({
            organization: {
              name: string;
              id: number;
              isPlatform: boolean;
              slug: string | null;
            };
          } & {
            id: number;
            uid: string;
            userId: number;
            organizationId: number;
            username: string;
            createdAt: Date;
            updatedAt: Date;
          })
        | null;
    } & {
      id: number;
      username: string | null;
      name: string | null;
      email: string;
      emailVerified: Date | null;
      bio: string | null;
      avatarUrl: string | null;
      timeZone: string;
      weekStart: string;
      startTime: number;
      endTime: number;
      bufferTime: number;
      hideBranding: boolean;
      theme: string | null;
      appTheme: string | null;
      createdDate: Date;
      trialEndsAt: Date | null;
      defaultScheduleId: number | null;
      completedOnboarding: boolean;
      locale: string | null;
      timeFormat: number | null;
      twoFactorSecret: string | null;
      twoFactorEnabled: boolean;
      backupCodes: string | null;
      identityProvider: import(".prisma/client").$Enums.IdentityProvider;
      identityProviderId: string | null;
      invitedTo: number | null;
      brandColor: string | null;
      darkBrandColor: string | null;
      allowDynamicBooking: boolean | null;
      allowSEOIndexing: boolean | null;
      receiveMonthlyDigestEmail: boolean | null;
      metadata: import("@prisma/client/runtime/library").JsonValue;
      verified: boolean | null;
      role: import(".prisma/client").$Enums.UserPermissionRole;
      disableImpersonation: boolean;
      organizationId: number | null;
      locked: boolean;
      movedToProfileId: number | null;
      isPlatformManaged: boolean;
      smsLockState: import(".prisma/client").$Enums.SMSLockState;
      smsLockReviewedByAdmin: boolean;
    }
  >;
}
export {};
