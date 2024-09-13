import { MembershipRole } from "@prisma/client";
import { CreateUserInput } from "src/modules/users/inputs/create-user.input";

export declare class CreateOrganizationUserInput extends CreateUserInput {
  locale: string;
  organizationRole: MembershipRole;
  autoAccept: boolean;
}
