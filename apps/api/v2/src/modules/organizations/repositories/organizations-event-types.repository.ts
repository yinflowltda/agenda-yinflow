import { Injectable } from "@nestjs/common";
import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";

@Injectable()
export class OrganizationsEventTypesRepository {
  constructor(private readonly dbRead: PrismaReadService, private readonly dbWrite: PrismaWriteService) {}

  async getTeamEventType(teamId: number, eventTypeId: number) {
    return this.dbRead.prisma.eventType.findUnique({
      where: {
        id: eventTypeId,
        teamId,
      },
      include: { users: true, schedule: true, hosts: true },
    });
  }

  async getTeamEventTypeBySlug(teamId: number, eventTypeSlug: string) {
    return this.dbRead.prisma.eventType.findUnique({
      where: {
        teamId_slug: {
          teamId,
          slug: eventTypeSlug,
        },
      },
      include: { users: true, schedule: true, hosts: true },
    });
  }

  async getTeamEventTypes(teamId: number) {
    return this.dbRead.prisma.eventType.findMany({
      where: {
        teamId,
      },
      include: { users: true, schedule: true, hosts: true },
    });
  }

  async getEventTypeById(eventTypeId: number) {
    return this.dbRead.prisma.eventType.findUnique({
      where: { id: eventTypeId },
      include: { users: true, schedule: true, hosts: true },
    });
  }

  async getEventTypeChildren(eventTypeId: number) {
    return this.dbRead.prisma.eventType.findMany({
      where: { parentId: eventTypeId },
      include: { users: true, schedule: true, hosts: true },
    });
  }

  async getTeamsEventTypes(orgId: number, skip: number, take: number) {
    return this.dbRead.prisma.eventType.findMany({
      where: {
        team: {
          parentId: orgId,
        },
      },
      skip,
      take,
      include: { users: true, schedule: true, hosts: true },
    });
  }

  async getEventTypeByIdWithChildren(eventTypeId: number) {
    return this.dbRead.prisma.eventType.findUnique({
      where: { id: eventTypeId },
      include: { children: true },
    });
  }
}
