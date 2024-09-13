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
exports.AvatarValidator = void 0;
const class_validator_1 = require("class-validator");
let AvatarValidator = class AvatarValidator {
  validate(avatarString) {
    const regex = /^data:image\/[^;]+;base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    return regex.test(avatarString);
  }
};
AvatarValidator = __decorate(
  [(0, class_validator_1.ValidatorConstraint)({ name: "avatarValidator", async: false })],
  AvatarValidator
);
exports.AvatarValidator = AvatarValidator;
//# sourceMappingURL=avatarValidator.js.map
