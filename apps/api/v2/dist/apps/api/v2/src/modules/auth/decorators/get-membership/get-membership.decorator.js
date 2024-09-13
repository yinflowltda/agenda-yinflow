"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMembership = void 0;
const common_1 = require("@nestjs/common");
exports.GetMembership = (0, common_1.createParamDecorator)((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  const membership = request.membership;
  if (!membership) {
    throw new Error("GetMembership decorator : Membership not found");
  }
  if (Array.isArray(data)) {
    return data.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: membership[curr],
      };
    }, {});
  }
  if (data) {
    return membership[data];
  }
  return membership;
});
//# sourceMappingURL=get-membership.decorator.js.map
