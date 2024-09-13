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
exports.PrismaExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const platform_constants_1 = require("@calcom/platform-constants");
let PrismaExceptionFilter = class PrismaExceptionFilter {
  constructor() {
    this.logger = new common_1.Logger("PrismaExceptionFilter");
  }
  catch(error, host) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const requestId = request.headers["X-Request-Id"];
    this.logger.error(`PrismaError: ${error.message}`, {
      error,
      body: request.body,
      headers: request.headers,
      url: request.url,
      method: request.method,
      requestId,
    });
    response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: platform_constants_1.ERROR_STATUS,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: {
        code: platform_constants_1.INTERNAL_SERVER_ERROR,
        message: "There was an error, please try again later.",
      },
    });
  }
};
PrismaExceptionFilter = __decorate(
  [
    (0, common_1.Catch)(
      library_1.PrismaClientInitializationError,
      library_1.PrismaClientKnownRequestError,
      library_1.PrismaClientRustPanicError,
      library_1.PrismaClientUnknownRequestError,
      library_1.PrismaClientValidationError
    ),
  ],
  PrismaExceptionFilter
);
exports.PrismaExceptionFilter = PrismaExceptionFilter;
//# sourceMappingURL=prisma-exception.filter.js.map
