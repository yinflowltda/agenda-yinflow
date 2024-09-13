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
exports.OAuthClientWebhooksOutputResponseDto =
  exports.OAuthClientWebhookOutputResponseDto =
  exports.OAuthClientWebhookOutputDto =
    void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_types_1 = require("@calcom/platform-types");
const webhook_output_1 = require("./webhook.output");
class OAuthClientWebhookOutputDto extends webhook_output_1.WebhookOutputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return { oAuthClientId: { required: true, type: () => String } };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", String)],
  OAuthClientWebhookOutputDto.prototype,
  "oAuthClientId",
  void 0
);
exports.OAuthClientWebhookOutputDto = OAuthClientWebhookOutputDto;
class OAuthClientWebhookOutputResponseDto extends platform_types_1.ApiResponseWithoutData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      data: {
        required: true,
        type: () => require("./oauth-client-webhook.output").OAuthClientWebhookOutputDto,
      },
    };
  }
}
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => webhook_output_1.WebhookOutputDto),
    __metadata("design:type", OAuthClientWebhookOutputDto),
  ],
  OAuthClientWebhookOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OAuthClientWebhookOutputResponseDto = OAuthClientWebhookOutputResponseDto;
class OAuthClientWebhooksOutputResponseDto extends platform_types_1.ApiResponseWithoutData {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      data: {
        required: true,
        type: () => [require("./oauth-client-webhook.output").OAuthClientWebhookOutputDto],
      },
    };
  }
}
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => webhook_output_1.WebhookOutputDto),
    __metadata("design:type", Array),
  ],
  OAuthClientWebhooksOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OAuthClientWebhooksOutputResponseDto = OAuthClientWebhooksOutputResponseDto;
//# sourceMappingURL=oauth-client-webhook.output.js.map
