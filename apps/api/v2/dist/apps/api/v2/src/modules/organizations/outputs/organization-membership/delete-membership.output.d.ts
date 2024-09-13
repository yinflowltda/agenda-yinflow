import { OrgMembershipOutputDto } from "src/modules/organizations/outputs/organization-membership/membership.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export declare class DeleteOrgMembership {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: OrgMembershipOutputDto;
}
