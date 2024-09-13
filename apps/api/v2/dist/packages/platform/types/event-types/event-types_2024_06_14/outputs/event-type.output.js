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
exports.TeamEventTypeOutput_2024_06_14 =
  exports.TeamEventTypeResponseHost =
  exports.EventTypeOutput_2024_06_14 =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const inputs_1 = require("../inputs");
const inputs_2 = require("../inputs");
const booking_fields_input_1 = require("../inputs/booking-fields.input");
const locations_input_1 = require("../inputs/locations.input");
var SchedulingTypeEnum;
(function (SchedulingTypeEnum) {
  SchedulingTypeEnum["ROUND_ROBIN"] = "ROUND_ROBIN";
  SchedulingTypeEnum["COLLECTIVE"] = "COLLECTIVE";
  SchedulingTypeEnum["MANAGED"] = "MANAGED";
})(SchedulingTypeEnum || (SchedulingTypeEnum = {}));
class User_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      name: { required: true, type: () => String, nullable: true },
      username: { required: true, type: () => String, nullable: true },
      avatarUrl: { required: true, type: () => String, nullable: true },
      weekStart: { required: true, type: () => String },
      brandColor: { required: true, type: () => String, nullable: true },
      darkBrandColor: { required: true, type: () => String, nullable: true },
      metadata: { required: true, type: () => Object },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  User_2024_06_14.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User_2024_06_14.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User_2024_06_14.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User_2024_06_14.prototype,
  "avatarUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  User_2024_06_14.prototype,
  "weekStart",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User_2024_06_14.prototype,
  "brandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User_2024_06_14.prototype,
  "darkBrandColor",
  void 0
);
class EventTypeOutput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      ownerId: { required: true, type: () => Number },
      lengthInMinutes: { required: true, type: () => Number, minimum: 1 },
      title: { required: true, type: () => String },
      slug: { required: true, type: () => String },
      description: { required: true, type: () => String },
      locations: { required: true, type: () => [Object] },
      bookingFields: { required: true, type: () => [Object] },
      disableGuests: { required: true, type: () => Boolean },
      slotInterval: { required: false, type: () => Number, nullable: true },
      minimumBookingNotice: { required: false, type: () => Number, minimum: 0 },
      beforeEventBuffer: { required: false, type: () => Number },
      afterEventBuffer: { required: false, type: () => Number },
      schedulingType: { required: true, type: () => Object, nullable: true },
      recurrence: {
        required: true,
        type: () => require("../inputs/recurrence.input").Recurrence_2024_06_14,
        nullable: true,
      },
      metadata: { required: true, type: () => Object },
      requiresConfirmation: { required: true, type: () => Boolean },
      price: { required: true, type: () => Number },
      currency: { required: true, type: () => String },
      lockTimeZoneToggleOnBookingPage: { required: true, type: () => Boolean },
      seatsPerTimeSlot: { required: true, type: () => Number, nullable: true },
      forwardParamsSuccessRedirect: { required: true, type: () => Boolean, nullable: true },
      successRedirectUrl: { required: true, type: () => String, nullable: true },
      seatsShowAvailabilityCount: { required: true, type: () => Boolean, nullable: true },
      isInstantEvent: { required: true, type: () => Boolean },
      users: { required: true, type: () => [User_2024_06_14] },
      scheduleId: { required: true, type: () => Number, nullable: true },
      bookingLimitsCount: {
        required: false,
        type: () => require("../inputs/booking-limits-count.input").BookingLimitsCount_2024_06_14,
      },
      onlyShowFirstAvailableSlot: { required: false, type: () => Boolean },
      bookingLimitsDuration: {
        required: false,
        type: () => require("../inputs/booking-limits-duration.input").BookingLimitsDuration_2024_06_14,
      },
      bookingWindow: { required: false, type: () => Object },
      offsetStart: { required: false, type: () => Number, minimum: 1 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number),
  ],
  EventTypeOutput_2024_06_14.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  EventTypeOutput_2024_06_14.prototype,
  "ownerId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), __metadata("design:type", Number)],
  EventTypeOutput_2024_06_14.prototype,
  "lengthInMinutes",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  EventTypeOutput_2024_06_14.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  EventTypeOutput_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  EventTypeOutput_2024_06_14.prototype,
  "description",
  void 0
);
__decorate(
  [(0, locations_input_1.ValidateLocations_2024_06_14)(), __metadata("design:type", Array)],
  EventTypeOutput_2024_06_14.prototype,
  "locations",
  void 0
);
__decorate(
  [(0, booking_fields_input_1.ValidateBookingFields_2024_06_14)(), __metadata("design:type", Array)],
  EventTypeOutput_2024_06_14.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  EventTypeOutput_2024_06_14.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
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
  EventTypeOutput_2024_06_14.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  EventTypeOutput_2024_06_14.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  EventTypeOutput_2024_06_14.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEnum)(SchedulingTypeEnum), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "schedulingType",
  void 0
);
__decorate(
  [(0, class_transformer_1.Type)(() => inputs_2.Recurrence_2024_06_14), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "recurrence",
  void 0
);
__decorate(
  [(0, class_transformer_1.Type)(() => Object), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  EventTypeOutput_2024_06_14.prototype,
  "requiresConfirmation",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  EventTypeOutput_2024_06_14.prototype,
  "price",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  EventTypeOutput_2024_06_14.prototype,
  "currency",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  EventTypeOutput_2024_06_14.prototype,
  "lockTimeZoneToggleOnBookingPage",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "seatsPerTimeSlot",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "forwardParamsSuccessRedirect",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "successRedirectUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "seatsShowAvailabilityCount",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  EventTypeOutput_2024_06_14.prototype,
  "isInstantEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
  "scheduleId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Function)],
  EventTypeOutput_2024_06_14.prototype,
  "bookingLimitsCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  EventTypeOutput_2024_06_14.prototype,
  "onlyShowFirstAvailableSlot",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => inputs_1.BookingLimitsDuration_2024_06_14),
    __metadata("design:type", inputs_1.BookingLimitsDuration_2024_06_14),
  ],
  EventTypeOutput_2024_06_14.prototype,
  "bookingLimitsDuration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  EventTypeOutput_2024_06_14.prototype,
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
  EventTypeOutput_2024_06_14.prototype,
  "offsetStart",
  void 0
);
exports.EventTypeOutput_2024_06_14 = EventTypeOutput_2024_06_14;
class TeamEventTypeResponseHost extends inputs_1.Host {
  static _OPENAPI_METADATA_FACTORY() {
    return { name: { required: true, type: () => String } };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  TeamEventTypeResponseHost.prototype,
  "name",
  void 0
);
exports.TeamEventTypeResponseHost = TeamEventTypeResponseHost;
class TeamEventTypeOutput_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      lengthInMinutes: { required: true, type: () => Number, minimum: 1 },
      title: { required: true, type: () => String },
      slug: { required: true, type: () => String },
      description: { required: true, type: () => String },
      locations: { required: true, type: () => [Object] },
      bookingFields: { required: true, type: () => [Object] },
      disableGuests: { required: true, type: () => Boolean },
      slotInterval: { required: false, type: () => Number, nullable: true },
      minimumBookingNotice: { required: false, type: () => Number, minimum: 0 },
      beforeEventBuffer: { required: false, type: () => Number },
      afterEventBuffer: { required: false, type: () => Number },
      schedulingType: { required: true, type: () => Object, nullable: true },
      recurrence: {
        required: true,
        type: () => require("../inputs/recurrence.input").Recurrence_2024_06_14,
        nullable: true,
      },
      metadata: { required: true, type: () => Object },
      requiresConfirmation: { required: true, type: () => Boolean },
      price: { required: true, type: () => Number },
      currency: { required: true, type: () => String },
      lockTimeZoneToggleOnBookingPage: { required: true, type: () => Boolean },
      seatsPerTimeSlot: { required: true, type: () => Number, nullable: true },
      forwardParamsSuccessRedirect: { required: true, type: () => Boolean, nullable: true },
      successRedirectUrl: { required: true, type: () => String, nullable: true },
      seatsShowAvailabilityCount: { required: true, type: () => Boolean, nullable: true },
      isInstantEvent: { required: true, type: () => Boolean },
      scheduleId: { required: true, type: () => Number, nullable: true },
      teamId: { required: false, type: () => Number, nullable: true },
      ownerId: { required: false, type: () => Number, nullable: true },
      parentEventTypeId: { required: false, type: () => Number, nullable: true },
      hosts: { required: true, type: () => [require("./event-type.output").TeamEventTypeResponseHost] },
      assignAllTeamMembers: { required: false, type: () => Boolean },
      bookingLimitsCount: {
        required: false,
        type: () => require("../inputs/booking-limits-count.input").BookingLimitsCount_2024_06_14,
      },
      onlyShowFirstAvailableSlot: { required: false, type: () => Boolean },
      bookingLimitsDuration: {
        required: false,
        type: () => require("../inputs/booking-limits-duration.input").BookingLimitsDuration_2024_06_14,
      },
      bookingWindow: { required: false, type: () => Object },
      offsetStart: { required: false, type: () => Number, minimum: 1 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number),
  ],
  TeamEventTypeOutput_2024_06_14.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), __metadata("design:type", Number)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "lengthInMinutes",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "description",
  void 0
);
__decorate(
  [(0, locations_input_1.ValidateLocations_2024_06_14)(), __metadata("design:type", Array)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "locations",
  void 0
);
__decorate(
  [(0, booking_fields_input_1.ValidateBookingFields_2024_06_14)(), __metadata("design:type", Array)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
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
  TeamEventTypeOutput_2024_06_14.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEnum)(SchedulingTypeEnum), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "schedulingType",
  void 0
);
__decorate(
  [(0, class_transformer_1.Type)(() => inputs_2.Recurrence_2024_06_14), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "recurrence",
  void 0
);
__decorate(
  [(0, class_transformer_1.Type)(() => Object), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "requiresConfirmation",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "price",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "currency",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "lockTimeZoneToggleOnBookingPage",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "seatsPerTimeSlot",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "forwardParamsSuccessRedirect",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "successRedirectUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "seatsShowAvailabilityCount",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "isInstantEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "scheduleId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "teamId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "ownerId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "parentEventTypeId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TeamEventTypeResponseHost),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  TeamEventTypeOutput_2024_06_14.prototype,
  "hosts",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  TeamEventTypeOutput_2024_06_14.prototype,
  "assignAllTeamMembers",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Function)],
  TeamEventTypeOutput_2024_06_14.prototype,
  "bookingLimitsCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  TeamEventTypeOutput_2024_06_14.prototype,
  "onlyShowFirstAvailableSlot",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => inputs_1.BookingLimitsDuration_2024_06_14),
    __metadata("design:type", inputs_1.BookingLimitsDuration_2024_06_14),
  ],
  TeamEventTypeOutput_2024_06_14.prototype,
  "bookingLimitsDuration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  TeamEventTypeOutput_2024_06_14.prototype,
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
  TeamEventTypeOutput_2024_06_14.prototype,
  "offsetStart",
  void 0
);
exports.TeamEventTypeOutput_2024_06_14 = TeamEventTypeOutput_2024_06_14;
//# sourceMappingURL=event-type.output.js.map
