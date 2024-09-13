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
exports.CreateUserInput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const avatarValidator_1 = require("../validators/avatarValidator");
const localeValidator_1 = require("../validators/localeValidator");
const themeValidator_1 = require("../validators/themeValidator");
const timeFormatValidator_1 = require("../validators/timeFormatValidator");
const timeZoneValidator_1 = require("../validators/timeZoneValidator");
const weekdayValidator_1 = require("../validators/weekdayValidator");
class CreateUserInput {
  constructor() {
    this.locale = "en";
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      email: { required: true, type: () => String },
      username: { required: false, type: () => String },
      weekday: { required: false, type: () => String },
      brandColor: { required: false, type: () => String },
      darkBrandColor: { required: false, type: () => String },
      hideBranding: { required: false, type: () => Boolean },
      timeZone: { required: false, type: () => String },
      theme: { required: false, type: () => String, nullable: true },
      appTheme: { required: false, type: () => String, nullable: true },
      timeFormat: { required: false, type: () => Number },
      defaultScheduleId: { required: false, type: () => Number, minimum: 0 },
      locale: { required: false, type: () => String, nullable: true, default: "en" },
      avatarUrl: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      description: "User email address",
      example: "user@example.com",
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_transformer_1.Transform)(({ value }) => {
      if (typeof value === "string") {
        return value.toLowerCase();
      }
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "email",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Username",
      example: "user123",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => {
      if (typeof value === "string") {
        return value.toLowerCase();
      }
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "username",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Preferred weekday",
      example: "Monday",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(weekdayValidator_1.WeekdayValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "weekday",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Brand color in HEX format",
      example: "#FFFFFF",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsHexColor)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "brandColor",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Dark brand color in HEX format",
      example: "#000000",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsHexColor)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: Boolean,
      required: false,
      description: "Hide branding",
      example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean),
  ],
  CreateUserInput.prototype,
  "hideBranding",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Time zone",
      example: "America/New_York",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(timeZoneValidator_1.TimeZoneValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ type: String, required: false, description: "Theme", example: "dark" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(themeValidator_1.ThemeValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
  ],
  CreateUserInput.prototype,
  "theme",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Application theme",
      example: "light",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(themeValidator_1.ThemeValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
  ],
  CreateUserInput.prototype,
  "appTheme",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ type: Number, required: false, description: "Time format", example: 24 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Validate)(timeFormatValidator_1.TimeFormatValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
  ],
  CreateUserInput.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: Number,
      required: false,
      description: "Default schedule ID",
      example: 1,
      minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
  ],
  CreateUserInput.prototype,
  "defaultScheduleId",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Locale",
      example: "en",
      default: "en",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(localeValidator_1.LocaleValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
  ],
  CreateUserInput.prototype,
  "locale",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: String,
      required: false,
      description: "Avatar URL",
      example: "https://example.com/avatar.jpg",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(avatarValidator_1.AvatarValidator),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  CreateUserInput.prototype,
  "avatarUrl",
  void 0
);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=create-user.input.js.map
