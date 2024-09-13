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
exports.LocaleValidator = void 0;
const class_validator_1 = require("class-validator");
let LocaleValidator = class LocaleValidator {
  validate(locale) {
    const localeValues = [
      "en",
      "fr",
      "it",
      "ru",
      "es",
      "de",
      "pt",
      "ro",
      "nl",
      "pt-BR",
      "ko",
      "ja",
      "pl",
      "ar",
      "iw",
      "zh-CN",
      "zh-TW",
      "cs",
      "sr",
      "sv",
      "vi",
    ];
    if (localeValues.includes(locale)) return true;
    return false;
  }
  defaultMessage() {
    return "Please include a valid locale";
  }
};
LocaleValidator = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "localeValidator", async: false })],
  LocaleValidator
);
exports.LocaleValidator = LocaleValidator;
//# sourceMappingURL=localeValidator.js.map
