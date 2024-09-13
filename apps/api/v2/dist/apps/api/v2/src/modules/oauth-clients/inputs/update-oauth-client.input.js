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
exports.UpdateOAuthClientInput = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateOAuthClientInput {
  constructor() {
    this.redirectUris = [];
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      logo: { required: false, type: () => String },
      name: { required: false, type: () => String },
      redirectUris: { required: false, type: () => [String], default: [] },
      bookingRedirectUri: { required: false, type: () => String },
      bookingCancelRedirectUri: { required: false, type: () => String },
      bookingRescheduleRedirectUri: { required: false, type: () => String },
      areEmailsEnabled: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOAuthClientInput.prototype,
  "logo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateOAuthClientInput.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  UpdateOAuthClientInput.prototype,
  "redirectUris",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOAuthClientInput.prototype,
  "bookingRedirectUri",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOAuthClientInput.prototype,
  "bookingCancelRedirectUri",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOAuthClientInput.prototype,
  "bookingRescheduleRedirectUri",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  UpdateOAuthClientInput.prototype,
  "areEmailsEnabled",
  void 0
);
exports.UpdateOAuthClientInput = UpdateOAuthClientInput;
//# sourceMappingURL=update-oauth-client.input.js.map
