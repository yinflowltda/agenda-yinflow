export declare class CreateOrgTeamDto {
  readonly name: string;
  readonly slug?: string;
  readonly logoUrl?: string;
  readonly calVideoLogo?: string;
  readonly appLogo?: string;
  readonly appIconLogo?: string;
  readonly bio?: string;
  readonly hideBranding?: boolean;
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
  readonly autoAcceptCreator?: boolean;
}
