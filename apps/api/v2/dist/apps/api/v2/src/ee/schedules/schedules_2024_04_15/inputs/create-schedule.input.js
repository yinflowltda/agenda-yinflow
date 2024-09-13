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
exports.CreateScheduleInput_2024_04_15 = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_availability_input_1 = require("./create-availability.input");
class CreateScheduleInput_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String },
      timeZone: { required: true, type: () => String },
      availabilities: {
        required: false,
        type: () => [require("./create-availability.input").CreateAvailabilityInput_2024_04_15],
      },
      isDefault: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateScheduleInput_2024_04_15.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsTimeZone)(), __metadata("design:type", String)],
  CreateScheduleInput_2024_04_15.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_availability_input_1.CreateAvailabilityInput_2024_04_15),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array),
  ],
  CreateScheduleInput_2024_04_15.prototype,
  "availabilities",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  CreateScheduleInput_2024_04_15.prototype,
  "isDefault",
  void 0
);
exports.CreateScheduleInput_2024_04_15 = CreateScheduleInput_2024_04_15;
//# sourceMappingURL=create-schedule.input.js.map
