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
exports.SchedulesRepository_2024_04_15 = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../../../modules/prisma/prisma-read.service");
const prisma_write_service_1 = require("../../../modules/prisma/prisma-write.service");
let SchedulesRepository_2024_04_15 = class SchedulesRepository_2024_04_15 {
  constructor(dbRead, dbWrite) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
  }
  async createScheduleWithAvailabilities(userId, schedule, availabilities) {
    const createScheduleData = {
      user: {
        connect: {
          id: userId,
        },
      },
      name: schedule.name,
      timeZone: schedule.timeZone,
    };
    if (availabilities.length > 0) {
      createScheduleData.availability = {
        createMany: {
          data: availabilities.map((availability) => {
            return {
              days: availability.days,
              startTime: availability.startTime,
              endTime: availability.endTime,
              userId,
            };
          }),
        },
      };
    }
    const createdSchedule = await this.dbWrite.prisma.schedule.create({
      data: {
        ...createScheduleData,
      },
      include: {
        availability: true,
      },
    });
    return createdSchedule;
  }
  async getScheduleById(scheduleId) {
    const schedule = await this.dbRead.prisma.schedule.findUnique({
      where: {
        id: scheduleId,
      },
      include: {
        availability: true,
      },
    });
    return schedule;
  }
  async getSchedulesByUserId(userId) {
    const schedules = await this.dbRead.prisma.schedule.findMany({
      where: {
        userId,
      },
      include: {
        availability: true,
      },
    });
    return schedules;
  }
  async deleteScheduleById(scheduleId) {
    return this.dbWrite.prisma.schedule.delete({
      where: {
        id: scheduleId,
      },
    });
  }
  async getUserSchedulesCount(userId) {
    return this.dbRead.prisma.schedule.count({
      where: {
        userId,
      },
    });
  }
};
SchedulesRepository_2024_04_15 = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
    ]),
  ],
  SchedulesRepository_2024_04_15
);
exports.SchedulesRepository_2024_04_15 = SchedulesRepository_2024_04_15;
//# sourceMappingURL=schedules.repository.js.map
