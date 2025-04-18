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

const getEventTypeIds = async (
  eventTypeId?: string,
  eventTypeIds?: string,
  teamIds?: number[] | null
): Promise<number[] | null> => {
  const prisma = (await import("@calcom/prisma")).default;

  const ids = [];

  if (teamIds) {
    const eventTypeIdsByTeamIds = await prisma.eventType.findMany({
      where: {
        teamId: { in: teamIds },
      },
      select: {
        id: true,
      },
    });

    ids.push(...eventTypeIdsByTeamIds.map(({ id }) => id));
  }

  const eventTypeIdsArray = eventTypeIds && eventTypeIds.split(",").map((eventType) => eventType.trim());

  if (eventTypeIdsArray) ids.push(...eventTypeIdsArray.map((eventType) => parseInt(eventType, 10)));
  if (eventTypeId) ids.push(parseInt(eventTypeId, 10));

  return ids.length
    ? ids.reduce(
        (acc, number) => (acc.find((item) => number === item) ? acc : [...acc, number]),
        [] as number[]
      )
    : null;
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
  const formattedEventTypeIds = await getEventTypeIds(eventTypeId, eventTypeIds, formattedTeamIds);

  const bookings = await prisma.booking.findMany({
    where: {
      ...(status && { status: status.toUpperCase() as BookingStatus }),
      ...(formattedEventTypeIds && { eventTypeId: { in: formattedEventTypeIds } }),
      ...(attendeeEmail && {
        attendees: { some: { email: attendeeEmail.trim() } },
      }),
      ...(attendeeName && {
        attendees: { some: { name: attendeeName.trim() } },
      }),
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

  return res.status(200).json({
    status: "success",
    data: bookings,
    error: {},
  });
}
