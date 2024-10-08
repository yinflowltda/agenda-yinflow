import {
  Controller,
  UseGuards,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Delete,
  Patch,
  Post,
  Body,
  Headers,
} from "@nestjs/common";
import { ApiOperation, ApiTags as DocsTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";

import { SUCCESS_STATUS, X_CAL_CLIENT_ID } from "@calcom/platform-constants";
import { OrgTeamOutputDto } from "@calcom/platform-types";
import { SkipTakePagination } from "@calcom/platform-types";
import { Team } from "@calcom/prisma/client";

import { API_VERSIONS_VALUES } from "../../../../lib/api-versions";
import { PlatformPlan } from "../../../auth/decorators/billing/platform-plan.decorator";
import { GetTeam } from "../../../auth/decorators/get-team/get-team.decorator";
import { GetUser } from "../../../auth/decorators/get-user/get-user.decorator";
import { Roles } from "../../../auth/decorators/roles/roles.decorator";
import { ApiAuthGuard } from "../../../auth/guards/api-auth/api-auth.guard";
import { PlatformPlanGuard } from "../../../auth/guards/billing/platform-plan.guard";
import { IsAdminAPIEnabledGuard } from "../../../auth/guards/organizations/is-admin-api-enabled.guard";
import { IsOrgGuard } from "../../../auth/guards/organizations/is-org.guard";
import { RolesGuard } from "../../../auth/guards/roles/roles.guard";
import { IsTeamInOrg } from "../../../auth/guards/teams/is-team-in-org.guard";
import { CreateOrgTeamDto } from "../../../organizations/inputs/create-organization-team.input";
import { UpdateOrgTeamDto } from "../../../organizations/inputs/update-organization-team.input";
import {
  OrgMeTeamOutputDto,
  OrgMeTeamsOutputResponseDto,
  OrgTeamOutputResponseDto,
  OrgTeamsOutputResponseDto,
} from "../../../organizations/outputs/organization-team.output";
import { OrganizationsTeamsService } from "../../../organizations/services/organizations-teams.service";
import { UserWithProfile } from "../../../users/users.repository";

@Controller({
  path: "/v2/organizations/:orgId/teams",
  version: API_VERSIONS_VALUES,
})
@UseGuards(ApiAuthGuard, IsOrgGuard, RolesGuard, PlatformPlanGuard, IsAdminAPIEnabledGuard)
@DocsTags("Organizations Teams")
export class OrganizationsTeamsController {
  constructor(private organizationsTeamsService: OrganizationsTeamsService) {}

  @Get()
  @ApiOperation({ summary: "Get all the teams of an organization." })
  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  async getAllTeams(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Query() queryParams: SkipTakePagination
  ): Promise<OrgTeamsOutputResponseDto> {
    const { skip, take } = queryParams;
    const teams = await this.organizationsTeamsService.getPaginatedOrgTeams(orgId, skip ?? 0, take ?? 250);
    return {
      status: SUCCESS_STATUS,
      data: teams.map((team) => plainToClass(OrgTeamOutputDto, team, { strategy: "excludeAll" })),
    };
  }

  @Get("/me")
  @ApiOperation({ summary: "Get the organization's teams user is a member of" })
  @Roles("ORG_MEMBER")
  @PlatformPlan("ESSENTIALS")
  async getMyTeams(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Query() queryParams: SkipTakePagination,
    @GetUser() user: UserWithProfile
  ): Promise<OrgMeTeamsOutputResponseDto> {
    const { skip, take } = queryParams;
    const teams = await this.organizationsTeamsService.getPaginatedOrgUserTeams(
      orgId,
      user.id,
      skip ?? 0,
      take ?? 250
    );
    return {
      status: SUCCESS_STATUS,
      data: teams.map((team) =>
        plainToClass(
          OrgMeTeamOutputDto,
          { ...team, accepted: team.members.find((member) => member.userId === user.id)?.accepted ?? false },
          { strategy: "excludeAll" }
        )
      ),
    };
  }

  @UseGuards(IsTeamInOrg)
  @Roles("TEAM_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @Get("/:teamId")
  @ApiOperation({ summary: "Get a team of the organization by ID." })
  async getTeam(@GetTeam() team: Team): Promise<OrgTeamOutputResponseDto> {
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgTeamOutputDto, team, { strategy: "excludeAll" }),
    };
  }

  @UseGuards(IsTeamInOrg)
  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @Delete("/:teamId")
  @ApiOperation({ summary: "Delete a team of the organization by ID." })
  async deleteTeam(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Param("teamId", ParseIntPipe) teamId: number
  ): Promise<OrgTeamOutputResponseDto> {
    const team = await this.organizationsTeamsService.deleteOrgTeam(orgId, teamId);
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgTeamOutputDto, team, { strategy: "excludeAll" }),
    };
  }

  @UseGuards(IsTeamInOrg)
  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @Patch("/:teamId")
  @ApiOperation({ summary: "Update a team of the organization by ID." })
  async updateTeam(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Param("teamId", ParseIntPipe) teamId: number,
    @Body() body: UpdateOrgTeamDto
  ): Promise<OrgTeamOutputResponseDto> {
    const team = await this.organizationsTeamsService.updateOrgTeam(orgId, teamId, body);
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgTeamOutputDto, team, { strategy: "excludeAll" }),
    };
  }

  @Post()
  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @ApiOperation({ summary: "Create a team for an organization." })
  async createTeam(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Body() body: CreateOrgTeamDto,
    @GetUser() user: UserWithProfile,
    @Headers(X_CAL_CLIENT_ID) oAuthClientId?: string
  ): Promise<OrgTeamOutputResponseDto> {
    const team = oAuthClientId
      ? await this.organizationsTeamsService.createPlatformOrgTeam(orgId, oAuthClientId, body, user)
      : await this.organizationsTeamsService.createOrgTeam(orgId, body, user);

    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgTeamOutputDto, team, { strategy: "excludeAll" }),
    };
  }
}
