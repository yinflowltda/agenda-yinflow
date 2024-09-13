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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsYearMonthDays = void 0;
const class_validator_1 = require("class-validator");
const luxon_1 = require("luxon");
let IsYearMonthDays = class IsYearMonthDays {
  validate(dateString) {
    try {
      const dateTime = luxon_1.DateTime.fromFormat(dateString, "yyyy-MM-dd");
      return dateTime.isValid;
    } catch (error) {
      return false;
    }
  }
  defaultMessage() {
    return "time format must be YEAR-MONTH-DAYS (e.g. 2022-01-01)";
  }
};
IsYearMonthDays = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "IsYearMonthDays", async: false })],
  IsYearMonthDays
);
exports.IsYearMonthDays = IsYearMonthDays;
//# sourceMappingURL=isYearMonthDays.js.map
