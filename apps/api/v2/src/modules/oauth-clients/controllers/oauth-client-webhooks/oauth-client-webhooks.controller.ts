import { Controller, Post, Body, UseGuards, Get, Param, Query, Delete, Patch } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Webhook, MembershipRole } from "@prisma/client";
import { plainToClass } from "class-transformer";
import { API_VERSIONS_VALUES } from "src/lib/api-versions";
import { MembershipRoles } from "src/modules/auth/decorators/roles/membership-roles.decorator";
import { NextAuthGuard } from "src/modules/auth/guards/next-auth/next-auth.guard";
import { OrganizationRolesGuard } from "src/modules/auth/guards/organization-roles/organization-roles.guard";
import { GetWebhook } from "src/modules/webhooks/decorators/get-webhook-decorator";
import { IsOAuthClientWebhookGuard } from "src/modules/webhooks/guards/is-oauth-client-webhook-guard";
import { CreateWebhookInputDto, UpdateWebhookInputDto } from "src/modules/webhooks/inputs/webhook.input";
import {
  OAuthClientWebhookOutputResponseDto,
  OAuthClientWebhookOutputDto,
  OAuthClientWebhooksOutputResponseDto,
} from "src/modules/webhooks/outputs/oauth-client-webhook.output";
import { DeleteManyWebhooksOutputResponseDto } from "src/modules/webhooks/outputs/webhook.output";
import { PartialWebhookInputPipe, WebhookInputPipe } from "src/modules/webhooks/pipes/WebhookInputPipe";
import { WebhookOutputPipe } from "src/modules/webhooks/pipes/WebhookOutputPipe";
import { OAuthClientWebhooksService } from "src/modules/webhooks/services/oauth-clients-webhooks.service";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

import { SUCCESS_STATUS } from "@calcom/platform-constants";
import { SkipTakePagination } from "@calcom/platform-types";

import { OAuthClientGuard } from "../../guards/oauth-client-guard";

@Controller({
  path: "/v2/oauth-clients/:clientId/webhooks",
  version: API_VERSIONS_VALUES,
})
@UseGuards(NextAuthGuard, OrganizationRolesGuard, OAuthClientGuard)
@ApiTags("OAuthClients Webhooks")
export class OAuthClientWebhooksController {
  constructor(
    private readonly webhooksService: WebhooksService,
    private readonly oAuthClientWebhooksService: OAuthClientWebhooksService
  ) {}

  @Post("/")
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @ApiOperation({ summary: "Create a webhook for an oAuthClient" })
  async createOAuthClientWebhook(
    @Body() body: CreateWebhookInputDto,
    @Param("clientId") oAuthClientId: string
  ): Promise<OAuthClientWebhookOutputResponseDto> {
    const webhook = await this.oAuthClientWebhooksService.createOAuthClientWebhook(
      oAuthClientId,
      new WebhookInputPipe().transform(body)
    );

    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OAuthClientWebhookOutputDto, new WebhookOutputPipe().transform(webhook), {
        strategy: "excludeAll",
      }),
    };
  }

  @Patch("/:webhookId")
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @ApiOperation({ summary: "Update a webhook of an oAuthClient" })
  @UseGuards(IsOAuthClientWebhookGuard)
  async updateOAuthClientWebhook(
    @Body() body: UpdateWebhookInputDto,
    @Param("webhookId") webhookId: string
  ): Promise<OAuthClientWebhookOutputResponseDto> {
    const webhook = await this.webhooksService.updateWebhook(
      webhookId,
      new PartialWebhookInputPipe().transform(body)
    );
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OAuthClientWebhookOutputDto, new WebhookOutputPipe().transform(webhook), {
        strategy: "excludeAll",
      }),
    };
  }

  @Get("/:webhookId")
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER, MembershipRole.MEMBER])
  @ApiOperation({ summary: "Get a webhook of an oAuthClient" })
  @UseGuards(IsOAuthClientWebhookGuard)
  async getOAuthClientWebhook(@GetWebhook() webhook: Webhook): Promise<OAuthClientWebhookOutputResponseDto> {
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OAuthClientWebhookOutputDto, new WebhookOutputPipe().transform(webhook), {
        strategy: "excludeAll",
      }),
    };
  }

  @Get("/")
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER, MembershipRole.MEMBER])
  @ApiOperation({ summary: "Get all webhooks of an oAuthClient" })
  async getOAuthClientWebhooks(
    @Param("clientId") oAuthClientId: string,
    @Query() pagination: SkipTakePagination
  ): Promise<OAuthClientWebhooksOutputResponseDto> {
    const webhooks = await this.oAuthClientWebhooksService.getOAuthClientWebhooksPaginated(
      oAuthClientId,
      pagination.skip ?? 0,
      pagination.take ?? 250
    );
    return {
      status: SUCCESS_STATUS,
      data: webhooks.map((webhook) =>
        plainToClass(OAuthClientWebhookOutputDto, new WebhookOutputPipe().transform(webhook), {
          strategy: "excludeAll",
        })
      ),
    };
  }

  @Delete("/:webhookId")
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @ApiOperation({ summary: "Delete a webhook of an oAuthClient" })
  @UseGuards(IsOAuthClientWebhookGuard)
  async deleteOAuthClientWebhook(
    @GetWebhook() webhook: Webhook
  ): Promise<OAuthClientWebhookOutputResponseDto> {
    await this.webhooksService.deleteWebhook(webhook.id);
    return {
      status: SUCCESS_STATUS,
      data: plainToClass(OAuthClientWebhookOutputDto, new WebhookOutputPipe().transform(webhook), {
        strategy: "excludeAll",
      }),
    };
  }

  @Delete("/")
  @MembershipRoles([MembershipRole.ADMIN, MembershipRole.OWNER])
  @ApiOperation({ summary: "Delete all webhooks of an oAuthClient" })
  async deleteAllOAuthClientWebhooks(
    @Param("clientId") oAuthClientId: string
  ): Promise<DeleteManyWebhooksOutputResponseDto> {
    const data = await this.oAuthClientWebhooksService.deleteAllOAuthClientWebhooks(oAuthClientId);
    return { status: SUCCESS_STATUS, data: `${data.count} webhooks deleted` };
  }
}
