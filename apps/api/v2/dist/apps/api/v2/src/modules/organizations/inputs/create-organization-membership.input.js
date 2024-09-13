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
exports.CreateOrgMembershipDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateOrgMembershipDto {
  constructor() {
    this.accepted = false;
    this.role = client_1.MembershipRole.MEMBER;
    this.disableImpersonation = false;
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      userId: { required: true, type: () => Number },
      accepted: { required: false, type: () => Boolean, default: false },
      role: { required: true, type: () => Object, default: client_1.MembershipRole.MEMBER },
      disableImpersonation: { required: false, type: () => Boolean, default: false },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  CreateOrgMembershipDto.prototype,
  "userId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOrgMembershipDto.prototype,
  "accepted",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsEnum)(client_1.MembershipRole),
    (0, swagger_1.ApiProperty)({ enum: ["MEMBER", "OWNER", "ADMIN"] }),
    __metadata("design:type", String),
  ],
  CreateOrgMembershipDto.prototype,
  "role",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOrgMembershipDto.prototype,
  "disableImpersonation",
  void 0
);
exports.CreateOrgMembershipDto = CreateOrgMembershipDto;
//# sourceMappingURL=create-organization-membership.input.js.map
