import { UsersRepository, UserWithProfile } from "src/modules/users/users.repository";

export declare class UsersService {
  private readonly usersRepository;
  constructor(usersRepository: UsersRepository);
  getByUsernames(usernames: string[]): Promise<
    ({
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
    } | null)[]
  >;
  getUserMainProfile(user: UserWithProfile):
    | ({
        id: number;
        uid: string;
        userId: number;
        organizationId: number;
        username: string;
        createdAt: Date;
        updatedAt: Date;
      } & {
        organization: Pick<
          {
            id: number;
            name: string;
            slug: string | null;
            logoUrl: string | null;
            calVideoLogo: string | null;
            appLogo: string | null;
            appIconLogo: string | null;
            bio: string | null;
            hideBranding: boolean;
            isPrivate: boolean;
            hideBookATeamMember: boolean;
            createdAt: Date;
            metadata: import("@prisma/client/runtime/library").JsonValue;
            theme: string | null;
            brandColor: string | null;
            darkBrandColor: string | null;
            bannerUrl: string | null;
            parentId: number | null;
            timeFormat: number | null;
            timeZone: string;
            weekStart: string;
            isOrganization: boolean;
            pendingPayment: boolean;
            isPlatform: boolean;
            createdByOAuthClientId: string | null;
            smsLockState: import(".prisma/client").$Enums.SMSLockState;
            smsLockReviewedByAdmin: boolean;
          },
          "name" | "id" | "isPlatform" | "slug"
        >;
      })
    | undefined;
  getUserMainOrgId(user: UserWithProfile): number | null;
  getUserProfileByOrgId(
    user: UserWithProfile,
    organizationId: number
  ):
    | ({
        id: number;
        uid: string;
        userId: number;
        organizationId: number;
        username: string;
        createdAt: Date;
        updatedAt: Date;
      } & {
        organization: Pick<
          {
            id: number;
            name: string;
            slug: string | null;
            logoUrl: string | null;
            calVideoLogo: string | null;
            appLogo: string | null;
            appIconLogo: string | null;
            bio: string | null;
            hideBranding: boolean;
            isPrivate: boolean;
            hideBookATeamMember: boolean;
            createdAt: Date;
            metadata: import("@prisma/client/runtime/library").JsonValue;
            theme: string | null;
            brandColor: string | null;
            darkBrandColor: string | null;
            bannerUrl: string | null;
            parentId: number | null;
            timeFormat: number | null;
            timeZone: string;
            weekStart: string;
            isOrganization: boolean;
            pendingPayment: boolean;
            isPlatform: boolean;
            createdByOAuthClientId: string | null;
            smsLockState: import(".prisma/client").$Enums.SMSLockState;
            smsLockReviewedByAdmin: boolean;
          },
          "name" | "id" | "isPlatform" | "slug"
        >;
      })
    | undefined;
}
