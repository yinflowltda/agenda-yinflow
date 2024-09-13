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
exports.MeOutput = exports.MeOrgOutput = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class MeOrgOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      isPlatform: { required: true, type: () => Boolean },
      id: { required: true, type: () => Number },
    };
  }
}
exports.MeOrgOutput = MeOrgOutput;
class MeOutput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => Number },
      username: { required: true, type: () => String },
      email: { required: true, type: () => String },
      timeFormat: { required: true, type: () => Number },
      defaultScheduleId: { required: true, type: () => Number, nullable: true },
      weekStart: { required: true, type: () => String },
      timeZone: { required: true, type: () => String },
      organizationId: { required: true, type: () => Number, nullable: true },
      organization: { required: false, type: () => require("./me.output").MeOrgOutput },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  MeOutput.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  MeOutput.prototype,
  "username",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  MeOutput.prototype,
  "email",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  MeOutput.prototype,
  "timeFormat",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  MeOutput.prototype,
  "defaultScheduleId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  MeOutput.prototype,
  "weekStart",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  MeOutput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Object)],
  MeOutput.prototype,
  "organizationId",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MeOrgOutput),
    __metadata("design:type", MeOrgOutput),
  ],
  MeOutput.prototype,
  "organization",
  void 0
);
exports.MeOutput = MeOutput;
//# sourceMappingURL=me.output.js.map
