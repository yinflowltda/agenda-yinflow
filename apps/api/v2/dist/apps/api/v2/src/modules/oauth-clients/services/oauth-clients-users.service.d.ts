import { EventTypesService_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/services/event-types.service";
import { SchedulesService_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/services/schedules.service";
import { OrganizationsTeamsService } from "src/modules/organizations/services/organizations-teams.service";
import { TokensRepository } from "src/modules/tokens/tokens.repository";
import { CreateManagedUserInput } from "src/modules/users/inputs/create-managed-user.input";
import { UpdateManagedUserInput } from "src/modules/users/inputs/update-managed-user.input";
import { UsersRepository } from "src/modules/users/users.repository";

export declare class OAuthClientUsersService {
  private readonly userRepository;
  private readonly tokensRepository;
  private readonly eventTypesService;
  private readonly schedulesService;
  private readonly organizationsTeamsService;
  constructor(
    userRepository: UsersRepository,
    tokensRepository: TokensRepository,
    eventTypesService: EventTypesService_2024_04_15,
    schedulesService: SchedulesService_2024_04_15,
    organizationsTeamsService: OrganizationsTeamsService
  );
  createOauthClientUser(
    oAuthClientId: string,
    body: CreateManagedUserInput,
    isPlatformManaged: boolean,
    organizationId?: number
  ): Promise<{
    user: {
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
    };
    tokens: {
      accessToken: string;
      accessTokenExpiresAt: Date;
      refreshToken: string;
    };
  }>;
  managedUserExistsWithEmail(oAuthClientId: string, email: string): Promise<boolean>;
  updateOAuthClientUser(
    oAuthClientId: string,
    userId: number,
    body: UpdateManagedUserInput
  ): Promise<{
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
  }>;
  getOAuthUserEmail(oAuthClientId: string, userEmail: string): string;
}
