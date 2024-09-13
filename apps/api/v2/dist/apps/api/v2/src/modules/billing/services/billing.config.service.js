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
exports.BillingConfigService = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("../types");
let BillingConfigService = class BillingConfigService {
  constructor() {
    this.config = new Map();
    const planKeys = Object.keys(types_1.PlatformPlan).filter((key) => isNaN(Number(key)));
    for (const key of planKeys) {
      this.config.set(types_1.PlatformPlan[key.toUpperCase()], {
        base: process.env[`STRIPE_PRICE_ID_${key}`] ?? "",
        overage: process.env[`STRIPE_PRICE_ID_${key}_OVERAGE`] ?? "",
      });
    }
  }
  get(plan) {
    return this.config.get(plan);
  }
};
BillingConfigService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [])],
  BillingConfigService
);
exports.BillingConfigService = BillingConfigService;
//# sourceMappingURL=billing.config.service.js.map
