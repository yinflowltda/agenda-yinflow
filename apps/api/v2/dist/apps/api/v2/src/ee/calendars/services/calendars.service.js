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
exports.CalendarsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const luxon_1 = require("luxon");
const calendars_repository_1 = require("../calendars.repository");
const apps_repository_1 = require("../../../modules/apps/apps.repository");
const credentials_repository_1 = require("../../../modules/credentials/credentials.repository");
const prisma_read_service_1 = require("../../../modules/prisma/prisma-read.service");
const prisma_write_service_1 = require("../../../modules/prisma/prisma-write.service");
const users_repository_1 = require("../../../modules/users/users.repository");
const zod_1 = require("zod");
const platform_libraries_1 = require("@calcom/platform-libraries");
let CalendarsService = class CalendarsService {
  constructor(
    usersRepository,
    credentialsRepository,
    appsRepository,
    calendarsRepository,
    dbRead,
    dbWrite,
    config
  ) {
    this.usersRepository = usersRepository;
    this.credentialsRepository = credentialsRepository;
    this.appsRepository = appsRepository;
    this.calendarsRepository = calendarsRepository;
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
    this.config = config;
    this.oAuthCalendarResponseSchema = zod_1.z.object({
      client_id: zod_1.z.string(),
      client_secret: zod_1.z.string(),
    });
  }
  async getCalendars(userId) {
    const userWithCalendars = await this.usersRepository.findByIdWithCalendars(userId);
    if (!userWithCalendars) {
      throw new common_1.NotFoundException("User not found");
    }
    return (0, platform_libraries_1.getConnectedDestinationCalendars)(
      userWithCalendars,
      false,
      this.dbWrite.prisma
    );
  }
  async getBusyTimes(calendarsToLoad, userId, dateFrom, dateTo, timezone) {
    const credentials = await this.getUniqCalendarCredentials(calendarsToLoad, userId);
    const composedSelectedCalendars = await this.getCalendarsWithCredentials(
      credentials,
      calendarsToLoad,
      userId
    );
    try {
      const calendarBusyTimes = await (0, platform_libraries_1.getBusyCalendarTimes)(
        "",
        credentials,
        dateFrom,
        dateTo,
        composedSelectedCalendars
      );
      const calendarBusyTimesConverted = calendarBusyTimes.map((busyTime) => {
        const busyTimeStart = luxon_1.DateTime.fromJSDate(new Date(busyTime.start)).setZone(timezone);
        const busyTimeEnd = luxon_1.DateTime.fromJSDate(new Date(busyTime.end)).setZone(timezone);
        const busyTimeStartDate = busyTimeStart.toJSDate();
        const busyTimeEndDate = busyTimeEnd.toJSDate();
        return {
          ...busyTime,
          start: busyTimeStartDate,
          end: busyTimeEndDate,
        };
      });
      return calendarBusyTimesConverted;
    } catch (error) {
      throw new common_1.InternalServerErrorException(
        "Unable to fetch connected calendars events. Please try again later."
      );
    }
  }
  async getUniqCalendarCredentials(calendarsToLoad, userId) {
    const uniqueCredentialIds = Array.from(new Set(calendarsToLoad.map((item) => item.credentialId)));
    const credentials = await this.credentialsRepository.getUserCredentialsByIds(userId, uniqueCredentialIds);
    if (credentials.length !== uniqueCredentialIds.length) {
      throw new common_1.UnauthorizedException("These credentials do not belong to you");
    }
    return credentials;
  }
  async getCalendarsWithCredentials(credentials, calendarsToLoad, userId) {
    const composedSelectedCalendars = calendarsToLoad.map((calendar) => {
      const credential = credentials.find((item) => item.id === calendar.credentialId);
      if (!credential) {
        throw new common_1.UnauthorizedException("These credentials do not belong to you");
      }
      return {
        ...calendar,
        userId,
        integration: credential.type,
      };
    });
    return composedSelectedCalendars;
  }
  async getAppKeys(appName) {
    const app = await this.appsRepository.getAppBySlug(appName);
    if (!app) {
      throw new common_1.NotFoundException();
    }
    const { client_id, client_secret } = this.oAuthCalendarResponseSchema.parse(app.keys);
    if (!client_id) {
      throw new common_1.NotFoundException();
    }
    if (!client_secret) {
      throw new common_1.NotFoundException();
    }
    return { client_id, client_secret };
  }
  async checkCalendarCredentials(credentialId, userId) {
    const credential = await this.calendarsRepository.getCalendarCredentials(credentialId, userId);
    if (!credential) {
      throw new common_1.NotFoundException("Calendar credentials not found");
    }
  }
};
CalendarsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      users_repository_1.UsersRepository,
      credentials_repository_1.CredentialsRepository,
      apps_repository_1.AppsRepository,
      calendars_repository_1.CalendarsRepository,
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
      config_1.ConfigService,
    ]),
  ],
  CalendarsService
);
exports.CalendarsService = CalendarsService;
//# sourceMappingURL=calendars.service.js.map
