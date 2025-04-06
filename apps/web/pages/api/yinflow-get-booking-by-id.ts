import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const prisma = (await import("@calcom/prisma")).default;

  const uid = req.query.uid as string;
  const apiKey = req.headers.apiKey as string;

  const authenticated = await checkApiKey(apiKey);

  // if (!authenticated)
  //   return res.status(401).json({
  //     status: "error",
  //     headers: req.headers.apiKey,
  //     authenticated,
  //     timestamp: new Date().toISOString(),
  //     path: "/v2/bookings/:bookingUid",
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

  const booking = await prisma.booking.findUnique({ where: { uid } });

  if (!booking)
    return res.status(404).json({
      status: "error",
      timestamp: new Date().toISOString(),
      path: "/v2/bookings/:bookingUid",
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
    data: booking,
    error: {},
  });
}
