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
exports.ValidateBookingFields_2024_06_14 =
  exports.BooleanField_2024_06_14 =
  exports.RadioGroupField_2024_06_14 =
  exports.CheckboxGroupField_2024_06_14 =
  exports.MultiEmailField_2024_06_14 =
  exports.MultiSelectField_2024_06_14 =
  exports.SelectField_2024_06_14 =
  exports.TextAreaField_2024_06_14 =
  exports.NumberField_2024_06_14 =
  exports.TextField_2024_06_14 =
  exports.AddressField_2024_06_14 =
  exports.PhoneField_2024_06_14 =
  exports.EmailField_2024_06_14 =
  exports.NameField_2024_06_14 =
    void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const bookingFields = [
  "name",
  "email",
  "phone",
  "address",
  "text",
  "number",
  "textarea",
  "select",
  "multiselect",
  "multiemail",
  "checkbox",
  "radio",
  "boolean",
];
class NameField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  NameField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  NameField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  NameField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  NameField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  NameField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.NameField_2024_06_14 = NameField_2024_06_14;
class EmailField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  EmailField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  EmailField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  EmailField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  EmailField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  EmailField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.EmailField_2024_06_14 = EmailField_2024_06_14;
class PhoneField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  PhoneField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  PhoneField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  PhoneField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  PhoneField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  PhoneField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.PhoneField_2024_06_14 = PhoneField_2024_06_14;
class AddressField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  AddressField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  AddressField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please enter your address" }),
    __metadata("design:type", String),
  ],
  AddressField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  AddressField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, swagger_1.ApiProperty)({ example: "e.g., 1234 Main St" }),
    __metadata("design:type", String),
  ],
  AddressField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.AddressField_2024_06_14 = AddressField_2024_06_14;
class TextField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  TextField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  TextField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please enter your text" }),
    __metadata("design:type", String),
  ],
  TextField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  TextField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "e.g., Enter text here" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  TextField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.TextField_2024_06_14 = TextField_2024_06_14;
class NumberField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  NumberField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  NumberField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please enter a number" }),
    __metadata("design:type", String),
  ],
  NumberField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  NumberField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "e.g., 100" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  NumberField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.NumberField_2024_06_14 = NumberField_2024_06_14;
class TextAreaField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  TextAreaField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  TextAreaField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please enter detailed information" }),
    __metadata("design:type", String),
  ],
  TextAreaField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  TextAreaField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "e.g., Detailed description here..." }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  TextAreaField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.TextAreaField_2024_06_14 = TextAreaField_2024_06_14;
class SelectField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
      options: { required: true, type: () => [String] },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  SelectField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  SelectField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please select an option" }),
    __metadata("design:type", String),
  ],
  SelectField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  SelectField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Select..." }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  SelectField_2024_06_14.prototype,
  "placeholder",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [String], example: ["Option 1", "Option 2"] }),
    __metadata("design:type", Array),
  ],
  SelectField_2024_06_14.prototype,
  "options",
  void 0
);
exports.SelectField_2024_06_14 = SelectField_2024_06_14;
class MultiSelectField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      options: { required: true, type: () => [String] },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  MultiSelectField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  MultiSelectField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please select multiple options" }),
    __metadata("design:type", String),
  ],
  MultiSelectField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  MultiSelectField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [String], example: ["Option 1", "Option 2"] }),
    __metadata("design:type", Array),
  ],
  MultiSelectField_2024_06_14.prototype,
  "options",
  void 0
);
exports.MultiSelectField_2024_06_14 = MultiSelectField_2024_06_14;
class MultiEmailField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      placeholder: { required: false, type: () => String },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  MultiEmailField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  MultiEmailField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Please enter multiple emails" }),
    __metadata("design:type", String),
  ],
  MultiEmailField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  MultiEmailField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "e.g., example@example.com" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  MultiEmailField_2024_06_14.prototype,
  "placeholder",
  void 0
);
exports.MultiEmailField_2024_06_14 = MultiEmailField_2024_06_14;
class CheckboxGroupField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      options: { required: true, type: () => [String] },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  CheckboxGroupField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  CheckboxGroupField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Select all that apply" }),
    __metadata("design:type", String),
  ],
  CheckboxGroupField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  CheckboxGroupField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [String], example: ["Checkbox 1", "Checkbox 2"] }),
    __metadata("design:type", Array),
  ],
  CheckboxGroupField_2024_06_14.prototype,
  "options",
  void 0
);
exports.CheckboxGroupField_2024_06_14 = CheckboxGroupField_2024_06_14;
class RadioGroupField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
      options: { required: true, type: () => [String] },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  RadioGroupField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  RadioGroupField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Select one option" }),
    __metadata("design:type", String),
  ],
  RadioGroupField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  RadioGroupField_2024_06_14.prototype,
  "required",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [String], example: ["Radio 1", "Radio 2"] }),
    __metadata("design:type", Array),
  ],
  RadioGroupField_2024_06_14.prototype,
  "options",
  void 0
);
exports.RadioGroupField_2024_06_14 = RadioGroupField_2024_06_14;
class BooleanField_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: bookingFields },
      slug: { required: true, type: () => String },
      label: { required: true, type: () => String },
      required: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [
    (0, class_validator_1.IsIn)(bookingFields),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
  ],
  BooleanField_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [(0, class_validator_1.IsString)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", String)],
  BooleanField_2024_06_14.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Agree to terms?" }),
    __metadata("design:type", String),
  ],
  BooleanField_2024_06_14.prototype,
  "label",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), (0, swagger_1.ApiProperty)(), __metadata("design:type", Boolean)],
  BooleanField_2024_06_14.prototype,
  "required",
  void 0
);
exports.BooleanField_2024_06_14 = BooleanField_2024_06_14;
let BookingFieldValidator_2024_06_14 = class BookingFieldValidator_2024_06_14 {
  constructor() {
    this.classTypeMap = {
      name: NameField_2024_06_14,
      email: EmailField_2024_06_14,
      phone: PhoneField_2024_06_14,
      address: AddressField_2024_06_14,
      text: TextField_2024_06_14,
      number: NumberField_2024_06_14,
      textarea: TextAreaField_2024_06_14,
      select: SelectField_2024_06_14,
      multiselect: MultiSelectField_2024_06_14,
      multiemail: MultiEmailField_2024_06_14,
      checkbox: CheckboxGroupField_2024_06_14,
      radio: RadioGroupField_2024_06_14,
      boolean: BooleanField_2024_06_14,
    };
  }
  async validate(bookingFields) {
    if (!Array.isArray(bookingFields)) {
      throw new common_1.BadRequestException(`'bookingFields' must be an array.`);
    }
    if (!bookingFields.length) {
      throw new common_1.BadRequestException(`'bookingFields' must contain at least 1 booking field.`);
    }
    const slugs = [];
    for (const field of bookingFields) {
      const { type, slug } = field;
      if (!type) {
        throw new common_1.BadRequestException(`Each booking field must have a 'type' property.`);
      }
      if (!slug) {
        throw new common_1.BadRequestException(`Each booking field must have a 'slug' property.`);
      }
      if (slugs.includes(slug)) {
        throw new common_1.BadRequestException(
          `Duplicate bookingFields slug '${slug}' found. All bookingFields slugs must be unique.`
        );
      }
      slugs.push(slug);
      const ClassType = this.classTypeMap[type];
      if (!ClassType) {
        throw new common_1.BadRequestException(`Unsupported booking field type '${type}'.`);
      }
      const instance = (0, class_transformer_1.plainToInstance)(ClassType, field);
      const errors = await (0, class_validator_2.validate)(instance);
      if (errors.length > 0) {
        const message = errors.flatMap((error) => Object.values(error.constraints || {})).join(", ");
        throw new common_1.BadRequestException(`Validation failed for ${type} booking field: ${message}`);
      }
    }
    return true;
  }
  defaultMessage() {
    return `Validation failed for one or more booking fields.`;
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {};
  }
};
BookingFieldValidator_2024_06_14 = __decorate(
  [(0, class_validator_2.ValidatorConstraint)({ async: true })],
  BookingFieldValidator_2024_06_14
);
function ValidateBookingFields_2024_06_14(validationOptions) {
  return function (object, propertyName) {
    (0, class_validator_2.registerDecorator)({
      name: "ValidateBookingFields",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new BookingFieldValidator_2024_06_14(),
    });
  };
}
exports.ValidateBookingFields_2024_06_14 = ValidateBookingFields_2024_06_14;
//# sourceMappingURL=booking-fields.input.js.map
