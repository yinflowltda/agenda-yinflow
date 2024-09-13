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
exports.OAuthClientDto = exports.BaseApiResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BaseApiResponseDto {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
  static _OPENAPI_METADATA_FACTORY() {
    return { status: { required: true, type: () => String }, data: { required: true } };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "success" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String),
  ],
  BaseApiResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      description: "The payload of the response, which can be any type of data.",
    }),
    __metadata("design:type", Object),
  ],
  BaseApiResponseDto.prototype,
  "data",
  void 0
);
exports.BaseApiResponseDto = BaseApiResponseDto;
class OAuthClientDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      clientId: { required: true, type: () => String },
      clientSecret: { required: true, type: () => String },
    };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "abc123" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String),
  ],
  OAuthClientDto.prototype,
  "clientId",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "secretKey123" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String),
  ],
  OAuthClientDto.prototype,
  "clientSecret",
  void 0
);
exports.OAuthClientDto = OAuthClientDto;
//# sourceMappingURL=response.dto.js.map
