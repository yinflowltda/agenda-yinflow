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
exports.DeleteManyWebhooksOutputResponseDto = exports.WebhookOutputDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class WebhookOutputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      payloadTemplate: { required: true, type: () => String },
      triggers: { required: true, type: () => [Object] },
      subscriberUrl: { required: true, type: () => String },
      active: { required: true, type: () => Boolean },
      secret: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  WebhookOutputDto.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
      description:
        "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
      example: JSON.stringify({
        content: "A new event has been scheduled",
        type: "{{type}}",
        name: "{{title}}",
        organizer: "{{organizer.name}}",
        booker: "{{attendees.0.name}}",
      }),
    }),
    __metadata("design:type", String),
  ],
  WebhookOutputDto.prototype,
  "payloadTemplate",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(client_1.WebhookTriggerEvents, { each: true }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array),
  ],
  WebhookOutputDto.prototype,
  "triggers",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)(), __metadata("design:type", String)],
  WebhookOutputDto.prototype,
  "subscriberUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Boolean)],
  WebhookOutputDto.prototype,
  "active",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)(), __metadata("design:type", String)],
  WebhookOutputDto.prototype,
  "secret",
  void 0
);
exports.WebhookOutputDto = WebhookOutputDto;
class DeleteManyWebhooksOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return { status: { required: true, type: () => Object }, data: { required: true, type: () => String } };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      example: platform_constants_1.SUCCESS_STATUS,
      enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS],
    }),
    (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
  ],
  DeleteManyWebhooksOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => WebhookOutputDto),
    __metadata("design:type", String),
  ],
  DeleteManyWebhooksOutputResponseDto.prototype,
  "data",
  void 0
);
exports.DeleteManyWebhooksOutputResponseDto = DeleteManyWebhooksOutputResponseDto;
//# sourceMappingURL=webhook.output.js.map
