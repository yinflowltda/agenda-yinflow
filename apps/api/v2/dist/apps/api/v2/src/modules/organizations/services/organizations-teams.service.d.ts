import { MembershipsRepository } from "src/modules/memberships/memberships.repository";
import { CreateOrgTeamDto } from "src/modules/organizations/inputs/create-organization-team.input";
import { UpdateOrgTeamDto } from "src/modules/organizations/inputs/update-organization-team.input";
import { OrganizationsTeamsRepository } from "src/modules/organizations/repositories/organizations-teams.repository";
import { UserWithProfile } from "src/modules/users/users.repository";

export declare class OrganizationsTeamsService {
  private readonly organizationsTeamRepository;
  private readonly membershipsRepository;
  constructor(
    organizationsTeamRepository: OrganizationsTeamsRepository,
    membershipsRepository: MembershipsRepository
  );
  getPaginatedOrgUserTeams(
    organizationId: number,
    userId: number,
    skip?: number,
    take?: number
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
  getPaginatedOrgTeams(
    organizationId: number,
    skip?: number,
    take?: number
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
  createOrgTeam(
    organizationId: number,
    data: CreateOrgTeamDto,
    user: UserWithProfile
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
    data: CreateOrgTeamDto,
    user: UserWithProfile
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
  addUserToTeamEvents(userId: number, organizationId: number): Promise<void>;
  addUserToPlatformTeamEvents(userId: number, organizationId: number, oAuthClientId: string): Promise<void>;
}
