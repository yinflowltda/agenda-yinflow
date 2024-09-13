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
exports.TimezoneModule = void 0;
const common_1 = require("@nestjs/common");
const redis_module_1 = require("../redis/redis.module");
const timezones_controller_1 = require("./controllers/timezones.controller");
const timezones_service_1 = require("./services/timezones.service");
let TimezoneModule = class TimezoneModule {};
TimezoneModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [redis_module_1.RedisModule],
      providers: [timezones_service_1.TimezonesService],
      controllers: [timezones_controller_1.TimezonesController],
      exports: [timezones_service_1.TimezonesService],
    }),
  ],
  TimezoneModule
);
exports.TimezoneModule = TimezoneModule;
//# sourceMappingURL=timezones.module.js.map
