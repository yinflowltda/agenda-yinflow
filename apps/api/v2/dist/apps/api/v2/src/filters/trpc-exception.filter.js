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
exports.TRPCExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_libraries_1 = require("@calcom/platform-libraries");
let TRPCExceptionFilter = class TRPCExceptionFilter {
  constructor() {
    this.logger = new common_1.Logger("TRPCExceptionFilter");
  }
  catch(exception, host) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let statusCode = 500;
    switch (exception.code) {
      case "UNAUTHORIZED":
        statusCode = 401;
        break;
      case "FORBIDDEN":
        statusCode = 403;
        break;
      case "NOT_FOUND":
        statusCode = 404;
        break;
      case "INTERNAL_SERVER_ERROR":
        statusCode = 500;
        break;
      case "BAD_REQUEST":
        statusCode = 400;
        break;
      case "CONFLICT":
        statusCode = 409;
        break;
      case "TOO_MANY_REQUESTS":
        statusCode = 429;
      default:
        statusCode = 500;
        break;
    }
    const requestId = request.headers["X-Request-Id"];
    this.logger.error(`TRPC Exception Filter: ${exception?.message}`, {
      exception,
      body: request.body,
      headers: request.headers,
      url: request.url,
      method: request.method,
      requestId,
    });
    response.status(statusCode).json({
      status: platform_constants_1.ERROR_STATUS,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: { code: exception.name, message: exception.message },
    });
  }
};
TRPCExceptionFilter = __decorate([(0, common_1.Catch)(platform_libraries_1.TRPCError)], TRPCExceptionFilter);
exports.TRPCExceptionFilter = TRPCExceptionFilter;
//# sourceMappingURL=trpc-exception.filter.js.map
