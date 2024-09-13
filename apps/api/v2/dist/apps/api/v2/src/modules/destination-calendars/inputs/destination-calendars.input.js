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
exports.DestinationCalendarsInputBodyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class DestinationCalendarsInputBodyDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      integration: { required: true, type: () => Object },
      externalId: { required: true, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.APPLE_CALENDAR_TYPE,
      description: "The calendar service you want to integrate, as returned by the /calendars endpoint",
      enum: [
        platform_constants_1.APPLE_CALENDAR_TYPE,
        platform_constants_1.GOOGLE_CALENDAR_TYPE,
        platform_constants_1.OFFICE_365_CALENDAR_TYPE,
      ],
      required: true,
    }),
    (0, class_validator_1.IsEnum)([
      platform_constants_1.APPLE_CALENDAR_TYPE,
      platform_constants_1.GOOGLE_CALENDAR_TYPE,
      platform_constants_1.OFFICE_365_CALENDAR_TYPE,
    ]),
    __metadata("design:type", Object),
  ],
  DestinationCalendarsInputBodyDto.prototype,
  "integration",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
      example: "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
      description:
        "Unique identifier used to represent the specfic calendar, as returned by the /calendars endpoint",
      type: "string",
      required: true,
    }),
    __metadata("design:type", String),
  ],
  DestinationCalendarsInputBodyDto.prototype,
  "externalId",
  void 0
);
exports.DestinationCalendarsInputBodyDto = DestinationCalendarsInputBodyDto;
//# sourceMappingURL=destination-calendars.input.js.map
