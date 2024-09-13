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
exports.AppModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const nestjs_throttler_storage_redis_1 = require("nestjs-throttler-storage-redis");
const app_1 = require("./config/app");
const app_logger_middleware_1 = require("./middleware/app.logger.middleware");
const app_rewrites_middleware_1 = require("./middleware/app.rewrites.middleware");
const json_body_middleware_1 = require("./middleware/body/json.body.middleware");
const raw_body_middleware_1 = require("./middleware/body/raw.body.middleware");
const request_id_interceptor_1 = require("./middleware/request-ids/request-id.interceptor");
const request_id_middleware_1 = require("./middleware/request-ids/request-id.middleware");
const auth_module_1 = require("./modules/auth/auth.module");
const endpoints_module_1 = require("./modules/endpoints.module");
const jwt_module_1 = require("./modules/jwt/jwt.module");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const redis_module_1 = require("./modules/redis/redis.module");
const redis_service_1 = require("./modules/redis/redis.service");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
  configure(consumer) {
    consumer
      .apply(raw_body_middleware_1.RawBodyMiddleware)
      .forRoutes({
        path: "/api/v2/billing/webhook",
        method: common_1.RequestMethod.POST,
      })
      .apply(json_body_middleware_1.JsonBodyMiddleware)
      .forRoutes("*")
      .apply(request_id_middleware_1.RequestIdMiddleware)
      .forRoutes("*")
      .apply(app_logger_middleware_1.AppLoggerMiddleware)
      .forRoutes("*")
      .apply(app_rewrites_middleware_1.RewriterMiddleware)
      .forRoutes("/");
  }
};
AppModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        config_1.ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
          load: [app_1.default],
        }),
        redis_module_1.RedisModule,
        bull_1.BullModule.forRoot({
          redis: `${process.env.REDIS_URL}${process.env.NODE_ENV === "production" ? "?tls=true" : ""}`,
        }),
        throttler_1.ThrottlerModule.forRootAsync({
          imports: [redis_module_1.RedisModule],
          inject: [redis_service_1.RedisService],
          useFactory: (redisService) => ({
            throttlers: [
              {
                name: "long",
                ttl: (0, throttler_1.seconds)(60),
                limit: 120,
              },
            ],
            storage: new nestjs_throttler_storage_redis_1.ThrottlerStorageRedisService(redisService.redis),
          }),
        }),
        prisma_module_1.PrismaModule,
        endpoints_module_1.EndpointsModule,
        auth_module_1.AuthModule,
        jwt_module_1.JwtModule,
      ],
      controllers: [app_controller_1.AppController],
      providers: [
        {
          provide: core_1.APP_INTERCEPTOR,
          useClass: request_id_interceptor_1.ResponseInterceptor,
        },
        {
          provide: core_1.APP_GUARD,
          useClass: throttler_1.ThrottlerGuard,
        },
      ],
    }),
  ],
  AppModule
);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
