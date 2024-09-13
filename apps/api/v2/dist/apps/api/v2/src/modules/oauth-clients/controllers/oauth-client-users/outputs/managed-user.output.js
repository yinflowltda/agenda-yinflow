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
exports.ManagedUserOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const locales_1 = require("../../../../../lib/enums/locales");
class ManagedUserOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      email: { required: true, type: () => String },
      username: { required: true, type: () => String, nullable: true },
      timeZone: { required: true, type: () => String },
      weekStart: { required: true, type: () => String },
      createdDate: { required: true, type: () => Date },
      timeFormat: { required: true, type: () => Number, nullable: true },
      defaultScheduleId: { required: true, type: () => Number, nullable: true },
      locale: { required: false, enum: require("../../../../../lib/enums/locales").Locales },
    };
  }
}
__decorate(
  [(0, swagger_1.ApiProperty)({ example: 1 }), __metadata("design:type", Number)],
  ManagedUserOutput.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "alice+cluo37fwd0001khkzqqynkpj3@example.com" }),
    __metadata("design:type", String),
  ],
  ManagedUserOutput.prototype,
  "email",
  void 0
);
__decorate(
  [(0, swagger_1.ApiProperty)({ example: "alice" }), __metadata("design:type", Object)],
  ManagedUserOutput.prototype,
  "username",
  void 0
);
__decorate(
  [(0, swagger_1.ApiProperty)({ example: "America/New_York" }), __metadata("design:type", String)],
  ManagedUserOutput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, swagger_1.ApiProperty)({ example: "Sunday" }), __metadata("design:type", String)],
  ManagedUserOutput.prototype,
  "weekStart",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "2024-04-01T00:00:00.000Z", type: "string" }),
    (0, class_transformer_1.Transform)(({ value }) => value.toISOString()),
    __metadata("design:type", Date),
  ],
  ManagedUserOutput.prototype,
  "createdDate",
  void 0
);
__decorate(
  [(0, swagger_1.ApiProperty)({ example: 12, nullable: true }), __metadata("design:type", Object)],
  ManagedUserOutput.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [(0, swagger_1.ApiProperty)({ example: null }), __metadata("design:type", Object)],
  ManagedUserOutput.prototype,
  "defaultScheduleId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(locales_1.Locales),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: locales_1.Locales.EN, enum: locales_1.Locales }),
    __metadata("design:type", String),
  ],
  ManagedUserOutput.prototype,
  "locale",
  void 0
);
exports.ManagedUserOutput = ManagedUserOutput;
//# sourceMappingURL=managed-user.output.js.map
