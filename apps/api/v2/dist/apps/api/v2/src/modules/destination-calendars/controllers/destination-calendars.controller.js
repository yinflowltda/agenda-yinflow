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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationCalendarsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_versions_1 = require("../../../lib/api-versions");
const get_user_decorator_1 = require("../../auth/decorators/get-user/get-user.decorator");
const api_auth_guard_1 = require("../../auth/guards/api-auth/api-auth.guard");
const destination_calendars_input_1 = require("../inputs/destination-calendars.input");
const destination_calendars_output_1 = require("../outputs/destination-calendars.output");
const destination_calendars_service_1 = require("../services/destination-calendars.service");
const platform_constants_1 = require("@calcom/platform-constants");
let DestinationCalendarsController = class DestinationCalendarsController {
  constructor(destinationCalendarsService) {
    this.destinationCalendarsService = destinationCalendarsService;
  }
  async updateDestinationCalendars(input, user) {
    const { integration, externalId } = input;
    const updatedDestinationCalendar = await this.destinationCalendarsService.updateDestinationCalendars(
      integration,
      externalId,
      user.id
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: (0, class_transformer_1.plainToClass)(
        destination_calendars_output_1.DestinationCalendarsOutputDto,
        updatedDestinationCalendar,
        {
          strategy: "excludeAll",
        }
      ),
    };
  }
};
__decorate(
  [
    (0, common_1.Put)("/"),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, swagger_1.ApiTags)("Select a third party destination calendar where events will be created"),
    openapi.ApiResponse({
      status: 200,
      type: require("../outputs/destination-calendars.output").DestinationCalendarsOutputResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [destination_calendars_input_1.DestinationCalendarsInputBodyDto, Object]),
    __metadata("design:returntype", Promise),
  ],
  DestinationCalendarsController.prototype,
  "updateDestinationCalendars",
  null
);
DestinationCalendarsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/destination-calendars",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiTags)("Destination-Calendars"),
    __metadata("design:paramtypes", [destination_calendars_service_1.DestinationCalendarsService]),
  ],
  DestinationCalendarsController
);
exports.DestinationCalendarsController = DestinationCalendarsController;
//# sourceMappingURL=destination-calendars.controller.js.map
