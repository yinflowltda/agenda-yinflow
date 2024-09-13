import { CreateOrgTeamDto } from "src/modules/organizations/inputs/create-organization-team.input";
import { UpdateOrgTeamDto } from "src/modules/organizations/inputs/update-organization-team.input";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";

export declare class OrganizationsTeamsRepository {
  private readonly dbRead;
  constructor(dbRead: PrismaReadService);
  findOrgTeam(
    organizationId: number,
    teamId: number
  ): Promise<{
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
  findOrgTeams(organizationId: number): Promise<
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
    }[]
  >;
  deleteOrgTeam(
    organizationId: number,
    teamId: number
  ): Promise<{
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
  }>;
  createOrgTeam(
    organizationId: number,
    data: CreateOrgTeamDto
  ): Promise<{
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
  }>;
  createPlatformOrgTeam(
    organizationId: number,
    oAuthClientId: string,
    data: CreateOrgTeamDto
  ): Promise<{
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
  }>;
  getPlatformOrgTeams(
    organizationId: number,
    oAuthClientId: string
  ): Promise<
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
    }[]
  >;
  updateOrgTeam(
    organizationId: number,
    teamId: number,
    data: UpdateOrgTeamDto
  ): Promise<{
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
  }>;
  findOrgTeamsPaginated(
    organizationId: number,
    skip: number,
    take: number
  ): Promise<
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
    }[]
  >;
  findOrgUserTeamsPaginated(
    organizationId: number,
    userId: number,
    skip: number,
    take: number
  ): Promise<
    ({
      members: {
        userId: number;
        accepted: boolean;
      }[];
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
    })[]
  >;
  getTeamMembersIds(teamId: number): Promise<number[]>;
}
