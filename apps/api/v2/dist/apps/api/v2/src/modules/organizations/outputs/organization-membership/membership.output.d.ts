import { MembershipRole } from "@prisma/client";

export declare class OrgMembershipOutputDto {
  readonly id: number;
  readonly userId: number;
  readonly teamId: number;
  readonly accepted: boolean;
  readonly role: MembershipRole;
  readonly disableImpersonation?: boolean;
}
