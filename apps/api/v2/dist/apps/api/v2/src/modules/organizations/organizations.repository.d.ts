import { PlatformPlan } from "src/modules/billing/types";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";
import { StripeService } from "src/modules/stripe/stripe.service";

export declare class OrganizationsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  private readonly stripeService;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService, stripeService: StripeService);
  findById(organizationId: number): Promise<{
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
  } | null>;
  findByIdIncludeBilling(orgId: number): Promise<
    | ({
        platformBilling: {
          id: number;
          customerId: string;
          subscriptionId: string | null;
          plan: string;
          billingCycleStart: number | null;
          billingCycleEnd: number | null;
          overdue: boolean | null;
        } | null;
      } & {
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
      })
    | null
  >;
  createNewBillingRelation(orgId: number, plan?: PlatformPlan): Promise<string>;
  findTeamIdFromClientId(clientId: string): Promise<{
    id: number;
  }>;
  findPlatformOrgFromUserId(userId: number): Promise<{
    id: number;
    isPlatform: boolean;
    isOrganization: boolean;
  }>;
  findOrgUser(
    organizationId: number,
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
  } | null>;
  fetchOrgAdminApiStatus(organizationId: number): Promise<{
    isAdminAPIEnabled: boolean;
  } | null>;
}
