import { PrismaReadService } from "@/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "@/modules/prisma/prisma-write.service";
import { Injectable } from "@nestjs/common";

// It ensures that we work on userLevel calendars only
const ensureUserLevelWhere = {
  eventTypeId: null,
};

@Injectable()
export class SelectedCalendarsRepository {
  constructor(private readonly dbRead: PrismaReadService, private readonly dbWrite: PrismaWriteService) {}

  async upsertSelectedCalendar(
    externalId: string,
    credentialId: number,
    userId: number,
    integration: string
  ) {
    // Why we can't use .upsert here, see server/repository/selectedCalendar.ts#upsert
    const existingUserSelectedCalendar = await this.getUserSelectedCalendar(userId, integration, externalId);
    const data = {
      userId,
      externalId,
      credentialId,
      integration,
      ...ensureUserLevelWhere,
    };

    if (existingUserSelectedCalendar) {
      return this.dbWrite.prisma.selectedCalendar.update({
        where: {
          id: existingUserSelectedCalendar.id,
        },
        data,
      });
    }

    return this.dbWrite.prisma.selectedCalendar.create({
      data,
    });
  }

  getUserSelectedCalendars(userId: number) {
    // It would be unique result but we can't use .findUnique here because of eventTypeId being nullable
    return this.dbRead.prisma.selectedCalendar.findMany({
      where: {
        userId,
        ...ensureUserLevelWhere,
      },
    });
  }

  getUserSelectedCalendar(userId: number, integration: string, externalId: string) {
    return this.dbRead.prisma.selectedCalendar.findUnique({
      where: {
        userId_integration_externalId: {
          userId,
          externalId,
          integration,
        },
      },
    });
  }

  async addUserSelectedCalendar(
    userId: number,
    integration: string,
    externalId: string,
    credentialId: number
  ) {
    return await this.dbWrite.prisma.selectedCalendar.upsert({
      where: {
        userId_integration_externalId: {
          userId,
          integration,
          externalId,
        },
      },
      create: {
        userId,
        integration,
        externalId,
        credentialId,
      },
      // already exists
      update: {},
    });
  }

  async removeUserSelectedCalendar(userId: number, integration: string, externalId: string) {
    return await this.dbWrite.prisma.selectedCalendar.delete({
      where: {
        userId_integration_externalId: {
          userId,
          externalId,
          integration,
        },
      },
    });
  }
}
