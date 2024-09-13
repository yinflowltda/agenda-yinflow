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
exports.GetEventTypesOutput = exports.GetEventTypesData = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const event_type_output_1 = require("./event-type.output");
const platform_constants_1 = require("@calcom/platform-constants");
class EventTypeGroup {
  static _OPENAPI_METADATA_FACTORY() {
    return { eventTypes: { required: true, type: () => [require("./event-type.output").EventTypeOutput] } };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => event_type_output_1.EventTypeOutput),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  EventTypeGroup.prototype,
  "eventTypes",
  void 0
);
class GetEventTypesData {
  static _OPENAPI_METADATA_FACTORY() {
    return { eventTypeGroups: { required: true, type: () => [EventTypeGroup] } };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => EventTypeGroup),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  GetEventTypesData.prototype,
  "eventTypeGroups",
  void 0
);
exports.GetEventTypesData = GetEventTypesData;
class GetEventTypesOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => require("./get-event-types.output").GetEventTypesData },
    };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.SUCCESS_STATUS,
      enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
    }),
    (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
    __metadata("design:type", Object),
  ],
  GetEventTypesOutput.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => GetEventTypesData),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", GetEventTypesData),
  ],
  GetEventTypesOutput.prototype,
  "data",
  void 0
);
exports.GetEventTypesOutput = GetEventTypesOutput;
//# sourceMappingURL=get-event-types.output.js.map
