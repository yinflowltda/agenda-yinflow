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
exports.InputEventTypesService_2024_06_14 = void 0;
const common_1 = require("@nestjs/common");
const platform_libraries_1 = require("@calcom/platform-libraries");
let InputEventTypesService_2024_06_14 = class InputEventTypesService_2024_06_14 {
  transformInputCreateEventType(inputEventType) {
    const defaultLocations = [
      {
        type: "integration",
        integration: "cal-video",
      },
    ];
    const {
      lengthInMinutes,
      locations,
      bookingFields,
      bookingLimitsCount,
      bookingLimitsDuration,
      bookingWindow,
      recurrence,
      ...rest
    } = inputEventType;
    const eventType = {
      ...rest,
      length: lengthInMinutes,
      locations: this.transformInputLocations(locations || defaultLocations),
      bookingFields: this.transformInputBookingFields(bookingFields),
      bookingLimits: bookingLimitsCount ? this.transformInputIntervalLimits(bookingLimitsCount) : undefined,
      durationLimits: bookingLimitsDuration
        ? this.transformInputIntervalLimits(bookingLimitsDuration)
        : undefined,
      ...this.transformInputBookingWindow(bookingWindow),
      recurringEvent: recurrence ? this.transformInputRecurrignEvent(recurrence) : undefined,
    };
    return eventType;
  }
  transformInputUpdateEventType(inputEventType) {
    const {
      lengthInMinutes,
      locations,
      bookingFields,
      scheduleId,
      bookingLimitsCount,
      bookingLimitsDuration,
      bookingWindow,
      recurrence,
      ...rest
    } = inputEventType;
    const eventType = {
      ...rest,
      length: lengthInMinutes,
      locations: locations ? this.transformInputLocations(locations) : undefined,
      bookingFields: bookingFields ? this.transformInputBookingFields(bookingFields) : undefined,
      schedule: scheduleId,
      bookingLimits: bookingLimitsCount ? this.transformInputIntervalLimits(bookingLimitsCount) : undefined,
      durationLimits: bookingLimitsDuration
        ? this.transformInputIntervalLimits(bookingLimitsDuration)
        : undefined,
      ...this.transformInputBookingWindow(bookingWindow),
      recurringEvent: recurrence ? this.transformInputRecurrignEvent(recurrence) : undefined,
    };
    return eventType;
  }
  transformInputLocations(inputLocations) {
    return (0, platform_libraries_1.transformApiEventTypeLocations)(inputLocations);
  }
  transformInputBookingFields(inputBookingFields) {
    return (0, platform_libraries_1.transformApiEventTypeBookingFields)(inputBookingFields);
  }
  transformInputIntervalLimits(inputBookingFields) {
    return (0, platform_libraries_1.transformApiEventTypeIntervalLimits)(inputBookingFields);
  }
  transformInputBookingWindow(inputBookingWindow) {
    const res = (0, platform_libraries_1.transformApiEventTypeFutureBookingLimits)(inputBookingWindow);
    return !!res ? res : {};
  }
  transformInputRecurrignEvent(recurrence) {
    return (0, platform_libraries_1.transformApiEventTypeRecurrence)(recurrence);
  }
};
InputEventTypesService_2024_06_14 = __decorate(
  [(0, common_1.Injectable)()],
  InputEventTypesService_2024_06_14
);
exports.InputEventTypesService_2024_06_14 = InputEventTypesService_2024_06_14;
//# sourceMappingURL=input-event-types.service.js.map
