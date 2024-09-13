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
exports.GetBookingOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class Metadata {
  static _OPENAPI_METADATA_FACTORY() {
    return { videoCallUrl: { required: true, type: () => String } };
  }
}
__decorate(
  [(0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  Metadata.prototype,
  "videoCallUrl",
  void 0
);
class Location {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      optionValue: { required: true, type: () => String },
      value: { required: true, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Location.prototype,
  "optionValue",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Location.prototype,
  "value",
  void 0
);
class Response {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String },
      email: { required: true, type: () => String },
      notes: { required: true, type: () => String },
      guests: { required: true, type: () => [String] },
      location: { required: true, type: () => Location },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Response.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Response.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Response.prototype,
  "notes",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  Response.prototype,
  "guests",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Location),
    __metadata("design:type", Location),
  ],
  Response.prototype,
  "location",
  void 0
);
class User {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      name: { required: true, type: () => String, nullable: true },
      email: { required: true, type: () => String },
      username: { required: true, type: () => String, nullable: true },
      timeZone: { required: true, type: () => String },
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
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  User.prototype,
  "timeZone",
  void 0
);
class Attendee {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String },
      email: { required: true, type: () => String },
      timeZone: { required: true, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Attendee.prototype,
  "name",
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
  "timeZone",
  void 0
);
class EventType {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      eventName: { required: true, type: () => String, nullable: true },
      slug: { required: true, type: () => String },
      timeZone: { required: true, type: () => String, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  EventType.prototype,
  "eventName",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  EventType.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  EventType.prototype,
  "timeZone",
  void 0
);
class GetBookingData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      title: { required: true, type: () => String },
      id: { required: true, type: () => Number },
      uid: { required: true, type: () => String },
      description: { required: true, type: () => String, nullable: true },
      customInputs: { required: true, type: () => Object },
      smsReminderNumber: { required: true, type: () => String, nullable: true },
      recurringEventId: { required: true, type: () => String, nullable: true },
      startTime: { required: true, type: () => Date },
      endTime: { required: true, type: () => Date },
      location: { required: true, type: () => String, nullable: true },
      status: { required: true, type: () => String },
      metadata: { required: true, type: () => Object },
      cancellationReason: { required: true, type: () => String, nullable: true },
      responses: { required: true, type: () => Object },
      rejectionReason: { required: true, type: () => String, nullable: true },
      userPrimaryEmail: { required: true, type: () => String, nullable: true },
      user: { required: true, type: () => User, nullable: true },
      attendees: { required: true, type: () => [Attendee] },
      eventTypeId: { required: true, type: () => Number, nullable: true },
      eventType: { required: true, type: () => EventType, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  GetBookingData.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  GetBookingData.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  GetBookingData.prototype,
  "uid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "description",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "customInputs",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "smsReminderNumber",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "recurringEventId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", Date)],
  GetBookingData.prototype,
  "startTime",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", Date)],
  GetBookingData.prototype,
  "endTime",
  void 0
);
__decorate(
  [(0, class_validator_1.IsUrl)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "location",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  GetBookingData.prototype,
  "status",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "cancellationReason",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Response),
    __metadata("design:type", Object),
  ],
  GetBookingData.prototype,
  "responses",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "rejectionReason",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsEmail)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "userPrimaryEmail",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => User),
    __metadata("design:type", Object),
  ],
  GetBookingData.prototype,
  "user",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Attendee),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  GetBookingData.prototype,
  "attendees",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  GetBookingData.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EventType),
    __metadata("design:type", Object),
  ],
  GetBookingData.prototype,
  "eventType",
  void 0
);
class GetBookingOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => GetBookingData },
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
  GetBookingOutput.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: GetBookingData,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GetBookingData),
    __metadata("design:type", GetBookingData),
  ],
  GetBookingOutput.prototype,
  "data",
  void 0
);
exports.GetBookingOutput = GetBookingOutput;
//# sourceMappingURL=get-booking.output.js.map
