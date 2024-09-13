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
exports.OrgMembershipOutputDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class OrgMembershipOutputDto {
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
  OrgMembershipOutputDto.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  OrgMembershipOutputDto.prototype,
  "userId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  OrgMembershipOutputDto.prototype,
  "teamId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Boolean)],
  OrgMembershipOutputDto.prototype,
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
  OrgMembershipOutputDto.prototype,
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
  OrgMembershipOutputDto.prototype,
  "disableImpersonation",
  void 0
);
exports.OrgMembershipOutputDto = OrgMembershipOutputDto;
//# sourceMappingURL=membership.output.js.map
