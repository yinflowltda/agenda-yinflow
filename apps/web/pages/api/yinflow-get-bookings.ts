import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";
import dayjs from "@calcom/dayjs";
import type { BookingStatus } from "@calcom/prisma/enums";

const THREE_HOURS_IN_MINUTES = 3 * 60;

const getTeamIds = (teamId?: string, teamIds?: string): number[] | null => {
  const teamIdsArray = teamIds && teamIds.split(",").map((team) => team.trim());

  if (teamIdsArray) return teamIdsArray.map((team) => parseInt(team, 10));
  if (teamId) return [parseInt(teamId, 10)];

  return null;
};

const getEventTypeIds = (eventTypeId?: string, eventTypeIds?: string): number[] | null => {
  const eventTypeIdsArray = eventTypeIds && eventTypeIds.split(",").map((eventType) => eventType.trim());

  if (eventTypeIdsArray) return eventTypeIdsArray.map((eventType) => parseInt(eventType, 10));
  if (eventTypeId) return [parseInt(eventTypeId, 10)];

  return null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const prisma = (await import("@calcom/prisma")).default;

  const status = req.query.status as string;
  const attendeeEmail = req.query.attendeeEmail as string;
  const attendeeName = req.query.attendeeName as string;
  const eventTypeId = req.query.eventTypeId as string;
  const eventTypeIds = req.query.eventTypeIds as string;
  const teamId = req.query.teamId as string;
  const teamIds = req.query.teamIds as string;
  const afterStart = req.query.afterStart as string;
  const beforeEnd = req.query.beforeEnd as string;
  const afterCreateAt = req.query.afterCreateAt as string;
  const beforeCreateAt = req.query.beforeCreateAt as string;
  const afterUpdateAt = req.query.afterUpdateAt as string;
  const beforeUpdateAt = req.query.beforeUpdateAt as string;

  const sortEnd = req.query.sortEnd as "asc" | "desc";
  const sortStart = req.query.sortStart as "asc" | "desc";
  const sortCreated = req.query.sortCreated as "asc" | "desc";
  const sortUpdated = req.query.sortUpdated as "asc" | "desc";
  const take = req.query.take as string;
  const skip = req.query.skip as string;

  const apiKey = req.headers.apiKey as string;

  const authenticated = await checkApiKey(apiKey);

  // if (!authenticated)
  //   return res.status(401).json({
  //     status: "error",
  //     timestamp: new Date().toISOString(),
  //     path: "/v2/bookings",
  //     error: {
  //       code: "UnauthorizedException",
  //       message: "Invalid Access Token.",
  //       details: {
  //         message: "Invalid Access Token.",
  //         error: "Unauthorized",
  //         statusCode: 401,
  //       },
  //     },
  //   });

  const formattedTeamIds = getTeamIds(teamId, teamIds);
  const formattedEventTypeIds = getEventTypeIds(eventTypeId, eventTypeIds);

  const bookings = await prisma.booking.findMany({
    where: {
      ...(status && { status: status.toUpperCase() as BookingStatus }),
      // ...(eventTypeId && { eventTypeId }),
      // ...(formattedTeamIds && { teamId: { in: formattedTeamIds } }),
      ...(afterStart && { startTime: { gt: dayjs(afterStart).subtract(THREE_HOURS_IN_MINUTES).toDate() } }),
      ...(beforeEnd && { endTime: { lt: dayjs(beforeEnd).subtract(THREE_HOURS_IN_MINUTES).toDate() } }),
      ...(afterCreateAt && {
        createdAt: { gt: dayjs(afterCreateAt).subtract(THREE_HOURS_IN_MINUTES).toDate() },
      }),
      ...(beforeCreateAt && {
        createdAt: { lt: dayjs(beforeCreateAt).subtract(THREE_HOURS_IN_MINUTES).toDate() },
      }),
      ...(afterUpdateAt && {
        updatedAt: { gt: dayjs(afterUpdateAt).subtract(THREE_HOURS_IN_MINUTES).toDate() },
      }),
      ...(beforeUpdateAt && {
        updatedAt: { lt: dayjs(beforeUpdateAt).subtract(THREE_HOURS_IN_MINUTES).toDate() },
      }),
    },
    orderBy: {
      ...(sortEnd && { endTime: sortEnd }),
      ...(sortStart && { endTime: sortStart }),
      ...(sortCreated && { endTime: sortCreated }),
      ...(sortUpdated && { endTime: sortUpdated }),
    },
    ...(skip && { skip: parseInt(skip, 10) }),
    ...(take && { take: parseInt(take, 10) }),
  });

  const formattedBookings = bookings.map((booking) => {
    const duration = booking.endTime
      ? dayjs(booking.endTime).diff(dayjs(booking.startTime), "minutes")
      : null;
    return {
      id: booking.id,
      uid: booking.uid,
      title: booking.title,
      description: booking.description || null,
      // hosts: [
      //   {
      //     id: 1,
      //     name: "Jane Doe",
      //     email: "jane100@example.com",
      //     username: "jane100",
      //     timeZone: "America/Los_Angeles",
      //   },
      // ],
      status: booking.status,
      cancellationReason: booking.cancellationReason,
      // cancelledByEmail: booking.cancelledByEmail,
      // reschedulingReason: booking.reschedulingReason,
      // rescheduledByEmail: booking.rescheduledByEmail,
      // rescheduledFromUid: "previous_uid_123",
      start: booking.startTime,
      end: booking.endTime,
      duration,
      // eventTypeId: eventType ? eventType.id : null,
      // eventType: eventType
      //   ? {
      //       id: eventType.id,
      //       slug: eventType.slug,
      //     }
      //   : null,
      // meetingUrl: "https://example.com/recurring-meeting",
      location: booking.location,
      // absentHost: booking.absentHost,
      createdAt: booking.createdAt,
      updatedAt: booking.updatedAt,
      metadata: booking.metadata,
      rating: booking.rating,
      // attendees: booking.attendees,
      // guests: ["guest1@example.com", "guest2@example.com"],
      // bookingFieldsResponses: {
      //   customField: "customValue",
      // },
    };
  });

  return res.status(200).json({
    status: "success",
    data: formattedBookings,
    error: {},
  });
}
