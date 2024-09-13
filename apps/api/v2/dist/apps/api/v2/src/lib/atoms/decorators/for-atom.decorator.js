"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForAtom = void 0;
const common_1 = require("@nestjs/common");
exports.ForAtom = (0, common_1.createParamDecorator)((_data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.query.for === "atom";
});
//# sourceMappingURL=for-atom.decorator.js.map
