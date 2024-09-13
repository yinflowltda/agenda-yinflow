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
exports.TimezonesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_versions_1 = require("../../../lib/api-versions");
const timezones_service_1 = require("../services/timezones.service");
const platform_constants_1 = require("@calcom/platform-constants");
let TimezonesController = class TimezonesController {
  constructor(timezonesService) {
    this.timezonesService = timezonesService;
  }
  async getTimeZones() {
    const timeZones = await this.timezonesService.getCityTimeZones();
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: timeZones,
    };
  }
};
__decorate(
  [
    (0, common_1.Get)("/"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise),
  ],
  TimezonesController.prototype,
  "getTimeZones",
  null
);
TimezonesController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/timezones",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Timezones"),
    __metadata("design:paramtypes", [timezones_service_1.TimezonesService]),
  ],
  TimezonesController
);
exports.TimezonesController = TimezonesController;
//# sourceMappingURL=timezones.controller.js.map
