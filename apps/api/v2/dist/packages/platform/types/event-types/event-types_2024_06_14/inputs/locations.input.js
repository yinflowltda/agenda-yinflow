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
exports.ValidateLocations_2024_06_14 =
  exports.PhoneLocation_2024_06_14 =
  exports.IntegrationLocation_2024_06_14 =
  exports.LinkLocation_2024_06_14 =
  exports.AddressLocation_2024_06_14 =
    void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const locations = ["address", "link", "integration", "phone"];
class AddressLocation_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: locations },
      address: { required: true, type: () => String },
      public: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsIn)(locations), __metadata("design:type", String)],
  AddressLocation_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "123 Example St, City, Country" }),
    __metadata("design:type", String),
  ],
  AddressLocation_2024_06_14.prototype,
  "address",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  AddressLocation_2024_06_14.prototype,
  "public",
  void 0
);
exports.AddressLocation_2024_06_14 = AddressLocation_2024_06_14;
class LinkLocation_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: locations },
      link: { required: true, type: () => String },
      public: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsIn)(locations), __metadata("design:type", String)],
  LinkLocation_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({ example: "https://customvideo.com/join/123456" }),
    __metadata("design:type", String),
  ],
  LinkLocation_2024_06_14.prototype,
  "link",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  LinkLocation_2024_06_14.prototype,
  "public",
  void 0
);
exports.LinkLocation_2024_06_14 = LinkLocation_2024_06_14;
const integrations = ["cal-video"];
class IntegrationLocation_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: locations },
      integration: { required: true, type: () => String, enum: integrations },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsIn)(locations), __metadata("design:type", String)],
  IntegrationLocation_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsIn)(integrations),
    (0, swagger_1.ApiProperty)({ example: integrations[0] }),
    __metadata("design:type", String),
  ],
  IntegrationLocation_2024_06_14.prototype,
  "integration",
  void 0
);
exports.IntegrationLocation_2024_06_14 = IntegrationLocation_2024_06_14;
class PhoneLocation_2024_06_14 {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      type: { required: true, type: () => String, enum: locations },
      phone: { required: true, type: () => String },
      public: { required: true, type: () => Boolean },
    };
  }
}
__decorate(
  [(0, class_validator_1.IsIn)(locations), __metadata("design:type", String)],
  PhoneLocation_2024_06_14.prototype,
  "type",
  void 0
);
__decorate(
  [
    (0, class_validator_1.IsPhoneNumber)(),
    (0, swagger_1.ApiProperty)({ example: "+37120993151" }),
    __metadata("design:type", String),
  ],
  PhoneLocation_2024_06_14.prototype,
  "phone",
  void 0
);
__decorate(
  [(0, class_validator_1.IsBoolean)(), __metadata("design:type", Boolean)],
  PhoneLocation_2024_06_14.prototype,
  "public",
  void 0
);
exports.PhoneLocation_2024_06_14 = PhoneLocation_2024_06_14;
let LocationValidator_2024_06_14 = class LocationValidator_2024_06_14 {
  constructor() {
    this.classTypeMap = {
      address: AddressLocation_2024_06_14,
      link: LinkLocation_2024_06_14,
      integration: IntegrationLocation_2024_06_14,
      phone: PhoneLocation_2024_06_14,
    };
  }
  async validate(locations) {
    if (!Array.isArray(locations)) {
      throw new common_1.BadRequestException(`'locations' must be an array.`);
    }
    if (!locations.length) {
      throw new common_1.BadRequestException(`'locations' must contain at least 1 location.`);
    }
    for (const location of locations) {
      const { type } = location;
      if (!type) {
        throw new common_1.BadRequestException(`Each object in 'locations' must have a 'type' property.`);
      }
      const ClassType = this.classTypeMap[type];
      if (!ClassType) {
        throw new common_1.BadRequestException(
          `Unsupported location type '${type}'. Valid types are address, link, integration, and phone.`
        );
      }
      const instance = (0, class_transformer_1.plainToInstance)(ClassType, location);
      const errors = await (0, class_validator_2.validate)(instance);
      if (errors.length > 0) {
        const message = errors.flatMap((error) => Object.values(error.constraints || {})).join(", ");
        throw new common_1.BadRequestException(`Validation failed for ${type} location: ${message}`);
      }
    }
    return true;
  }
  defaultMessage() {
    return `Validation failed for one or more location entries.`;
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {};
  }
};
LocationValidator_2024_06_14 = __decorate(
  [(0, class_validator_2.ValidatorConstraint)({ async: true })],
  LocationValidator_2024_06_14
);
function ValidateLocations_2024_06_14(validationOptions) {
  return function (object, propertyName) {
    (0, class_validator_2.registerDecorator)({
      name: "ValidateLocation",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new LocationValidator_2024_06_14(),
    });
  };
}
exports.ValidateLocations_2024_06_14 = ValidateLocations_2024_06_14;
//# sourceMappingURL=locations.input.js.map
