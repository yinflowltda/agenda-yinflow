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
exports.hasMinimumRole = exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const constants_1 = require("../../../../lib/roles/constants");
const roles_decorator_1 = require("../../decorators/roles/roles.decorator");
const memberships_repository_1 = require("../../../memberships/memberships.repository");
const redis_service_1 = require("../../../redis/redis.service");
let RolesGuard = class RolesGuard {
  constructor(reflector, membershipRepository, redisService) {
    this.reflector = reflector;
    this.membershipRepository = membershipRepository;
    this.redisService = redisService;
    this.logger = new common_1.Logger("RolesGuard Logger");
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const teamId = request.params.teamId;
    const orgId = request.params.orgId;
    const user = request.user;
    const allowedRole = this.reflector.get(roles_decorator_1.Roles, context.getHandler());
    const REDIS_CACHE_KEY = `apiv2:user:${user.id ?? "none"}:org:${orgId ?? "none"}:team:${
      teamId ?? "none"
    }:guard:roles:${allowedRole}`;
    const cachedAccess = JSON.parse((await this.redisService.redis.get(REDIS_CACHE_KEY)) ?? "false");
    if (cachedAccess) {
      return cachedAccess;
    }
    let canAccess = false;
    if (!user) {
      this.logger.log("User is not authenticated, denying access.");
      canAccess = false;
    } else if (user.isSystemAdmin) {
      this.logger.log(`User (${user.id}) is system admin, allowing access.`);
      canAccess = true;
    } else if (allowedRole === constants_1.SYSTEM_ADMIN_ROLE && !user.isSystemAdmin) {
      this.logger.log(`User (${user.id}) is not system admin, denying access.`);
      canAccess = false;
    } else if (Boolean(orgId) && !Boolean(teamId)) {
      const membership = await this.membershipRepository.findMembershipByOrgId(Number(orgId), user.id);
      if (!membership) {
        this.logger.log(`User (${user.id}) is not a member of the organization (${orgId}), denying access.`);
        throw new common_1.ForbiddenException(`User is not a member of the organization.`);
      }
      if (constants_1.ORG_ROLES.includes(allowedRole)) {
        canAccess = hasMinimumRole({
          checkRole: `ORG_${membership.role}`,
          minimumRole: allowedRole,
          roles: constants_1.ORG_ROLES,
        });
      }
    } else if (Boolean(teamId) && !Boolean(orgId)) {
      const membership = await this.membershipRepository.findMembershipByTeamId(Number(teamId), user.id);
      if (!membership) {
        this.logger.log(`User (${user.id}) is not a member of the team (${teamId}), denying access.`);
        throw new common_1.ForbiddenException(`User is not a member of the team.`);
      }
      if (constants_1.TEAM_ROLES.includes(allowedRole)) {
        canAccess = hasMinimumRole({
          checkRole: `TEAM_${membership.role}`,
          minimumRole: allowedRole,
          roles: constants_1.TEAM_ROLES,
        });
      }
    } else if (Boolean(teamId) && Boolean(orgId)) {
      const teamMembership = await this.membershipRepository.findMembershipByTeamId(Number(teamId), user.id);
      const orgMembership = await this.membershipRepository.findMembershipByOrgId(Number(orgId), user.id);
      if (!orgMembership) {
        this.logger.log(`User (${user.id}) is not part of the organization (${orgId}), denying access.`);
        throw new common_1.ForbiddenException(`User is not part of the organization.`);
      }
      if (constants_1.TEAM_ROLES.includes(allowedRole)) {
        if (`ORG_${orgMembership.role}` === "ORG_ADMIN" || `ORG_${orgMembership.role}` === "ORG_OWNER") {
          canAccess = true;
        } else {
          if (!teamMembership) {
            this.logger.log(
              `User (${user.id}) is not part of the team (${teamId}) and/or, is not an admin nor an owner of the organization (${orgId}).`
            );
            throw new common_1.ForbiddenException(
              "User is not part of the team and/or, is not an admin nor an owner of the organization."
            );
          }
          canAccess = hasMinimumRole({
            checkRole: `TEAM_${teamMembership.role}`,
            minimumRole: allowedRole,
            roles: constants_1.TEAM_ROLES,
          });
        }
      } else if (constants_1.ORG_ROLES.includes(allowedRole)) {
        canAccess = hasMinimumRole({
          checkRole: `ORG_${orgMembership.role}`,
          minimumRole: allowedRole,
          roles: constants_1.ORG_ROLES,
        });
      }
    }
    await this.redisService.redis.set(REDIS_CACHE_KEY, String(canAccess), "EX", 300);
    return canAccess;
  }
};
RolesGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      core_1.Reflector,
      memberships_repository_1.MembershipsRepository,
      redis_service_1.RedisService,
    ]),
  ],
  RolesGuard
);
exports.RolesGuard = RolesGuard;
function hasMinimumRole(props) {
  const checkedRoleIndex = props.roles.indexOf(props.checkRole);
  const requiredRoleIndex = props.roles.indexOf(props.minimumRole);
  if (checkedRoleIndex === -1 || requiredRoleIndex === -1) {
    throw new Error("Invalid role");
  }
  return checkedRoleIndex <= requiredRoleIndex;
}
exports.hasMinimumRole = hasMinimumRole;
//# sourceMappingURL=roles.guard.js.map
