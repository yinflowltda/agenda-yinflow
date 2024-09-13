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
exports.OrgTeamMembershipOutputResponseDto =
  exports.OrgTeamMembershipsOutputResponseDto =
  exports.OrgTeamMembershipOutputDto =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const platform_constants_1 = require("@calcom/platform-constants");
class OrgTeamMembershipOutputDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      userId: { required: true, type: () => Number },
      teamId: { required: true, type: () => Number },
      accepted: { required: true, type: () => Boolean },
      role: { required: true, type: () => Object },
      disableImpersonation: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  OrgTeamMembershipOutputDto.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  OrgTeamMembershipOutputDto.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  OrgTeamMembershipOutputDto.prototype,
  "teamId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Boolean)],
  OrgTeamMembershipOutputDto.prototype,
  "accepted",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ enum: ["MEMBER", "OWNER", "ADMIN"] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamMembershipOutputDto.prototype,
  "role",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean),
  ],
  OrgTeamMembershipOutputDto.prototype,
  "disableImpersonation",
  void 0
);
exports.OrgTeamMembershipOutputDto = OrgTeamMembershipOutputDto;
class OrgTeamMembershipsOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: {
        required: true,
        type: () => [require("./organization-teams-memberships.output").OrgTeamMembershipOutputDto],
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
  OrgTeamMembershipsOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrgTeamMembershipOutputDto),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  OrgTeamMembershipsOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OrgTeamMembershipsOutputResponseDto = OrgTeamMembershipsOutputResponseDto;
class OrgTeamMembershipOutputResponseDto {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      status: { required: true, type: () => Object },
      data: {
        required: true,
        type: () => require("./organization-teams-memberships.output").OrgTeamMembershipOutputDto,
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
  OrgTeamMembershipOutputResponseDto.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrgTeamMembershipOutputDto),
    __metadata("design:type", OrgTeamMembershipOutputDto),
  ],
  OrgTeamMembershipOutputResponseDto.prototype,
  "data",
  void 0
);
exports.OrgTeamMembershipOutputResponseDto = OrgTeamMembershipOutputResponseDto;
//# sourceMappingURL=organization-teams-memberships.output.js.map
