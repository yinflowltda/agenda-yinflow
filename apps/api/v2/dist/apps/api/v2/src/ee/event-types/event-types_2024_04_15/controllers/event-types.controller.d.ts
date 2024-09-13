import { CreateEventTypeInput_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/create-event-type.input";
import { EventTypeIdParams_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/event-type-id.input";
import { GetPublicEventTypeQueryParams_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/get-public-event-type-query-params.input";
import { UpdateEventTypeInput_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/update-event-type.input";
import { CreateEventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/create-event-type.output";
import { DeleteEventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/delete-event-type.output";
import { GetEventTypePublicOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/get-event-type-public.output";
import { GetEventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/get-event-type.output";
import { GetEventTypesPublicOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/get-event-types-public.output";
import { GetEventTypesOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/get-event-types.output";
import { UpdateEventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/update-event-type.output";
import { EventTypesService_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/services/event-types.service";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { UserWithProfile } from "src/modules/users/users.repository";

export declare class EventTypesController_2024_04_15 {
  private readonly eventTypesService;
  private readonly prismaReadService;
  constructor(eventTypesService: EventTypesService_2024_04_15, prismaReadService: PrismaReadService);
  createEventType(
    body: CreateEventTypeInput_2024_04_15,
    user: UserWithProfile
  ): Promise<CreateEventTypeOutput>;
  getEventType(eventTypeId: number, user: UserWithProfile): Promise<GetEventTypeOutput>;
  getEventTypes(user: UserWithProfile): Promise<GetEventTypesOutput>;
  getPublicEventType(
    username: string,
    eventSlug: string,
    queryParams: GetPublicEventTypeQueryParams_2024_04_15
  ): Promise<GetEventTypePublicOutput>;
  getPublicEventTypes(username: string): Promise<GetEventTypesPublicOutput>;
  updateEventType(
    params: EventTypeIdParams_2024_04_15,
    eventTypeId: number,
    body: UpdateEventTypeInput_2024_04_15,
    user: UserWithProfile
  ): Promise<UpdateEventTypeOutput>;
  deleteEventType(
    params: EventTypeIdParams_2024_04_15,
    eventTypeId: number,
    userId: number
  ): Promise<DeleteEventTypeOutput>;
}
