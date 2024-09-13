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
exports.GetTeamEventTypesOutput = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_types_1 = require("@calcom/platform-types");
class GetTeamEventTypesOutput extends platform_types_1.ApiResponseWithoutData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      data: {
        required: true,
        type: () => [
          require("../../../../../../../../../../packages/platform/types/event-types/event-types_2024_06_14/outputs/event-type.output")
            .TeamEventTypeOutput_2024_06_14,
        ],
      },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => platform_types_1.TeamEventTypeOutput_2024_06_14),
    __metadata("design:type", Array),
  ],
  GetTeamEventTypesOutput.prototype,
  "data",
  void 0
);
exports.GetTeamEventTypesOutput = GetTeamEventTypesOutput;
//# sourceMappingURL=get-team-event-types.output.js.map
