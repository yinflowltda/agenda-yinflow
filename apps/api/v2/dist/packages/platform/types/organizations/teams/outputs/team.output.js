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
exports.OrgTeamOutputDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class OrgTeamOutputDto {
  constructor() {
    this.hideBookATeamMember = false;
    this.timeZone = "Europe/London";
    this.weekStart = "Sunday";
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      parentId: { required: false, type: () => Number },
      name: { required: true, type: () => String, minLength: 1 },
      slug: { required: false, type: () => String },
      logoUrl: { required: false, type: () => String },
      calVideoLogo: { required: false, type: () => String },
      appLogo: { required: false, type: () => String },
      appIconLogo: { required: false, type: () => String },
      bio: { required: false, type: () => String },
      hideBranding: { required: false, type: () => Boolean },
      isOrganization: { required: false, type: () => Boolean },
      isPrivate: { required: false, type: () => Boolean },
      hideBookATeamMember: { required: false, type: () => Boolean, default: false },
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
  [(0, class_validator_1.IsInt)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Number)],
  OrgTeamOutputDto.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
  ],
  OrgTeamOutputDto.prototype,
  "parentId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "logoUrl",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "calVideoLogo",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "appLogo",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "appIconLogo",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "bio",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean),
  ],
  OrgTeamOutputDto.prototype,
  "hideBranding",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Expose)(), __metadata("design:type", Boolean)],
  OrgTeamOutputDto.prototype,
  "isOrganization",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean),
  ],
  OrgTeamOutputDto.prototype,
  "isPrivate",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean),
  ],
  OrgTeamOutputDto.prototype,
  "hideBookATeamMember",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "metadata",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "theme",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "brandColor",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "darkBrandColor",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "bannerUrl",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
  ],
  OrgTeamOutputDto.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
  ],
  OrgTeamOutputDto.prototype,
  "weekStart",
  void 0
);
exports.OrgTeamOutputDto = OrgTeamOutputDto;
//# sourceMappingURL=team.output.js.map
