import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { ApiTags as DocsTags } from "@nestjs/swagger";
import { ProviderVerifyAccessTokenOutput } from "src/ee/provider/outputs/verify-access-token.output";
import { ProviderVerifyClientOutput } from "src/ee/provider/outputs/verify-client.output";
import { API_VERSIONS_VALUES } from "src/lib/api-versions";
import { GetUser } from "src/modules/auth/decorators/get-user/get-user.decorator";
import { ApiAuthGuard } from "src/modules/auth/guards/api-auth/api-auth.guard";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { UserWithProfile } from "src/modules/users/users.repository";

import { SUCCESS_STATUS } from "@calcom/platform-constants";

@Controller({
  path: "/v2/provider",
  version: API_VERSIONS_VALUES,
})
@DocsTags("Cal provider")
export class CalProviderController {
  constructor(private readonly oauthClientRepository: OAuthClientRepository) {}

  @Get("/:clientId")
  @HttpCode(HttpStatus.OK)
  async verifyClientId(@Param("clientId") clientId: string): Promise<ProviderVerifyClientOutput> {
    if (!clientId) {
      throw new NotFoundException();
    }
    const oAuthClient = await this.oauthClientRepository.getOAuthClient(clientId);

    if (!oAuthClient) throw new UnauthorizedException();

    return {
      status: SUCCESS_STATUS,
    };
  }

  @Get("/:clientId/access-token")
  @HttpCode(HttpStatus.OK)
  @UseGuards(ApiAuthGuard)
  async verifyAccessToken(
    @Param("clientId") clientId: string,
    @GetUser() user: UserWithProfile
  ): Promise<ProviderVerifyAccessTokenOutput> {
    if (!clientId) {
      throw new BadRequestException();
    }

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      status: SUCCESS_STATUS,
    };
  }
}
