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
exports.UpdateEventTypeInput_2024_04_15 =
  exports.IntervalLimits_2024_04_15 =
  exports.RecurringEvent_2024_04_15 =
  exports.BookingField_2024_04_15 =
    void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const editable_1 = require("./enums/editable");
const field_type_1 = require("./enums/field-type");
const frequency_1 = require("./enums/frequency");
const event_type_location_input_1 = require("./event-type-location.input");
class Option {
  static _OPENAPI_METADATA_FACTORY() {
    return { value: { required: true, type: () => String }, label: { required: true, type: () => String } };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Option.prototype,
  "value",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Option.prototype,
  "label",
  void 0
);
class Source {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => String },
      type: { required: true, type: () => String },
      label: { required: true, type: () => String },
      editUrl: { required: false, type: () => String },
      fieldRequired: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  Source.prototype,
  "editUrl",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  Source.prototype,
  "fieldRequired",
  void 0
);
class View {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      id: { required: true, type: () => String },
      label: { required: true, type: () => String },
      description: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  View.prototype,
  "id",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  View.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  View.prototype,
  "description",
  void 0
);
class OptionsInput {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => Object },
      required: { required: false, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  OptionsInput.prototype,
  "type",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  OptionsInput.prototype,
  "required",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  OptionsInput.prototype,
  "placeholder",
  void 0
);
class VariantField {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, enum: require("./enums/field-type").BaseField },
      name: { required: true, type: () => String },
      label: { required: false, type: () => String },
      labelAsSafeHtml: { required: false, type: () => String },
      placeholder: { required: false, type: () => String },
      required: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  VariantField.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  VariantField.prototype,
  "name",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  VariantField.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  VariantField.prototype,
  "labelAsSafeHtml",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  VariantField.prototype,
  "placeholder",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  VariantField.prototype,
  "required",
  void 0
);
class Variant {
  static _OPENAPI_METADATA_FACTORY() {
    return { fields: { required: true, type: () => [VariantField] } };
  }
}
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => VariantField),
    __metadata("design:type", Array),
  ],
  Variant.prototype,
  "fields",
  void 0
);
class VariantsConfig {
  static _OPENAPI_METADATA_FACTORY() {
    return { variants: { required: true, type: () => Object } };
  }
}
class BookingField_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, enum: require("./enums/field-type").BaseField },
      name: { required: true, type: () => String },
      options: { required: false, type: () => [Option] },
      label: { required: false, type: () => String },
      labelAsSafeHtml: { required: false, type: () => String },
      defaultLabel: { required: false, type: () => String },
      placeholder: { required: false, type: () => String },
      required: { required: false, type: () => Boolean },
      getOptionsAt: { required: false, type: () => String },
      optionsInputs: { required: false, type: () => Object },
      variant: { required: false, type: () => String },
      variantsConfig: { required: false, type: () => VariantsConfig },
      views: { required: false, type: () => [View] },
      hideWhenJustOneOption: { required: false, type: () => Boolean },
      hidden: { required: false, type: () => Boolean },
      editable: { required: false, enum: require("./enums/editable").Editable },
      sources: { required: false, type: () => [Source] },
      disableOnPrefill: { required: false, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsEnum)(field_type_1.BaseField), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "name",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Option),
    __metadata("design:type", Array),
  ],
  BookingField_2024_04_15.prototype,
  "options",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "labelAsSafeHtml",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "defaultLabel",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "placeholder",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  BookingField_2024_04_15.prototype,
  "required",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "getOptionsAt",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OptionsInput),
    __metadata("design:type", Object),
  ],
  BookingField_2024_04_15.prototype,
  "optionsInputs",
  void 0
);
__decorate(
  [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), __metadata("design:type", String)],
  BookingField_2024_04_15.prototype,
  "variant",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => VariantsConfig),
    __metadata("design:type", VariantsConfig),
  ],
  BookingField_2024_04_15.prototype,
  "variantsConfig",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => View),
    __metadata("design:type", Array),
  ],
  BookingField_2024_04_15.prototype,
  "views",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  BookingField_2024_04_15.prototype,
  "hideWhenJustOneOption",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  BookingField_2024_04_15.prototype,
  "hidden",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(editable_1.Editable),
    __metadata("design:type", String),
  ],
  BookingField_2024_04_15.prototype,
  "editable",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Source),
    __metadata("design:type", Array),
  ],
  BookingField_2024_04_15.prototype,
  "sources",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean),
  ],
  BookingField_2024_04_15.prototype,
  "disableOnPrefill",
  void 0
);
exports.BookingField_2024_04_15 = BookingField_2024_04_15;
class RecurringEvent_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      dtstart: { required: false, type: () => Date },
      interval: { required: true, type: () => Number },
      count: { required: true, type: () => Number },
      freq: { required: true, enum: require("./enums/frequency").Frequency },
      until: { required: false, type: () => Date },
      tzid: { required: false, type: () => String },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsDate)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Date)],
  RecurringEvent_2024_04_15.prototype,
  "dtstart",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  RecurringEvent_2024_04_15.prototype,
  "interval",
  void 0
);
__decorate(
  [(0, class_validator_1.IsInt)(), __metadata("design:type", Number)],
  RecurringEvent_2024_04_15.prototype,
  "count",
  void 0
);
__decorate(
  [(0, class_validator_1.IsEnum)(frequency_1.Frequency), __metadata("design:type", Number)],
  RecurringEvent_2024_04_15.prototype,
  "freq",
  void 0
);
__decorate(
  [(0, class_validator_1.IsDate)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Date)],
  RecurringEvent_2024_04_15.prototype,
  "until",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  RecurringEvent_2024_04_15.prototype,
  "tzid",
  void 0
);
exports.RecurringEvent_2024_04_15 = RecurringEvent_2024_04_15;
class IntervalLimits_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      PER_DAY: { required: false, type: () => Number },
      PER_WEEK: { required: false, type: () => Number },
      PER_MONTH: { required: false, type: () => Number },
      PER_YEAR: { required: false, type: () => Number },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  IntervalLimits_2024_04_15.prototype,
  "PER_DAY",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  IntervalLimits_2024_04_15.prototype,
  "PER_WEEK",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  IntervalLimits_2024_04_15.prototype,
  "PER_MONTH",
  void 0
);
__decorate(
  [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", Number)],
  IntervalLimits_2024_04_15.prototype,
  "PER_YEAR",
  void 0
);
exports.IntervalLimits_2024_04_15 = IntervalLimits_2024_04_15;
class UpdateEventTypeInput_2024_04_15 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      length: { required: false, type: () => Number, minimum: 1 },
      slug: { required: false, type: () => String },
      title: { required: false, type: () => String },
      description: { required: false, type: () => String },
      hidden: { required: false, type: () => Boolean },
      locations: {
        required: false,
        type: () => [require("./event-type-location.input").EventTypeLocation_2024_04_15],
      },
      bookingFields: {
        required: false,
        type: () => [require("./update-event-type.input").BookingField_2024_04_15],
      },
      disableGuests: { required: false, type: () => Boolean },
      minimumBookingNotice: { required: false, type: () => Number, minimum: 0 },
      beforeEventBuffer: { required: false, type: () => Number, minimum: 0 },
      afterEventBuffer: { required: false, type: () => Number, minimum: 0 },
      slotInterval: { required: false, type: () => Number, minimum: 0 },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  UpdateEventTypeInput_2024_04_15.prototype,
  "length",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateEventTypeInput_2024_04_15.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateEventTypeInput_2024_04_15.prototype,
  "title",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", String)],
  UpdateEventTypeInput_2024_04_15.prototype,
  "description",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  UpdateEventTypeInput_2024_04_15.prototype,
  "hidden",
  void 0
);
__decorate(
  [
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => event_type_location_input_1.EventTypeLocation_2024_04_15),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array),
  ],
  UpdateEventTypeInput_2024_04_15.prototype,
  "locations",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BookingField_2024_04_15),
    __metadata("design:type", Array),
  ],
  UpdateEventTypeInput_2024_04_15.prototype,
  "bookingFields",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean),
  ],
  UpdateEventTypeInput_2024_04_15.prototype,
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
  UpdateEventTypeInput_2024_04_15.prototype,
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
  UpdateEventTypeInput_2024_04_15.prototype,
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
  UpdateEventTypeInput_2024_04_15.prototype,
  "afterEventBuffer",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number),
  ],
  UpdateEventTypeInput_2024_04_15.prototype,
  "slotInterval",
  void 0
);
exports.UpdateEventTypeInput_2024_04_15 = UpdateEventTypeInput_2024_04_15;
//# sourceMappingURL=update-event-type.input.js.map
