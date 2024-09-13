import { CreateOrganizationUserInput } from "src/modules/organizations/inputs/create-organization-user.input";
import { UpdateOrganizationUserInput } from "src/modules/organizations/inputs/update-organization-user.input";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

export declare class OrganizationsUsersRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  private filterOnOrgMembership;
  getOrganizationUsersByEmails(
    orgId: number,
    emailArray?: string[],
    skip?: number,
    take?: number
  ): Promise<
    {
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
    }[]
  >;
  getOrganizationUserByUsername(
    orgId: number,
    username: string
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
  } | null>;
  getOrganizationUserByEmail(
    orgId: number,
    email: string
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
  } | null>;
  createOrganizationUser(
    orgId: number,
    createUserBody: CreateOrganizationUserInput
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
  updateOrganizationUser(
    orgId: number,
    userId: number,
    updateUserBody: UpdateOrganizationUserInput
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
  deleteUser(
    orgId: number,
    userId: number
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
}
