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
exports.GetOAuthClientResponseDto = exports.PlatformOAuthClientDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class PlatformOAuthClientDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => String },
      name: { required: true, type: () => String },
      secret: { required: true, type: () => String },
      permissions: { required: true, type: () => Number },
      logo: { required: true, type: () => String, nullable: true },
      redirectUris: { required: true, type: () => [String] },
      organizationId: { required: true, type: () => Number },
      createdAt: { required: true, type: () => Date },
    };
  }
}
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "clsx38nbl0001vkhlwin9fmt0" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String),
  ],
  PlatformOAuthClientDto.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "MyClient" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String),
  ],
  PlatformOAuthClientDto.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "secretValue" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String),
  ],
  PlatformOAuthClientDto.prototype,
  "secret",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number),
  ],
  PlatformOAuthClientDto.prototype,
  "permissions",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "https://example.com/logo.png", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object),
  ],
  PlatformOAuthClientDto.prototype,
  "logo",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: ["https://example.com/callback"] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  PlatformOAuthClientDto.prototype,
  "redirectUris",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number),
  ],
  PlatformOAuthClientDto.prototype,
  "organizationId",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: "2024-03-23T08:33:21.851Z", type: Date }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date),
  ],
  PlatformOAuthClientDto.prototype,
  "createdAt",
  void 0
);
exports.PlatformOAuthClientDto = PlatformOAuthClientDto;
class GetOAuthClientResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: { required: true, type: () => require("./GetOAuthClientResponse.dto").PlatformOAuthClientDto },
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
  GetOAuthClientResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({
      type: PlatformOAuthClientDto,
    }),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PlatformOAuthClientDto),
    __metadata("design:type", PlatformOAuthClientDto),
  ],
  GetOAuthClientResponseDto.prototype,
  "data",
  void 0
);
exports.GetOAuthClientResponseDto = GetOAuthClientResponseDto;
//# sourceMappingURL=GetOAuthClientResponse.dto.js.map
