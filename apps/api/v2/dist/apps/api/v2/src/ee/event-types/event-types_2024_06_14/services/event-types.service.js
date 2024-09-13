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
exports.EventTypesService_2024_06_14 = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants/constants");
const event_types_repository_1 = require("../event-types.repository");
const input_event_types_service_1 = require("./input-event-types.service");
const output_event_types_service_1 = require("./output-event-types.service");
const schedules_repository_1 = require("../../../schedules/schedules_2024_06_11/schedules.repository");
const memberships_repository_1 = require("../../../../modules/memberships/memberships.repository");
const prisma_write_service_1 = require("../../../../modules/prisma/prisma-write.service");
const selected_calendars_repository_1 = require("../../../../modules/selected-calendars/selected-calendars.repository");
const users_service_1 = require("../../../../modules/users/services/users.service");
const users_repository_1 = require("../../../../modules/users/users.repository");
const platform_libraries_1 = require("@calcom/platform-libraries");
const platform_libraries_2 = require("@calcom/platform-libraries");
const platform_libraries_3 = require("@calcom/platform-libraries");
let EventTypesService_2024_06_14 = class EventTypesService_2024_06_14 {
  constructor(
    eventTypesRepository,
    inputEventTypesService,
    outputEventTypesService,
    membershipsRepository,
    usersRepository,
    usersService,
    selectedCalendarsRepository,
    dbWrite,
    schedulesRepository
  ) {
    this.eventTypesRepository = eventTypesRepository;
    this.inputEventTypesService = inputEventTypesService;
    this.outputEventTypesService = outputEventTypesService;
    this.membershipsRepository = membershipsRepository;
    this.usersRepository = usersRepository;
    this.usersService = usersService;
    this.selectedCalendarsRepository = selectedCalendarsRepository;
    this.dbWrite = dbWrite;
    this.schedulesRepository = schedulesRepository;
  }
  async createUserEventType(user, body) {
    await this.checkCanCreateEventType(user.id, body);
    const eventTypeUser = await this.getUserToCreateEvent(user);
    const {
      bookingLimits,
      durationLimits,
      periodType = undefined,
      periodDays = undefined,
      periodCountCalendarDays = undefined,
      periodStartDate = undefined,
      periodEndDate = undefined,
      recurrence = undefined,
      ...bodyTransformed
    } = this.inputEventTypesService.transformInputCreateEventType(body);
    const { eventType: eventTypeCreated } = await (0, platform_libraries_1.createEventType)({
      input: bodyTransformed,
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    await (0, platform_libraries_1.updateEventType)({
      input: {
        id: eventTypeCreated.id,
        bookingLimits,
        durationLimits,
        periodType,
        periodDays,
        periodCountCalendarDays,
        periodStartDate,
        periodEndDate,
        recurrence,
        ...bodyTransformed,
      },
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    const eventType = await this.eventTypesRepository.getEventTypeById(eventTypeCreated.id);
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeCreated.id} not found`);
    }
    return this.outputEventTypesService.getResponseEventType(user.id, eventType);
  }
  async checkCanCreateEventType(userId, body) {
    const existsWithSlug = await this.eventTypesRepository.getUserEventTypeBySlug(userId, body.slug);
    if (existsWithSlug) {
      throw new common_1.BadRequestException("User already has an event type with this slug.");
    }
    await this.checkUserOwnsSchedule(userId, body.scheduleId);
  }
  async getEventTypeByUsernameAndSlug(username, eventTypeSlug) {
    const user = await this.usersRepository.findByUsername(username);
    if (!user) {
      return null;
    }
    const eventType = await this.eventTypesRepository.getUserEventTypeBySlug(user.id, eventTypeSlug);
    if (!eventType) {
      return null;
    }
    return this.outputEventTypesService.getResponseEventType(user.id, eventType);
  }
  async getEventTypesByUsername(username) {
    const user = await this.usersRepository.findByUsername(username);
    if (!user) {
      return [];
    }
    return this.getUserEventTypes(user.id);
  }
  async getUserToCreateEvent(user) {
    const organizationId = this.usersService.getUserMainOrgId(user);
    const isOrgAdmin = organizationId
      ? await this.membershipsRepository.isUserOrganizationAdmin(user.id, organizationId)
      : false;
    const profileId = this.usersService.getUserMainProfile(user)?.id || null;
    const selectedCalendars = await this.selectedCalendarsRepository.getUserSelectedCalendars(user.id);
    return {
      id: user.id,
      role: user.role,
      username: user.username,
      organizationId: user.organizationId,
      organization: { isOrgAdmin },
      profile: { id: profileId },
      metadata: user.metadata,
      selectedCalendars,
    };
  }
  async getUserEventType(userId, eventTypeId) {
    const eventType = await this.eventTypesRepository.getUserEventType(userId, eventTypeId);
    if (!eventType) {
      return null;
    }
    this.checkUserOwnsEventType(userId, eventType);
    return this.outputEventTypesService.getResponseEventType(userId, eventType);
  }
  async getUserEventTypes(userId) {
    const eventTypes = await this.eventTypesRepository.getUserEventTypes(userId);
    const eventTypePromises = eventTypes.map(async (eventType) => {
      return await this.outputEventTypesService.getResponseEventType(userId, eventType);
    });
    return await Promise.all(eventTypePromises);
  }
  async getUserEventTypeForAtom(user, eventTypeId) {
    const organizationId = this.usersService.getUserMainOrgId(user);
    const isUserOrganizationAdmin = organizationId
      ? await this.membershipsRepository.isUserOrganizationAdmin(user.id, organizationId)
      : false;
    const eventType = await this.eventTypesRepository.getUserEventTypeForAtom(
      user,
      isUserOrganizationAdmin,
      eventTypeId
    );
    if (!eventType) {
      return null;
    }
    this.checkUserOwnsEventType(user.id, eventType.eventType);
    return eventType;
  }
  async getEventTypesPublicByUsername(username) {
    const user = await this.usersRepository.findByUsername(username);
    if (!user) {
      throw new common_1.NotFoundException(`User with username "${username}" not found`);
    }
    return await (0, platform_libraries_2.getEventTypesPublic)(user.id);
  }
  async getEventTypes(queryParams) {
    const { username, eventSlug, usernames } = queryParams;
    if (username && eventSlug) {
      const eventType = await this.getEventTypeByUsernameAndSlug(username, eventSlug);
      return eventType ? [eventType] : [];
    }
    if (username) {
      return await this.getEventTypesByUsername(username);
    }
    if (usernames) {
      const dynamicEventType = await this.getDynamicEventType(usernames);
      return [dynamicEventType];
    }
    return [];
  }
  async getDynamicEventType(usernames) {
    const users = await this.usersService.getByUsernames(usernames);
    const usersFiltered = [];
    for (const user of users) {
      if (user) {
        usersFiltered.push(user);
      }
    }
    return this.outputEventTypesService.getResponseEventType(0, {
      ...platform_libraries_3.dynamicEvent,
      users: usersFiltered,
      isInstantEvent: false,
    });
  }
  async createUserDefaultEventTypes(userId) {
    const { sixtyMinutes, sixtyMinutesVideo, thirtyMinutes, thirtyMinutesVideo } =
      constants_1.DEFAULT_EVENT_TYPES;
    const defaultEventTypes = await Promise.all([
      this.eventTypesRepository.createUserEventType(userId, thirtyMinutes),
      this.eventTypesRepository.createUserEventType(userId, sixtyMinutes),
      this.eventTypesRepository.createUserEventType(userId, thirtyMinutesVideo),
      this.eventTypesRepository.createUserEventType(userId, sixtyMinutesVideo),
    ]);
    return defaultEventTypes;
  }
  async updateEventType(eventTypeId, body, user) {
    await this.checkCanUpdateEventType(user.id, eventTypeId, body.scheduleId);
    const eventTypeUser = await this.getUserToUpdateEvent(user);
    const bodyTransformed = this.inputEventTypesService.transformInputUpdateEventType(body);
    await (0, platform_libraries_1.updateEventType)({
      input: { id: eventTypeId, ...bodyTransformed },
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    const eventType = await this.eventTypesRepository.getEventTypeById(eventTypeId);
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    return this.outputEventTypesService.getResponseEventType(user.id, eventType);
  }
  async checkCanUpdateEventType(userId, eventTypeId, scheduleId) {
    const existingEventType = await this.getUserEventType(userId, eventTypeId);
    if (!existingEventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    this.checkUserOwnsEventType(userId, { id: eventTypeId, userId: existingEventType.ownerId });
    await this.checkUserOwnsSchedule(userId, scheduleId);
  }
  async getUserToUpdateEvent(user) {
    const profileId = this.usersService.getUserMainProfile(user)?.id || null;
    const selectedCalendars = await this.selectedCalendarsRepository.getUserSelectedCalendars(user.id);
    return { ...user, profile: { id: profileId }, selectedCalendars };
  }
  async deleteEventType(eventTypeId, userId) {
    const existingEventType = await this.eventTypesRepository.getEventTypeById(eventTypeId);
    if (!existingEventType) {
      throw new common_1.NotFoundException(`Event type with ID=${eventTypeId} does not exist.`);
    }
    this.checkUserOwnsEventType(userId, existingEventType);
    return this.eventTypesRepository.deleteEventType(eventTypeId);
  }
  checkUserOwnsEventType(userId, eventType) {
    if (userId !== eventType.userId) {
      throw new common_1.ForbiddenException(
        `User with ID=${userId} does not own event type with ID=${eventType.id}`
      );
    }
  }
  async checkUserOwnsSchedule(userId, scheduleId) {
    if (!scheduleId) {
      return;
    }
    const schedule = await this.schedulesRepository.getScheduleByIdAndUserId(scheduleId, userId);
    if (!schedule) {
      throw new common_1.NotFoundException(
        `User with ID=${userId} does not own schedule with ID=${scheduleId}`
      );
    }
  }
};
EventTypesService_2024_06_14 = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      event_types_repository_1.EventTypesRepository_2024_06_14,
      input_event_types_service_1.InputEventTypesService_2024_06_14,
      output_event_types_service_1.OutputEventTypesService_2024_06_14,
      memberships_repository_1.MembershipsRepository,
      users_repository_1.UsersRepository,
      users_service_1.UsersService,
      selected_calendars_repository_1.SelectedCalendarsRepository,
      prisma_write_service_1.PrismaWriteService,
      schedules_repository_1.SchedulesRepository_2024_06_11,
    ]),
  ],
  EventTypesService_2024_06_14
);
exports.EventTypesService_2024_06_14 = EventTypesService_2024_06_14;
//# sourceMappingURL=event-types.service.js.map
