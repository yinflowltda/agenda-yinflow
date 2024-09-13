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
exports.ThemeValidator = void 0;
const class_validator_1 = require("class-validator");
let ThemeValidator = class ThemeValidator {
  validate(theme) {
    const themeValues = ["dark", "light"];
    if (themeValues.includes(theme)) return true;
    return false;
  }
  defaultMessage() {
    return "Please include either 'dark' or 'light";
  }
};
ThemeValidator = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "themeValidator", async: false })],
  ThemeValidator
);
exports.ThemeValidator = ThemeValidator;
//# sourceMappingURL=themeValidator.js.map
