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
exports.userSchemaResponse = exports.DeleteOAuthClientInput = exports.CreateOAuthClientInput = void 0;
const class_validator_1 = require("class-validator");
const zod_1 = require("zod");
class CreateOAuthClientInput {}
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOAuthClientInput.prototype,
  "logo",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOAuthClientInput.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  CreateOAuthClientInput.prototype,
  "redirectUris",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), __metadata("design:type", Number)],
  CreateOAuthClientInput.prototype,
  "permissions",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOAuthClientInput.prototype,
  "bookingRedirectUri",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOAuthClientInput.prototype,
  "bookingCancelRedirectUri",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateOAuthClientInput.prototype,
  "bookingRescheduleRedirectUri",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  CreateOAuthClientInput.prototype,
  "areEmailsEnabled",
  void 0
);
exports.CreateOAuthClientInput = CreateOAuthClientInput;
class DeleteOAuthClientInput {}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  DeleteOAuthClientInput.prototype,
  "id",
  void 0
);
exports.DeleteOAuthClientInput = DeleteOAuthClientInput;
exports.userSchemaResponse = zod_1.z.object({
  id: zod_1.z.number().int(),
  email: zod_1.z.string(),
  timeFormat: zod_1.z.number().int().default(12),
  defaultScheduleId: zod_1.z.number().int().nullable(),
  weekStart: zod_1.z.string(),
  timeZone: zod_1.z.string().default("Europe/London"),
  username: zod_1.z.string(),
  organizationId: zod_1.z.number().nullable(),
  organization: zod_1.z.object({ isPlatform: zod_1.z.boolean(), id: zod_1.z.number() }).optional(),
});
//# sourceMappingURL=oauth-clients.js.map
