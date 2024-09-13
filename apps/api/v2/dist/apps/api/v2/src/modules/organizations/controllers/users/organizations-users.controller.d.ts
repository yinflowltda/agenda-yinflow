import { CreateOrganizationUserInput } from "src/modules/organizations/inputs/create-organization-user.input";
import { GetOrganizationsUsersInput } from "src/modules/organizations/inputs/get-organization-users.input";
import { UpdateOrganizationUserInput } from "src/modules/organizations/inputs/update-organization-user.input";
import { GetOrganizationUsersOutput } from "src/modules/organizations/outputs/get-organization-users.output";
import { GetOrganizationUserOutput } from "src/modules/organizations/outputs/get-organization-users.output";
import { OrganizationsUsersService } from "src/modules/organizations/services/organizations-users-service";
import { UserWithProfile } from "src/modules/users/users.repository";

import { Team } from "@calcom/prisma/client";

export declare class OrganizationsUsersController {
  private readonly organizationsUsersService;
  constructor(organizationsUsersService: OrganizationsUsersService);
  getOrganizationsUsers(
    orgId: number,
    query: GetOrganizationsUsersInput
  ): Promise<GetOrganizationUsersOutput>;
  createOrganizationUser(
    orgId: number,
    org: Team,
    input: CreateOrganizationUserInput,
    inviter: UserWithProfile
  ): Promise<GetOrganizationUserOutput>;
  updateOrganizationUser(
    orgId: number,
    userId: number,
    org: Team,
    input: UpdateOrganizationUserInput
  ): Promise<GetOrganizationUserOutput>;
  deleteOrganizationUser(orgId: number, userId: number): Promise<GetOrganizationUserOutput>;
}
