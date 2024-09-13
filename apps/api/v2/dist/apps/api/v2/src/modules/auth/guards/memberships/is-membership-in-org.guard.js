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
exports.IsMembershipInOrg = void 0;
const common_1 = require("@nestjs/common");
const organizations_membership_repository_1 = require("../../../organizations/repositories/organizations-membership.repository");
let IsMembershipInOrg = class IsMembershipInOrg {
  constructor(organizationsMembershipRepository) {
    this.organizationsMembershipRepository = organizationsMembershipRepository;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const membershipId = request.params.membershipId;
    const orgId = request.params.orgId;
    if (!orgId) {
      throw new common_1.ForbiddenException("No org id found in request params.");
    }
    if (!membershipId) {
      throw new common_1.ForbiddenException("No membership id found in request params.");
    }
    const membership = await this.organizationsMembershipRepository.findOrgMembership(
      Number(orgId),
      Number(membershipId)
    );
    if (!membership) {
      throw new common_1.NotFoundException(`Membership (${membershipId}) not found.`);
    }
    request.membership = membership;
    return true;
  }
};
IsMembershipInOrg = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_membership_repository_1.OrganizationsMembershipRepository,
    ]),
  ],
  IsMembershipInOrg
);
exports.IsMembershipInOrg = IsMembershipInOrg;
//# sourceMappingURL=is-membership-in-org.guard.js.map
