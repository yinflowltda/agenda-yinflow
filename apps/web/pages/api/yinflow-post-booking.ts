import type { NextApiRequest } from "next";

import handleNewBooking from "@calcom/features/bookings/lib/handleNewBooking";
import { defaultHandler, defaultResponder } from "@calcom/lib/server";

async function handler(req: NextApiRequest) {
  return await handleNewBooking(req);
}

export default defaultHandler({
  POST: Promise.resolve({ default: defaultResponder(handler) }),
});
