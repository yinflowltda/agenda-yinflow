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
exports.ValidateBookingLimistsCount = exports.BookingLimitsCount_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BookingLimitsCount_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      day: { required: false, type: () => Number, minimum: 1 },
      week: { required: false, type: () => Number, minimum: 1 },
      month: { required: false, type: () => Number, minimum: 1 },
      year: { required: false, type: () => Number, minimum: 1 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
      description: "The number of bookings per day",
      example: 1,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsCount_2024_06_14.prototype,
  "day",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
      description: "The number of bookings per week",
      example: 2,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsCount_2024_06_14.prototype,
  "week",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
      description: "The number of bookings per month",
      example: 3,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsCount_2024_06_14.prototype,
  "month",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
      description: "The number of bookings per year",
      example: 4,
    }),
    __metadata("design:type", Number),
  ],
  BookingLimitsCount_2024_06_14.prototype,
  "year",
  void 0
);
exports.BookingLimitsCount_2024_06_14 = BookingLimitsCount_2024_06_14;
let BookingLimitsCountValidator = class BookingLimitsCountValidator {
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
    return `Invalid booking limits: The number of bookings for ${invalidLimit} cannot exceed the number of bookings for ${comparedLimit}.`;
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
BookingLimitsCountValidator = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "BookingLimitsCountValidator", async: false })],
  BookingLimitsCountValidator
);
function ValidateBookingLimistsCount(validationOptions) {
  return function (object, propertyName) {
    (0, class_validator_1.registerDecorator)({
      name: "ValidateBookingLimistsCount",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new BookingLimitsCountValidator(),
    });
  };
}
exports.ValidateBookingLimistsCount = ValidateBookingLimistsCount;
//# sourceMappingURL=booking-limits-count.input.js.map
