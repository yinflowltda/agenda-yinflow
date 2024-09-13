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
exports.GetBookingsOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
var Status;
(function (Status) {
  Status["CANCELLED"] = "CANCELLED";
  Status["REJECTED"] = "REJECTED";
  Status["ACCEPTED"] = "ACCEPTED";
  Status["PENDING"] = "PENDING";
  Status["AWAITING_HOST"] = "AWAITING_HOST";
})(Status || (Status = {}));
class Attendee {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      email: { required: true, type: () => String },
      name: { required: true, type: () => String },
      timeZone: { required: true, type: () => String },
      locale: { required: true, type: () => String, nullable: true },
      bookingId: { required: true, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Attendee.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Attendee.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Attendee.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Attendee.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Attendee.prototype,
  "locale",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  Attendee.prototype,
  "bookingId",
  void 0
);
class EventType {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      slug: { required: false, type: () => String },
      id: { required: false, type: () => Number },
      eventName: { required: false, type: () => String, nullable: true },
      price: { required: true, type: () => Number },
      recurringEvent: { required: false, type: () => Object },
      currency: { required: true, type: () => String },
      metadata: { required: true, type: () => Object },
      seatsShowAttendees: { required: false, type: () => Object },
      seatsShowAvailabilityCount: { required: false, type: () => Object },
      team: { required: false, type: () => Object, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  EventType.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  EventType.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  EventType.prototype,
  "eventName",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  EventType.prototype,
  "price",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  EventType.prototype,
  "recurringEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  EventType.prototype,
  "currency",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  EventType.prototype,
  "metadata",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  EventType.prototype,
  "seatsShowAttendees",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  EventType.prototype,
  "seatsShowAvailabilityCount",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  EventType.prototype,
  "team",
  void 0
);
class Reference {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      type: { required: true, type: () => String },
      uid: { required: true, type: () => String },
      meetingId: { required: false, type: () => String, nullable: true },
      thirdPartyRecurringEventId: { required: false, type: () => String, nullable: true },
      meetingPassword: { required: true, type: () => String, nullable: true },
      meetingUrl: { required: false, type: () => String, nullable: true },
      bookingId: { required: true, type: () => Number, nullable: true },
      externalCalendarId: { required: true, type: () => String, nullable: true },
      deleted: { required: false, type: () => Object },
      credentialId: { required: true, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Reference.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Reference.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Reference.prototype,
  "uid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Reference.prototype,
  "meetingId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Reference.prototype,
  "thirdPartyRecurringEventId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Reference.prototype,
  "meetingPassword",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Reference.prototype,
  "meetingUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  Reference.prototype,
  "bookingId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", Object)],
  Reference.prototype,
  "externalCalendarId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Reference.prototype,
  "deleted",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  Reference.prototype,
  "credentialId",
  void 0
);
class User {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      name: { required: true, type: () => String, nullable: true },
      email: { required: true, type: () => String },
    };
  }
}
__decorate([(0, class_validator_1.IsInt)(), __metadata("design:type", Number)], User.prototype, "id", void 0);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  User.prototype,
  "email",
  void 0
);
class GetBookingsDataEntry {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      title: { required: true, type: () => String },
      userPrimaryEmail: { required: false, type: () => String, nullable: true },
      description: { required: true, type: () => String, nullable: true },
      customInputs: { required: true, type: () => Object },
      startTime: { required: true, type: () => String },
      endTime: { required: true, type: () => String },
      attendees: { required: true, type: () => [Attendee] },
      metadata: { required: true, type: () => Object },
      uid: { required: true, type: () => String },
      recurringEventId: { required: true, type: () => String, nullable: true },
      location: { required: true, type: () => String, nullable: true },
      eventType: { required: true, type: () => EventType },
      status: { required: true, type: () => Object },
      paid: { required: true, type: () => Boolean },
      payment: { required: true, type: () => [Object] },
      references: { required: true, type: () => [Reference] },
      isRecorded: { required: true, type: () => Boolean },
      seatsReferences: { required: true, type: () => [Object] },
      user: { required: true, type: () => User, nullable: true },
      rescheduled: { required: false, type: () => Object },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  GetBookingsDataEntry.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  GetBookingsDataEntry.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEmail)(), __metadata("design:type", Object)],
  GetBookingsDataEntry.prototype,
  "userPrimaryEmail",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingsDataEntry.prototype,
  "description",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  GetBookingsDataEntry.prototype,
  "customInputs",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", String)],
  GetBookingsDataEntry.prototype,
  "startTime",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", String)],
  GetBookingsDataEntry.prototype,
  "endTime",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Attendee),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  GetBookingsDataEntry.prototype,
  "attendees",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  GetBookingsDataEntry.prototype,
  "uid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingsDataEntry.prototype,
  "recurringEventId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsUrl)(), __metadata("design:type", Object)],
  GetBookingsDataEntry.prototype,
  "location",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EventType),
    __metadata("design:type", EventType),
  ],
  GetBookingsDataEntry.prototype,
  "eventType",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEnum)(Status), __metadata("design:type", String)],
  GetBookingsDataEntry.prototype,
  "status",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  GetBookingsDataEntry.prototype,
  "paid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsArray)(), __metadata("design:type", Array)],
  GetBookingsDataEntry.prototype,
  "payment",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  GetBookingsDataEntry.prototype,
  "references",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  GetBookingsDataEntry.prototype,
  "isRecorded",
  void 0
);
__decorate(
  [(0, class_validator_1.IsArray)(), __metadata("design:type", Array)],
  GetBookingsDataEntry.prototype,
  "seatsReferences",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => User),
    __metadata("design:type", Object),
  ],
  GetBookingsDataEntry.prototype,
  "user",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  GetBookingsDataEntry.prototype,
  "rescheduled",
  void 0
);
class GetBookingsData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      bookings: { required: true, type: () => [GetBookingsDataEntry] },
      recurringInfo: { required: true, type: () => [Object] },
      nextCursor: { required: true, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GetBookingsDataEntry),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  GetBookingsData.prototype,
  "bookings",
  void 0
);
__decorate(
  [(0, class_validator_1.IsArray)(), __metadata("design:type", Array)],
  GetBookingsData.prototype,
  "recurringInfo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  GetBookingsData.prototype,
  "nextCursor",
  void 0
);
class GetBookingsOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => GetBookingsData },
    };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.SUCCESS_STATUS,
      enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
    }),
    (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
    __metadata("design:type", Object),
  ],
  GetBookingsOutput.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: GetBookingsData,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GetBookingsData),
    __metadata("design:type", GetBookingsData),
  ],
  GetBookingsOutput.prototype,
  "data",
  void 0
);
exports.GetBookingsOutput = GetBookingsOutput;
//# sourceMappingURL=get-bookings.output.js.map
