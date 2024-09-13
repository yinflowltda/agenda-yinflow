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
exports.SchedulesService_2024_04_15 = void 0;
const common_1 = require("@nestjs/common");
const schedules_repository_1 = require("../schedules.repository");
const users_repository_1 = require("../../../../modules/users/users.repository");
const platform_libraries_0_0_2_1 = require("@calcom/platform-libraries-0.0.2");
const platform_libraries_0_0_2_2 = require("@calcom/platform-libraries-0.0.2");
let SchedulesService_2024_04_15 = class SchedulesService_2024_04_15 {
  constructor(schedulesRepository, usersRepository) {
    this.schedulesRepository = schedulesRepository;
    this.usersRepository = usersRepository;
  }
  async createUserDefaultSchedule(userId, timeZone) {
    const schedule = {
      isDefault: true,
      name: "Default schedule",
      timeZone,
    };
    return this.createUserSchedule(userId, schedule);
  }
  async createUserSchedule(userId, schedule) {
    const availabilities = schedule.availabilities?.length
      ? schedule.availabilities
      : [this.getDefaultAvailabilityInput()];
    const createdSchedule = await this.schedulesRepository.createScheduleWithAvailabilities(
      userId,
      schedule,
      availabilities
    );
    if (schedule.isDefault) {
      await this.usersRepository.setDefaultSchedule(userId, createdSchedule.id);
    }
    return createdSchedule;
  }
  async getUserScheduleDefault(userId) {
    const user = await this.usersRepository.findById(userId);
    if (!user?.defaultScheduleId) return null;
    return this.schedulesRepository.getScheduleById(user.defaultScheduleId);
  }
  async getUserSchedule(userId, scheduleId) {
    const existingSchedule = await this.schedulesRepository.getScheduleById(scheduleId);
    if (!existingSchedule) {
      throw new common_1.NotFoundException(`Schedule with ID=${scheduleId} does not exist.`);
    }
    this.checkUserOwnsSchedule(userId, existingSchedule);
    return existingSchedule;
  }
  async getUserSchedules(userId) {
    return this.schedulesRepository.getSchedulesByUserId(userId);
  }
  async updateUserSchedule(user, scheduleId, bodySchedule) {
    const existingSchedule = await this.schedulesRepository.getScheduleById(scheduleId);
    if (!existingSchedule) {
      throw new common_1.NotFoundException(`Schedule with ID=${scheduleId} does not exist.`);
    }
    this.checkUserOwnsSchedule(user.id, existingSchedule);
    const schedule = await this.getUserSchedule(user.id, Number(scheduleId));
    const scheduleFormatted = await this.formatScheduleForAtom(user, schedule);
    if (!bodySchedule.schedule) {
      bodySchedule.schedule = scheduleFormatted.availability;
    }
    return (0, platform_libraries_0_0_2_1.updateScheduleHandler)({
      input: { scheduleId: Number(scheduleId), ...bodySchedule },
      ctx: { user },
    });
  }
  async deleteUserSchedule(userId, scheduleId) {
    const existingSchedule = await this.schedulesRepository.getScheduleById(scheduleId);
    if (!existingSchedule) {
      throw new common_1.BadRequestException(`Schedule with ID=${scheduleId} does not exist.`);
    }
    this.checkUserOwnsSchedule(userId, existingSchedule);
    return this.schedulesRepository.deleteScheduleById(scheduleId);
  }
  async formatScheduleForAtom(user, schedule) {
    const usersSchedulesCount = await this.schedulesRepository.getUserSchedulesCount(user.id);
    return this.transformScheduleForAtom(schedule, usersSchedulesCount, user);
  }
  async formatSchedulesForAtom(user, schedules) {
    const usersSchedulesCount = await this.schedulesRepository.getUserSchedulesCount(user.id);
    return Promise.all(
      schedules.map((schedule) => this.transformScheduleForAtom(schedule, usersSchedulesCount, user))
    );
  }
  async transformScheduleForAtom(schedule, userSchedulesCount, user) {
    const timeZone = schedule.timeZone || user.timeZone;
    const defaultSchedule = await this.getUserScheduleDefault(user.id);
    return {
      id: schedule.id,
      name: schedule.name,
      isManaged: schedule.userId !== user.id,
      workingHours: (0, platform_libraries_0_0_2_2.transformWorkingHoursForClient)(schedule),
      schedule: schedule.availability,
      availability: (0, platform_libraries_0_0_2_2.transformAvailabilityForClient)(schedule),
      timeZone,
      dateOverrides: (0, platform_libraries_0_0_2_2.transformDateOverridesForClient)(schedule, timeZone),
      isDefault: defaultSchedule?.id === schedule.id,
      isLastSchedule: userSchedulesCount <= 1,
      readOnly: schedule.userId !== user.id,
    };
  }
  checkUserOwnsSchedule(userId, schedule) {
    if (userId !== schedule.userId) {
      throw new common_1.ForbiddenException(
        `User with ID=${userId} does not own schedule with ID=${schedule.id}`
      );
    }
  }
  getDefaultAvailabilityInput() {
    const startTime = new Date(new Date().setUTCHours(9, 0, 0, 0));
    const endTime = new Date(new Date().setUTCHours(17, 0, 0, 0));
    return {
      days: [1, 2, 3, 4, 5],
      startTime,
      endTime,
    };
  }
};
SchedulesService_2024_04_15 = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      schedules_repository_1.SchedulesRepository_2024_04_15,
      users_repository_1.UsersRepository,
    ]),
  ],
  SchedulesService_2024_04_15
);
exports.SchedulesService_2024_04_15 = SchedulesService_2024_04_15;
//# sourceMappingURL=schedules.service.js.map
