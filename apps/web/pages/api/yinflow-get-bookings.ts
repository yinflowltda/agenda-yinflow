import type { NextApiRequest, NextApiResponse } from "next";

import { checkApiKey } from "@calcom/app-store/check-api-key";
import dayjs from "@calcom/dayjs";
import type { BookingStatus } from "@calcom/prisma/enums";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const prisma = (await import("@calcom/prisma")).default;

  const status = req.query.status as BookingStatus;
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

  const bookings = await prisma.booking.findMany({
    where: {
      status,
    },
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
