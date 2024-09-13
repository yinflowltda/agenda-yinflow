"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsUsersService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const email_service_1 = require("../../email/email.service");
const organizations_users_repository_1 = require("../repositories/organizations-users.repository");
const organizations_teams_service_1 = require("./organizations-teams.service");
const create_user_input_1 = require("../../users/inputs/create-user.input");
const platform_libraries_1 = require("@calcom/platform-libraries");
let OrganizationsUsersService = class OrganizationsUsersService {
  constructor(organizationsUsersRepository, organizationsTeamsService, emailService) {
    this.organizationsUsersRepository = organizationsUsersRepository;
    this.organizationsTeamsService = organizationsTeamsService;
    this.emailService = emailService;
  }
  async getUsers(orgId, emailInput, skip, take) {
    const emailArray = !emailInput ? [] : emailInput;
    const users = await this.organizationsUsersRepository.getOrganizationUsersByEmails(
      orgId,
      emailArray,
      skip,
      take
    );
    return users;
  }
  async createUser(org, userCreateBody, inviterName) {
    const userEmailCheck = await this.organizationsUsersRepository.getOrganizationUserByEmail(
      org.id,
      userCreateBody.email
    );
    if (userEmailCheck) throw new common_1.ConflictException("A user already exists with that email");
    if (userCreateBody.username) {
      await this.checkForUsernameConflicts(org.id, userCreateBody.username);
    }
    const usernameOrEmail = userCreateBody.username ? userCreateBody.username : userCreateBody.email;
    const createdUserCall = await (0, platform_libraries_1.createNewUsersConnectToOrgIfExists)({
      invitations: [
        {
          usernameOrEmail: usernameOrEmail,
          role: userCreateBody.organizationRole,
        },
      ],
      teamId: org.id,
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
    const updateUserBody = (0, class_transformer_1.plainToInstance)(
      create_user_input_1.CreateUserInput,
      userCreateBody,
      { strategy: "excludeAll" }
    );
    const user = await this.organizationsUsersRepository.updateOrganizationUser(
      org.id,
      createdUser.id,
      updateUserBody
    );
    await this.organizationsTeamsService.addUserToTeamEvents(user.id, org.id);
    await this.emailService.sendSignupToOrganizationEmail({
      usernameOrEmail,
      orgName: org.name,
      orgId: org.id,
      locale: user?.locale,
      inviterName,
    });
    return user;
  }
  async updateUser(orgId, userId, userUpdateBody) {
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
  async deleteUser(orgId, userId) {
    const user = await this.organizationsUsersRepository.deleteUser(orgId, userId);
    return user;
  }
  async checkForUsernameConflicts(orgId, username) {
    const isUsernameTaken = await this.organizationsUsersRepository.getOrganizationUserByUsername(
      orgId,
      username
    );
    if (isUsernameTaken) throw new common_1.ConflictException("Username is already taken");
  }
};
OrganizationsUsersService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_users_repository_1.OrganizationsUsersRepository,
      organizations_teams_service_1.OrganizationsTeamsService,
      email_service_1.EmailService,
    ]),
  ],
  OrganizationsUsersService
);
exports.OrganizationsUsersService = OrganizationsUsersService;
//# sourceMappingURL=organizations-users-service.js.map
