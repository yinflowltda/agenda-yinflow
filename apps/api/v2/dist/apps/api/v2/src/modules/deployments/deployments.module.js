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
exports.DeploymentsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const redis_service_1 = require("../redis/redis.service");
const deployments_repository_1 = require("./deployments.repository");
const deployments_service_1 = require("./deployments.service");
let DeploymentsModule = class DeploymentsModule {};
DeploymentsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [prisma_module_1.PrismaModule],
      providers: [
        deployments_repository_1.DeploymentsRepository,
        deployments_service_1.DeploymentsService,
        redis_service_1.RedisService,
      ],
      exports: [deployments_repository_1.DeploymentsRepository, deployments_service_1.DeploymentsService],
    }),
  ],
  DeploymentsModule
);
exports.DeploymentsModule = DeploymentsModule;
//# sourceMappingURL=deployments.module.js.map
