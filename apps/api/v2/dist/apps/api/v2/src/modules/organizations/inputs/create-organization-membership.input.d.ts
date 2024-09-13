import { MembershipRole } from "@prisma/client";

export declare class CreateOrgMembershipDto {
  readonly userId: number;
  readonly accepted?: boolean;
  readonly role: MembershipRole;
  readonly disableImpersonation?: boolean;
}
