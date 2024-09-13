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
exports.ScheduleOutput = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AvailabilityModel {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      userId: { required: false, type: () => Number, nullable: true },
      eventTypeId: { required: false, type: () => Number, nullable: true },
      days: { required: true, type: () => [Number] },
      startTime: { required: true, type: () => Date },
      endTime: { required: true, type: () => Date },
      date: { required: false, type: () => Date, nullable: true },
      scheduleId: { required: false, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  AvailabilityModel.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  AvailabilityModel.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  AvailabilityModel.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array),
  ],
  AvailabilityModel.prototype,
  "days",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date),
  ],
  AvailabilityModel.prototype,
  "startTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date),
  ],
  AvailabilityModel.prototype,
  "endTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Object),
  ],
  AvailabilityModel.prototype,
  "date",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  AvailabilityModel.prototype,
  "scheduleId",
  void 0
);
class WorkingHours {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      days: { required: true, type: () => [Number] },
      startTime: { required: true, type: () => Number },
      endTime: { required: true, type: () => Number },
      userId: { required: false, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array),
  ],
  WorkingHours.prototype,
  "days",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  WorkingHours.prototype,
  "startTime",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  WorkingHours.prototype,
  "endTime",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  WorkingHours.prototype,
  "userId",
  void 0
);
class TimeRange {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      userId: { required: false, type: () => Number, nullable: true },
      start: { required: true, type: () => Date },
      end: { required: true, type: () => Date },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  TimeRange.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDate)(), __metadata("design:type", Date)],
  TimeRange.prototype,
  "start",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDate)(), __metadata("design:type", Date)],
  TimeRange.prototype,
  "end",
  void 0
);
class ScheduleOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      name: { required: true, type: () => String },
      isManaged: { required: true, type: () => Boolean },
      workingHours: { required: true, type: () => [WorkingHours] },
      schedule: { required: true, type: () => [AvailabilityModel] },
      availability: { required: true, type: () => [[TimeRange]] },
      timeZone: { required: true, type: () => String },
      dateOverrides: { required: true, type: () => [Object] },
      isDefault: { required: true, type: () => Boolean },
      isLastSchedule: { required: true, type: () => Boolean },
      readOnly: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  ScheduleOutput.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  ScheduleOutput.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  ScheduleOutput.prototype,
  "isManaged",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => WorkingHours),
    __metadata("design:type", Array),
  ],
  ScheduleOutput.prototype,
  "workingHours",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AvailabilityModel),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  ScheduleOutput.prototype,
  "schedule",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  ScheduleOutput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  ScheduleOutput.prototype,
  "dateOverrides",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  ScheduleOutput.prototype,
  "isDefault",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  ScheduleOutput.prototype,
  "isLastSchedule",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  ScheduleOutput.prototype,
  "readOnly",
  void 0
);
exports.ScheduleOutput = ScheduleOutput;
//# sourceMappingURL=schedule.output.js.map
