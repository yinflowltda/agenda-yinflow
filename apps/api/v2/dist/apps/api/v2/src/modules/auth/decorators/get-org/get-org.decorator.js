"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrg = void 0;
const common_1 = require("@nestjs/common");
exports.GetOrg = (0, common_1.createParamDecorator)((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  const organization = request.organization;
  if (!organization) {
    throw new Error("GetOrg decorator : Org not found");
  }
  if (Array.isArray(data)) {
    return data.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: organization[curr],
      };
    }, {});
  }
  if (data) {
    return organization[data];
  }
  return organization;
});
//# sourceMappingURL=get-org.decorator.js.map
