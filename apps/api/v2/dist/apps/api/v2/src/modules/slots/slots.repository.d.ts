import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

import { ReserveSlotInput } from "@calcom/platform-types";

export declare class SlotsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  getBookingWithAttendees(bookingUid?: string): Promise<{
    attendees: {
      id: number;
      email: string;
      name: string;
      timeZone: string;
      locale: string | null;
      bookingId: number | null;
      noShow: boolean | null;
    }[];
  } | null>;
  upsertSelectedSlot(
    userId: number,
    input: ReserveSlotInput,
    uid: string,
    isSeat: boolean
  ): Promise<{
    id: number;
    eventTypeId: number;
    userId: number;
    slotUtcStartDate: Date;
    slotUtcEndDate: Date;
    uid: string;
    releaseAt: Date;
    isSeat: boolean;
  }>;
  deleteSelectedSlots(uid: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
