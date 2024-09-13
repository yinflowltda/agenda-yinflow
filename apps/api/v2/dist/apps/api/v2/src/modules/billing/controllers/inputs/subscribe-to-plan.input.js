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
exports.SubscribeToPlanInput = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const types_1 = require("../../types");
class SubscribeToPlanInput {
  static _OPENAPI_METADATA_FACTORY() {
    return { plan: { required: true, enum: require("../../types").PlatformPlan } };
  }
}
__decorate(
  [(0, class_validator_1.IsEnum)(types_1.PlatformPlan), __metadata("design:type", String)],
  SubscribeToPlanInput.prototype,
  "plan",
  void 0
);
exports.SubscribeToPlanInput = SubscribeToPlanInput;
//# sourceMappingURL=subscribe-to-plan.input.js.map
