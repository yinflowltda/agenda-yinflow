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
exports.OAuthClientUsersService = void 0;
const common_1 = require("@nestjs/common");
const event_types_service_1 = require("../../../ee/event-types/event-types_2024_04_15/services/event-types.service");
const schedules_service_1 = require("../../../ee/schedules/schedules_2024_04_15/services/schedules.service");
const organizations_teams_service_1 = require("../../organizations/services/organizations-teams.service");
const tokens_repository_1 = require("../../tokens/tokens.repository");
const users_repository_1 = require("../../users/users.repository");
const platform_libraries_1 = require("@calcom/platform-libraries");
let OAuthClientUsersService = class OAuthClientUsersService {
  constructor(
    userRepository,
    tokensRepository,
    eventTypesService,
    schedulesService,
    organizationsTeamsService
  ) {
    this.userRepository = userRepository;
    this.tokensRepository = tokensRepository;
    this.eventTypesService = eventTypesService;
    this.schedulesService = schedulesService;
    this.organizationsTeamsService = organizationsTeamsService;
  }
  async createOauthClientUser(oAuthClientId, body, isPlatformManaged, organizationId) {
    const existsWithEmail = await this.managedUserExistsWithEmail(oAuthClientId, body.email);
    if (existsWithEmail) {
      throw new common_1.BadRequestException("User with the provided e-mail already exists.");
    }
    let user;
    if (!organizationId) {
      throw new common_1.BadRequestException("You cannot create a managed user outside of an organization");
    } else {
      const email = this.getOAuthUserEmail(oAuthClientId, body.email);
      user = (
        await (0, platform_libraries_1.createNewUsersConnectToOrgIfExists)({
          invitations: [
            {
              usernameOrEmail: email,
              role: "MEMBER",
            },
          ],
          teamId: organizationId,
          isOrg: true,
          parentId: null,
          autoAcceptEmailDomain: "never-auto-accept-email-domain-for-managed-users",
          orgConnectInfoByUsernameOrEmail: {
            [email]: {
              orgId: organizationId,
              autoAccept: true,
            },
          },
          isPlatformManaged,
          timeFormat: body.timeFormat,
          weekStart: body.weekStart,
          timeZone: body.timeZone,
        })
      )[0];
      await this.userRepository.addToOAuthClient(user.id, oAuthClientId);
      const updatedUser = await this.userRepository.update(user.id, {
        name: body.name ?? user.username ?? undefined,
        locale: body.locale,
      });
      user.locale = updatedUser.locale;
    }
    const { accessToken, refreshToken, accessTokenExpiresAt } = await this.tokensRepository.createOAuthTokens(
      oAuthClientId,
      user.id
    );
    await this.eventTypesService.createUserDefaultEventTypes(user.id);
    if (body.timeZone) {
      const defaultSchedule = await this.schedulesService.createUserDefaultSchedule(user.id, body.timeZone);
      user.defaultScheduleId = defaultSchedule.id;
    }
    await this.organizationsTeamsService.addUserToPlatformTeamEvents(user.id, organizationId, oAuthClientId);
    return {
      user,
      tokens: {
        accessToken,
        accessTokenExpiresAt,
        refreshToken,
      },
    };
  }
  async managedUserExistsWithEmail(oAuthClientId, email) {
    const oAuthEmail = this.getOAuthUserEmail(oAuthClientId, email);
    const user = await this.userRepository.findByEmail(oAuthEmail);
    return !!user;
  }
  async updateOAuthClientUser(oAuthClientId, userId, body) {
    if (body.email) {
      const emailWithOAuthId = this.getOAuthUserEmail(oAuthClientId, body.email);
      body.email = emailWithOAuthId;
      const newUsername = (0, platform_libraries_1.slugify)(emailWithOAuthId);
      await this.userRepository.updateUsername(userId, newUsername);
    }
    return this.userRepository.update(userId, body);
  }
  getOAuthUserEmail(oAuthClientId, userEmail) {
    const [username, emailDomain] = userEmail.split("@");
    return `${username}+${oAuthClientId}@${emailDomain}`;
  }
};
OAuthClientUsersService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      users_repository_1.UsersRepository,
      tokens_repository_1.TokensRepository,
      event_types_service_1.EventTypesService_2024_04_15,
      schedules_service_1.SchedulesService_2024_04_15,
      organizations_teams_service_1.OrganizationsTeamsService,
    ]),
  ],
  OAuthClientUsersService
);
exports.OAuthClientUsersService = OAuthClientUsersService;
//# sourceMappingURL=oauth-clients-users.service.js.map
