import { MembershipRole } from "@prisma/client";

export declare class UpdateOrgMembershipDto {
  readonly accepted?: boolean;
  readonly role?: MembershipRole;
  readonly disableImpersonation?: boolean;
}
