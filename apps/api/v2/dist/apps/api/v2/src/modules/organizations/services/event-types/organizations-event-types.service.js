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
exports.OrganizationsEventTypesService = void 0;
const common_1 = require("@nestjs/common");
const event_types_repository_1 = require("../../../../ee/event-types/event-types_2024_06_14/event-types.repository");
const event_types_service_1 = require("../../../../ee/event-types/event-types_2024_06_14/services/event-types.service");
const memberships_repository_1 = require("../../../memberships/memberships.repository");
const organizations_event_types_repository_1 = require("../../repositories/organizations-event-types.repository");
const organizations_teams_repository_1 = require("../../repositories/organizations-teams.repository");
const input_service_1 = require("./input.service");
const output_service_1 = require("./output.service");
const prisma_write_service_1 = require("../../../prisma/prisma-write.service");
const users_service_1 = require("../../../users/services/users.service");
const platform_libraries_1 = require("@calcom/platform-libraries");
let OrganizationsEventTypesService = class OrganizationsEventTypesService {
  constructor(
    inputService,
    eventTypesService,
    dbWrite,
    organizationEventTypesRepository,
    eventTypesRepository,
    outputService,
    membershipsRepository,
    organizationsTeamsRepository,
    usersService
  ) {
    this.inputService = inputService;
    this.eventTypesService = eventTypesService;
    this.dbWrite = dbWrite;
    this.organizationEventTypesRepository = organizationEventTypesRepository;
    this.eventTypesRepository = eventTypesRepository;
    this.outputService = outputService;
    this.membershipsRepository = membershipsRepository;
    this.organizationsTeamsRepository = organizationsTeamsRepository;
    this.usersService = usersService;
  }
  async createTeamEventType(user, teamId, orgId, body) {
    await this.validateHosts(teamId, body.hosts);
    const eventTypeUser = await this.getUserToCreateTeamEvent(user, orgId);
    const {
      hosts,
      assignAllTeamMembers,
      locations,
      bookingLimitsCount,
      bookingLimitsDuration,
      bookingWindow,
      bookingFields,
      recurrence,
      ...rest
    } = await this.inputService.transformInputCreateTeamEventType(teamId, body);
    const { eventType: eventTypeCreated } = await (0, platform_libraries_1.createEventType)({
      input: { teamId: teamId, locations, ...rest },
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    return await this.updateTeamEventType(
      eventTypeCreated.id,
      teamId,
      {
        hosts: body.hosts,
        assignAllTeamMembers,
        bookingLimitsCount,
        bookingLimitsDuration,
        bookingWindow,
        bookingFields,
        recurrence,
        ...rest,
      },
      user
    );
  }
  async validateHosts(teamId, hosts) {
    if (hosts && hosts.length) {
      const membersIds = await this.organizationsTeamsRepository.getTeamMembersIds(teamId);
      const invalidHosts = hosts.filter((host) => !membersIds.includes(host.userId));
      if (invalidHosts.length) {
        throw new common_1.NotFoundException(`Invalid hosts: ${invalidHosts.join(", ")}`);
      }
    }
  }
  async validateEventTypeExists(teamId, eventTypeId) {
    const eventType = await this.organizationEventTypesRepository.getTeamEventType(teamId, eventTypeId);
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
  }
  async getUserToCreateTeamEvent(user, organizationId) {
    const isOrgAdmin = await this.membershipsRepository.isUserOrganizationAdmin(user.id, organizationId);
    const profileId =
      this.usersService.getUserProfileByOrgId(user, organizationId)?.id ||
      this.usersService.getUserMainProfile(user)?.id;
    return {
      id: user.id,
      role: user.role,
      organizationId: user.organizationId,
      organization: { isOrgAdmin },
      profile: { id: profileId },
      metadata: user.metadata,
    };
  }
  async getTeamEventType(teamId, eventTypeId) {
    const eventType = await this.organizationEventTypesRepository.getTeamEventType(teamId, eventTypeId);
    if (!eventType) {
      return null;
    }
    return this.outputService.getResponseTeamEventType(eventType);
  }
  async getTeamEventTypeBySlug(teamId, eventTypeSlug) {
    const eventType = await this.organizationEventTypesRepository.getTeamEventTypeBySlug(
      teamId,
      eventTypeSlug
    );
    if (!eventType) {
      return null;
    }
    return this.outputService.getResponseTeamEventType(eventType);
  }
  async getTeamEventTypes(teamId) {
    const eventTypes = await this.organizationEventTypesRepository.getTeamEventTypes(teamId);
    const eventTypePromises = eventTypes.map(async (eventType) => {
      return await this.outputService.getResponseTeamEventType(eventType);
    });
    return await Promise.all(eventTypePromises);
  }
  async getTeamsEventTypes(orgId, skip = 0, take = 250) {
    const eventTypes = await this.organizationEventTypesRepository.getTeamsEventTypes(orgId, skip, take);
    const eventTypePromises = eventTypes.map(async (eventType) => {
      return await this.outputService.getResponseTeamEventType(eventType);
    });
    return await Promise.all(eventTypePromises);
  }
  async updateTeamEventType(eventTypeId, teamId, body, user) {
    await this.validateEventTypeExists(teamId, eventTypeId);
    await this.validateHosts(teamId, body.hosts);
    const eventTypeUser = await this.eventTypesService.getUserToUpdateEvent(user);
    const bodyTransformed = await this.inputService.transformInputUpdateTeamEventType(
      eventTypeId,
      teamId,
      body
    );
    await (0, platform_libraries_1.updateEventType)({
      input: { id: eventTypeId, ...bodyTransformed },
      ctx: {
        user: eventTypeUser,
        prisma: this.dbWrite.prisma,
      },
    });
    const eventType = await this.organizationEventTypesRepository.getEventTypeById(eventTypeId);
    if (!eventType) {
      throw new common_1.NotFoundException(`Event type with id ${eventTypeId} not found`);
    }
    if (eventType.schedulingType !== "MANAGED") {
      return this.outputService.getResponseTeamEventType(eventType);
    }
    const children = await this.organizationEventTypesRepository.getEventTypeChildren(eventType.id);
    const eventTypes = [eventType, ...children];
    const eventTypePromises = eventTypes.map(async (e) => {
      return await this.outputService.getResponseTeamEventType(e);
    });
    return await Promise.all(eventTypePromises);
  }
  async deleteTeamEventType(teamId, eventTypeId) {
    const existingEventType = await this.organizationEventTypesRepository.getTeamEventType(
      teamId,
      eventTypeId
    );
    if (!existingEventType) {
      throw new common_1.NotFoundException(`Event type with ID=${eventTypeId} does not exist.`);
    }
    return this.eventTypesRepository.deleteEventType(eventTypeId);
  }
};
OrganizationsEventTypesService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      input_service_1.InputOrganizationsEventTypesService,
      event_types_service_1.EventTypesService_2024_06_14,
      prisma_write_service_1.PrismaWriteService,
      organizations_event_types_repository_1.OrganizationsEventTypesRepository,
      event_types_repository_1.EventTypesRepository_2024_06_14,
      output_service_1.OutputOrganizationsEventTypesService,
      memberships_repository_1.MembershipsRepository,
      organizations_teams_repository_1.OrganizationsTeamsRepository,
      users_service_1.UsersService,
    ]),
  ],
  OrganizationsEventTypesService
);
exports.OrganizationsEventTypesService = OrganizationsEventTypesService;
//# sourceMappingURL=organizations-event-types.service.js.map
