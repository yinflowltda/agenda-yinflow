import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { NextApiRequest } from "next";

import dayjs from "@calcom/dayjs";
import handleNewBooking from "@calcom/features/bookings/lib/handleNewBooking";
import { defaultHandler, defaultResponder } from "@calcom/lib/server";
import type {
  CreateBookingInput_2024_08_13,
  CreateInstantBookingInput_2024_08_13,
} from "@calcom/platform-types";
import type { EventType } from "@calcom/prisma/client";
import { EventTypeMetaDataSchema } from "@calcom/prisma/zod-utils";

interface OAuthRequestParams {
  platformClientId: string;
  platformRescheduleUrl: string;
  platformCancelUrl: string;
  platformBookingUrl: string;
  platformBookingLocation?: string;
  arePlatformEmailsEnabled: boolean;
}

interface BookingRequest extends NextApiRequest, OAuthRequestParams {
  userId: number;
}

interface BookingRequestBody extends CreateBookingInput_2024_08_13 {
  userId: number;
}
interface BookingInstantRequestBody extends CreateInstantBookingInput_2024_08_13 {
  userId: number;
}

// Apply plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const CreationSource = {
  API_V2: "API_V2",
};

const transformInputCreateBooking = async (inputBooking: CreateBookingInput_2024_08_13) => {
  const prisma = (await import("@calcom/prisma")).default;

  const eventType = await prisma.eventType.findUnique({
    where: {
      id: inputBooking.eventTypeId,
    },
  });

  if (!eventType) {
    throw new Error(`Event type with id=${inputBooking.eventTypeId} not found`);
  }

  validateBookingLengthInMinutes(inputBooking, eventType);

  const lengthInMinutes = inputBooking.lengthInMinutes ?? eventType.length;
  const startTime = dayjs.utc(inputBooking.start).tz(inputBooking.attendee.timeZone);
  const endTime = startTime.add(lengthInMinutes, "minutes");

  const guests = inputBooking.guests;
  const attendeeEmail = inputBooking.attendee.email;

  return {
    start: startTime.toISOString(),
    end: endTime.toISOString(),
    eventTypeId: inputBooking.eventTypeId,
    timeZone: inputBooking.attendee.timeZone,
    language: inputBooking.attendee.language || "en",
    metadata: inputBooking.metadata || {},
    hasHashedBookingLink: false,
    guests,
    responses: {
      ...(inputBooking.bookingFieldsResponses || {}),
      name: inputBooking.attendee.name,
      email: attendeeEmail ?? "",
      attendeePhoneNumber: inputBooking.attendee.phoneNumber,
      guests,
    },
  };
};

const validateBookingLengthInMinutes = (
  inputBooking: CreateBookingInput_2024_08_13,
  eventType: EventType
) => {
  const eventTypeMetadata = EventTypeMetaDataSchema.parse(eventType.metadata);
  if (inputBooking.lengthInMinutes && !eventTypeMetadata?.multipleDuration) {
    throw new Error(
      "Can't specify 'lengthInMinutes' because event type does not have multiple possible lengths. Please, remove the 'lengthInMinutes' field from the request."
    );
  }
  if (
    inputBooking.lengthInMinutes &&
    !eventTypeMetadata?.multipleDuration?.includes(inputBooking.lengthInMinutes)
  ) {
    throw new Error(
      `Provided 'lengthInMinutes' is not one of the possible lengths for the event type. The possible lengths are: ${eventTypeMetadata?.multipleDuration?.join(
        ", "
      )}`
    );
  }
};

const createBookingRequest = async (
  request: NextApiRequest,
  body: BookingRequestBody | BookingInstantRequestBody
): Promise<BookingRequest> => {
  const bodyTransformed = await transformInputCreateBooking(body);

  const newRequest = { ...request };
  const userId = body.userId;

  const location = body.location || body.meetingUrl;

  Object.assign(newRequest, { userId, platformBookingLocation: location });
  newRequest.body = { ...bodyTransformed, noEmail: false, creationSource: CreationSource.API_V2 };

  return newRequest as unknown as BookingRequest;
};

async function handler(req: NextApiRequest) {
  const newRequest = await createBookingRequest(req, req.body as BookingRequestBody);
  return await handleNewBooking(newRequest);
}

export default defaultHandler({
  POST: Promise.resolve({ default: defaultResponder(handler) }),
});
