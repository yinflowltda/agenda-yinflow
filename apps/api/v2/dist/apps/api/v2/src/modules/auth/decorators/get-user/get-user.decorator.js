"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;
  if (!user) {
    throw new Error("GetUser decorator : User not found");
  }
  user.isSystemAdmin = user.role === "ADMIN";
  if (Array.isArray(data)) {
    return data.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: user[curr],
      };
    }, {});
  }
  if (data) {
    return user[data];
  }
  return user;
});
//# sourceMappingURL=get-user.decorator.js.map
