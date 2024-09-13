import { MembershipRole } from "@prisma/client";

export declare class UpdateOrgTeamMembershipDto {
  readonly accepted?: boolean;
  readonly role?: MembershipRole;
  readonly disableImpersonation?: boolean;
}
