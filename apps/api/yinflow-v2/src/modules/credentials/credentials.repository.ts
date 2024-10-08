import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { APPS_TYPE_ID_MAPPING } from "@calcom/platform-constants";

@Injectable()
export class CredentialsRepository {
  // TODO: PrismaWriteService
  async createAppCredential(
    type: keyof typeof APPS_TYPE_ID_MAPPING,
    key: Prisma.InputJsonValue,
    userId: number
  ) {
    // const credential = await this.getByTypeAndUserId(type, userId);
    // return this.dbWrite.prisma.credential.upsert({
    //   create: {
    //     type,
    //     key,
    //     userId,
    //     appId: APPS_TYPE_ID_MAPPING[type],
    //   },
    //   update: {
    //     key,
    //     invalid: false,
    //   },
    //   where: {
    //     id: credential?.id ?? 0,
    //   },
    // });
  }
  // TODO: PrismaWriteService
  getByTypeAndUserId(type: string, userId: number) {
    // return this.dbWrite.prisma.credential.findFirst({ where: { type, userId } });
  }
  // TODO: PrismaReadService
  getUserCredentialsByIds(userId: number, credentialIds: number[]) {
    // return this.dbRead.prisma.credential.findMany({
    //   where: {
    //     id: {
    //       in: credentialIds,
    //     },
    //     userId: userId,
    //   },
    //   select: {
    //     id: true,
    //     type: true,
    //     key: true,
    //     userId: true,
    //     teamId: true,
    //     appId: true,
    //     invalid: true,
    //     user: {
    //       select: {
    //         email: true,
    //       },
    //     },
    //   },
    // });
  }
}

export type CredentialsWithUserEmail = Awaited<
  ReturnType<typeof CredentialsRepository.prototype.getUserCredentialsByIds>
>;
