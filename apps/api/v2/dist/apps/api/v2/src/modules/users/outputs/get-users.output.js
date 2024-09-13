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
exports.GetUsersOutput = exports.GetUserOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_transformer_2 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetUserOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      username: { required: true, type: () => String, nullable: true },
      name: { required: true, type: () => String, nullable: true },
      email: { required: true, type: () => String },
      emailVerified: { required: true, type: () => Date, nullable: true },
      bio: { required: true, type: () => String, nullable: true },
      avatarUrl: { required: true, type: () => String, nullable: true },
      timeZone: { required: true, type: () => String },
      weekStart: { required: true, type: () => String },
      appTheme: { required: true, type: () => String, nullable: true },
      theme: { required: true, type: () => String, nullable: true },
      defaultScheduleId: { required: true, type: () => Number, nullable: true },
      locale: { required: true, type: () => String, nullable: true },
      timeFormat: { required: true, type: () => Number, nullable: true },
      hideBranding: { required: true, type: () => Boolean },
      brandColor: { required: true, type: () => String, nullable: true },
      darkBrandColor: { required: true, type: () => String, nullable: true },
      allowDynamicBooking: { required: true, type: () => Boolean, nullable: true },
      createdDate: { required: true, type: () => Date },
      verified: { required: true, type: () => Boolean, nullable: true },
      invitedTo: { required: true, type: () => Number, nullable: true },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Number,
      required: true,
      description: "The ID of the user",
      example: 1,
    }),
    __metadata("design:type", Number),
  ],
  GetUserOutput.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The username of the user",
      example: "john_doe",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "username",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The name of the user",
      example: "John Doe",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      required: true,
      description: "The email of the user",
      example: "john@example.com",
    }),
    __metadata("design:type", String),
  ],
  GetUserOutput.prototype,
  "email",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Date,
      nullable: true,
      required: false,
      description: "The date when the email was verified",
      example: "2022-01-01T00:00:00Z",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "emailVerified",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The bio of the user",
      example: "I am a software developer",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "bio",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The URL of the user's avatar",
      example: "https://example.com/avatar.jpg",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "avatarUrl",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      required: true,
      description: "The time zone of the user",
      example: "America/New_York",
    }),
    __metadata("design:type", String),
  ],
  GetUserOutput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      required: true,
      description: "The week start day of the user",
      example: "Monday",
    }),
    __metadata("design:type", String),
  ],
  GetUserOutput.prototype,
  "weekStart",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The app theme of the user",
      example: "light",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "appTheme",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The theme of the user",
      example: "default",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "theme",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Number,
      nullable: true,
      required: false,
      description: "The ID of the default schedule for the user",
      example: 1,
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "defaultScheduleId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The locale of the user",
      example: "en-US",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "locale",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Number,
      nullable: true,
      required: false,
      description: "The time format of the user",
      example: 12,
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Boolean,
      required: true,
      description: "Whether to hide branding for the user",
      example: false,
    }),
    __metadata("design:type", Boolean),
  ],
  GetUserOutput.prototype,
  "hideBranding",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The brand color of the user",
      example: "#ffffff",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "brandColor",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: String,
      nullable: true,
      required: false,
      description: "The dark brand color of the user",
      example: "#000000",
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Boolean,
      nullable: true,
      required: false,
      description: "Whether dynamic booking is allowed for the user",
      example: true,
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "allowDynamicBooking",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Date,
      required: true,
      description: "The date when the user was created",
      example: "2022-01-01T00:00:00Z",
    }),
    __metadata("design:type", Date),
  ],
  GetUserOutput.prototype,
  "createdDate",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Boolean,
      nullable: true,
      required: false,
      description: "Whether the user is verified",
      example: true,
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "verified",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_2.Expose)(),
    (0, swagger_1.ApiProperty)({
      type: Number,
      nullable: true,
      required: false,
      description: "The ID of the user who invited this user",
      example: 1,
    }),
    __metadata("design:type", Object),
  ],
  GetUserOutput.prototype,
  "invitedTo",
  void 0
);
exports.GetUserOutput = GetUserOutput;
class GetUsersOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return { users: { required: true, type: () => [require("./get-users.output").GetUserOutput] } };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GetUserOutput),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
      type: [GetUserOutput],
      required: true,
      description: "The list of users",
      example: [{ id: 1, username: "john_doe", name: "John Doe", email: "john@example.com" }],
    }),
    __metadata("design:type", Array),
  ],
  GetUsersOutput.prototype,
  "users",
  void 0
);
exports.GetUsersOutput = GetUsersOutput;
//# sourceMappingURL=get-users.output.js.map
