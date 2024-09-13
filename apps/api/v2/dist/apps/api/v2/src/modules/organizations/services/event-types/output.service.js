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
exports.OutputOrganizationsEventTypesService = void 0;
const common_1 = require("@nestjs/common");
const output_event_types_service_1 = require("../../../../ee/event-types/event-types_2024_06_14/services/output-event-types.service");
const organizations_event_types_repository_1 = require("../../repositories/organizations-event-types.repository");
const users_repository_1 = require("../../../users/users.repository");
let OutputOrganizationsEventTypesService = class OutputOrganizationsEventTypesService {
  constructor(outputEventTypesService, organizationEventTypesRepository, usersRepository) {
    this.outputEventTypesService = outputEventTypesService;
    this.organizationEventTypesRepository = organizationEventTypesRepository;
    this.usersRepository = usersRepository;
  }
  async getResponseTeamEventType(databaseEventType) {
    const { teamId, userId, parentId, assignAllTeamMembers } = databaseEventType;
    const { ownerId, users, ...rest } = await this.outputEventTypesService.getResponseEventType(
      0,
      databaseEventType
    );
    const hosts =
      databaseEventType.schedulingType === "MANAGED"
        ? await this.getManagedEventTypeHosts(databaseEventType.id)
        : await this.transformHosts(databaseEventType.hosts, databaseEventType.schedulingType);
    return {
      ...rest,
      hosts,
      teamId,
      ownerId: userId,
      parentEventTypeId: parentId,
      assignAllTeamMembers: teamId ? assignAllTeamMembers : undefined,
    };
  }
  async getManagedEventTypeHosts(eventTypeId) {
    const children = await this.organizationEventTypesRepository.getEventTypeChildren(eventTypeId);
    const transformedHosts = [];
    for (const child of children) {
      if (child.userId) {
        const user = await this.usersRepository.findById(child.userId);
        transformedHosts.push({ userId: child.userId, name: user?.name || "" });
      }
    }
    return transformedHosts;
  }
  async transformHosts(databaseHosts, schedulingType) {
    if (!schedulingType) return [];
    const transformedHosts = [];
    const databaseUsers = await this.usersRepository.findByIds(databaseHosts.map((host) => host.userId));
    for (const databaseHost of databaseHosts) {
      const databaseUser = databaseUsers.find((u) => u.id === databaseHost.userId);
      if (schedulingType === "ROUND_ROBIN") {
        transformedHosts.push({
          userId: databaseHost.userId,
          name: databaseUser?.name || "",
          mandatory: databaseHost.isFixed,
          priority: getPriorityLabel(databaseHost.priority || 2),
        });
      } else {
        transformedHosts.push({ userId: databaseHost.userId, name: databaseUser?.name || "" });
      }
    }
    return transformedHosts;
  }
};
OutputOrganizationsEventTypesService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      output_event_types_service_1.OutputEventTypesService_2024_06_14,
      organizations_event_types_repository_1.OrganizationsEventTypesRepository,
      users_repository_1.UsersRepository,
    ]),
  ],
  OutputOrganizationsEventTypesService
);
exports.OutputOrganizationsEventTypesService = OutputOrganizationsEventTypesService;
function getPriorityLabel(priority) {
  switch (priority) {
    case 0:
      return "lowest";
    case 1:
      return "low";
    case 2:
      return "medium";
    case 3:
      return "high";
    case 4:
      return "highest";
    default:
      throw new Error("Invalid HostPriority value");
  }
}
//# sourceMappingURL=output.service.js.map
