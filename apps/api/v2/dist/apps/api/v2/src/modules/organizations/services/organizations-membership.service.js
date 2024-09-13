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
exports.OrganizationsMembershipService = void 0;
const common_1 = require("@nestjs/common");
const organizations_membership_repository_1 = require("../repositories/organizations-membership.repository");
let OrganizationsMembershipService = class OrganizationsMembershipService {
  constructor(organizationsMembershipRepository) {
    this.organizationsMembershipRepository = organizationsMembershipRepository;
  }
  async getOrgMembership(organizationId, membershipId) {
    const membership = await this.organizationsMembershipRepository.findOrgMembership(
      organizationId,
      membershipId
    );
    return membership;
  }
  async getPaginatedOrgMemberships(organizationId, skip = 0, take = 250) {
    const memberships = await this.organizationsMembershipRepository.findOrgMembershipsPaginated(
      organizationId,
      skip,
      take
    );
    return memberships;
  }
  async deleteOrgMembership(organizationId, membershipId) {
    const membership = await this.organizationsMembershipRepository.deleteOrgMembership(
      organizationId,
      membershipId
    );
    return membership;
  }
  async updateOrgMembership(organizationId, membershipId, data) {
    const membership = await this.organizationsMembershipRepository.updateOrgMembership(
      organizationId,
      membershipId,
      data
    );
    return membership;
  }
  async createOrgMembership(organizationId, data) {
    const membership = await this.organizationsMembershipRepository.createOrgMembership(organizationId, data);
    return membership;
  }
};
OrganizationsMembershipService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_membership_repository_1.OrganizationsMembershipRepository,
    ]),
  ],
  OrganizationsMembershipService
);
exports.OrganizationsMembershipService = OrganizationsMembershipService;
//# sourceMappingURL=organizations-membership.service.js.map
