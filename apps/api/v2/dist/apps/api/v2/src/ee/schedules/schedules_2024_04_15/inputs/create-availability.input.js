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
exports.CreateAvailabilityInput_2024_04_15 = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateAvailabilityInput_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      days: { required: true, type: () => [Number] },
      startTime: { required: true, type: () => Date },
      endTime: { required: true, type: () => Date },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, swagger_1.ApiProperty)({ example: [1, 2] }),
    __metadata("design:type", Array),
  ],
  CreateAvailabilityInput_2024_04_15.prototype,
  "days",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value, key }) => transformStringToDate(value, key)),
    __metadata("design:type", Date),
  ],
  CreateAvailabilityInput_2024_04_15.prototype,
  "startTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value, key }) => transformStringToDate(value, key)),
    __metadata("design:type", Date),
  ],
  CreateAvailabilityInput_2024_04_15.prototype,
  "endTime",
  void 0
);
exports.CreateAvailabilityInput_2024_04_15 = CreateAvailabilityInput_2024_04_15;
function transformStringToDate(value, key) {
  if (!value) {
    throw new common_1.BadRequestException(
      `Missing ${key}. Expected value is in ISO8061 format e.g. 2025-0412T13:17:56.324Z`
    );
  }
  const dateTimeParts = value.split("T");
  if (dateTimeParts.length !== 2) {
    throw new common_1.BadRequestException(
      `Invalid datestring format. Expected format(ISO8061): 2025-04-12T13:17:56.324Z. Received: ${value}`
    );
  }
  const timePart = dateTimeParts[1].split(".")[0];
  const parts = timePart.split(":");
  if (parts.length !== 3) {
    throw new common_1.BadRequestException(
      `Invalid time format. Expected format(ISO8061): 2025-0412T13:17:56.324Z. Received: ${value}`
    );
  }
  const [hours, minutes, seconds] = parts.map(Number);
  if (hours < 0 || hours > 23) {
    throw new common_1.BadRequestException(`Invalid ${key} hours. Expected value between 0 and 23`);
  }
  if (minutes < 0 || minutes > 59) {
    throw new common_1.BadRequestException(`Invalid ${key} minutes. Expected value between 0 and 59`);
  }
  if (seconds < 0 || seconds > 59) {
    throw new common_1.BadRequestException(`Invalid ${key} seconds. Expected value between 0 and 59`);
  }
  return new Date(new Date().setUTCHours(hours, minutes, seconds, 0));
}
//# sourceMappingURL=create-availability.input.js.map
