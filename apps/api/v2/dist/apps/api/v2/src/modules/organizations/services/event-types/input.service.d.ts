import { InputEventTypesService_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/services/input-event-types.service";
import { OrganizationsEventTypesRepository } from "src/modules/organizations/repositories/organizations-event-types.repository";
import { OrganizationsTeamsRepository } from "src/modules/organizations/repositories/organizations-teams.repository";
import { UsersRepository } from "src/modules/users/users.repository";

import {
  CreateTeamEventTypeInput_2024_06_14,
  UpdateTeamEventTypeInput_2024_06_14,
} from "@calcom/platform-types";
import { SchedulingType } from "@calcom/prisma/client";

export declare class InputOrganizationsEventTypesService {
  private readonly inputEventTypesService;
  private readonly organizationsTeamsRepository;
  private readonly usersRepository;
  private readonly orgEventTypesRepository;
  constructor(
    inputEventTypesService: InputEventTypesService_2024_06_14,
    organizationsTeamsRepository: OrganizationsTeamsRepository,
    usersRepository: UsersRepository,
    orgEventTypesRepository: OrganizationsEventTypesRepository
  );
  transformInputCreateTeamEventType(
    teamId: number,
    inputEventType: CreateTeamEventTypeInput_2024_06_14
  ): Promise<any>;
  transformInputUpdateTeamEventType(
    eventTypeId: number,
    teamId: number,
    inputEventType: UpdateTeamEventTypeInput_2024_06_14
  ): Promise<any>;
  getChildEventTypesForManagedEventType(
    eventTypeId: number,
    inputEventType: UpdateTeamEventTypeInput_2024_06_14,
    teamId: number
  ): Promise<
    | {
        hidden: boolean;
        owner: {
          id: number;
          name: string;
          email: string;
          eventTypeSlugs: string[];
        };
      }[]
    | undefined
  >;
  getOwnersIdsForManagedEventType(
    teamId: number,
    inputEventType: UpdateTeamEventTypeInput_2024_06_14,
    eventType: {
      children: {
        userId: number | null;
      }[];
    }
  ): Promise<number[]>;
  getOwnersForManagedEventType(userIds: number[]): Promise<
    {
      id: number;
      name: string;
      email: string;
      eventTypeSlugs: string[];
    }[]
  >;
  getAllTeamMembers(
    teamId: number,
    schedulingType: SchedulingType | null
  ): Promise<
    {
      userId: number;
      isFixed: boolean;
      priority: number;
    }[]
  >;
  transformInputHosts(
    inputHosts: CreateTeamEventTypeInput_2024_06_14["hosts"] | undefined,
    schedulingType: SchedulingType | null
  ):
    | {
        userId: number;
        isFixed: boolean;
        priority: number;
      }[]
    | undefined;
}
