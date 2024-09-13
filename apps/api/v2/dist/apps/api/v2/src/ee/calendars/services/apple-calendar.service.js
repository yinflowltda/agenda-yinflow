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
exports.AppleCalendarService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const calendars_service_1 = require("./calendars.service");
const credentials_repository_1 = require("../../../modules/credentials/credentials.repository");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_libraries_1 = require("@calcom/platform-libraries");
let AppleCalendarService = class AppleCalendarService {
  constructor(calendarsService, credentialRepository) {
    this.calendarsService = calendarsService;
    this.credentialRepository = credentialRepository;
  }
  async save(userId, userEmail, username, password) {
    return await this.saveCalendarCredentials(userId, userEmail, username, password);
  }
  async check(userId) {
    return await this.checkIfCalendarConnected(userId);
  }
  async checkIfCalendarConnected(userId) {
    const appleCalendarCredentials = await this.credentialRepository.getByTypeAndUserId(
      platform_constants_1.APPLE_CALENDAR_TYPE,
      userId
    );
    if (!appleCalendarCredentials) {
      throw new common_1.BadRequestException("Credentials for apple calendar not found.");
    }
    if (appleCalendarCredentials.invalid) {
      throw new common_1.BadRequestException("Invalid apple calendar credentials.");
    }
    const { connectedCalendars } = await this.calendarsService.getCalendars(userId);
    const appleCalendar = connectedCalendars.find(
      (cal) => cal.integration.type === platform_constants_1.APPLE_CALENDAR_TYPE
    );
    if (!appleCalendar) {
      throw new common_1.UnauthorizedException("Apple calendar not connected.");
    }
    if (appleCalendar.error?.message) {
      throw new common_1.UnauthorizedException(appleCalendar.error?.message);
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
  async saveCalendarCredentials(userId, userEmail, username, password) {
    if (username.length <= 1 || password.length <= 1)
      throw new common_1.BadRequestException(`Username or password cannot be empty`);
    const data = {
      type: platform_constants_1.APPLE_CALENDAR_TYPE,
      key: (0, platform_libraries_1.symmetricEncrypt)(
        JSON.stringify({ username, password }),
        process.env.CALENDSO_ENCRYPTION_KEY || ""
      ),
      userId: userId,
      teamId: null,
      appId: platform_constants_1.APPLE_CALENDAR_ID,
      invalid: false,
    };
    try {
      const dav = new platform_libraries_1.CalendarService({
        id: 0,
        ...data,
        user: { email: userEmail },
      });
      await dav?.listCalendars();
      await this.credentialRepository.createAppCredential(
        platform_constants_1.APPLE_CALENDAR_TYPE,
        data.key,
        userId
      );
    } catch (reason) {
      throw new common_1.BadRequestException(`Could not add this apple calendar account: ${reason}`);
    }
    return {
      status: platform_constants_1.SUCCESS_STATUS,
    };
  }
};
AppleCalendarService = __decorate(
  [
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [
      calendars_service_1.CalendarsService,
      credentials_repository_1.CredentialsRepository,
    ]),
  ],
  AppleCalendarService
);
exports.AppleCalendarService = AppleCalendarService;
//# sourceMappingURL=apple-calendar.service.js.map
