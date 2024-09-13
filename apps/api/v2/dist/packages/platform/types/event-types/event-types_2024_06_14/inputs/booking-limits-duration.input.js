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
exports.ValidateBookingLimistsDuration = exports.BookingLimitsDuration_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BookingLimitsDuration_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      day: { required: false, type: () => Number, minimum: 15 },
      week: { required: false, type: () => Number, minimum: 15 },
      month: { required: false, type: () => Number, minimum: 15 },
      year: { required: false, type: () => Number, minimum: 15 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(15),
    (0, swagger_1.ApiProperty)({
      description: "The duration of bookings per day (must be a multiple of 15)",
      example: 60,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsDuration_2024_06_14.prototype,
  "day",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(15),
    (0, swagger_1.ApiProperty)({
      description: "The duration of bookings per week (must be a multiple of 15)",
      example: 120,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsDuration_2024_06_14.prototype,
  "week",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(15),
    (0, swagger_1.ApiProperty)({
      description: "The duration of bookings per month (must be a multiple of 15)",
      example: 180,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsDuration_2024_06_14.prototype,
  "month",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(15),
    (0, swagger_1.ApiProperty)({
      description: "The duration of bookings per year (must be a multiple of 15)",
      example: 240,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsDuration_2024_06_14.prototype,
  "year",
  void 0
);
exports.BookingLimitsDuration_2024_06_14 = BookingLimitsDuration_2024_06_14;
let BookingLimitsDurationValidator = class BookingLimitsDurationValidator {
  constructor() {
    this.errorDetails = {};
  }
  validate(value) {
    if (!value) return false;
    const { day, week, month, year } = value;
    if (day && ((week && day > week) || (month && day > month) || (year && day > year))) {
      this.errorDetails.invalidLimit = "day";
      this.errorDetails.comparedLimit = week && day > week ? "week" : month && day > month ? "month" : "year";
      return false;
    }
    if (week && ((month && week > month) || (year && week > year))) {
      this.errorDetails.invalidLimit = "week";
      this.errorDetails.comparedLimit = month && week > month ? "month" : "year";
      return false;
    }
    if (month && year && month > year) {
      this.errorDetails.invalidLimit = "month";
      this.errorDetails.comparedLimit = "year";
      return false;
    }
    return true;
  }
  defaultMessage() {
    const { invalidLimit, comparedLimit } = this.errorDetails;
    return `Invalid booking durations: The duration of bookings for ${invalidLimit} cannot exceed the duration of bookings for ${comparedLimit}.`;
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      errorDetails: {
        required: true,
        type: () => ({
          invalidLimit: { required: false, type: () => String },
          comparedLimit: { required: false, type: () => String },
        }),
        default: {},
      },
    };
  }
};
BookingLimitsDurationValidator = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "BookingLimitsDurationValidator", async: false })],
  BookingLimitsDurationValidator
);
function ValidateBookingLimistsDuration(validationOptions) {
  return function (object, propertyName) {
    (0, class_validator_1.registerDecorator)({
      name: "ValidateBookingLimistsDuration",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new BookingLimitsDurationValidator(),
    });
  };
}
exports.ValidateBookingLimistsDuration = ValidateBookingLimistsDuration;
//# sourceMappingURL=booking-limits-duration.input.js.map
