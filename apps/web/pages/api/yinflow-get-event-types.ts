import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";

const getUserIds = async (username?: string, usernames?: string): Promise<string[] | null> => {
  if (!username && !usernames) return null;

  const usernamesArray = usernames.split(",").map((user) => user.trim());

  const prisma = (await import("@calcom/prisma")).default;

  const query = usernames ? usernamesArray : [username];

  const userIds = await prisma.user.findMany({
    where: {
      username: {
        in: query,
      },
    },
    select: {
      id: true,
    },
  });

  return userIds.map((user) => user.id);
};

const getTeamId = async (orgSlug?: string, orgId?: string): Promise<string | null> => {
  if (!orgSlug && !orgId) return null;

  const prisma = (await import("@calcom/prisma")).default;

  const team = await prisma.team.findUnique({
    where: {
      OR: [{ id: parseInt(orgId || 0, 10) }, { slug: orgSlug }],
    },
    select: {
      id: true,
    },
  });

  return team ? team.id : null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const prisma = (await import("@calcom/prisma")).default;

  const apiKey = req.headers.apikey as string;

  const username = req.query.username as string;
  const usernames = req.query.usernames as string;
  const eventSlug = req.query.eventSlug as string;
  const orgSlug = req.query.orgSlug as string;
  const orgId = req.query.orgId as string;

  const authenticated = await checkApiKey(apiKey);

  if (!authenticated)
    return res.status(401).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/event-types",
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

  const userIds = await getUserIds(username, usernames);
  const teamId = await getTeamId(orgSlug, orgId);

  if (
    (eventSlug && !usernames && !username) ||
    (!eventSlug && !usernames && !username && !orgSlug && !orgId) ||
    (!userIds && !teamId)
  )
    return res.status(400).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/event-types",
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

  const query = {
    where: {
      ...(teamId && { teamId }),
      ...(eventSlug && { slug: eventSlug }),
      ...(userIds && { userId: { in: userIds } }),
    },
  };

  const eventTypes = await prisma.eventType.findMany(query);

  const formattedEventTypes = eventTypes.map((eventType) => ({
    id: eventType.id,
    lengthInMinutes: eventType.length,
    // lengthInMinutesOptions: [15, 30, 60],
    title: eventType.title,
    slug: eventType.slug,
    description: eventType.description,
    locations: eventType.locations,
    bookingFields: eventType.locations,
    disableGuests: eventType.disableGuests,
    slotInterval: eventType.slotInterval,
    minimumBookingNotice: eventType.minimumBookingNotice,
    beforeEventBuffer: eventType.beforeEventBuffer,
    afterEventBuffer: eventType.afterEventBuffer,
    // recurrence: {
    //   interval: 10,
    //   occurrences: 10,
    //   frequency: "yearly",
    // },
    metadata: eventType.metadata,
    price: eventType.price,
    currency: eventType.currency,
    lockTimeZoneToggleOnBookingPage: eventType.lockTimeZoneToggleOnBookingPage,
    seatsPerTimeSlot: eventType.seatsPerTimeSlot,
    forwardParamsSuccessRedirect: eventType.forwardParamsSuccessRedirect,
    successRedirectUrl: eventType.successRedirectUrl,
    isInstantEvent: eventType.isInstantEvent,
    seatsShowAvailabilityCount: eventType.seatsShowAvailabilityCount,
    scheduleId: eventType.scheduleId,
    // bookingLimitsCount: {},
    onlyShowFirstAvailableSlot: eventType.onlyShowFirstAvailableSlot,
    // bookingLimitsDuration: {},
    // bookingWindow: [
    //   {
    //     type: "businessDays",
    //     value: 5,
    //     rolling: true,
    //   },
    // ],
    // bookerLayouts: {
    //   defaultLayout: "month",
    //   enabledLayouts: ["month"],
    // },
    // confirmationPolicy: {},
    requiresBookerEmailVerification: eventType.requiresBookerEmailVerification,
    hideCalendarNotes: eventType.hideCalendarNotes,
    // color: {
    //   lightThemeHex: "#292929",
    //   darkThemeHex: "#fafafa",
    // },
    // seats: {
    //   seatsPerTimeSlot: 4,
    //   showAttendeeInfo: true,
    //   showAvailabilityCount: true,
    // },
    offsetStart: eventType.offsetStart,
    // customName: "<string>",
    // destinationCalendar: {
    //   integration: "<string>",
    //   externalId: "<string>",
    // },
    // useDestinationCalendarEmail: true,
    hideCalendarEventDetails: eventType.hideCalendarEventDetails,
    ownerId: eventType.owner,
    // users: ["<string>"],
  }));

  return res.status(200).json({
    status: "success",
    data: formattedEventTypes,
  });
}
