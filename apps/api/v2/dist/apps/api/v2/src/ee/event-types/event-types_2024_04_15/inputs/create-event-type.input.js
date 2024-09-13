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
exports.CreateEventTypeInput_2024_04_15 =
  exports.CREATE_EVENT_DESCRIPTION_EXAMPLE =
  exports.CREATE_EVENT_TITLE_EXAMPLE =
  exports.CREATE_EVENT_SLUG_EXAMPLE =
  exports.CREATE_EVENT_LENGTH_EXAMPLE =
    void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const event_type_location_input_1 = require("./event-type-location.input");
exports.CREATE_EVENT_LENGTH_EXAMPLE = 60;
exports.CREATE_EVENT_SLUG_EXAMPLE = "cooking-class";
exports.CREATE_EVENT_TITLE_EXAMPLE = "Learn the secrets of masterchief!";
exports.CREATE_EVENT_DESCRIPTION_EXAMPLE =
  "Discover the culinary wonders of the Argentina by making the best flan ever!";
class CreateEventTypeInput_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      length: { required: true, type: () => Number, minimum: 1 },
      slug: { required: true, type: () => String },
      title: { required: true, type: () => String },
      description: { required: false, type: () => String },
      locations: {
        required: false,
        type: () => [require("./event-type-location.input").EventTypeLocation_2024_04_15],
      },
      disableGuests: { required: false, type: () => Boolean },
      slotInterval: { required: false, type: () => Number, minimum: 0 },
      minimumBookingNotice: { required: false, type: () => Number, minimum: 0 },
      beforeEventBuffer: { required: false, type: () => Number, minimum: 0 },
      afterEventBuffer: { required: false, type: () => Number, minimum: 0 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_LENGTH_EXAMPLE }),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "length",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_SLUG_EXAMPLE }),
    __metadata("design:type", String),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_TITLE_EXAMPLE }),
    __metadata("design:type", String),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "title",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: exports.CREATE_EVENT_DESCRIPTION_EXAMPLE }),
    __metadata("design:type", String),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "description",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Boolean),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "hidden",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => event_type_location_input_1.EventTypeLocation_2024_04_15),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "locations",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "disableGuests",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "slotInterval",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "minimumBookingNotice",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "beforeEventBuffer",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  CreateEventTypeInput_2024_04_15.prototype,
  "afterEventBuffer",
  void 0
);
exports.CreateEventTypeInput_2024_04_15 = CreateEventTypeInput_2024_04_15;
//# sourceMappingURL=create-event-type.input.js.map
