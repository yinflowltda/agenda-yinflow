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
exports.UpdateWebhookInputDto = exports.CreateWebhookInputDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateWebhookInputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      payloadTemplate: { required: false, type: () => String },
      active: { required: true, type: () => Boolean },
      subscriberUrl: { required: true, type: () => String },
      triggers: { required: true, type: () => [Object] },
      secret: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
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
  CreateWebhookInputDto.prototype,
  "payloadTemplate",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  CreateWebhookInputDto.prototype,
  "active",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateWebhookInputDto.prototype,
  "subscriberUrl",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
      example: [
        "BOOKING_CREATED",
        "BOOKING_RESCHEDULED",
        "BOOKING_CANCELLED",
        "BOOKING_CONFIRMED",
        "BOOKING_REJECTED",
        "BOOKING_COMPLETED",
        "BOOKING_NO_SHOW",
        "BOOKING_REOPENED",
      ],
      enum: client_1.WebhookTriggerEvents,
    }),
    (0, class_validator_1.IsEnum)(client_1.WebhookTriggerEvents, { each: true }),
    __metadata("design:type", Array),
  ],
  CreateWebhookInputDto.prototype,
  "triggers",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateWebhookInputDto.prototype,
  "secret",
  void 0
);
exports.CreateWebhookInputDto = CreateWebhookInputDto;
class UpdateWebhookInputDto extends (0, swagger_1.PartialType)(CreateWebhookInputDto) {
  static _OPENAPI_METADATA_FACTORY() {
    return {};
  }
}
exports.UpdateWebhookInputDto = UpdateWebhookInputDto;
//# sourceMappingURL=webhook.input.js.map
