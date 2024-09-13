import { CreateEventTypeOutput_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/outputs/create-event-type.output";
import { DeleteEventTypeOutput_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/outputs/delete-event-type.output";
import { GetEventTypeOutput_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/outputs/get-event-type.output";
import { GetEventTypesOutput_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/outputs/get-event-types.output";
import { UpdateEventTypeOutput_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/outputs/update-event-type.output";
import { EventTypesService_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/services/event-types.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import {
  CreateEventTypeInput_2024_06_14,
  UpdateEventTypeInput_2024_06_14,
  GetEventTypesQuery_2024_06_14,
} from "@calcom/platform-types";

export declare class EventTypesController_2024_06_14 {
  private readonly eventTypesService;
  constructor(eventTypesService: EventTypesService_2024_06_14);
  createEventType(
    body: CreateEventTypeInput_2024_06_14,
    user: UserWithProfile
  ): Promise<CreateEventTypeOutput_2024_06_14>;
  getEventTypeById(eventTypeId: string, user: UserWithProfile): Promise<GetEventTypeOutput_2024_06_14>;
  getEventTypes(queryParams: GetEventTypesQuery_2024_06_14): Promise<GetEventTypesOutput_2024_06_14>;
  updateEventType(
    eventTypeId: number,
    body: UpdateEventTypeInput_2024_06_14,
    user: UserWithProfile
  ): Promise<UpdateEventTypeOutput_2024_06_14>;
  deleteEventType(eventTypeId: number, userId: number): Promise<DeleteEventTypeOutput_2024_06_14>;
}
