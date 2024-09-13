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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSchedulesService_2024_06_11 = void 0;
const common_1 = require("@nestjs/common");
const platform_libraries_1 = require("@calcom/platform-libraries");
let InputSchedulesService_2024_06_11 = class InputSchedulesService_2024_06_11 {
  transformInputCreateSchedule(inputSchedule) {
    const defaultAvailability = [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "09:00",
        endTime: "17:00",
      },
    ];
    const defaultOverrides = [];
    const availability = this.transformInputScheduleAvailability(
      inputSchedule.availability || defaultAvailability
    );
    const overrides = this.transformInputOverrides(inputSchedule.overrides || defaultOverrides);
    const internalCreateSchedule = {
      ...inputSchedule,
      availability,
      overrides,
    };
    return internalCreateSchedule;
  }
  transformInputScheduleAvailability(inputAvailability) {
    return (0, platform_libraries_1.transformApiScheduleAvailability)(inputAvailability);
  }
  transformInputOverrides(inputOverrides) {
    return (0, platform_libraries_1.transformApiScheduleOverrides)(inputOverrides);
  }
};
InputSchedulesService_2024_06_11 = __decorate([(0, common_1.Injectable)()], InputSchedulesService_2024_06_11);
exports.InputSchedulesService_2024_06_11 = InputSchedulesService_2024_06_11;
//# sourceMappingURL=input-schedules.service.js.map
