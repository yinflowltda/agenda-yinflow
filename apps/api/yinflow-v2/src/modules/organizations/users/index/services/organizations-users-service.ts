import { Injectable, ConflictException } from "@nestjs/common";
import { Team, CreationSource } from "@prisma/client";
import { plainToInstance } from "class-transformer";

import { createNewUsersConnectToOrgIfExists } from "@calcom/platform-libraries";

import { EmailService } from "../../../../email/email.service";
import { OrganizationsTeamsService } from "../../../../organizations/teams/index/services/organizations-teams.service";
import { CreateOrganizationUserInput } from "../../../../organizations/users/index/inputs/create-organization-user.input";
import { UpdateOrganizationUserInput } from "../../../../organizations/users/index/inputs/update-organization-user.input";
import { OrganizationsUsersRepository } from "../../../../organizations/users/index/organizations-users.repository";
import { CreateUserInput } from "../../../../users/inputs/create-user.input";

@Injectable()
export class OrganizationsUsersService {
  constructor(
    private readonly organizationsUsersRepository: OrganizationsUsersRepository,
    private readonly organizationsTeamsService: OrganizationsTeamsService,
    private readonly emailService: EmailService
  ) {}

  async getUsers(orgId: number, emailInput?: string[], skip?: number, take?: number) {
    const emailArray = !emailInput ? [] : emailInput;

    const users = await this.organizationsUsersRepository.getOrganizationUsersByEmails(
      orgId,
      emailArray,
      skip,
      take
    );

    return users;
  }

  async createUser(org: Team, userCreateBody: CreateOrganizationUserInput, inviterName: string) {
    // Check if email exists in the system
    const userEmailCheck = await this.organizationsUsersRepository.getOrganizationUserByEmail(
      org.id,
      userCreateBody.email
    );

    if (userEmailCheck) throw new ConflictException("A user already exists with that email");

    // Check if username is already in use in the org
    if (userCreateBody.username) {
      await this.checkForUsernameConflicts(org.id, userCreateBody.username);
    }

    const usernameOrEmail = userCreateBody.username ? userCreateBody.username : userCreateBody.email;

    // Create new org user
    const createdUserCall = await createNewUsersConnectToOrgIfExists({
      invitations: [
        {
          usernameOrEmail: usernameOrEmail,
          role: userCreateBody.organizationRole,
        },
      ],
      teamId: org.id,
      creationSource: CreationSource.API_V2,
      isOrg: true,
      parentId: null,
      autoAcceptEmailDomain: "not-required-for-this-endpoint",
      orgConnectInfoByUsernameOrEmail: {
        [usernameOrEmail]: {
          orgId: org.id,
          autoAccept: userCreateBody.autoAccept,
        },
      },
    });

    const createdUser = createdUserCall[0];

    // Update user fields that weren't included in createNewUsersConnectToOrgIfExists
    const updateUserBody = plainToInstance(CreateUserInput, userCreateBody, { strategy: "excludeAll" });

    // Update new user with other userCreateBody params
    const user = await this.organizationsUsersRepository.updateOrganizationUser(
      org.id,
      createdUser.id,
      updateUserBody
    );

    // Need to send email to new user to create password
    await this.emailService.sendSignupToOrganizationEmail({
      usernameOrEmail,
      orgName: org.name,
      orgId: org.id,
      locale: user?.locale,
      inviterName,
    });

    return user;
  }

  async updateUser(orgId: number, userId: number, userUpdateBody: UpdateOrganizationUserInput) {
    if (userUpdateBody.username) {
      await this.checkForUsernameConflicts(orgId, userUpdateBody.username);
    }

    const user = await this.organizationsUsersRepository.updateOrganizationUser(
      orgId,
      userId,
      userUpdateBody
    );
    return user;
  }

  async deleteUser(orgId: number, userId: number) {
    const user = await this.organizationsUsersRepository.deleteUser(orgId, userId);
    return user;
  }

  async checkForUsernameConflicts(orgId: number, username: string) {
    const isUsernameTaken = await this.organizationsUsersRepository.getOrganizationUserByUsername(
      orgId,
      username
    );

    if (isUsernameTaken) throw new ConflictException("Username is already taken");
  }
}
