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
exports.ConnectedCalendarsOutput = exports.ConnectedCalendar = exports.Calendar = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class Integration {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      appData: { required: false, type: () => Object, nullable: true },
      dirName: { required: false, type: () => String },
      __template: { required: false, type: () => String },
      name: { required: true, type: () => String },
      description: { required: true, type: () => String },
      installed: { required: false, type: () => Boolean },
      type: { required: true, type: () => String },
      title: { required: false, type: () => String },
      variant: { required: true, type: () => String },
      category: { required: false, type: () => String },
      categories: { required: true, type: () => [String] },
      logo: { required: true, type: () => String },
      publisher: { required: true, type: () => String },
      slug: { required: true, type: () => String },
      url: { required: true, type: () => String },
      email: { required: true, type: () => String },
      locationOption: { required: true, type: () => Object, nullable: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  Integration.prototype,
  "appData",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "dirName",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "__template",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "description",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  Integration.prototype,
  "installed",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "variant",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "category",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  Integration.prototype,
  "categories",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "logo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "publisher",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Integration.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  Integration.prototype,
  "url",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Integration.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  Integration.prototype,
  "locationOption",
  void 0
);
class Primary {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      externalId: { required: true, type: () => String },
      integration: { required: false, type: () => String },
      name: { required: false, type: () => String },
      primary: { required: true, type: () => Boolean, nullable: true },
      readOnly: { required: true, type: () => Boolean },
      email: { required: false, type: () => String },
      isSelected: { required: true, type: () => Boolean },
      credentialId: { required: true, type: () => Number },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Primary.prototype,
  "externalId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Primary.prototype,
  "integration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Primary.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Object)],
  Primary.prototype,
  "primary",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  Primary.prototype,
  "readOnly",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Primary.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  Primary.prototype,
  "isSelected",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Primary.prototype,
  "credentialId",
  void 0
);
class Calendar {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      externalId: { required: true, type: () => String },
      integration: { required: false, type: () => String },
      name: { required: false, type: () => String },
      primary: { required: false, type: () => Boolean, nullable: true },
      readOnly: { required: true, type: () => Boolean },
      email: { required: false, type: () => String },
      isSelected: { required: true, type: () => Boolean },
      credentialId: { required: true, type: () => Number },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Calendar.prototype,
  "externalId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Calendar.prototype,
  "integration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Calendar.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object),
  ],
  Calendar.prototype,
  "primary",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  Calendar.prototype,
  "readOnly",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  Calendar.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  Calendar.prototype,
  "isSelected",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  Calendar.prototype,
  "credentialId",
  void 0
);
exports.Calendar = Calendar;
class ConnectedCalendar {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      integration: { required: true, type: () => Integration },
      credentialId: { required: true, type: () => Number },
      primary: { required: false, type: () => Primary },
      calendars: { required: false, type: () => [require("./connected-calendars.output").Calendar] },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Integration),
  ],
  ConnectedCalendar.prototype,
  "integration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  ConnectedCalendar.prototype,
  "credentialId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Primary),
  ],
  ConnectedCalendar.prototype,
  "primary",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array),
  ],
  ConnectedCalendar.prototype,
  "calendars",
  void 0
);
exports.ConnectedCalendar = ConnectedCalendar;
class DestinationCalendar {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      integration: { required: true, type: () => String },
      externalId: { required: true, type: () => String },
      primaryEmail: { required: true, type: () => String, nullable: true },
      userId: { required: true, type: () => Number, nullable: true },
      eventTypeId: { required: true, type: () => Number, nullable: true },
      credentialId: { required: true, type: () => Number, nullable: true },
      name: { required: false, type: () => String, nullable: true },
      primary: { required: false, type: () => Boolean },
      readOnly: { required: false, type: () => Boolean },
      email: { required: false, type: () => String },
      integrationTitle: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  DestinationCalendar.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  DestinationCalendar.prototype,
  "integration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  DestinationCalendar.prototype,
  "externalId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", Object)],
  DestinationCalendar.prototype,
  "primaryEmail",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  DestinationCalendar.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  DestinationCalendar.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  DestinationCalendar.prototype,
  "credentialId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  DestinationCalendar.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  DestinationCalendar.prototype,
  "primary",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  DestinationCalendar.prototype,
  "readOnly",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  DestinationCalendar.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  DestinationCalendar.prototype,
  "integrationTitle",
  void 0
);
class ConnectedCalendarsData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      connectedCalendars: {
        required: true,
        type: () => [require("./connected-calendars.output").ConnectedCalendar],
      },
      destinationCalendar: { required: true, type: () => DestinationCalendar },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  ConnectedCalendarsData.prototype,
  "connectedCalendars",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", DestinationCalendar),
  ],
  ConnectedCalendarsData.prototype,
  "destinationCalendar",
  void 0
);
class ConnectedCalendarsOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => ConnectedCalendarsData },
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
  ConnectedCalendarsOutput.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ConnectedCalendarsData),
    __metadata("design:type", ConnectedCalendarsData),
  ],
  ConnectedCalendarsOutput.prototype,
  "data",
  void 0
);
exports.ConnectedCalendarsOutput = ConnectedCalendarsOutput;
//# sourceMappingURL=connected-calendars.output.js.map
