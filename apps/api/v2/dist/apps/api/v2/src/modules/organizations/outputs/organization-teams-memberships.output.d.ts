import { MembershipRole } from "@prisma/client";

import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class OrgTeamMembershipOutputDto {
  readonly id: number;
  readonly userId: number;
  readonly teamId: number;
  readonly accepted: boolean;
  readonly role: MembershipRole;
  readonly disableImpersonation?: boolean;
}
export declare class OrgTeamMembershipsOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: OrgTeamMembershipOutputDto[];
}
export declare class OrgTeamMembershipOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: OrgTeamMembershipOutputDto;
}
