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
exports.CreateBookingInput = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class Location {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      optionValue: { required: true, type: () => String },
      value: { required: true, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Location.prototype,
  "optionValue",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Location.prototype,
  "value",
  void 0
);
class Response {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      name: { required: true, type: () => String },
      email: { required: true, type: () => String },
      guests: { required: true, type: () => [String] },
      location: { required: false, type: () => Location },
      notes: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Response.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEmail)(), __metadata("design:type", String)],
  Response.prototype,
  "email",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  Response.prototype,
  "guests",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Location),
    __metadata("design:type", Location),
  ],
  Response.prototype,
  "location",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Response.prototype,
  "notes",
  void 0
);
class CreateBookingInput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      end: { required: false, type: () => String },
      start: { required: true, type: () => String },
      eventTypeId: { required: true, type: () => Number },
      eventTypeSlug: { required: false, type: () => String },
      rescheduleUid: { required: false, type: () => String },
      recurringEventId: { required: false, type: () => String },
      timeZone: { required: true, type: () => String },
      user: { required: false, type: () => [String] },
      language: { required: true, type: () => String },
      bookingUid: { required: false, type: () => String },
      metadata: { required: true, type: () => Object },
      hasHashedBookingLink: { required: false, type: () => Boolean },
      hashedLink: { required: true, type: () => String, nullable: true },
      seatReferenceUid: { required: false, type: () => String },
      responses: { required: true, type: () => Response },
      orgSlug: { required: false, type: () => String },
      locationUrl: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "end",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "start",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), __metadata("design:type", Number)],
  CreateBookingInput.prototype,
  "eventTypeId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "eventTypeSlug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "rescheduleUid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "recurringEventId",
  void 0
);
__decorate(
  [(0, class_validator_1.IsTimeZone)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "timeZone",
  void 0
);
__decorate(
  [
    (0, class_transformer_1.Transform)(({ value }) => {
      return typeof value === "string" ? [value] : value;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array),
  ],
  CreateBookingInput.prototype,
  "user",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "language",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "bookingUid",
  void 0
);
__decorate(
  [(0, class_validator_1.IsObject)(), __metadata("design:type", Object)],
  CreateBookingInput.prototype,
  "metadata",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  CreateBookingInput.prototype,
  "hasHashedBookingLink",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Object)],
  CreateBookingInput.prototype,
  "hashedLink",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "seatReferenceUid",
  void 0
);
__decorate(
  [(0, class_transformer_1.Type)(() => Response), __metadata("design:type", Response)],
  CreateBookingInput.prototype,
  "responses",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "orgSlug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  CreateBookingInput.prototype,
  "locationUrl",
  void 0
);
exports.CreateBookingInput = CreateBookingInput;
//# sourceMappingURL=create-booking.input.js.map
