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
exports.DeleteEventTypeOutput = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_event_type_input_1 = require("../inputs/create-event-type.input");
const platform_constants_1 = require("@calcom/platform-constants");
class DeleteData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      length: { required: true, type: () => Number },
      slug: { required: true, type: () => String },
      title: { required: true, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_2.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number),
  ],
  DeleteData.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, swagger_2.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_LENGTH_EXAMPLE }),
    __metadata("design:type", Number),
  ],
  DeleteData.prototype,
  "length",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_2.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_SLUG_EXAMPLE }),
    __metadata("design:type", String),
  ],
  DeleteData.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_2.ApiProperty)({ example: create_event_type_input_1.CREATE_EVENT_TITLE_EXAMPLE }),
    __metadata("design:type", String),
  ],
  DeleteData.prototype,
  "title",
  void 0
);
class DeleteEventTypeOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => DeleteData },
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
  DeleteEventTypeOutput.prototype,
  "status",
  void 0
);
__decorate(
  [(0, class_transformer_1.Type)(() => DeleteData), __metadata("design:type", DeleteData)],
  DeleteEventTypeOutput.prototype,
  "data",
  void 0
);
exports.DeleteEventTypeOutput = DeleteEventTypeOutput;
//# sourceMappingURL=delete-event-type.output.js.map
