"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const helmet_1 = require("helmet");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const prisma_exception_filter_1 = require("./filters/prisma-exception.filter");
const zod_exception_filter_1 = require("./filters/zod-exception.filter");
const platform_constants_1 = require("@calcom/platform-constants");
const trpc_exception_filter_1 = require("./filters/trpc-exception.filter");
const bootstrap = (app) => {
  app.enableShutdownHooks();
  app.enableVersioning({
    type: common_1.VersioningType.CUSTOM,
    extractor: (request) => {
      const headerVersion = request?.headers[platform_constants_1.CAL_API_VERSION_HEADER];
      if (headerVersion && platform_constants_1.API_VERSIONS.includes(headerVersion)) {
        return headerVersion;
      }
      return platform_constants_1.VERSION_2024_04_15;
    },
    defaultVersion: platform_constants_1.VERSION_2024_04_15,
  });
  app.use((0, helmet_1.default)());
  app.enableCors({
    origin: "*",
    methods: ["GET", "PATCH", "DELETE", "HEAD", "POST", "PUT", "OPTIONS"],
    allowedHeaders: [
      platform_constants_1.X_CAL_CLIENT_ID,
      platform_constants_1.X_CAL_SECRET_KEY,
      platform_constants_1.CAL_API_VERSION_HEADER,
      "Accept",
      "Authorization",
      "Content-Type",
      "Origin",
    ],
    maxAge: 86400,
  });
  app.useGlobalPipes(
    new common_1.ValidationPipe({
      whitelist: true,
      transform: true,
      validationError: {
        target: true,
        value: true,
      },
      exceptionFactory(errors) {
        return new common_1.BadRequestException({ errors });
      },
    })
  );
  app.useGlobalFilters(new prisma_exception_filter_1.PrismaExceptionFilter());
  app.useGlobalFilters(new zod_exception_filter_1.ZodExceptionFilter());
  app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
  app.useGlobalFilters(new trpc_exception_filter_1.TRPCExceptionFilter());
  app.use(cookieParser());
  return app;
};
exports.bootstrap = bootstrap;
//# sourceMappingURL=app.js.map
