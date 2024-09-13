import { MembershipRole } from "@prisma/client";

export declare class CreateOrgTeamMembershipDto {
  readonly userId: number;
  readonly accepted?: boolean;
  readonly role: MembershipRole;
  readonly disableImpersonation?: boolean;
}
