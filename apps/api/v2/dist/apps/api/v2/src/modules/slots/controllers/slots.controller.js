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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_versions_1 = require("../../../lib/api-versions");
const slots_service_1 = require("../services/slots.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_libraries_1 = require("@calcom/platform-libraries");
const platform_types_1 = require("@calcom/platform-types");
const platform_types_2 = require("@calcom/platform-types");
let SlotsController = class SlotsController {
  constructor(slotsService) {
    this.slotsService = slotsService;
  }
  async reserveSlot(body, res, req) {
    const uid = await this.slotsService.reserveSlot(body, req.cookies?.uid);
    res.cookie("uid", uid);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: uid,
    };
  }
  async deleteSelectedSlot(params, req) {
    const uid = req.cookies?.uid || params.uid;
    await this.slotsService.deleteSelectedslot(uid);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
  async getAvailableSlots(query, req) {
    const isTeamEvent = await this.slotsService.checkIfIsTeamEvent(query.eventTypeId);
    const availableSlots = await (0, platform_libraries_1.getAvailableSlots)({
      input: {
        ...query,
        isTeamEvent,
      },
      ctx: {
        req,
      },
    });
    return {
      data: availableSlots,
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/reserve"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_types_1.ReserveSlotInput, Object, Object]),
    __metadata("design:returntype", Promise),
  ],
  SlotsController.prototype,
  "reserveSlot",
  null
);
__decorate(
  [
    (0, common_1.Delete)("/selected-slot"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_types_1.RemoveSelectedSlotInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  SlotsController.prototype,
  "deleteSelectedSlot",
  null
);
__decorate(
  [
    (0, common_1.Get)("/available"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_types_2.GetAvailableSlotsInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  SlotsController.prototype,
  "getAvailableSlots",
  null
);
SlotsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/slots",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Slots"),
    __metadata("design:paramtypes", [slots_service_1.SlotsService]),
  ],
  SlotsController
);
exports.SlotsController = SlotsController;
//# sourceMappingURL=slots.controller.js.map
