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
exports.CreateOrgTeamDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOrgTeamDto {
  constructor() {
    this.hideBranding = false;
    this.timeZone = "Europe/London";
    this.weekStart = "Sunday";
    this.autoAcceptCreator = true;
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String, minLength: 1 },
      slug: { required: false, type: () => String },
      logoUrl: { required: false, type: () => String },
      calVideoLogo: { required: false, type: () => String },
      appLogo: { required: false, type: () => String },
      appIconLogo: { required: false, type: () => String },
      bio: { required: false, type: () => String },
      hideBranding: { required: false, type: () => Boolean, default: false },
      isPrivate: { required: false, type: () => Boolean },
      hideBookATeamMember: { required: false, type: () => Boolean },
      metadata: { required: false, type: () => String },
      theme: { required: false, type: () => String },
      brandColor: { required: false, type: () => String },
      darkBrandColor: { required: false, type: () => String },
      bannerUrl: { required: false, type: () => String },
      timeFormat: { required: false, type: () => Number },
      timeZone: { required: false, type: () => String, default: "Europe/London" },
      weekStart: { required: false, type: () => String, default: "Sunday" },
      autoAcceptCreator: { required: false, type: () => Boolean, default: true },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.Length)(1), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "logoUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "calVideoLogo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "appLogo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "appIconLogo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "bio",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOrgTeamDto.prototype,
  "hideBranding",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOrgTeamDto.prototype,
  "isPrivate",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOrgTeamDto.prototype,
  "hideBookATeamMember",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "theme",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "brandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "bannerUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Number)],
  CreateOrgTeamDto.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOrgTeamDto.prototype,
  "weekStart",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOrgTeamDto.prototype,
  "autoAcceptCreator",
  void 0
);
exports.CreateOrgTeamDto = CreateOrgTeamDto;
//# sourceMappingURL=create-organization-team.input.js.map
