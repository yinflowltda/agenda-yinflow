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
exports.ValidateBookingWindow =
  exports.RangeWindow_2024_06_14 =
  exports.CalendarDaysWindow_2024_06_14 =
  exports.BusinessDaysWindow_2024_06_14 =
    void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const platform_enums_1 = require("@calcom/platform-enums");
class BookingWindowBase {
  static _OPENAPI_METADATA_FACTORY() {
    return { type: { required: true, type: () => Object } };
  }
}
__decorate(
  [
    (0, class_validator_1.IsEnum)(platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14),
    __metadata("design:type", String),
  ],
  BookingWindowBase.prototype,
  "type",
  void 0
);
class BusinessDaysWindow_2024_06_14 extends BookingWindowBase {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      value: { required: true, type: () => Number },
      rolling: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsDefined)(), __metadata("design:type", Number)],
  BusinessDaysWindow_2024_06_14.prototype,
  "value",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  BusinessDaysWindow_2024_06_14.prototype,
  "rolling",
  void 0
);
exports.BusinessDaysWindow_2024_06_14 = BusinessDaysWindow_2024_06_14;
class CalendarDaysWindow_2024_06_14 extends BookingWindowBase {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      value: { required: true, type: () => Number },
      rolling: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsDefined)(), __metadata("design:type", Number)],
  CalendarDaysWindow_2024_06_14.prototype,
  "value",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CalendarDaysWindow_2024_06_14.prototype,
  "rolling",
  void 0
);
exports.CalendarDaysWindow_2024_06_14 = CalendarDaysWindow_2024_06_14;
class RangeWindow_2024_06_14 extends BookingWindowBase {
  static _OPENAPI_METADATA_FACTORY() {
    return { value: { required: true, type: () => [String] } };
  }
}
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsDateString)({}, { each: true }),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Array),
  ],
  RangeWindow_2024_06_14.prototype,
  "value",
  void 0
);
exports.RangeWindow_2024_06_14 = RangeWindow_2024_06_14;
let BookingWindowValidator = class BookingWindowValidator {
  validate(value) {
    if (!value || !value.type) {
      throw new common_1.BadRequestException(`'BookingWindow' must have a type`);
    }
    switch (value.type) {
      case platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14.businessDays:
      case platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14.calendarDays:
        return (
          typeof value.value === "number" &&
          (typeof value.rolling === "undefined" || typeof value.rolling === "boolean")
        );
      case platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14.range:
        return (
          Array.isArray(value.value) &&
          value.value.every((date) => typeof date === "string" && !isNaN(Date.parse(date)))
        );
      default:
        return false;
    }
  }
  defaultMessage() {
    return "Invalid bookingWindow structure.";
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {};
  }
};
BookingWindowValidator = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "bookingWindowValidator", async: false })],
  BookingWindowValidator
);
function ValidateBookingWindow(validationOptions) {
  return function (object, propertyName) {
    (0, class_validator_1.registerDecorator)({
      name: "ValidateBookingWindow",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new BookingWindowValidator(),
    });
  };
}
exports.ValidateBookingWindow = ValidateBookingWindow;
//# sourceMappingURL=booking-window.input.js.map
