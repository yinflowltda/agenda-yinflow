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
exports.OutputEventTypesService_2024_06_14 = void 0;
const common_1 = require("@nestjs/common");
const platform_libraries_1 = require("@calcom/platform-libraries");
let OutputEventTypesService_2024_06_14 = class OutputEventTypesService_2024_06_14 {
  async getResponseEventType(ownerId, databaseEventType) {
    const {
      id,
      length,
      title,
      description,
      disableGuests,
      slotInterval,
      minimumBookingNotice,
      beforeEventBuffer,
      afterEventBuffer,
      slug,
      schedulingType,
      requiresConfirmation,
      price,
      currency,
      lockTimeZoneToggleOnBookingPage,
      seatsPerTimeSlot,
      forwardParamsSuccessRedirect,
      successRedirectUrl,
      seatsShowAvailabilityCount,
      isInstantEvent,
      scheduleId,
      onlyShowFirstAvailableSlot,
      offsetStart,
    } = databaseEventType;
    const locations = this.transformLocations(databaseEventType.locations);
    const bookingFields = databaseEventType.bookingFields
      ? this.transformBookingFields(
          platform_libraries_1.BookingFieldsSchema.parse(databaseEventType.bookingFields)
        )
      : [];
    const recurrence = this.transformRecurringEvent(databaseEventType.recurringEvent);
    const metadata = this.transformMetadata(databaseEventType.metadata) || {};
    const users = this.transformUsers(databaseEventType.users);
    const bookingLimitsCount = this.transformIntervalLimits(databaseEventType.bookingLimits);
    const bookingLimitsDuration = this.transformIntervalLimits(databaseEventType.durationLimits);
    const bookingWindow = this.transformBookingWindow({
      periodType: databaseEventType.periodType,
      periodDays: databaseEventType.periodDays,
      periodCountCalendarDays: databaseEventType.periodCountCalendarDays,
      periodStartDate: databaseEventType.periodStartDate,
      periodEndDate: databaseEventType.periodEndDate,
    });
    return {
      id,
      ownerId,
      lengthInMinutes: length,
      title,
      slug,
      description: description || "",
      locations,
      bookingFields,
      recurrence,
      disableGuests,
      slotInterval,
      minimumBookingNotice,
      beforeEventBuffer,
      afterEventBuffer,
      schedulingType,
      metadata,
      requiresConfirmation,
      price,
      currency,
      lockTimeZoneToggleOnBookingPage,
      seatsPerTimeSlot,
      forwardParamsSuccessRedirect,
      successRedirectUrl,
      seatsShowAvailabilityCount,
      isInstantEvent,
      users,
      scheduleId,
      bookingLimitsCount,
      bookingLimitsDuration,
      onlyShowFirstAvailableSlot,
      offsetStart,
      bookingWindow,
    };
  }
  transformLocations(locations) {
    if (!locations) return [];
    return (0, platform_libraries_1.getResponseEventTypeLocations)(
      platform_libraries_1.TransformedLocationsSchema.parse(locations)
    );
  }
  transformBookingFields(inputBookingFields) {
    if (!inputBookingFields) return [];
    const userFields = inputBookingFields.filter((field) => field.editable === "user");
    return (0, platform_libraries_1.getResponseEventTypeBookingFields)(userFields);
  }
  transformRecurringEvent(recurringEvent) {
    if (!recurringEvent) return null;
    const recurringEventParsed = (0, platform_libraries_1.parseRecurringEvent)(recurringEvent);
    return (0, platform_libraries_1.getResponseEventTypeRecurrence)(recurringEventParsed);
  }
  transformMetadata(metadata) {
    if (!metadata) return {};
    return platform_libraries_1.EventTypeMetaDataSchema.parse(metadata);
  }
  transformUsers(users) {
    return users.map((user) => {
      const metadata = user.metadata ? platform_libraries_1.userMetadata.parse(user.metadata) : {};
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        avatarUrl: user.avatarUrl,
        brandColor: user.brandColor,
        darkBrandColor: user.darkBrandColor,
        weekStart: user.weekStart,
        metadata: metadata || {},
      };
    });
  }
  transformIntervalLimits(bookingLimits) {
    const bookingLimitsParsed = (0, platform_libraries_1.parseBookingLimit)(bookingLimits);
    return (0, platform_libraries_1.getResponseEventTypeIntervalLimits)(bookingLimitsParsed);
  }
  transformBookingWindow(bookingLimits) {
    return (0, platform_libraries_1.getResponseEventTypeFutureBookingLimits)(bookingLimits);
  }
};
OutputEventTypesService_2024_06_14 = __decorate(
  [(0, common_1.Injectable)()],
  OutputEventTypesService_2024_06_14
);
exports.OutputEventTypesService_2024_06_14 = OutputEventTypesService_2024_06_14;
//# sourceMappingURL=output-event-types.service.js.map
