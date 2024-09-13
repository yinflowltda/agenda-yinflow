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
exports.OrganizationsSchedulesService = void 0;
const common_1 = require("@nestjs/common");
const output_schedules_service_1 = require("../../../ee/schedules/schedules_2024_06_11/services/output-schedules.service");
const organizations_schedules_repository_1 = require("../repositories/organizations-schedules.repository");
const users_repository_1 = require("../../users/users.repository");
let OrganizationsSchedulesService = class OrganizationsSchedulesService {
  constructor(organizationSchedulesService, outputSchedulesService, usersRepository) {
    this.organizationSchedulesService = organizationSchedulesService;
    this.outputSchedulesService = outputSchedulesService;
    this.usersRepository = usersRepository;
  }
  async getOrganizationSchedules(organizationId, skip = 0, take = 250) {
    const users = await this.usersRepository.getOrganizationUsers(organizationId);
    const usersIds = users.map((user) => user.id);
    const schedules = await this.organizationSchedulesService.getSchedulesByUserIds(usersIds, skip, take);
    const responseSchedules = [];
    for (const schedule of schedules) {
      responseSchedules.push(await this.outputSchedulesService.getResponseSchedule(schedule));
    }
    return responseSchedules;
  }
};
OrganizationsSchedulesService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      organizations_schedules_repository_1.OrganizationSchedulesRepository,
      output_schedules_service_1.OutputSchedulesService_2024_06_11,
      users_repository_1.UsersRepository,
    ]),
  ],
  OrganizationsSchedulesService
);
exports.OrganizationsSchedulesService = OrganizationsSchedulesService;
//# sourceMappingURL=organizations-schedules.service.js.map
