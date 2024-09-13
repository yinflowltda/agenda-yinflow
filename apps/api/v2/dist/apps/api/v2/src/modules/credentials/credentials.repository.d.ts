import { Prisma } from "@prisma/client";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

import { APPS_TYPE_ID_MAPPING } from "@calcom/platform-constants";

export declare class CredentialsRepository {
  private readonly dbRead;
  private readonly dbWrite;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService);
  createAppCredential(
    type: keyof typeof APPS_TYPE_ID_MAPPING,
    key: Prisma.InputJsonValue,
    userId: number
  ): Promise<{
    id: number;
    type: string;
    key: Prisma.JsonValue;
    userId: number | null;
    teamId: number | null;
    appId: string | null;
    subscriptionId: string | null;
    paymentStatus: string | null;
    billingCycleStart: number | null;
    invalid: boolean | null;
  }>;
  getByTypeAndUserId(
    type: string,
    userId: number
  ): Prisma.Prisma__CredentialClient<
    {
      id: number;
      type: string;
      key: Prisma.JsonValue;
      userId: number | null;
      teamId: number | null;
      appId: string | null;
      subscriptionId: string | null;
      paymentStatus: string | null;
      billingCycleStart: number | null;
      invalid: boolean | null;
    } | null,
    null,
    import("@prisma/client/runtime/library").DefaultArgs
  >;
  getUserCredentialsByIds(
    userId: number,
    credentialIds: number[]
  ): Prisma.PrismaPromise<
    {
      type: string;
      id: number;
      userId: number | null;
      teamId: number | null;
      user: {
        email: string;
      } | null;
      appId: string | null;
      invalid: boolean | null;
      key: Prisma.JsonValue;
    }[]
  >;
}
export type CredentialsWithUserEmail = Awaited<
  ReturnType<typeof CredentialsRepository.prototype.getUserCredentialsByIds>
>;
