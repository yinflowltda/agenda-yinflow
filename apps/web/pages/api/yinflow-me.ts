import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";

// import { getServerSession } from "@calcom/features/auth/lib/getServerSession";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const prisma = (await import("@calcom/prisma")).default;

  const apiKey = req.headers.apikey as string;
  const token = req.headers["x-vercel-sc-headers"] as string;

  const id = req.query.id as string;

  const authenticated = await checkApiKey(apiKey);

  // if (!authenticated)
  return res.status(401).json({
    status: "error",
    authenticated: { apiKey, token },
    timestamp: new Date().toISOString(),
    path: "/v2/me",
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

  const user = await prisma.user.findUnique({ where: { id: parseInt(id, 10) } });

  if (!user)
    return res.status(404).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/me",
      error: {
        code: "NotFoundException",
        message: "User not found.",
        details: {
          message: "User not found.",
          error: "Not Found",
          statusCode: 404,
        },
      },
    });

  const organization =
    user.organizationId && (await prisma.team.findUnique({ where: { id: user.organizationId } }));

  return res.status(200).json({
    status: "success",
    data: {
      id: user.id,
      username: user.username,
      email: user.email,
      timeFormat: user.timeFormat,
      defaultScheduleId: user.defaultScheduleId,
      weekStart: user.weekStart,
      timeZone: user.timeZone,
      organizationId: organization && organization.id,
      organization: organization && {
        isPlatform: organization.isPlatform,
        id: organization.id,
      },
    },
  });
}
