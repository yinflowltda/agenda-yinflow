import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";

const getUserIds = async (username?: string, usernames?: string): Promise<number[] | null> => {
  if (!username && !usernames) return null;

  const usernamesArray = usernames && usernames.split(",").map((user) => user.trim());

  const prisma = (await import("@calcom/prisma")).default;

  const query = (usernames ? usernamesArray : [username]) as string[];

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

const getTeamId = async (orgSlug?: string, orgId?: string): Promise<number | null> => {
  if (!orgSlug && !orgId) return null;

  const prisma = (await import("@calcom/prisma")).default;

  const team = orgSlug
    ? await prisma.team.findFirst({
        where: {
          slug: orgSlug,
        },
      })
    : { id: parseInt(orgId || "0", 10) };

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

  return res.status(200).json({
    status: "success",
    data: eventTypes,
  });
}
