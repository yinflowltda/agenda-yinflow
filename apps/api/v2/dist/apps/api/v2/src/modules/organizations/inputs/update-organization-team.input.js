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
exports.UpdateOrgTeamDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateOrgTeamDto {
  constructor() {
    this.hideBranding = false;
    this.timeZone = "Europe/London";
    this.weekStart = "Sunday";
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: false, type: () => String, minLength: 1 },
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
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.Length)(1), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "logoUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "calVideoLogo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "appLogo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "appIconLogo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "bio",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  UpdateOrgTeamDto.prototype,
  "hideBranding",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  UpdateOrgTeamDto.prototype,
  "isPrivate",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  UpdateOrgTeamDto.prototype,
  "hideBookATeamMember",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "metadata",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "theme",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "brandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "bannerUrl",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Number)],
  UpdateOrgTeamDto.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  UpdateOrgTeamDto.prototype,
  "weekStart",
  void 0
);
exports.UpdateOrgTeamDto = UpdateOrgTeamDto;
//# sourceMappingURL=update-organization-team.input.js.map
