import { CreateTeamEventTypeOutput } from "src/modules/organizations/controllers/event-types/outputs/teams/create-team-event-type.output";
import { DeleteTeamEventTypeOutput } from "src/modules/organizations/controllers/event-types/outputs/teams/delete-team-event-type.output";
import { GetTeamEventTypeOutput } from "src/modules/organizations/controllers/event-types/outputs/teams/get-team-event-type.output";
import { GetTeamEventTypesOutput } from "src/modules/organizations/controllers/event-types/outputs/teams/get-team-event-types.output";
import { UpdateTeamEventTypeOutput } from "src/modules/organizations/controllers/event-types/outputs/teams/update-team-event-type.output";
import { OrganizationsEventTypesService } from "src/modules/organizations/services/event-types/organizations-event-types.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import {
  CreateTeamEventTypeInput_2024_06_14,
  GetTeamEventTypesQuery_2024_06_14,
  SkipTakePagination,
  UpdateTeamEventTypeInput_2024_06_14,
} from "@calcom/platform-types";

export declare class OrganizationsEventTypesController {
  private readonly organizationsEventTypesService;
  constructor(organizationsEventTypesService: OrganizationsEventTypesService);
  createTeamEventType(
    user: UserWithProfile,
    teamId: number,
    orgId: number,
    bodyEventType: CreateTeamEventTypeInput_2024_06_14
  ): Promise<CreateTeamEventTypeOutput>;
  getTeamEventType(teamId: number, eventTypeId: number): Promise<GetTeamEventTypeOutput>;
  getTeamEventTypes(
    teamId: number,
    queryParams: GetTeamEventTypesQuery_2024_06_14
  ): Promise<GetTeamEventTypesOutput>;
  getTeamsEventTypes(orgId: number, queryParams: SkipTakePagination): Promise<GetTeamEventTypesOutput>;
  updateTeamEventType(
    teamId: number,
    eventTypeId: number,
    user: UserWithProfile,
    bodyEventType: UpdateTeamEventTypeInput_2024_06_14
  ): Promise<UpdateTeamEventTypeOutput>;
  deleteTeamEventType(teamId: number, eventTypeId: number): Promise<DeleteTeamEventTypeOutput>;
}
