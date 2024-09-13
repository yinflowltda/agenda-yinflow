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
exports.DestinationCalendarsService = void 0;
const common_1 = require("@nestjs/common");
const calendars_service_1 = require("../../../ee/calendars/services/calendars.service");
const destination_calendars_repository_1 = require("../destination-calendars.repository");
let DestinationCalendarsService = class DestinationCalendarsService {
  constructor(calendarsService, destinationCalendarsRepository) {
    this.calendarsService = calendarsService;
    this.destinationCalendarsRepository = destinationCalendarsRepository;
  }
  async updateDestinationCalendars(integration, externalId, userId) {
    const userCalendars = await this.calendarsService.getCalendars(userId);
    const allCalendars = userCalendars.connectedCalendars.map((cal) => cal.calendars ?? []).flat();
    const credentialId = allCalendars.find(
      (cal) => cal.externalId === externalId && cal.integration === integration && cal.readOnly === false
    )?.credentialId;
    if (!credentialId) {
      throw new common_1.NotFoundException(`Could not find calendar ${externalId}`);
    }
    const primaryEmail =
      allCalendars.find((cal) => cal.primary && cal.credentialId === credentialId)?.email ?? null;
    const {
      integration: updatedCalendarIntegration,
      externalId: updatedCalendarExternalId,
      credentialId: updatedCalendarCredentialId,
      userId: updatedCalendarUserId,
    } = await this.destinationCalendarsRepository.updateCalendar(
      integration,
      externalId,
      credentialId,
      userId,
      primaryEmail
    );
    return {
      userId: updatedCalendarUserId,
      integration: updatedCalendarIntegration,
      externalId: updatedCalendarExternalId,
      credentialId: updatedCalendarCredentialId,
    };
  }
};
DestinationCalendarsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      calendars_service_1.CalendarsService,
      destination_calendars_repository_1.DestinationCalendarsRepository,
    ]),
  ],
  DestinationCalendarsService
);
exports.DestinationCalendarsService = DestinationCalendarsService;
//# sourceMappingURL=destination-calendars.service.js.map
