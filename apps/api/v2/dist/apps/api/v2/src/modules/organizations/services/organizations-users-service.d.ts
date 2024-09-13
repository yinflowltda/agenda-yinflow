import { EmailService } from "src/modules/email/email.service";
import { CreateOrganizationUserInput } from "src/modules/organizations/inputs/create-organization-user.input";
import { UpdateOrganizationUserInput } from "src/modules/organizations/inputs/update-organization-user.input";
import { OrganizationsUsersRepository } from "src/modules/organizations/repositories/organizations-users.repository";
import { OrganizationsTeamsService } from "src/modules/organizations/services/organizations-teams.service";

import { Team } from "@calcom/prisma/client";

export declare class OrganizationsUsersService {
  private readonly organizationsUsersRepository;
  private readonly organizationsTeamsService;
  private readonly emailService;
  constructor(
    organizationsUsersRepository: OrganizationsUsersRepository,
    organizationsTeamsService: OrganizationsTeamsService,
    emailService: EmailService
  );
  getUsers(
    orgId: number,
    emailInput?: string[],
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
  createUser(
    org: Team,
    userCreateBody: CreateOrganizationUserInput,
    inviterName: string
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
  updateUser(
    orgId: number,
    userId: number,
    userUpdateBody: UpdateOrganizationUserInput
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
  checkForUsernameConflicts(orgId: number, username: string): Promise<void>;
}
