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
exports.UpdatedScheduleOutput_2024_04_15 = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class EventTypeModel_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      eventName: { required: false, type: () => String, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  EventTypeModel_2024_04_15.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  EventTypeModel_2024_04_15.prototype,
  "eventName",
  void 0
);
class AvailabilityModel_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      userId: { required: false, type: () => Number, nullable: true },
      scheduleId: { required: false, type: () => Number, nullable: true },
      eventTypeId: { required: false, type: () => Number, nullable: true },
      days: { required: true, type: () => [Number] },
      startTime: { required: false, type: () => Date },
      endTime: { required: false, type: () => Date },
      date: { required: false, type: () => Date, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  AvailabilityModel_2024_04_15.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  AvailabilityModel_2024_04_15.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  AvailabilityModel_2024_04_15.prototype,
  "scheduleId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  AvailabilityModel_2024_04_15.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array),
  ],
  AvailabilityModel_2024_04_15.prototype,
  "days",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date),
  ],
  AvailabilityModel_2024_04_15.prototype,
  "startTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date),
  ],
  AvailabilityModel_2024_04_15.prototype,
  "endTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object),
  ],
  AvailabilityModel_2024_04_15.prototype,
  "date",
  void 0
);
class ScheduleModel_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      userId: { required: true, type: () => Number },
      name: { required: true, type: () => String },
      timeZone: { required: false, type: () => String, nullable: true },
      eventType: { required: false, type: () => [EventTypeModel_2024_04_15] },
      availability: { required: false, type: () => [AvailabilityModel_2024_04_15] },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  ScheduleModel_2024_04_15.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  ScheduleModel_2024_04_15.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  ScheduleModel_2024_04_15.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  ScheduleModel_2024_04_15.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => EventTypeModel_2024_04_15),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  ScheduleModel_2024_04_15.prototype,
  "eventType",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AvailabilityModel_2024_04_15),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  ScheduleModel_2024_04_15.prototype,
  "availability",
  void 0
);
class UpdatedScheduleOutput_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      schedule: { required: true, type: () => ScheduleModel_2024_04_15 },
      isDefault: { required: true, type: () => Boolean },
      timeZone: { required: false, type: () => String },
      prevDefaultId: { required: false, type: () => Number, nullable: true },
      currentDefaultId: { required: false, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ScheduleModel_2024_04_15),
    __metadata("design:type", ScheduleModel_2024_04_15),
  ],
  UpdatedScheduleOutput_2024_04_15.prototype,
  "schedule",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  UpdatedScheduleOutput_2024_04_15.prototype,
  "isDefault",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdatedScheduleOutput_2024_04_15.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  UpdatedScheduleOutput_2024_04_15.prototype,
  "prevDefaultId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  UpdatedScheduleOutput_2024_04_15.prototype,
  "currentDefaultId",
  void 0
);
exports.UpdatedScheduleOutput_2024_04_15 = UpdatedScheduleOutput_2024_04_15;
//# sourceMappingURL=schedule-updated.output.js.map
