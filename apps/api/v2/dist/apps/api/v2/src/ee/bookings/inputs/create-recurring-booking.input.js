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
exports.CreateRecurringBookingInput = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_booking_input_1 = require("./create-booking.input");
class CreateRecurringBookingInput extends create_booking_input_1.CreateBookingInput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      noEmail: { required: false, type: () => Boolean },
      recurringCount: { required: false, type: () => Number },
      appsStatus: { required: false, type: () => [Object] },
      allRecurringDates: { required: false, type: () => [Object] },
      currentRecurringIndex: { required: false, type: () => Number },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  CreateRecurringBookingInput.prototype,
  "noEmail",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), __metadata("design:type", Number)],
  CreateRecurringBookingInput.prototype,
  "recurringCount",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  CreateRecurringBookingInput.prototype,
  "appsStatus",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), __metadata("design:type", Array)],
  CreateRecurringBookingInput.prototype,
  "allRecurringDates",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), __metadata("design:type", Number)],
  CreateRecurringBookingInput.prototype,
  "currentRecurringIndex",
  void 0
);
exports.CreateRecurringBookingInput = CreateRecurringBookingInput;
//# sourceMappingURL=create-recurring-booking.input.js.map
