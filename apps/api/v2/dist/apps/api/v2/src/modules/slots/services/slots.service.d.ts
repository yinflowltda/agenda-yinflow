import { EventTypesRepository_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/event-types.repository";
import { SlotsRepository } from "src/modules/slots/slots.repository";

import { ReserveSlotInput } from "@calcom/platform-types";

export declare class SlotsService {
  private readonly eventTypeRepo;
  private readonly slotsRepo;
  constructor(eventTypeRepo: EventTypesRepository_2024_04_15, slotsRepo: SlotsRepository);
  reserveSlot(input: ReserveSlotInput, headerUid?: string): Promise<string>;
  deleteSelectedslot(uid?: string): Promise<import(".prisma/client").Prisma.BatchPayload | undefined>;
  checkIfIsTeamEvent(eventTypeId?: number): Promise<boolean>;
}
