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
exports.Recurrence_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const platform_enums_1 = require("@calcom/platform-enums");
class Recurrence_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      interval: { required: true, type: () => Number },
      occurrences: { required: true, type: () => Number },
      frequency: { required: true, enum: require("../../../../enums/event-types/frequency").FrequencyInput },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 10, description: "Repeats every {count} week | month | year" }),
    __metadata("design:type", Number),
  ],
  Recurrence_2024_06_14.prototype,
  "interval",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 10, description: "Repeats for a maximum of {count} events" }),
    __metadata("design:type", Number),
  ],
  Recurrence_2024_06_14.prototype,
  "occurrences",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(platform_enums_1.FrequencyInput),
    (0, swagger_1.ApiProperty)({ enum: platform_enums_1.FrequencyInput }),
    __metadata("design:type", String),
  ],
  Recurrence_2024_06_14.prototype,
  "frequency",
  void 0
);
exports.Recurrence_2024_06_14 = Recurrence_2024_06_14;
//# sourceMappingURL=recurrence.input.js.map
