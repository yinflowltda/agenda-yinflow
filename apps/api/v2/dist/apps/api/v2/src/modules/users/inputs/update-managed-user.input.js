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
exports.UpdateManagedUserInput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const locales_1 = require("../../../lib/enums/locales");
const capitalize_timezone_1 = require("../../../lib/inputs/capitalize-timezone");
class UpdateManagedUserInput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      email: { required: false, type: () => String },
      name: { required: false, type: () => String },
      timeFormat: { required: false, type: () => Object, enum: ["12", "24"] },
      defaultScheduleId: { required: false, type: () => Number },
      weekStart: {
        required: false,
        type: () => Object,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      timeZone: { required: false, type: () => String },
      locale: { required: false, enum: require("../../../lib/enums/locales").Locales },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateManagedUserInput.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateManagedUserInput.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(["12", "24"]),
    (0, swagger_1.ApiProperty)({ example: 12, enum: [12, 24], description: "Must be 12 or 24" }),
    __metadata("design:type", Number),
  ],
  UpdateManagedUserInput.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  UpdateManagedUserInput.prototype,
  "defaultScheduleId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]),
    (0, swagger_1.ApiProperty)({
      example: "Monday",
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    }),
    __metadata("design:type", String),
  ],
  UpdateManagedUserInput.prototype,
  "weekStart",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsTimeZone)(),
    (0, class_validator_1.IsOptional)(),
    (0, capitalize_timezone_1.CapitalizeTimeZone)(),
    __metadata("design:type", String),
  ],
  UpdateManagedUserInput.prototype,
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
  UpdateManagedUserInput.prototype,
  "locale",
  void 0
);
exports.UpdateManagedUserInput = UpdateManagedUserInput;
//# sourceMappingURL=update-managed-user.input.js.map
