import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";
import { defaultHandler, defaultResponder } from "@calcom/lib/server";

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const prisma = (await import("@calcom/prisma")).default;

  const attendees = req.query.attendees as string;
  const uid = req.query.uid as string;

  const apiKey = req.headers.apikey as string;

  const authenticated = await checkApiKey(apiKey);

  if (!authenticated)
    return res.status(401).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/bookings/:bookingUid/mark-absent",
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

  const updatedBooking = await prisma.booking.update({
    where: {
      uid: uid,
    },
    data: {
      attendees: JSON.parse(attendees),
    },
  });

  if (!updatedBooking)
    return res.status(404).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/bookings/:bookingUid/mark-absent",
      error: {
        code: "NotFoundException",
        message: "Booking not found.",
        details: {
          message: "Booking not found.",
          error: "Not Found",
          statusCode: 404,
        },
      },
    });

  return res.status(200).json({
    status: "success",
    data: updatedBooking,
    error: {},
  });
}

export default defaultHandler({
  POST: Promise.resolve({ default: defaultResponder(handler) }),
});
