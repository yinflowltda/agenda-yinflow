import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";
import dayjs from "@calcom/dayjs";
import { dynamicEvent } from "@calcom/lib/defaultEvents";
import { SlotFormat } from "@calcom/platform-enums";
import type {
  GetSlotsInput_2024_09_04,
  RangeSlot_2024_09_04,
  RangeSlotsOutput_2024_09_04,
  SeatedRangeSlot_2024_09_04,
  SeatedSlot_2024_09_04,
  Slot_2024_09_04,
  SlotsOutput_2024_09_04,
} from "@calcom/platform-types";
import { getAvailableSlots } from "@calcom/trpc/server/routers/viewer/slots/util";

interface GetAvailableSlots {
  slots: Record<string, { time: string; attendees?: number; bookingUid?: string }[]>;
}

const transformGetSlotsQuery = async (query: GetSlotsInput_2024_09_04) => {
  const eventType = await getEventType(query);

  if (!eventType) {
    throw new Error(`Event Type not found`);
  }
  const isTeamEvent = !!eventType?.teamId;

  const startTime = dayjs(query.start).toISOString();
  const endTime = adjustEndTime(query.end);
  const duration = query.duration;
  const eventTypeId = eventType.id;
  const eventTypeSlug = eventType.slug;
  const usernameList = "usernames" in query ? query.usernames : [];
  const timeZone = query.timeZone;
  const orgSlug = "organizationSlug" in query ? query.organizationSlug : null;

  return {
    isTeamEvent,
    startTime,
    endTime,
    duration,
    eventTypeId,
    eventTypeSlug,
    usernameList,
    timeZone,
    orgSlug,
  };
};

const getEventType = async (input: GetSlotsInput_2024_09_04) => {
  const prisma = (await import("@calcom/prisma")).default;

  try {
    if ("eventTypeId" in input) {
      return await prisma.eventType.findUnique({
        where: {
          id: parseInt(input.eventTypeId as unknown as string, 10),
        },
      });
    }

    if ("eventTypeSlug" in input) {
      const user = await prisma.user.findFirst({
        where: {
          username: (input as any).username,
        },
      });

      if (!user) {
        throw new Error(`User with username ${(input as any).username} not found`);
      }
      return await prisma.eventType.findFirst({
        where: {
          slug: input.eventTypeSlug,
          userId: user.id,
        },
      });
    }

    return input.duration ? { ...dynamicEvent, length: input.duration } : dynamicEvent;
  } catch (error) {
    throw new Error(`Error fetching event type: ${error}`);
  }
};

const adjustEndTime = (endTime: string) => {
  let dateTime = dayjs.utc(endTime);
  if (dateTime.hour() === 0 && dateTime.minute() === 0 && dateTime.second() === 0) {
    dateTime = dateTime.set("hour", 23).set("minute", 59).set("second", 59);
  }

  return dateTime.toISOString();
};

const getAvailableTimeSlot = (start: string): Slot_2024_09_04 | SeatedSlot_2024_09_04 => {
  return {
    start,
  };
};

const getAvailableTimeSlotSeated = (
  start: string,
  seatsBooked: number,
  eventTypeSeatsPerTimeslot: number,
  bookingUid?: string
): Slot_2024_09_04 | SeatedSlot_2024_09_04 => {
  return {
    start,
    seatsBooked,
    seatsRemaining: eventTypeSeatsPerTimeslot - seatsBooked,
    seatsTotal: eventTypeSeatsPerTimeslot,
    bookingUid,
  };
};

const getAvailableRangeSlot = (
  start: string,
  end: string
): RangeSlot_2024_09_04 | SeatedRangeSlot_2024_09_04 => {
  return {
    start,
    end,
  };
};

const getAvailableRangeSlotSeated = (
  start: string,
  end: string,
  seatsBooked: number,
  eventTypeSeatsPerTimeslot: number,
  bookingUid: string | undefined
): RangeSlot_2024_09_04 | SeatedRangeSlot_2024_09_04 => {
  return {
    start,
    end,
    seatsBooked,
    seatsRemaining: eventTypeSeatsPerTimeslot - seatsBooked,
    seatsTotal: eventTypeSeatsPerTimeslot,
    bookingUid,
  };
};

const getAvailableTimeSlots = async (
  availableSlots: GetAvailableSlots,
  eventTypeId: number,
  timeZone?: string
): Promise<SlotsOutput_2024_09_04> => {
  const prisma = (await import("@calcom/prisma")).default;

  const eventType = await prisma.eventType.findUnique({
    where: {
      id: eventTypeId,
    },
  });

  const slots: { [key: string]: (Slot_2024_09_04 | SeatedSlot_2024_09_04)[] } = {};

  for (const date in availableSlots.slots) {
    slots[date] = availableSlots.slots[date].map((slot) => {
      if (!timeZone) {
        if (!eventType?.seatsPerTimeSlot) {
          return getAvailableTimeSlot(slot.time);
        }
        return getAvailableTimeSlotSeated(
          slot.time,
          slot.attendees || 0,
          eventType.seatsPerTimeSlot || 0,
          slot.bookingUid
        );
      }

      const slotTimezoneAdjusted = dayjs.utc(slot.time).tz(timeZone).toISOString();

      if (!slotTimezoneAdjusted) {
        throw new Error(`Could not adjust timezone for slot ${slot.time} with timezone ${timeZone}`);
      }
      if (!eventType?.seatsPerTimeSlot) {
        return getAvailableTimeSlot(slotTimezoneAdjusted);
      }
      return getAvailableTimeSlotSeated(
        slotTimezoneAdjusted,
        slot.attendees || 0,
        eventType.seatsPerTimeSlot || 0,
        slot.bookingUid
      );
    });
  }

  return slots;
};

const getAvailableRangeSlots = async (
  availableSlots: GetAvailableSlots,
  eventTypeId: number,
  timeZone?: string,
  duration?: number
): Promise<RangeSlotsOutput_2024_09_04> => {
  const prisma = (await import("@calcom/prisma")).default;

  const eventType = await prisma.eventType.findUnique({
    where: {
      id: eventTypeId,
    },
  });

  const slotDuration = duration ?? eventType?.length;

  const slots = Object.entries(availableSlots.slots).reduce<
    Record<string, (RangeSlot_2024_09_04 | SeatedRangeSlot_2024_09_04)[]>
  >((acc, [date, slots]) => {
    acc[date] = slots.map((slot) => {
      if (timeZone) {
        const start = dayjs.utc(slot.time).tz(timeZone).toISOString();
        if (!start) {
          throw new Error(`Could not adjust timezone for slot ${slot.time} with timezone ${timeZone}`);
        }

        const end = dayjs
          .utc(slot.time)
          .add(slotDuration || 0, "minute")
          .tz(timeZone)
          .toISOString();

        if (!end) {
          throw new Error(
            `Could not adjust timezone for slot end time ${slot.time} with timezone ${timeZone}`
          );
        }

        if (!eventType?.seatsPerTimeSlot) {
          return getAvailableRangeSlot(start, end);
        }
        return getAvailableRangeSlotSeated(
          start,
          end,
          slot.attendees || 0,
          eventType.seatsPerTimeSlot ?? undefined,
          slot.bookingUid
        );
      } else {
        const start = dayjs.utc(slot.time).toISOString();
        const end = dayjs
          .utc(slot.time)
          .add(slotDuration || 0, "minute")
          .toISOString();

        if (!start || !end) {
          throw new Error(`Could not create UTC time for slot ${slot.time}`);
        }

        if (!eventType?.seatsPerTimeSlot) {
          return getAvailableRangeSlot(start, end);
        }
        return getAvailableRangeSlotSeated(
          start,
          end,
          slot.attendees || 0,
          eventType.seatsPerTimeSlot ?? undefined,
          slot.bookingUid
        );
      }
    });
    return acc;
  }, {});

  return slots;
};

const getFormattedAvailableSlots = async (
  availableSlots: GetAvailableSlots,
  eventTypeId: number,
  duration?: number,
  format?: SlotFormat,
  timeZone?: string
): Promise<SlotsOutput_2024_09_04 | RangeSlotsOutput_2024_09_04> => {
  if (!format || format === SlotFormat.Time) {
    return getAvailableTimeSlots(availableSlots, eventTypeId, timeZone);
  }

  return getAvailableRangeSlots(availableSlots, eventTypeId, timeZone, duration);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const start = req.query.start as string;
  const end = req.query.end as string;
  const organizationSlug = req.query.organizationSlug as string;
  const username = req.query.username as string;
  const eventTypeSlug = req.query.eventTypeSlug as string;
  const eventTypeId = req.query.eventTypeId as string;
  const usernames = req.query.usernames as string;
  const slotFormat = req.query.slotFormat as SlotFormat;
  const duration = req.query.duration as string;
  const timeZone = req.query.timeZone as string;

  const apiKey = req.headers.apikey as string;

  if (!(start && dayjs(start).isValid()) || !(end && dayjs(end).isValid()))
    return res.status(400).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/slots",
      error: {
        code: "BadRequestException",
        message: "Missing required parameters.",
        details: {
          message: "Missing required parameters.",
          error: "Bad Request",
          statusCode: 400,
        },
      },
    });

  const authenticated = await checkApiKey(apiKey);

  if (!authenticated)
    return res.status(401).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/slots",
      error: {
        code: "UnauthorizedException",
        message: "Invalid Access Token.",
        details: {
          message: "Invalid Access Token.",
          error: "Unauthorized",
          statusCode: 401,
        },
      },
    });

  const query = {
    start,
    end,
    organizationSlug,
    username,
    eventTypeSlug,
    eventTypeId,
    usernames,
    slotFormat,
    duration: parseInt(duration || "0", 10),
    timeZone,
  };

  const queryTransformed = await transformGetSlotsQuery(query as any);

  const availableSlots: GetAvailableSlots = await getAvailableSlots({
    input: {
      ...queryTransformed,
    },
    ctx: {},
  });

  const formatted = await getFormattedAvailableSlots(
    availableSlots,
    queryTransformed.eventTypeId,
    queryTransformed.duration,
    slotFormat,
    queryTransformed.timeZone
  );

  return res.status(200).json({
    status: "success",
    data: formatted,
    error: {},
  });
}
