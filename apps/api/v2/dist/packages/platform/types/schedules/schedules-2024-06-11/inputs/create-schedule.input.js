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
exports.CreateScheduleInput_2024_06_11 =
  exports.ScheduleOverrideInput_2024_06_11 =
  exports.ScheduleAvailabilityInput_2024_06_11 =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
class ScheduleAvailabilityInput_2024_06_11 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      days: { required: true, type: () => [Object], enum: constants_1.WEEK_DAYS },
      startTime: { required: true, type: () => String, pattern: "TIME_FORMAT_HH_MM" },
      endTime: { required: true, type: () => String, pattern: "TIME_FORMAT_HH_MM" },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(constants_1.WEEK_DAYS, { each: true }),
    (0, swagger_1.ApiProperty)({ example: ["Monday", "Tuesday"] }),
    __metadata("design:type", Array),
  ],
  ScheduleAvailabilityInput_2024_06_11.prototype,
  "days",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, {
      message: "startTime must be a valid time format HH:MM",
    }),
    (0, swagger_1.ApiProperty)({ example: "09:00" }),
    __metadata("design:type", String),
  ],
  ScheduleAvailabilityInput_2024_06_11.prototype,
  "startTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, {
      message: "endTime must be a valid time format HH:MM",
    }),
    (0, swagger_1.ApiProperty)({ example: "10:00" }),
    __metadata("design:type", String),
  ],
  ScheduleAvailabilityInput_2024_06_11.prototype,
  "endTime",
  void 0
);
exports.ScheduleAvailabilityInput_2024_06_11 = ScheduleAvailabilityInput_2024_06_11;
class ScheduleOverrideInput_2024_06_11 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      date: { required: true, type: () => String },
      startTime: { required: true, type: () => String, pattern: "TIME_FORMAT_HH_MM" },
      endTime: { required: true, type: () => String, pattern: "TIME_FORMAT_HH_MM" },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsISO8601)({ strict: true }),
    (0, swagger_1.ApiProperty)({ example: "2024-05-20" }),
    __metadata("design:type", String),
  ],
  ScheduleOverrideInput_2024_06_11.prototype,
  "date",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, {
      message: "startTime must be a valid time format HH:MM",
    }),
    (0, swagger_1.ApiProperty)({ example: "12:00" }),
    __metadata("design:type", String),
  ],
  ScheduleOverrideInput_2024_06_11.prototype,
  "startTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, {
      message: "endTime must be a valid time format HH:MM",
    }),
    (0, swagger_1.ApiProperty)({ example: "13:00" }),
    __metadata("design:type", String),
  ],
  ScheduleOverrideInput_2024_06_11.prototype,
  "endTime",
  void 0
);
exports.ScheduleOverrideInput_2024_06_11 = ScheduleOverrideInput_2024_06_11;
class CreateScheduleInput_2024_06_11 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String },
      timeZone: { required: true, type: () => String },
      availability: {
        required: false,
        type: () => [require("./create-schedule.input").ScheduleAvailabilityInput_2024_06_11],
      },
      isDefault: { required: true, type: () => Boolean },
      overrides: {
        required: false,
        type: () => [require("./create-schedule.input").ScheduleOverrideInput_2024_06_11],
      },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "One-on-one coaching" }),
    __metadata("design:type", String),
  ],
  CreateScheduleInput_2024_06_11.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsTimeZone)(),
    (0, swagger_1.ApiProperty)({ example: "Europe/Rome" }),
    __metadata("design:type", String),
  ],
  CreateScheduleInput_2024_06_11.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ScheduleAvailabilityInput_2024_06_11),
    (0, swagger_1.ApiProperty)({
      type: [ScheduleAvailabilityInput_2024_06_11],
      example: [
        {
          days: ["Monday", "Tuesday"],
          startTime: "09:00",
          endTime: "10:00",
        },
      ],
      required: false,
    }),
    __metadata("design:type", Array),
  ],
  CreateScheduleInput_2024_06_11.prototype,
  "availability",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean),
  ],
  CreateScheduleInput_2024_06_11.prototype,
  "isDefault",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ScheduleOverrideInput_2024_06_11),
    (0, swagger_1.ApiProperty)({
      type: [ScheduleOverrideInput_2024_06_11],
      example: [
        {
          date: "2024-05-20",
          startTime: "12:00",
          endTime: "14:00",
        },
      ],
      required: false,
    }),
    __metadata("design:type", Array),
  ],
  CreateScheduleInput_2024_06_11.prototype,
  "overrides",
  void 0
);
exports.CreateScheduleInput_2024_06_11 = CreateScheduleInput_2024_06_11;
//# sourceMappingURL=create-schedule.input.js.map
