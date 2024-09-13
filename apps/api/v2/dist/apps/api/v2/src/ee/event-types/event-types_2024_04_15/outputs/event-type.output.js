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
exports.EventTypeOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_event_type_input_1 = require("../inputs/create-event-type.input");
const period_type_1 = require("../inputs/enums/period-type");
const scheduling_type_1 = require("../inputs/enums/scheduling-type");
const event_type_location_input_1 = require("../inputs/event-type-location.input");
const update_event_type_input_1 = require("../inputs/update-event-type.input");
class EventTypeOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      length: { required: true, type: () => Number },
      slug: { required: true, type: () => String },
      title: { required: true, type: () => String },
      description: { required: true, type: () => String, nullable: true },
      locations: {
        required: true,
        type: () => [require("../inputs/event-type-location.input").EventTypeLocation_2024_04_15],
        nullable: true,
      },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number),
  ],
  EventTypeOutput.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_LENGTH_EXAMPLE }),
    __metadata("design:type", Number),
  ],
  EventTypeOutput.prototype,
  "length",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_SLUG_EXAMPLE }),
    __metadata("design:type", String),
  ],
  EventTypeOutput.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_TITLE_EXAMPLE }),
    __metadata("design:type", String),
  ],
  EventTypeOutput.prototype,
  "title",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_DESCRIPTION_EXAMPLE }),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "description",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "hidden",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => event_type_location_input_1.EventTypeLocation_2024_04_15),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "locations",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  EventTypeOutput.prototype,
  "position",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Number)],
  EventTypeOutput.prototype,
  "offsetStart",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "userId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "profileId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "teamId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "eventName",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "parentId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => update_event_type_input_1.BookingField_2024_04_15),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(period_type_1.PeriodType),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "periodType",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDate)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "periodStartDate",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDate)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "periodEndDate",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "periodDays",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "periodCountCalendarDays",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "lockTimeZoneToggleOnBookingPage",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "requiresConfirmation",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "requiresBookerEmailVerification",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => update_event_type_input_1.RecurringEvent_2024_04_15),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "recurringEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "hideCalendarNotes",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Number)],
  EventTypeOutput.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Number)],
  EventTypeOutput.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Number)],
  EventTypeOutput.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "seatsPerTimeSlot",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "onlyShowFirstAvailableSlot",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "seatsShowAttendees",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "seatsShowAvailabilityCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(scheduling_type_1.SchedulingType),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "schedulingType",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  EventTypeOutput.prototype,
  "scheduleId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Number)],
  EventTypeOutput.prototype,
  "price",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", String)],
  EventTypeOutput.prototype,
  "currency",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "slotInterval",
  void 0
);
__decorate(
  [(0, class_validator_1.IsJSON)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "successRedirectUrl",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => update_event_type_input_1.IntervalLimits_2024_04_15),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", update_event_type_input_1.IntervalLimits_2024_04_15),
  ],
  EventTypeOutput.prototype,
  "bookingLimits",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => update_event_type_input_1.IntervalLimits_2024_04_15),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", update_event_type_input_1.IntervalLimits_2024_04_15),
  ],
  EventTypeOutput.prototype,
  "durationLimits",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "isInstantEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "assignAllTeamMembers",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Boolean)],
  EventTypeOutput.prototype,
  "useEventTypeDestinationCalendarEmail",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, swagger_1.ApiHideProperty)(), __metadata("design:type", Object)],
  EventTypeOutput.prototype,
  "secondaryEmailId",
  void 0
);
exports.EventTypeOutput = EventTypeOutput;
//# sourceMappingURL=event-type.output.js.map
