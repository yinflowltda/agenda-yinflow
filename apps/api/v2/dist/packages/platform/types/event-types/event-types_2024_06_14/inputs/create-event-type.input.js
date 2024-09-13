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
exports.CreateTeamEventTypeInput_2024_06_14 =
  exports.Host =
  exports.HostPriority =
  exports.CreateEventTypeInput_2024_06_14 =
  exports.CREATE_EVENT_DESCRIPTION_EXAMPLE =
  exports.CREATE_EVENT_TITLE_EXAMPLE =
  exports.CREATE_EVENT_LENGTH_EXAMPLE =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_enums_1 = require("@calcom/platform-enums");
const booking_fields_input_1 = require("./booking-fields.input");
const booking_limits_count_input_1 = require("./booking-limits-count.input");
const booking_limits_duration_input_1 = require("./booking-limits-duration.input");
const booking_window_input_1 = require("./booking-window.input");
const locations_input_1 = require("./locations.input");
const recurrence_input_1 = require("./recurrence.input");
exports.CREATE_EVENT_LENGTH_EXAMPLE = 60;
exports.CREATE_EVENT_TITLE_EXAMPLE = "Learn the secrets of masterchief!";
exports.CREATE_EVENT_DESCRIPTION_EXAMPLE =
  "Discover the culinary wonders of the Argentina by making the best flan ever!";
class CreateEventTypeInput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      lengthInMinutes: { required: true, type: () => Number, minimum: 1 },
      title: { required: true, type: () => String },
      slug: { required: true, type: () => String },
      description: { required: false, type: () => String },
      locations: { required: false, type: () => [Object] },
      bookingFields: { required: false, type: () => [Object] },
      disableGuests: { required: false, type: () => Boolean },
      slotInterval: { required: false, type: () => Number },
      minimumBookingNotice: { required: false, type: () => Number, minimum: 0 },
      beforeEventBuffer: { required: false, type: () => Number },
      afterEventBuffer: { required: false, type: () => Number },
      scheduleId: { required: false, type: () => Number },
      bookingLimitsCount: {
        required: false,
        type: () => require("./booking-limits-count.input").BookingLimitsCount_2024_06_14,
      },
      onlyShowFirstAvailableSlot: { required: false, type: () => Boolean },
      bookingLimitsDuration: {
        required: false,
        type: () => require("./booking-limits-duration.input").BookingLimitsDuration_2024_06_14,
      },
      bookingWindow: { required: false, type: () => Object },
      offsetStart: { required: false, type: () => Number, minimum: 1 },
      recurrence: { required: false, type: () => require("./recurrence.input").Recurrence_2024_06_14 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_LENGTH_EXAMPLE }),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "lengthInMinutes",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_TITLE_EXAMPLE }),
    __metadata("design:type", String),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateEventTypeInput_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_DESCRIPTION_EXAMPLE }),
    __metadata("design:type", String),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "description",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, locations_input_1.ValidateLocations_2024_06_14)(),
    __metadata("design:type", Array),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "locations",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, booking_fields_input_1.ValidateBookingFields_2024_06_14)(),
    __metadata("design:type", Array),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  CreateEventTypeInput_2024_06_14.prototype,
  "slotInterval",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  CreateEventTypeInput_2024_06_14.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  CreateEventTypeInput_2024_06_14.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  CreateEventTypeInput_2024_06_14.prototype,
  "scheduleId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => booking_limits_count_input_1.BookingLimitsCount_2024_06_14),
    (0, booking_limits_count_input_1.ValidateBookingLimistsCount)(),
    __metadata("design:type", booking_limits_count_input_1.BookingLimitsCount_2024_06_14),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "bookingLimitsCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "onlyShowFirstAvailableSlot",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => booking_limits_duration_input_1.BookingLimitsDuration_2024_06_14),
    (0, booking_limits_duration_input_1.ValidateBookingLimistsDuration)(),
    __metadata("design:type", booking_limits_duration_input_1.BookingLimitsDuration_2024_06_14),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "bookingLimitsDuration",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, booking_window_input_1.ValidateBookingWindow)(),
    __metadata("design:type", Object),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "bookingWindow",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "offsetStart",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => recurrence_input_1.Recurrence_2024_06_14),
    __metadata("design:type", recurrence_input_1.Recurrence_2024_06_14),
  ],
  CreateEventTypeInput_2024_06_14.prototype,
  "recurrence",
  void 0
);
exports.CreateEventTypeInput_2024_06_14 = CreateEventTypeInput_2024_06_14;
var HostPriority;
(function (HostPriority) {
  HostPriority["lowest"] = "lowest";
  HostPriority["low"] = "low";
  HostPriority["medium"] = "medium";
  HostPriority["high"] = "high";
  HostPriority["highest"] = "highest";
})((HostPriority = exports.HostPriority || (exports.HostPriority = {})));
class Host {
  constructor() {
    this.mandatory = false;
    this.priority = "medium";
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      userId: { required: true, type: () => Number },
      mandatory: { required: false, type: () => Boolean, default: false },
      priority: { required: false, type: () => Object, default: "medium" },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Host.prototype,
  "userId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  Host.prototype,
  "mandatory",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(HostPriority),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  Host.prototype,
  "priority",
  void 0
);
exports.Host = Host;
class CreateTeamEventTypeInput_2024_06_14 extends CreateEventTypeInput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      schedulingType: { required: true, type: () => Object },
      hosts: { required: true, type: () => [require("./create-event-type.input").Host] },
      assignAllTeamMembers: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => {
      if (value === "collective") {
        return platform_enums_1.SchedulingType.COLLECTIVE;
      }
      if (value === "roundRobin") {
        return platform_enums_1.SchedulingType.ROUND_ROBIN;
      }
      if (value === "managed") {
        return platform_enums_1.SchedulingType.MANAGED;
      }
      return value;
    }),
    (0, class_validator_1.IsEnum)(platform_enums_1.SchedulingType),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object),
  ],
  CreateTeamEventTypeInput_2024_06_14.prototype,
  "schedulingType",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Host),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array),
  ],
  CreateTeamEventTypeInput_2024_06_14.prototype,
  "hosts",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean),
  ],
  CreateTeamEventTypeInput_2024_06_14.prototype,
  "assignAllTeamMembers",
  void 0
);
exports.CreateTeamEventTypeInput_2024_06_14 = CreateTeamEventTypeInput_2024_06_14;
//# sourceMappingURL=create-event-type.input.js.map
