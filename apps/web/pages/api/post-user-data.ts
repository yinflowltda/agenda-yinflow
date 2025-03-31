import type { NextApiRequest } from "next";

import { getServerSession } from "@calcom/features/auth/lib/getServerSession";
import { defaultResponder, defaultHandler } from "@calcom/lib/server";

const DIRECTUS_BASE_URL = "https://painel.yinflow.life/flows/trigger/8f80566e-c262-40f1-a47e-bac429bdbf11";
const DIRECTUS_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN || "";

async function handler(req: NextApiRequest & { userId?: number }) {
  const session = await getServerSession({ req });
  /* To mimic API behavior and comply with types */
  req.userId = session?.user?.id || -1;
  const profilePicture = req.query.profilePicture as string;
  const bio = req.query.bio as string;
  const username = req.query.username as string;
  const timezone = req.query.timezone as string;
  const email = req.query.email as string;
  const id = req.query.id as string;

  try {
    const response = await fetch(DIRECTUS_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DIRECTUS_TOKEN}`,
      },
      body: JSON.stringify({
        profilePicture,
        bio,
        username,
        timezone,
        email,
        id,
      }),
    });

    return await response.json();
  } catch {
    throw new Error("Error fetching data to Directus");
  }
}

export default defaultHandler({
  GET: Promise.resolve({ default: defaultResponder(handler) }),
});
