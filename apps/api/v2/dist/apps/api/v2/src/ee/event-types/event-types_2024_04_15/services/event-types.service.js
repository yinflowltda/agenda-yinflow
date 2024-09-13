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
exports.EventTypesService_2024_04_15 = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants/constants");
const event_types_repository_1 = require("../event-types.repository");
const memberships_repository_1 = require("../../../../modules/memberships/memberships.repository");
const prisma_write_service_1 = require("../../../../modules/prisma/prisma-write.service");
const selected_calendars_repository_1 = require("../../../../modules/selected-calendars/selected-calendars.repository");
const users_service_1 = require("../../../../modules/users/services/users.service");
const users_repository_1 = require("../../../../modules/users/users.repository");
const platform_libraries_1 = require("@calcom/platform-libraries");
let EventTypesService_2024_04_15 = class EventTypesService_2024_04_15 {
  constructor(
    eventTypesRepository,
    membershipsRepository,
    usersRepository,
    selectedCalendarsRepository,
    dbWrite,
    usersService
  ) {
    this.eventTypesRepository = eventTypesRepository;
    this.membershipsRepository = membershipsRepository;
    this.usersRepository = usersRepository;
    this.selectedCalendarsRepository = selectedCalendarsRepository;
    this.dbWrite = dbWrite;
    this.usersService = usersService;
  }
  async createUserEventType(user, body) {
    await this.checkCanCreateEventType(user.id, body);
    const eventTypeUser = await this.getUserToCreateEvent(user);
    const { eventType } = await (0, platform_libraries_1.createEventType)({
      input: body,
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    return eventType;
  }
  async checkCanCreateEventType(userId, body) {
    const existsWithSlug = await this.eventTypesRepository.getUserEventTypeBySlug(userId, body.slug);
    if (existsWithSlug) {
      throw new common_1.BadRequestException("User already has an event type with this slug.");
    }
  }
  async getUserToCreateEvent(user) {
    const organizationId = this.usersService.getUserMainOrgId(user);
    const isOrgAdmin = organizationId
      ? await this.membershipsRepository.isUserOrganizationAdmin(user.id, organizationId)
      : false;
    const profileId = this.usersService.getUserMainProfile(user)?.id || null;
    return {
      id: user.id,
      role: user.role,
      organizationId: user.organizationId,
      organization: { isOrgAdmin },
      profile: { id: profileId },
      metadata: user.metadata,
    };
  }
  async getUserEventType(userId, eventTypeId) {
    const eventType = await this.eventTypesRepository.getUserEventType(userId, eventTypeId);
    if (!eventType) {
      return null;
    }
    this.checkUserOwnsEventType(userId, eventType);
    return eventType;
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
    return await (0, platform_libraries_1.getEventTypesPublic)(user.id);
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
    this.checkCanUpdateEventType(user.id, eventTypeId);
    const eventTypeUser = await this.getUserToUpdateEvent(user);
    await (0, platform_libraries_1.updateEventType)({
      input: { id: eventTypeId, ...body },
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    const eventType = await this.getUserEventTypeForAtom(user, eventTypeId);
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    return eventType.eventType;
  }
  async checkCanUpdateEventType(userId, eventTypeId) {
    const existingEventType = await this.getUserEventType(userId, eventTypeId);
    if (!existingEventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    this.checkUserOwnsEventType(userId, existingEventType);
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
};
EventTypesService_2024_04_15 = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      event_types_repository_1.EventTypesRepository_2024_04_15,
      memberships_repository_1.MembershipsRepository,
      users_repository_1.UsersRepository,
      selected_calendars_repository_1.SelectedCalendarsRepository,
      prisma_write_service_1.PrismaWriteService,
      users_service_1.UsersService,
    ]),
  ],
  EventTypesService_2024_04_15
);
exports.EventTypesService_2024_04_15 = EventTypesService_2024_04_15;
//# sourceMappingURL=event-types.service.js.map
