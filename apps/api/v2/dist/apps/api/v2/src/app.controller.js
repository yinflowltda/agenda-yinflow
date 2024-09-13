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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const env_1 = require("./env");
let AppController = class AppController {
  getHealth() {
    return "OK";
  }
};
__decorate(
  [
    (0, common_1.Get)("health"),
    (0, common_1.Version)(common_1.VERSION_NEUTRAL),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String),
  ],
  AppController.prototype,
  "getHealth",
  null
);
AppController = __decorate(
  [
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)("Health - development only"),
    (0, swagger_1.ApiExcludeController)((0, env_1.getEnv)("NODE_ENV") === "production"),
  ],
  AppController
);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
