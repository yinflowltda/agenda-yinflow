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
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiOperation, ApiTags as DocsTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";

import { SUCCESS_STATUS } from "@calcom/platform-constants";
import { SkipTakePagination } from "@calcom/platform-types";

import { API_VERSIONS_VALUES } from "../../../lib/api-versions";
import { PlatformPlan } from "../../auth/decorators/billing/platform-plan.decorator";
import { Roles } from "../../auth/decorators/roles/roles.decorator";
import { ApiAuthGuard } from "../../auth/guards/api-auth/api-auth.guard";
import { PlatformPlanGuard } from "../../auth/guards/billing/platform-plan.guard";
import { IsMembershipInOrg } from "../../auth/guards/memberships/is-membership-in-org.guard";
import { IsAdminAPIEnabledGuard } from "../../auth/guards/organizations/is-admin-api-enabled.guard";
import { IsOrgGuard } from "../../auth/guards/organizations/is-org.guard";
import { RolesGuard } from "../../auth/guards/roles/roles.guard";
import { CreateOrgMembershipDto } from "../../organizations/memberships/inputs/create-organization-membership.input";
import { UpdateOrgMembershipDto } from "../../organizations/memberships/inputs/update-organization-membership.input";
import { CreateOrgMembershipOutput } from "../../organizations/memberships/outputs/create-membership.output";
import { DeleteOrgMembership } from "../../organizations/memberships/outputs/delete-membership.output";
import { GetAllOrgMemberships } from "../../organizations/memberships/outputs/get-all-memberships.output";
import { GetOrgMembership } from "../../organizations/memberships/outputs/get-membership.output";
import { OrgMembershipOutputDto } from "../../organizations/memberships/outputs/membership.output";
import { UpdateOrgMembership } from "../../organizations/memberships/outputs/update-membership.output";
import { OrganizationsMembershipService } from "../../organizations/memberships/services/organizations-membership.service";

@Controller({
  path: "/v2/organizations/:orgId/memberships",
  version: API_VERSIONS_VALUES,
})
@UseGuards(ApiAuthGuard, IsOrgGuard, RolesGuard, PlatformPlanGuard, IsAdminAPIEnabledGuard)
@DocsTags("Orgs / Memberships")
export class OrganizationsMembershipsController {
  constructor(private organizationsMembershipService: OrganizationsMembershipService) {}

  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @Get("/")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get all memberships" })
  async getAllMemberships(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Query() queryParams: SkipTakePagination
  ): Promise<GetAllOrgMemberships> {
    const { skip, take } = queryParams;
    const memberships = await this.organizationsMembershipService.getPaginatedOrgMemberships(
      orgId,
      skip ?? 0,
      take ?? 250
    );
    return {
      status: SUCCESS_STATUS,
      data: memberships.map((membership: any) =>
        plainToClass(OrgMembershipOutputDto, membership, { strategy: "excludeAll" })
      ),
    };
  }

  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @Post("/")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Create a membership" })
  async createMembership(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Body() body: CreateOrgMembershipDto
  ): Promise<CreateOrgMembershipOutput> {
    const membership = await this.organizationsMembershipService.createOrgMembership(orgId, body);
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgMembershipOutputDto, membership, { strategy: "excludeAll" }),
    };
  }

  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @UseGuards(IsMembershipInOrg)
  @Get("/:membershipId")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get a membership" })
  async getOrgMembership(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Param("membershipId", ParseIntPipe) membershipId: number
  ): Promise<GetOrgMembership> {
    const membership = await this.organizationsMembershipService.getOrgMembership(orgId, membershipId);
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgMembershipOutputDto, membership, { strategy: "excludeAll" }),
    };
  }

  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @UseGuards(IsMembershipInOrg)
  @Delete("/:membershipId")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Delete a membership" })
  async deleteMembership(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Param("membershipId", ParseIntPipe) membershipId: number
  ): Promise<DeleteOrgMembership> {
    const membership = await this.organizationsMembershipService.deleteOrgMembership(orgId, membershipId);
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgMembershipOutputDto, membership, { strategy: "excludeAll" }),
    };
  }

  @UseGuards(IsMembershipInOrg)
  @Roles("ORG_ADMIN")
  @PlatformPlan("ESSENTIALS")
  @Patch("/:membershipId")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Update a membership" })
  async updateMembership(
    @Param("orgId", ParseIntPipe) orgId: number,
    @Param("membershipId", ParseIntPipe) membershipId: number,
    @Body() body: UpdateOrgMembershipDto
  ): Promise<UpdateOrgMembership> {
    const membership = await this.organizationsMembershipService.updateOrgMembership(
      orgId,
      membershipId,
      body
    );
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OrgMembershipOutputDto, membership, { strategy: "excludeAll" }),
    };
  }
}
