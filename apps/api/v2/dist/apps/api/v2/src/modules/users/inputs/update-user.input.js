"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserInput = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_input_1 = require("./create-user.input");
class UpdateUserInput extends (0, mapped_types_1.PartialType)(create_user_input_1.CreateUserInput) {
  static _OPENAPI_METADATA_FACTORY() {
    return {};
  }
}
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=update-user.input.js.map
