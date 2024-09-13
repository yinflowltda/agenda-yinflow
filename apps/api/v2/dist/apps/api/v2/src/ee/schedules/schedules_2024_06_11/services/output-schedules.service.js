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
exports.OutputSchedulesService_2024_06_11 = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../../../../modules/users/users.repository");
let OutputSchedulesService_2024_06_11 = class OutputSchedulesService_2024_06_11 {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async getResponseSchedule(databaseSchedule) {
    if (!databaseSchedule.timeZone) {
      throw new Error("Failed to create schedule because its timezone is not set.");
    }
    const ownerDefaultScheduleId = await this.usersRepository.getUserScheduleDefaultId(
      databaseSchedule.userId
    );
    const createdScheduleAvailabilities = databaseSchedule.availability.filter(
      (availability) => !!availability.days.length
    );
    const createdScheduleOverrides = databaseSchedule.availability.filter((override) => !!override.date);
    return {
      id: databaseSchedule.id,
      ownerId: databaseSchedule.userId,
      name: databaseSchedule.name,
      timeZone: databaseSchedule.timeZone,
      availability: createdScheduleAvailabilities.map((availability) => ({
        days: availability.days.map(transformNumberToDay),
        startTime: this.padHoursMinutesWithZeros(
          availability.startTime.getUTCHours() + ":" + availability.startTime.getUTCMinutes()
        ),
        endTime: this.padHoursMinutesWithZeros(
          availability.endTime.getUTCHours() + ":" + availability.endTime.getUTCMinutes()
        ),
      })),
      isDefault: databaseSchedule.id === ownerDefaultScheduleId,
      overrides: createdScheduleOverrides.map((override) => ({
        date:
          override.date?.getUTCFullYear() +
          "-" +
          (override.date ? override.date.getUTCMonth() + 1 : "").toString().padStart(2, "0") +
          "-" +
          override.date?.getUTCDate().toString().padStart(2, "0"),
        startTime: this.padHoursMinutesWithZeros(
          override.startTime.getUTCHours() + ":" + override.startTime.getUTCMinutes()
        ),
        endTime: this.padHoursMinutesWithZeros(
          override.endTime.getUTCHours() + ":" + override.endTime.getUTCMinutes()
        ),
      })),
    };
  }
  padHoursMinutesWithZeros(hhMM) {
    const [hours, minutes] = hhMM.split(":");
    const formattedHours = hours.padStart(2, "0");
    const formattedMinutes = minutes.padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  }
};
OutputSchedulesService_2024_06_11 = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [users_repository_1.UsersRepository])],
  OutputSchedulesService_2024_06_11
);
exports.OutputSchedulesService_2024_06_11 = OutputSchedulesService_2024_06_11;
function transformNumberToDay(day) {
  const weekMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  return weekMap[day];
}
//# sourceMappingURL=output-schedules.service.js.map
