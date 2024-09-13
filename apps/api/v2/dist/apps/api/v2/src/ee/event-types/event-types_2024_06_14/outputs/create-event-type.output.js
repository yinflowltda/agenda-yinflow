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
exports.CreateEventTypeOutput_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
class CreateEventTypeOutput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: {
        required: true,
        type: () => Object,
        enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
      },
      data: {
        required: true,
        type: () =>
          require("../../../../../../../../packages/platform/types/event-types/event-types_2024_06_14/outputs/event-type.output")
            .EventTypeOutput_2024_06_14,
      },
    };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.SUCCESS_STATUS,
      enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
    }),
    (0, class_validator_1.IsIn)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
    __metadata("design:type", Object),
  ],
  CreateEventTypeOutput_2024_06_14.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: platform_types_1.EventTypeOutput_2024_06_14,
    }),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => platform_types_1.EventTypeOutput_2024_06_14),
    __metadata("design:type", platform_types_1.EventTypeOutput_2024_06_14),
  ],
  CreateEventTypeOutput_2024_06_14.prototype,
  "data",
  void 0
);
exports.CreateEventTypeOutput_2024_06_14 = CreateEventTypeOutput_2024_06_14;
//# sourceMappingURL=create-event-type.output.js.map
