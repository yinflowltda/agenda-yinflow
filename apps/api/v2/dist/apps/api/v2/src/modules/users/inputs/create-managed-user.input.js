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
exports.CreateManagedUserInput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const locales_1 = require("../../../lib/enums/locales");
const capitalize_timezone_1 = require("../../../lib/inputs/capitalize-timezone");
class CreateManagedUserInput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      email: { required: true, type: () => String },
      name: { required: false, type: () => String },
      timeFormat: { required: false, type: () => Object },
      weekStart: { required: false, type: () => Object },
      timeZone: { required: false, type: () => String },
      locale: { required: false, enum: require("../../../lib/enums/locales").Locales },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "alice@example.com" }),
    __metadata("design:type", String),
  ],
  CreateManagedUserInput.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateManagedUserInput.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 12, enum: [12, 24], description: "Must be 12 or 24" }),
    __metadata("design:type", Number),
  ],
  CreateManagedUserInput.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
      example: "Monday",
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    }),
    __metadata("design:type", String),
  ],
  CreateManagedUserInput.prototype,
  "weekStart",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsTimeZone)(),
    (0, class_validator_1.IsOptional)(),
    (0, capitalize_timezone_1.CapitalizeTimeZone)(),
    (0, swagger_1.ApiProperty)({ example: "America/New_York" }),
    __metadata("design:type", String),
  ],
  CreateManagedUserInput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(locales_1.Locales),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: locales_1.Locales.EN, enum: locales_1.Locales }),
    __metadata("design:type", String),
  ],
  CreateManagedUserInput.prototype,
  "locale",
  void 0
);
exports.CreateManagedUserInput = CreateManagedUserInput;
//# sourceMappingURL=create-managed-user.input.js.map
