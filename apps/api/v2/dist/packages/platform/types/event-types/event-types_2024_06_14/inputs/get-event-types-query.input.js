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
exports.GetTeamEventTypesQuery_2024_06_14 = exports.GetEventTypesQuery_2024_06_14 = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetEventTypesQuery_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      username: { required: false, type: () => String },
      eventSlug: { required: false, type: () => String },
      usernames: { required: false, type: () => [String] },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  GetEventTypesQuery_2024_06_14.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  GetEventTypesQuery_2024_06_14.prototype,
  "eventSlug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), TransformUsernames(), __metadata("design:type", Array)],
  GetEventTypesQuery_2024_06_14.prototype,
  "usernames",
  void 0
);
exports.GetEventTypesQuery_2024_06_14 = GetEventTypesQuery_2024_06_14;
class GetTeamEventTypesQuery_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return { eventSlug: { required: false, type: () => String } };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  GetTeamEventTypesQuery_2024_06_14.prototype,
  "eventSlug",
  void 0
);
exports.GetTeamEventTypesQuery_2024_06_14 = GetTeamEventTypesQuery_2024_06_14;
function TransformUsernames() {
  return (0, class_transformer_1.Transform)(({ value }) => {
    if (typeof value === "string") {
      return value.split(",").map((username) => username.trim());
    }
    return value;
  });
}
//# sourceMappingURL=get-event-types-query.input.js.map
