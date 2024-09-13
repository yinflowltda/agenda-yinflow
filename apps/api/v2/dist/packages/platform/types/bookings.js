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
exports.CancelBookingInput = exports.GetBookingsInput = exports.Status = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var Status;
(function (Status) {
  Status["upcoming"] = "upcoming";
  Status["recurring"] = "recurring";
  Status["past"] = "past";
  Status["cancelled"] = "cancelled";
  Status["unconfirmed"] = "unconfirmed";
})((Status = exports.Status || (exports.Status = {})));
class Filters {}
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array),
  ],
  Filters.prototype,
  "teamsIds",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array),
  ],
  Filters.prototype,
  "userIds",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEnum)(Status), __metadata("design:type", String)],
  Filters.prototype,
  "status",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array),
  ],
  Filters.prototype,
  "eventTypeIds",
  void 0
);
class GetBookingsInput {}
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Filters),
    __metadata("design:type", Filters),
  ],
  GetBookingsInput.prototype,
  "filters",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => value && parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  GetBookingsInput.prototype,
  "limit",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => value && parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object),
  ],
  GetBookingsInput.prototype,
  "cursor",
  void 0
);
exports.GetBookingsInput = GetBookingsInput;
class CancelBookingInput {}
__decorate(
  [
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
  ],
  CancelBookingInput.prototype,
  "id",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  CancelBookingInput.prototype,
  "uid",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean),
  ],
  CancelBookingInput.prototype,
  "allRemainingBookings",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  CancelBookingInput.prototype,
  "cancellationReason",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  CancelBookingInput.prototype,
  "seatReferenceUid",
  void 0
);
exports.CancelBookingInput = CancelBookingInput;
//# sourceMappingURL=bookings.js.map
