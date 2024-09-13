"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWebhook = void 0;
const common_1 = require("@nestjs/common");
exports.GetWebhook = (0, common_1.createParamDecorator)((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  const webhook = request.webhook;
  if (!webhook) {
    throw new Error("GetWebhook decorator : Webhook not found");
  }
  if (Array.isArray(data)) {
    return data.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: webhook[curr],
      };
    }, {});
  }
  if (data) {
    return webhook[data];
  }
  return webhook;
});
//# sourceMappingURL=get-webhook-decorator.js.map
