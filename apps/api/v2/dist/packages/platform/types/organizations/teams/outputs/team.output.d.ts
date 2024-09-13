export declare class OrgTeamOutputDto {
  readonly id: number;
  readonly parentId?: number;
  readonly name: string;
  readonly slug?: string;
  readonly logoUrl?: string;
  readonly calVideoLogo?: string;
  readonly appLogo?: string;
  readonly appIconLogo?: string;
  readonly bio?: string;
  readonly hideBranding?: boolean;
  readonly isOrganization?: boolean;
  readonly isPrivate?: boolean;
  readonly hideBookATeamMember?: boolean;
  readonly metadata?: string;
  readonly theme?: string;
  readonly brandColor?: string;
  readonly darkBrandColor?: string;
  readonly bannerUrl?: string;
  readonly timeFormat?: number;
  readonly timeZone?: string;
  readonly weekStart?: string;
}
