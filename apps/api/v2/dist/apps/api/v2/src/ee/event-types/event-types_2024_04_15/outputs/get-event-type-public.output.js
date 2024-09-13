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
exports.GetEventTypePublicOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class Location {
  static _OPENAPI_METADATA_FACTORY() {
    return { type: { required: true, type: () => String } };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Location.prototype,
  "type",
  void 0
);
class Source {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => String },
      type: { required: true, type: () => String },
      label: { required: true, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "label",
  void 0
);
class OptionInput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String },
      required: { required: false, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  OptionInput.prototype,
  "type",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  OptionInput.prototype,
  "required",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  OptionInput.prototype,
  "placeholder",
  void 0
);
class BookingField {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String },
      type: { required: true, type: () => String },
      defaultLabel: { required: false, type: () => String },
      label: { required: false, type: () => String },
      placeholder: { required: false, type: () => String },
      required: { required: false, type: () => Boolean },
      getOptionsAt: { required: false, type: () => String },
      hideWhenJustOneOption: { required: false, type: () => Boolean },
      editable: { required: false, type: () => String },
      sources: { required: false, type: () => [Source] },
      disableOnPrefill: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField.prototype,
  "defaultLabel",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  BookingField.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  BookingField.prototype,
  "placeholder",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  BookingField.prototype,
  "required",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  BookingField.prototype,
  "getOptionsAt",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  BookingField.prototype,
  "optionsInputs",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  BookingField.prototype,
  "hideWhenJustOneOption",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  BookingField.prototype,
  "editable",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Source),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array),
  ],
  BookingField.prototype,
  "sources",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  BookingField.prototype,
  "disableOnPrefill",
  void 0
);
class Organization {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      slug: { required: false, type: () => String, nullable: true },
      name: { required: true, type: () => String },
      metadata: { required: true, type: () => Object },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Organization.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Organization.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Organization.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Organization.prototype,
  "metadata",
  void 0
);
class Profile {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      username: { required: true, type: () => String, nullable: true },
      id: { required: true, type: () => Number, nullable: true },
      userId: { required: false, type: () => Number },
      uid: { required: false, type: () => String },
      name: { required: false, type: () => String },
      organizationId: { required: true, type: () => Number, nullable: true },
      organization: { required: false, type: () => Organization, nullable: true },
      upId: { required: true, type: () => String },
      image: { required: false, type: () => String },
      brandColor: { required: false, type: () => String },
      darkBrandColor: { required: false, type: () => String },
      theme: { required: false, type: () => String },
      bookerLayouts: { required: false, type: () => Object },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Profile.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  Profile.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  Profile.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Profile.prototype,
  "uid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Profile.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  Profile.prototype,
  "organizationId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Organization),
    __metadata("design:type", Object),
  ],
  Profile.prototype,
  "organization",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Profile.prototype,
  "upId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Profile.prototype,
  "image",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Profile.prototype,
  "brandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Profile.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Profile.prototype,
  "theme",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Profile.prototype,
  "bookerLayouts",
  void 0
);
class Owner {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      avatarUrl: { required: false, type: () => String, nullable: true },
      username: { required: true, type: () => String, nullable: true },
      name: { required: true, type: () => String, nullable: true },
      weekStart: { required: true, type: () => String },
      brandColor: { required: false, type: () => String, nullable: true },
      darkBrandColor: { required: false, type: () => String, nullable: true },
      theme: { required: false, type: () => String, nullable: true },
      metadata: { required: true, type: () => Object },
      defaultScheduleId: { required: false, type: () => Number, nullable: true },
      nonProfileUsername: { required: true, type: () => String, nullable: true },
      profile: { required: true, type: () => Profile },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Owner.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Owner.prototype,
  "avatarUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Owner.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Owner.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Owner.prototype,
  "weekStart",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Owner.prototype,
  "brandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Owner.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Owner.prototype,
  "theme",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Owner.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  Owner.prototype,
  "defaultScheduleId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Owner.prototype,
  "nonProfileUsername",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Profile),
    __metadata("design:type", Profile),
  ],
  Owner.prototype,
  "profile",
  void 0
);
class User {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      username: { required: true, type: () => String, nullable: true },
      name: { required: true, type: () => String, nullable: true },
      weekStart: { required: true, type: () => String },
      organizationId: { required: false, type: () => Number },
      avatarUrl: { required: false, type: () => String, nullable: true },
      profile: { required: true, type: () => Profile },
      bookerUrl: { required: true, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  User.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  User.prototype,
  "weekStart",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  User.prototype,
  "organizationId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  User.prototype,
  "avatarUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.ValidateNested)(), __metadata("design:type", Profile)],
  User.prototype,
  "profile",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  User.prototype,
  "bookerUrl",
  void 0
);
class Schedule {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      timeZone: { required: true, type: () => String, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Schedule.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  Schedule.prototype,
  "timeZone",
  void 0
);
class PublicEventTypeOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      title: { required: true, type: () => String },
      description: { required: true, type: () => String },
      eventName: { required: false, type: () => String, nullable: true },
      slug: { required: true, type: () => String },
      isInstantEvent: { required: true, type: () => Boolean },
      aiPhoneCallConfig: { required: false, type: () => Object },
      schedulingType: { required: false, type: () => Object },
      length: { required: true, type: () => Number },
      locations: { required: true, type: () => [Location] },
      customInputs: { required: true, type: () => [Object] },
      disableGuests: { required: true, type: () => Boolean },
      metadata: { required: true, type: () => Object, nullable: true },
      lockTimeZoneToggleOnBookingPage: { required: true, type: () => Boolean },
      requiresConfirmation: { required: true, type: () => Boolean },
      requiresBookerEmailVerification: { required: true, type: () => Boolean },
      recurringEvent: { required: false, type: () => Object },
      price: { required: true, type: () => Number },
      currency: { required: true, type: () => String },
      seatsPerTimeSlot: { required: false, type: () => Number, nullable: true },
      seatsShowAvailabilityCount: { required: true, type: () => Boolean, nullable: true },
      bookingFields: { required: true, type: () => [BookingField] },
      team: { required: false, type: () => Object },
      successRedirectUrl: { required: false, type: () => String, nullable: true },
      workflows: { required: true, type: () => [Object] },
      hosts: { required: true, type: () => [Object] },
      owner: { required: true, type: () => Owner, nullable: true },
      schedule: { required: true, type: () => Schedule, nullable: true },
      hidden: { required: true, type: () => Boolean },
      assignAllTeamMembers: { required: true, type: () => Boolean },
      bookerLayouts: { required: false, type: () => Object },
      users: { required: true, type: () => [User] },
      entity: { required: true, type: () => Object },
      isDynamic: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  PublicEventTypeOutput.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  PublicEventTypeOutput.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  PublicEventTypeOutput.prototype,
  "description",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "eventName",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  PublicEventTypeOutput.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "isInstantEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "aiPhoneCallConfig",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "schedulingType",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  PublicEventTypeOutput.prototype,
  "length",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Location),
    __metadata("design:type", Array),
  ],
  PublicEventTypeOutput.prototype,
  "locations",
  void 0
);
__decorate(
  [(0, class_validator_1.IsArray)(), __metadata("design:type", Array)],
  PublicEventTypeOutput.prototype,
  "customInputs",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "lockTimeZoneToggleOnBookingPage",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "requiresConfirmation",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "requiresBookerEmailVerification",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "recurringEvent",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), __metadata("design:type", Number)],
  PublicEventTypeOutput.prototype,
  "price",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  PublicEventTypeOutput.prototype,
  "currency",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "seatsPerTimeSlot",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "seatsShowAvailabilityCount",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BookingField),
    __metadata("design:type", Array),
  ],
  PublicEventTypeOutput.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "team",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "successRedirectUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsArray)(), __metadata("design:type", Array)],
  PublicEventTypeOutput.prototype,
  "workflows",
  void 0
);
__decorate(
  [(0, class_validator_1.IsArray)(), __metadata("design:type", Array)],
  PublicEventTypeOutput.prototype,
  "hosts",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Owner),
    __metadata("design:type", Object),
  ],
  PublicEventTypeOutput.prototype,
  "owner",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Schedule),
    __metadata("design:type", Object),
  ],
  PublicEventTypeOutput.prototype,
  "schedule",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "hidden",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "assignAllTeamMembers",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "bookerLayouts",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => User),
    __metadata("design:type", Array),
  ],
  PublicEventTypeOutput.prototype,
  "users",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  PublicEventTypeOutput.prototype,
  "entity",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PublicEventTypeOutput.prototype,
  "isDynamic",
  void 0
);
class GetEventTypePublicOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => PublicEventTypeOutput, nullable: true },
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
  GetEventTypePublicOutput.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PublicEventTypeOutput),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Object),
  ],
  GetEventTypePublicOutput.prototype,
  "data",
  void 0
);
exports.GetEventTypePublicOutput = GetEventTypePublicOutput;
//# sourceMappingURL=get-event-type-public.output.js.map
