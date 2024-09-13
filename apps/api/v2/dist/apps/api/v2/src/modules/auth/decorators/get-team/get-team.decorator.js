"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTeam = void 0;
const common_1 = require("@nestjs/common");
exports.GetTeam = (0, common_1.createParamDecorator)((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  const team = request.team;
  if (!team) {
    throw new Error("GetTeam decorator : Team not found");
  }
  if (Array.isArray(data)) {
    return data.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: team[curr],
      };
    }, {});
  }
  if (data) {
    return team[data];
  }
  return team;
});
//# sourceMappingURL=get-team.decorator.js.map
