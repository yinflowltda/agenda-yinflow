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
exports.UserWebhooksOutputResponseDto =
  exports.UserWebhookOutputResponseDto =
  exports.UserWebhookOutputDto =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
const webhook_output_1 = require("./webhook.output");
class UserWebhookOutputDto extends webhook_output_1.WebhookOutputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return { userId: { required: true, type: () => Number } };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  UserWebhookOutputDto.prototype,
  "userId",
  void 0
);
exports.UserWebhookOutputDto = UserWebhookOutputDto;
class UserWebhookOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => require("./user-webhook.output").UserWebhookOutputDto },
    };
  }
}
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.SUCCESS_STATUS,
      enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
    }),
    (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
    __metadata("design:type", Object),
  ],
  UserWebhookOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => webhook_output_1.WebhookOutputDto),
    __metadata("design:type", UserWebhookOutputDto),
  ],
  UserWebhookOutputResponseDto.prototype,
  "data",
  void 0
);
exports.UserWebhookOutputResponseDto = UserWebhookOutputResponseDto;
class UserWebhooksOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => [require("./user-webhook.output").UserWebhookOutputDto] },
    };
  }
}
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.SUCCESS_STATUS,
      enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
    }),
    (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
    __metadata("design:type", Object),
  ],
  UserWebhooksOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => webhook_output_1.WebhookOutputDto),
    __metadata("design:type", Array),
  ],
  UserWebhooksOutputResponseDto.prototype,
  "data",
  void 0
);
exports.UserWebhooksOutputResponseDto = UserWebhooksOutputResponseDto;
//# sourceMappingURL=user-webhook.output.js.map
