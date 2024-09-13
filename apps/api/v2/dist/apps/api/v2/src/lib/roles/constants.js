"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEAM_ROLES = exports.ORG_ROLES = exports.SYSTEM_ADMIN_ROLE = void 0;
const client_1 = require("@prisma/client");
exports.SYSTEM_ADMIN_ROLE = "SYSADMIN";
exports.ORG_ROLES = [
  `ORG_${client_1.MembershipRole.OWNER}`,
  `ORG_${client_1.MembershipRole.ADMIN}`,
  `ORG_${client_1.MembershipRole.MEMBER}`,
];
exports.TEAM_ROLES = [
  `TEAM_${client_1.MembershipRole.OWNER}`,
  `TEAM_${client_1.MembershipRole.ADMIN}`,
  `TEAM_${client_1.MembershipRole.MEMBER}`,
];
//# sourceMappingURL=constants.js.map
