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
exports.SlotsService = void 0;
const common_1 = require("@nestjs/common");
const event_types_repository_1 = require("../../../ee/event-types/event-types_2024_04_15/event-types.repository");
const slots_repository_1 = require("../slots.repository");
const uuid_1 = require("uuid");
let SlotsService = class SlotsService {
  constructor(eventTypeRepo, slotsRepo) {
    this.eventTypeRepo = eventTypeRepo;
    this.slotsRepo = slotsRepo;
  }
  async reserveSlot(input, headerUid) {
    const uid = headerUid || (0, uuid_1.v4)();
    const eventType = await this.eventTypeRepo.getEventTypeWithSeats(input.eventTypeId);
    if (!eventType) {
      throw new common_1.NotFoundException("Event Type not found");
    }
    let shouldReserveSlot = true;
    if (eventType.seatsPerTimeSlot) {
      const bookingWithAttendees = await this.slotsRepo.getBookingWithAttendees(input.bookingUid);
      const bookingAttendeesLength = bookingWithAttendees?.attendees?.length;
      if (bookingAttendeesLength) {
        const seatsLeft = eventType.seatsPerTimeSlot - bookingAttendeesLength;
        if (seatsLeft < 1) shouldReserveSlot = false;
      } else {
        shouldReserveSlot = false;
      }
    }
    if (eventType && shouldReserveSlot) {
      await Promise.all(
        eventType.users.map((user) =>
          this.slotsRepo.upsertSelectedSlot(user.id, input, uid, eventType.seatsPerTimeSlot !== null)
        )
      );
    }
    return uid;
  }
  async deleteSelectedslot(uid) {
    if (!uid) return;
    return this.slotsRepo.deleteSelectedSlots(uid);
  }
  async checkIfIsTeamEvent(eventTypeId) {
    if (!eventTypeId) return false;
    const event = await this.eventTypeRepo.getEventTypeById(eventTypeId);
    return !!event?.teamId;
  }
};
SlotsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      event_types_repository_1.EventTypesRepository_2024_04_15,
      slots_repository_1.SlotsRepository,
    ]),
  ],
  SlotsService
);
exports.SlotsService = SlotsService;
//# sourceMappingURL=slots.service.js.map
