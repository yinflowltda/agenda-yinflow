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
exports.OrgTeamOutputResponseDto =
  exports.OrgMeTeamsOutputResponseDto =
  exports.OrgTeamsOutputResponseDto =
  exports.OrgMeTeamOutputDto =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
class OrgMeTeamOutputDto extends platform_types_1.OrgTeamOutputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return { accepted: { required: true, type: () => Boolean } };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Boolean)],
  OrgMeTeamOutputDto.prototype,
  "accepted",
  void 0
);
exports.OrgMeTeamOutputDto = OrgMeTeamOutputDto;
class OrgTeamsOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: {
        required: true,
        type: () => [
          require("../../../../../../../packages/platform/types/organizations/teams/outputs/team.output")
            .OrgTeamOutputDto,
        ],
      },
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
  OrgTeamsOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => platform_types_1.OrgTeamOutputDto),
    __metadata("design:type", Array),
  ],
  OrgTeamsOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OrgTeamsOutputResponseDto = OrgTeamsOutputResponseDto;
class OrgMeTeamsOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: {
        required: true,
        type: () => [
          require("../../../../../../../packages/platform/types/organizations/teams/outputs/team.output")
            .OrgTeamOutputDto,
        ],
      },
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
  OrgMeTeamsOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => platform_types_1.OrgTeamOutputDto),
    __metadata("design:type", Array),
  ],
  OrgMeTeamsOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OrgMeTeamsOutputResponseDto = OrgMeTeamsOutputResponseDto;
class OrgTeamOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: {
        required: true,
        type: () =>
          require("../../../../../../../packages/platform/types/organizations/teams/outputs/team.output")
            .OrgTeamOutputDto,
      },
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
  OrgTeamOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => platform_types_1.OrgTeamOutputDto),
    __metadata("design:type", platform_types_1.OrgTeamOutputDto),
  ],
  OrgTeamOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OrgTeamOutputResponseDto = OrgTeamOutputResponseDto;
//# sourceMappingURL=organization-team.output.js.map
