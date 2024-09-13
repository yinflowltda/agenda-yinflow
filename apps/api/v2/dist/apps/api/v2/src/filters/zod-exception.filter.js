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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const platform_constants_1 = require("@calcom/platform-constants");
let ZodExceptionFilter = class ZodExceptionFilter {
  constructor() {
    this.logger = new common_1.Logger("ZodExceptionFilter");
  }
  catch(error, host) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const requestId = request.headers["X-Request-Id"];
    this.logger.error(`ZodError: ${error.message}`, {
      error,
      body: request.body,
      headers: request.headers,
      url: request.url,
      method: request.method,
      requestId,
    });
    response.status(common_1.HttpStatus.BAD_REQUEST).json({
      status: platform_constants_1.ERROR_STATUS,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: {
        code: platform_constants_1.BAD_REQUEST,
        message: error.issues.reduce(
          (acc, issue) => `${issue.path.join(".")} - ${issue.message}, ${acc}`,
          ""
        ),
      },
    });
  }
};
ZodExceptionFilter = __decorate([(0, common_1.Catch)(zod_1.ZodError)], ZodExceptionFilter);
exports.ZodExceptionFilter = ZodExceptionFilter;
//# sourceMappingURL=zod-exception.filter.js.map
