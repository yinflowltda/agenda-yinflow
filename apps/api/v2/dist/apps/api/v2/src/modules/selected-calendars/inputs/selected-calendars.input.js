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
exports.SelectedCalendarsQueryParamsInputDto = exports.SelectedCalendarsInputDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SelectedCalendarsInputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      integration: { required: true, type: () => String },
      externalId: { required: true, type: () => String },
      credentialId: { required: true, type: () => Number },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  SelectedCalendarsInputDto.prototype,
  "integration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  SelectedCalendarsInputDto.prototype,
  "externalId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  SelectedCalendarsInputDto.prototype,
  "credentialId",
  void 0
);
exports.SelectedCalendarsInputDto = SelectedCalendarsInputDto;
class SelectedCalendarsQueryParamsInputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      integration: { required: true, type: () => String },
      externalId: { required: true, type: () => String },
      credentialId: { required: true, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  SelectedCalendarsQueryParamsInputDto.prototype,
  "integration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  SelectedCalendarsQueryParamsInputDto.prototype,
  "externalId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  SelectedCalendarsQueryParamsInputDto.prototype,
  "credentialId",
  void 0
);
exports.SelectedCalendarsQueryParamsInputDto = SelectedCalendarsQueryParamsInputDto;
//# sourceMappingURL=selected-calendars.input.js.map
