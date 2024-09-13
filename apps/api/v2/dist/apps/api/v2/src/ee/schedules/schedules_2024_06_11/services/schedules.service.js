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
exports.SchedulesService_2024_06_11 = void 0;
const common_1 = require("@nestjs/common");
const schedules_repository_1 = require("../schedules.repository");
const input_schedules_service_1 = require("./input-schedules.service");
const output_schedules_service_1 = require("./output-schedules.service");
const users_repository_1 = require("../../../../modules/users/users.repository");
let SchedulesService_2024_06_11 = class SchedulesService_2024_06_11 {
  constructor(schedulesRepository, inputSchedulesService, outputSchedulesService, usersRepository) {
    this.schedulesRepository = schedulesRepository;
    this.inputSchedulesService = inputSchedulesService;
    this.outputSchedulesService = outputSchedulesService;
    this.usersRepository = usersRepository;
  }
  async createUserDefaultSchedule(userId, timeZone) {
    const defaultSchedule = {
      isDefault: true,
      name: "Default schedule",
      timeZone,
    };
    return this.createUserSchedule(userId, defaultSchedule);
  }
  async createUserSchedule(userId, scheduleInput) {
    const schedule = this.inputSchedulesService.transformInputCreateSchedule(scheduleInput);
    const createdSchedule = await this.schedulesRepository.createSchedule(userId, schedule);
    if (schedule.isDefault) {
      await this.usersRepository.setDefaultSchedule(userId, createdSchedule.id);
    }
    return this.outputSchedulesService.getResponseSchedule(createdSchedule);
  }
  async getUserScheduleDefault(userId) {
    const user = await this.usersRepository.findById(userId);
    if (!user?.defaultScheduleId) return null;
    const defaultSchedule = await this.schedulesRepository.getScheduleById(user.defaultScheduleId);
    if (!defaultSchedule) return null;
    return this.outputSchedulesService.getResponseSchedule(defaultSchedule);
  }
  async getUserSchedule(userId, scheduleId) {
    const existingSchedule = await this.schedulesRepository.getScheduleById(scheduleId);
    if (!existingSchedule) {
      throw new common_1.NotFoundException(`Schedule with ID=${scheduleId} does not exist.`);
    }
    this.checkUserOwnsSchedule(userId, existingSchedule);
    return this.outputSchedulesService.getResponseSchedule(existingSchedule);
  }
  async getUserSchedules(userId) {
    const schedules = await this.schedulesRepository.getSchedulesByUserId(userId);
    return Promise.all(
      schedules.map(async (schedule) => {
        return this.outputSchedulesService.getResponseSchedule(schedule);
      })
    );
  }
  async updateUserSchedule(userId, scheduleId, bodySchedule) {
    const existingSchedule = await this.schedulesRepository.getScheduleById(scheduleId);
    if (!existingSchedule) {
      throw new common_1.NotFoundException(`Schedule with ID=${scheduleId} does not exist.`);
    }
    this.checkUserOwnsSchedule(userId, existingSchedule);
    const availability = bodySchedule.availability
      ? this.inputSchedulesService.transformInputScheduleAvailability(bodySchedule.availability)
      : undefined;
    const overrides = bodySchedule.overrides
      ? this.inputSchedulesService.transformInputOverrides(bodySchedule.overrides)
      : undefined;
    if (bodySchedule.isDefault) {
      await this.usersRepository.setDefaultSchedule(userId, scheduleId);
    }
    const updatedSchedule = await this.schedulesRepository.updateSchedule(userId, scheduleId, {
      ...bodySchedule,
      availability,
      overrides,
    });
    return this.outputSchedulesService.getResponseSchedule(updatedSchedule);
  }
  async deleteUserSchedule(userId, scheduleId) {
    const existingSchedule = await this.schedulesRepository.getScheduleById(scheduleId);
    if (!existingSchedule) {
      throw new common_1.BadRequestException(`Schedule with ID=${scheduleId} does not exist.`);
    }
    this.checkUserOwnsSchedule(userId, existingSchedule);
    return this.schedulesRepository.deleteScheduleById(scheduleId);
  }
  checkUserOwnsSchedule(userId, schedule) {
    if (userId !== schedule.userId) {
      throw new common_1.ForbiddenException(
        `User with ID=${userId} does not own schedule with ID=${schedule.id}`
      );
    }
  }
};
SchedulesService_2024_06_11 = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      schedules_repository_1.SchedulesRepository_2024_06_11,
      input_schedules_service_1.InputSchedulesService_2024_06_11,
      output_schedules_service_1.OutputSchedulesService_2024_06_11,
      users_repository_1.UsersRepository,
    ]),
  ],
  SchedulesService_2024_06_11
);
exports.SchedulesService_2024_06_11 = SchedulesService_2024_06_11;
//# sourceMappingURL=schedules.service.js.map
