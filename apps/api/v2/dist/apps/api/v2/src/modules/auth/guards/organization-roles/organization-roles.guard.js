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
exports.OrganizationRolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const membership_roles_decorator_1 = require("../../decorators/roles/membership-roles.decorator");
const memberships_repository_1 = require("../../../memberships/memberships.repository");
const organizations_service_1 = require("../../../organizations/services/organizations.service");
const users_service_1 = require("../../../users/services/users.service");
let OrganizationRolesGuard = class OrganizationRolesGuard {
  constructor(reflector, organizationsService, membershipRepository, usersService) {
    this.reflector = reflector;
    this.organizationsService = organizationsService;
    this.membershipRepository = membershipRepository;
    this.usersService = usersService;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const organizationId = user ? this.usersService.getUserMainOrgId(user) : null;
    if (!user || !organizationId) {
      throw new common_1.ForbiddenException("No organization associated with the user.");
    }
    await this.isPlatform(organizationId);
    const membership = await this.membershipRepository.findOrgUserMembership(organizationId, user.id);
    const allowedRoles = this.reflector.get(
      membership_roles_decorator_1.MembershipRoles,
      context.getHandler()
    );
    this.isMembershipAccepted(membership.accepted);
    this.isRoleAllowed(membership.role, allowedRoles);
    return true;
  }
  async isPlatform(organizationId) {
    const isPlatform = await this.organizationsService.isPlatform(organizationId);
    if (!isPlatform) {
      throw new common_1.ForbiddenException("Organization is not a platform (SHP).");
    }
  }
  isMembershipAccepted(accepted) {
    if (!accepted) {
      throw new common_1.ForbiddenException(`User has not accepted membership in the organization.`);
    }
  }
  isRoleAllowed(membershipRole, allowedRoles) {
    if (!allowedRoles?.length || !Object.keys(allowedRoles)?.length) {
      return true;
    }
    const hasRequiredRole = allowedRoles.includes(membershipRole);
    if (!hasRequiredRole) {
      throw new common_1.ForbiddenException(`User must have one of the roles: ${allowedRoles.join(", ")}.`);
    }
  }
};
OrganizationRolesGuard = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      core_1.Reflector,
      organizations_service_1.OrganizationsService,
      memberships_repository_1.MembershipsRepository,
      users_service_1.UsersService,
    ]),
  ],
  OrganizationRolesGuard
);
exports.OrganizationRolesGuard = OrganizationRolesGuard;
//# sourceMappingURL=organization-roles.guard.js.map
