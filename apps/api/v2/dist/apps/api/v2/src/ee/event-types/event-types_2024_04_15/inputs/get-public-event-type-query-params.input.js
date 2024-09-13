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
exports.GetPublicEventTypeQueryParams_2024_04_15 = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetPublicEventTypeQueryParams_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      isTeamEvent: { required: false, type: () => Boolean },
      org: { required: false, type: () => String, nullable: true },
    };
  }
}
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => value === "true"),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean),
  ],
  GetPublicEventTypeQueryParams_2024_04_15.prototype,
  "isTeamEvent",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  GetPublicEventTypeQueryParams_2024_04_15.prototype,
  "org",
  void 0
);
exports.GetPublicEventTypeQueryParams_2024_04_15 = GetPublicEventTypeQueryParams_2024_04_15;
//# sourceMappingURL=get-public-event-type-query-params.input.js.map
