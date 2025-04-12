import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "short-uuid";
import { z } from "zod";

import { checkApiKey } from "@calcom/app-store/check-api-key";
import dayjs from "@calcom/dayjs";
import { defaultHandler, defaultResponder } from "@calcom/lib/server";
import type { ReserveSlotInput_2024_09_04, ReserveSlotOutput_2024_09_04 } from "@calcom/platform-types";
import type { EventType } from "@calcom/prisma/client";
import type { SelectedSlots } from "@calcom/prisma/client";

// Apply plugins
dayjs.extend(utc);
dayjs.extend(duration);

const DEFAULT_RESERVATION_DURATION = 5;

const eventTypeMetadataSchema = z.object({
  multipleDuration: z.number().array().optional(),
});

const getReservationSlotCreated = (
  slot: SelectedSlots,
  reservationDuration: number
): ReserveSlotOutput_2024_09_04 => {
  return {
    eventTypeId: slot.eventTypeId,
    slotStart: dayjs.utc(slot.slotUtcStartDate).toISOString() || "unknown-slot-start",
    slotEnd: dayjs.utc(slot.slotUtcEndDate).toISOString() || "unknown-slot-end",
    slotDuration: dayjs.utc(slot.slotUtcEndDate).diff(dayjs.utc(slot.slotUtcStartDate), "minute"),
    reservationDuration,
    reservationUid: slot.uid,
    reservationUntil: dayjs.utc(slot.releaseAt).toISOString() || "unknown-reserved-until",
  };
};

const haveMembershipsInCommon = async (firstUserId: number, secondUserId: number) => {
  const memberships = await membershipsInCommon(firstUserId, secondUserId);
  return memberships.length > 0;
};

const membershipsInCommon = async (firstUserId: number, secondUserId: number) => {
  const prisma = (await import("@calcom/prisma")).default;

  const firstUserMemberships = await prisma.membership.findMany({
    where: {
      userId: firstUserId,
    },
  });
  const secondUserMemberships = await prisma.membership.findMany({
    where: {
      userId: secondUserId,
    },
  });

  return firstUserMemberships
    .filter((firstUserMembership) =>
      secondUserMemberships.some(
        (secondUserMembership) => secondUserMembership.teamId === firstUserMembership.teamId
      )
    )
    .filter((m) => m.accepted);
};

const handleCanSpecifyCustomReservationDuration = async (authUserId: number, eventType: EventType) => {
  if (eventType.userId)
    return await canSpecifyCustomReservationDurationIndividualEvent(authUserId, eventType.userId);

  if (eventType.teamId)
    return await canSpecifyCustomReservationDurationTeamEvent(authUserId, eventType.teamId);

  return false;
};

const canSpecifyCustomReservationDurationIndividualEvent = async (
  authUserId: number,
  eventTypeOwnerId: number
) => {
  if (authUserId === eventTypeOwnerId) return true;
  if (await haveMembershipsInCommon(authUserId, eventTypeOwnerId)) return true;
  return false;
};

const canSpecifyCustomReservationDurationTeamEvent = async (authUserId: number, teamId: number) => {
  const prisma = (await import("@calcom/prisma")).default;

  const teamMembership = await prisma.membership.findUnique({
    where: {
      userId_teamId: {
        userId: authUserId,
        teamId: teamId,
      },
    },
  });

  const hasAcceptedTeamMembership = !!teamMembership?.accepted;
  if (hasAcceptedTeamMembership) return true;

  const team = await prisma.team.findUnique({
    where: {
      id: teamId,
    },
  });

  if (!team?.parentId) {
    return false;
  }

  const orgMembership = await prisma.membership.findUnique({
    where: {
      userId_teamId: {
        userId: authUserId,
        teamId: team.parentId,
      },
    },
  });
  const hasAcceptedOrgMembership = !!orgMembership?.accepted;
  return hasAcceptedOrgMembership;
};

const reserveSlot = async (input: ReserveSlotInput_2024_09_04, authUserId?: number) => {
  const prisma = (await import("@calcom/prisma")).default;

  const eventType = await prisma.eventType.findUnique({
    where: { id: input.eventTypeId },
    include: { hosts: true },
  });
  if (!eventType) {
    throw new Error(`Event Type with ID=${input.eventTypeId} not found`);
  }

  if (input.reservationDuration && authUserId) {
    const canSpecifyCustomReservationDuration = await handleCanSpecifyCustomReservationDuration(
      authUserId,
      eventType
    );
    if (!canSpecifyCustomReservationDuration) {
      throw new Error(
        "authenticated user is not owner of event type, does not have memberships in common with owner of the event type, nor does belong to event type's team or org."
      );
    }
  }

  const startDate = dayjs.utc(input.slotStart);
  if (!startDate.isValid) {
    throw new Error("Invalid start date");
  }

  const metadata = eventTypeMetadataSchema.parse(eventType);
  if (
    input.slotDuration &&
    metadata.multipleDuration &&
    !metadata.multipleDuration.includes(input.slotDuration)
  ) {
    throw new Error(
      `Provided 'slotDuration' is not one of the possible lengths for the event type. The possible lengths for this variable length event type are: ${metadata.multipleDuration.join(
        ", "
      )}`
    );
  }

  const endDate = startDate.add(input.slotDuration ?? eventType.length, "minutes");
  if (!endDate.isValid) {
    throw new Error("Invalid end date");
  }

  const booking = await prisma.booking.findFirst({
    where: { eventTypeId: input.eventTypeId, startTime: startDate.toDate() },
    select: { attendees: true },
  });

  if (eventType.seatsPerTimeSlot) {
    const attendeesCount = booking?.attendees?.length;
    if (attendeesCount) {
      const seatsLeft = eventType.seatsPerTimeSlot - attendeesCount;
      if (seatsLeft < 1) {
        throw new Error(`Booking with id=${input.eventTypeId} at ${input.slotStart} has no more seats left.`);
      }
    }
  }

  const nonSeatedEventAlreadyBooked = !eventType.seatsPerTimeSlot && booking;
  if (nonSeatedEventAlreadyBooked) {
    throw new Error(`Can't reserve a slot if the event is already booked.`);
  }

  const reservationDuration = input.reservationDuration ?? DEFAULT_RESERVATION_DURATION;

  if (eventType.userId) {
    const uid = uuid();
    const reservationUntil = dayjs.utc().add(reservationDuration, "minute").toISOString();

    const slot = await prisma.selectedSlots.create({
      data: {
        uid,
        userId: eventType.userId,
        eventTypeId: eventType.id,
        slotUtcStartDate: startDate.toISOString(),
        slotUtcEndDate: endDate.toISOString(),
        releaseAt: reservationUntil,
        isSeat: eventType.seatsPerTimeSlot !== null,
      },
    });

    return getReservationSlotCreated(slot, reservationDuration);
  }

  const host = eventType.hosts[0];
  if (!host) {
    throw new Error("Cannot reserve a slot for a team event without any hosts");
  }

  const uid = uuid();
  const reservationUntil = dayjs.utc().add(reservationDuration, "minute").toISOString();

  const slot = await prisma.selectedSlots.create({
    data: {
      uid,
      userId: host.userId,
      eventTypeId: eventType.id,
      slotUtcStartDate: startDate.toISOString(),
      slotUtcEndDate: endDate.toISOString(),
      releaseAt: reservationUntil,
      isSeat: eventType.seatsPerTimeSlot !== null,
    },
  });

  return getReservationSlotCreated(slot, reservationDuration);
};

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const eventTypeId = req.query.eventTypeId as string;
  const slotStart = req.query.slotStart as string;
  const slotDuration = req.query.slotDuration as string;
  const reservationDuration = req.query.reservationDuration as string;

  const apiKey = req.headers.apikey as string;

  if (!eventTypeId || !(slotStart && dayjs(slotStart).isValid()))
    return res.status(400).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/slots/reservations",
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
      path: "/v2/slots/reservations",
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

  const reservedSlotBody = {
    eventTypeId: parseInt(eventTypeId, 10),
    slotStart,
    ...(reservationDuration && { reservationDuration: parseInt(reservationDuration, 10) }),
    ...(slotDuration && { slotDuration: parseInt(slotDuration, 10) }),
  };

  const reservedSlot = reserveSlot(reservedSlotBody);

  return res.status(200).json({
    status: "success",
    data: reservedSlot,
    error: {},
  });
}

export default defaultHandler({
  POST: Promise.resolve({ default: defaultResponder(handler) }),
});
