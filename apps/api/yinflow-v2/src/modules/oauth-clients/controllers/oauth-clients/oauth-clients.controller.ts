import {
  Body,
  Controller,
  Query,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
  Logger,
  UseGuards,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import {
  ApiTags as DocsTags,
  ApiExcludeController as DocsExcludeController,
  ApiOperation as DocsOperation,
  ApiCreatedResponse as DocsCreatedResponse,
} from "@nestjs/swagger";
import { User, MembershipRole } from "@prisma/client";

import { SUCCESS_STATUS } from "@calcom/platform-constants";
import { CreateOAuthClientInput } from "@calcom/platform-types";
import { Pagination } from "@calcom/platform-types";

import { getEnv } from "../../../../env";
import { API_VERSIONS_VALUES } from "../../../../lib/api-versions";
import { GetUser } from "../../../auth/decorators/get-user/get-user.decorator";
import { MembershipRoles } from "../../../auth/decorators/roles/membership-roles.decorator";
import { NextAuthGuard } from "../../../auth/guards/next-auth/next-auth.guard";
import { OrganizationRolesGuard } from "../../../auth/guards/organization-roles/organization-roles.guard";
import { GetManagedUsersOutput } from "../../../oauth-clients/controllers/oauth-client-users/outputs/get-managed-users.output";
import { ManagedUserOutput } from "../../../oauth-clients/controllers/oauth-client-users/outputs/managed-user.output";
import { CreateOAuthClientResponseDto } from "../../../oauth-clients/controllers/oauth-clients/responses/CreateOAuthClientResponse.dto";
import { GetOAuthClientResponseDto } from "../../../oauth-clients/controllers/oauth-clients/responses/GetOAuthClientResponse.dto";
import { GetOAuthClientsResponseDto } from "../../../oauth-clients/controllers/oauth-clients/responses/GetOAuthClientsResponse.dto";
import { OAuthClientGuard } from "../../../oauth-clients/guards/oauth-client-guard";
import { UpdateOAuthClientInput } from "../../../oauth-clients/inputs/update-oauth-client.input";
import { OAuthClientRepository } from "../../../oauth-clients/oauth-client.repository";
import { OrganizationsRepository } from "../../../organizations/organizations.repository";
import { UsersService } from "../../../users/services/users.service";
import { UserWithProfile } from "../../../users/users.repository";
import { UsersRepository } from "../../../users/users.repository";

const AUTH_DOCUMENTATION = `⚠️ First, this endpoint requires \`Cookie: next-auth.session-token=eyJhbGciOiJ\` header. Log into Cal web app using owner of organization that was created after visiting \`/settings/organizations/new\`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.
Second, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.`;

@Controller({
  path: "/v2/oauth-clients",
  version: API_VERSIONS_VALUES,
})
@UseGuards(NextAuthGuard, OrganizationRolesGuard)
@DocsExcludeController(getEnv("NODE_ENV") === "production")
@DocsTags("OAuth - development only")
export class OAuthClientsController {
  private readonly logger = new Logger("OAuthClientController");

  constructor(
    private readonly oauthClientRepository: OAuthClientRepository,
    private readonly userRepository: UsersRepository,
    private readonly teamsRepository: OrganizationsRepository,
    private usersService: UsersService
  ) {}

  @Post("/")
  @HttpCode(HttpStatus.CREATED)
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @DocsOperation({ description: AUTH_DOCUMENTATION })
  @DocsCreatedResponse({
    description: "Create an OAuth client",
    type: CreateOAuthClientResponseDto,
  })
  async createOAuthClient(
    @GetUser() user: UserWithProfile,
    @Body() body: CreateOAuthClientInput
  ): Promise<CreateOAuthClientResponseDto> {
    const organizationId = this.usersService.getUserMainOrgId(user) as number;
    this.logger.log(
      `For organisation ${organizationId} creating OAuth Client with data: ${JSON.stringify(body)}`
    );

    const organization = await this.teamsRepository.findByIdIncludeBilling(organizationId);
    if (!organization?.platformBilling || !organization?.platformBilling?.subscriptionId) {
      throw new BadRequestException("Team is not subscribed, cannot create an OAuth Client.");
    }

    const { id, secret } = await this.oauthClientRepository.createOAuthClient(organizationId, body);

    return {
      status: SUCCESS_STATUS,
      data: {
        clientId: id,
        clientSecret: secret,
      },
    };
  }

  @Get("/")
  @HttpCode(HttpStatus.OK)
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER, MembershipRole.MEMBER])
  @DocsOperation({ description: AUTH_DOCUMENTATION })
  async getOAuthClients(@GetUser() user: UserWithProfile): Promise<GetOAuthClientsResponseDto> {
    const organizationId = this.usersService.getUserMainOrgId(user) as number;

    const clients = await this.oauthClientRepository.getOrganizationOAuthClients(organizationId);
    return { status: SUCCESS_STATUS, data: clients };
  }

  @Get("/:clientId")
  @HttpCode(HttpStatus.OK)
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER, MembershipRole.MEMBER])
  @DocsOperation({ description: AUTH_DOCUMENTATION })
  @UseGuards(OAuthClientGuard)
  async getOAuthClientById(@Param("clientId") clientId: string): Promise<GetOAuthClientResponseDto> {
    const client = await this.oauthClientRepository.getOAuthClient(clientId);
    if (!client) {
      throw new NotFoundException(`OAuth client with ID ${clientId} not found`);
    }

    return { status: SUCCESS_STATUS, data: client };
  }

  @Get("/:clientId/managed-users")
  @HttpCode(HttpStatus.OK)
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER, MembershipRole.MEMBER])
  @DocsOperation({ description: AUTH_DOCUMENTATION })
  @UseGuards(OAuthClientGuard)
  async getOAuthClientManagedUsersById(
    @Param("clientId") clientId: string,
    @Query() queryParams: Pagination
  ): Promise<GetManagedUsersOutput> {
    const { offset, limit } = queryParams;
    const existingManagedUsers = await this.userRepository.findManagedUsersByOAuthClientId(
      clientId,
      offset ?? 0,
      limit ?? 50
    );

    return { status: SUCCESS_STATUS, data: existingManagedUsers.map((user) => this.getResponseUser(user)) };
  }

  @Patch("/:clientId")
  @HttpCode(HttpStatus.OK)
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @DocsOperation({ description: AUTH_DOCUMENTATION })
  @UseGuards(OAuthClientGuard)
  async updateOAuthClient(
    @Param("clientId") clientId: string,
    @Body() body: UpdateOAuthClientInput
  ): Promise<GetOAuthClientResponseDto> {
    this.logger.log(`For client ${clientId} updating OAuth Client with data: ${JSON.stringify(body)}`);
    const client = await this.oauthClientRepository.updateOAuthClient(clientId, body);

    return { status: SUCCESS_STATUS, data: client };
  }

  @Delete("/:clientId")
  @HttpCode(HttpStatus.OK)
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @DocsOperation({ description: AUTH_DOCUMENTATION })
  @UseGuards(OAuthClientGuard)
  async deleteOAuthClient(@Param("clientId") clientId: string): Promise<GetOAuthClientResponseDto> {
    this.logger.log(`Deleting OAuth Client with ID: ${clientId}`);
    const client = await this.oauthClientRepository.deleteOAuthClient(clientId);
    return { status: SUCCESS_STATUS, data: client };
  }

  private getResponseUser(user: User): ManagedUserOutput {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      timeZone: user.timeZone,
      weekStart: user.weekStart,
      createdDate: user.createdDate,
      timeFormat: user.timeFormat,
      defaultScheduleId: user.defaultScheduleId,
    };
  }
}