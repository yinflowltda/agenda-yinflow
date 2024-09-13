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
exports.ReserveSlotInput = exports.RemoveSelectedSlotInput = exports.GetAvailableSlotsInput = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetAvailableSlotsInput {}
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", String)],
  GetAvailableSlotsInput.prototype,
  "startTime",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", String)],
  GetAvailableSlotsInput.prototype,
  "endTime",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => value && parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  GetAvailableSlotsInput.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  GetAvailableSlotsInput.prototype,
  "eventTypeSlug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  GetAvailableSlotsInput.prototype,
  "usernameList",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  GetAvailableSlotsInput.prototype,
  "debug",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => value && parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  GetAvailableSlotsInput.prototype,
  "duration",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", Object)],
  GetAvailableSlotsInput.prototype,
  "rescheduleUid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  GetAvailableSlotsInput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  GetAvailableSlotsInput.prototype,
  "orgSlug",
  void 0
);
exports.GetAvailableSlotsInput = GetAvailableSlotsInput;
class RemoveSelectedSlotInput {}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  RemoveSelectedSlotInput.prototype,
  "uid",
  void 0
);
exports.RemoveSelectedSlotInput = RemoveSelectedSlotInput;
class ReserveSlotInput {}
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  ReserveSlotInput.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", String)],
  ReserveSlotInput.prototype,
  "slotUtcStartDate",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDateString)(), __metadata("design:type", String)],
  ReserveSlotInput.prototype,
  "slotUtcEndDate",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  ReserveSlotInput.prototype,
  "bookingUid",
  void 0
);
exports.ReserveSlotInput = ReserveSlotInput;
//# sourceMappingURL=slots.js.map
