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
exports.IsUserInOrg = void 0;
const common_1 = require("@nestjs/common");
const organizations_repository_1 = require("../../../organizations/organizations.repository");
let IsUserInOrg = class IsUserInOrg {
  constructor(organizationsRepository) {
    this.organizationsRepository = organizationsRepository;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const orgId = request.params.orgId;
    const userId = request.params.userId;
    if (!userId) {
      throw new common_1.ForbiddenException("No user id found in request params.");
    }
    if (!orgId) {
      throw new common_1.ForbiddenException("No org id found in request params.");
    }
    const user = await this.organizationsRepository.findOrgUser(Number(orgId), Number(userId));
    if (user) {
      request.user = user;
      return true;
    }
    return false;
  }
};
IsUserInOrg = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [organizations_repository_1.OrganizationsRepository]),
  ],
  IsUserInOrg
);
exports.IsUserInOrg = IsUserInOrg;
//# sourceMappingURL=is-user-in-org.guard.js.map
