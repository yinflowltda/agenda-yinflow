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
exports.UpdateTeamEventTypeInput_2024_06_14 = exports.UpdateEventTypeInput_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const booking_fields_input_1 = require("./booking-fields.input");
const booking_limits_count_input_1 = require("./booking-limits-count.input");
const booking_limits_duration_input_1 = require("./booking-limits-duration.input");
const booking_window_input_1 = require("./booking-window.input");
const create_event_type_input_1 = require("./create-event-type.input");
const locations_input_1 = require("./locations.input");
const recurrence_input_1 = require("./recurrence.input");
class UpdateEventTypeInput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      lengthInMinutes: { required: false, type: () => Number, minimum: 1 },
      title: { required: false, type: () => String },
      slug: { required: false, type: () => String },
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
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number),
  ],
  UpdateEventTypeInput_2024_06_14.prototype,
  "lengthInMinutes",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateEventTypeInput_2024_06_14.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateEventTypeInput_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateEventTypeInput_2024_06_14.prototype,
  "description",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, locations_input_1.ValidateLocations_2024_06_14)(),
    __metadata("design:type", Array),
  ],
  UpdateEventTypeInput_2024_06_14.prototype,
  "locations",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, booking_fields_input_1.ValidateBookingFields_2024_06_14)(),
    __metadata("design:type", Array),
  ],
  UpdateEventTypeInput_2024_06_14.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  UpdateEventTypeInput_2024_06_14.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  UpdateEventTypeInput_2024_06_14.prototype,
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
  UpdateEventTypeInput_2024_06_14.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  UpdateEventTypeInput_2024_06_14.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  UpdateEventTypeInput_2024_06_14.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  UpdateEventTypeInput_2024_06_14.prototype,
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
  UpdateEventTypeInput_2024_06_14.prototype,
  "bookingLimitsCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  UpdateEventTypeInput_2024_06_14.prototype,
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
  UpdateEventTypeInput_2024_06_14.prototype,
  "bookingLimitsDuration",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, booking_window_input_1.ValidateBookingWindow)(),
    __metadata("design:type", Object),
  ],
  UpdateEventTypeInput_2024_06_14.prototype,
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
  UpdateEventTypeInput_2024_06_14.prototype,
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
  UpdateEventTypeInput_2024_06_14.prototype,
  "recurrence",
  void 0
);
exports.UpdateEventTypeInput_2024_06_14 = UpdateEventTypeInput_2024_06_14;
class UpdateTeamEventTypeInput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      lengthInMinutes: { required: false, type: () => Number, minimum: 1 },
      title: { required: false, type: () => String },
      slug: { required: false, type: () => String },
      description: { required: false, type: () => String },
      locations: { required: false, type: () => [Object] },
      bookingFields: { required: false, type: () => [Object] },
      disableGuests: { required: false, type: () => Boolean },
      slotInterval: { required: false, type: () => Number },
      minimumBookingNotice: { required: false, type: () => Number, minimum: 0 },
      beforeEventBuffer: { required: false, type: () => Number },
      afterEventBuffer: { required: false, type: () => Number },
      hosts: { required: false, type: () => [require("./create-event-type.input").Host] },
      assignAllTeamMembers: { required: false, type: () => Boolean },
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
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "lengthInMinutes",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "title",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "description",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, locations_input_1.ValidateLocations_2024_06_14)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "locations",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, booking_fields_input_1.ValidateBookingFields_2024_06_14)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "slotInterval",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_event_type_input_1.Host),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
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
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "assignAllTeamMembers",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => booking_limits_count_input_1.BookingLimitsCount_2024_06_14),
    (0, booking_limits_count_input_1.ValidateBookingLimistsCount)(),
    __metadata("design:type", booking_limits_count_input_1.BookingLimitsCount_2024_06_14),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "bookingLimitsCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
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
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "bookingLimitsDuration",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, booking_window_input_1.ValidateBookingWindow)(),
    __metadata("design:type", Object),
  ],
  UpdateTeamEventTypeInput_2024_06_14.prototype,
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
  UpdateTeamEventTypeInput_2024_06_14.prototype,
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
  UpdateTeamEventTypeInput_2024_06_14.prototype,
  "recurrence",
  void 0
);
exports.UpdateTeamEventTypeInput_2024_06_14 = UpdateTeamEventTypeInput_2024_06_14;
//# sourceMappingURL=update-event-type.input.js.map
