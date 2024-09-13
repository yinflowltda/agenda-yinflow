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
exports.InputOrganizationsEventTypesService = void 0;
const common_1 = require("@nestjs/common");
const input_event_types_service_1 = require("../../../../ee/event-types/event-types_2024_06_14/services/input-event-types.service");
const organizations_event_types_repository_1 = require("../../repositories/organizations-event-types.repository");
const organizations_teams_repository_1 = require("../../repositories/organizations-teams.repository");
const users_repository_1 = require("../../../users/users.repository");
let InputOrganizationsEventTypesService = class InputOrganizationsEventTypesService {
  constructor(
    inputEventTypesService,
    organizationsTeamsRepository,
    usersRepository,
    orgEventTypesRepository
  ) {
    this.inputEventTypesService = inputEventTypesService;
    this.organizationsTeamsRepository = organizationsTeamsRepository;
    this.usersRepository = usersRepository;
    this.orgEventTypesRepository = orgEventTypesRepository;
  }
  async transformInputCreateTeamEventType(teamId, inputEventType) {
    const {
      hosts,
      assignAllTeamMembers,
      bookingLimitsCount,
      bookingLimitsDuration,
      bookingWindow,
      bookingFields,
      recurrence,
      ...rest
    } = inputEventType;
    const eventType = this.inputEventTypesService.transformInputCreateEventType(rest);
    const metadata = rest.schedulingType === "MANAGED" ? { managedEventConfig: {} } : undefined;
    const teamEventType = {
      ...eventType,
      hosts: assignAllTeamMembers
        ? await this.getAllTeamMembers(teamId, inputEventType.schedulingType)
        : this.transformInputHosts(hosts, inputEventType.schedulingType),
      assignAllTeamMembers,
      bookingLimitsCount,
      bookingLimitsDuration,
      bookingWindow,
      bookingFields,
      recurrence,
      metadata,
    };
    return teamEventType;
  }
  async transformInputUpdateTeamEventType(eventTypeId, teamId, inputEventType) {
    const { hosts, assignAllTeamMembers, ...rest } = inputEventType;
    const eventType = this.inputEventTypesService.transformInputUpdateEventType(rest);
    const dbEventType = await this.orgEventTypesRepository.getTeamEventType(teamId, eventTypeId);
    if (!dbEventType) {
      throw new common_1.BadRequestException("Event type to update not found");
    }
    const children = await this.getChildEventTypesForManagedEventType(eventTypeId, inputEventType, teamId);
    const teamEventType = {
      ...eventType,
      hosts: !children
        ? assignAllTeamMembers
          ? await this.getAllTeamMembers(teamId, dbEventType.schedulingType)
          : this.transformInputHosts(hosts, dbEventType.schedulingType)
        : undefined,
      assignAllTeamMembers,
      children,
    };
    return teamEventType;
  }
  async getChildEventTypesForManagedEventType(eventTypeId, inputEventType, teamId) {
    const eventType = await this.orgEventTypesRepository.getEventTypeByIdWithChildren(eventTypeId);
    if (!eventType || eventType.schedulingType !== "MANAGED") {
      return undefined;
    }
    const ownersIds = await this.getOwnersIdsForManagedEventType(teamId, inputEventType, eventType);
    const owners = await this.getOwnersForManagedEventType(ownersIds);
    return owners.map((owner) => {
      return {
        hidden: false,
        owner,
      };
    });
  }
  async getOwnersIdsForManagedEventType(teamId, inputEventType, eventType) {
    if (inputEventType.assignAllTeamMembers) {
      return await this.organizationsTeamsRepository.getTeamMembersIds(teamId);
    }
    if (inputEventType.hosts) {
      return inputEventType.hosts.map((host) => host.userId);
    }
    return eventType.children.map((child) => child.userId).filter((id) => !!id);
  }
  async getOwnersForManagedEventType(userIds) {
    const users = await this.usersRepository.findByIdsWithEventTypes(userIds);
    return users.map((user) => {
      const nonManagedEventTypes = user.eventTypes.filter((eventType) => !eventType.parentId);
      return {
        id: user.id,
        name: user.name || user.email,
        email: user.email,
        eventTypeSlugs: nonManagedEventTypes.map((eventType) => eventType.slug),
      };
    });
  }
  async getAllTeamMembers(teamId, schedulingType) {
    const membersIds = await this.organizationsTeamsRepository.getTeamMembersIds(teamId);
    const isFixed = schedulingType === "COLLECTIVE" ? true : false;
    return membersIds.map((id) => ({
      userId: id,
      isFixed,
      priority: 2,
    }));
  }
  transformInputHosts(inputHosts, schedulingType) {
    if (!inputHosts) {
      return undefined;
    }
    const defaultPriority = "medium";
    const defaultIsFixed = false;
    return inputHosts.map((host) => ({
      userId: host.userId,
      isFixed: schedulingType === "COLLECTIVE" ? true : host.mandatory || defaultIsFixed,
      priority: getPriorityValue(
        schedulingType === "COLLECTIVE" ? "medium" : host.priority || defaultPriority
      ),
    }));
  }
};
InputOrganizationsEventTypesService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      input_event_types_service_1.InputEventTypesService_2024_06_14,
      organizations_teams_repository_1.OrganizationsTeamsRepository,
      users_repository_1.UsersRepository,
      organizations_event_types_repository_1.OrganizationsEventTypesRepository,
    ]),
  ],
  InputOrganizationsEventTypesService
);
exports.InputOrganizationsEventTypesService = InputOrganizationsEventTypesService;
function getPriorityValue(priority) {
  switch (priority) {
    case "lowest":
      return 0;
    case "low":
      return 1;
    case "medium":
      return 2;
    case "high":
      return 3;
    case "highest":
      return 4;
    default:
      throw new Error("Invalid HostPriority label");
  }
}
//# sourceMappingURL=input.service.js.map
