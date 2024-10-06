import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import type { Request } from "express";
import { getToken } from "next-auth/jwt";

import { supabase } from "@calcom/lib/server/supabase";
import { INVALID_ACCESS_TOKEN, X_CAL_CLIENT_ID, X_CAL_SECRET_KEY } from "@calcom/platform-constants";

import { getEnv } from "../../../../env";
import { isApiKey } from "../../../../lib/api-key";
import { BaseStrategy } from "../../../../lib/passport/strategies/types";
import { DeploymentsService } from "../../../deployments/deployments.service";
import { OAuthClientRepository } from "../../../oauth-clients/oauth-client.repository";
import { OAuthFlowService } from "../../../oauth-clients/services/oauth-flow.service";
import { ProfilesRepository } from "../../../profiles/profiles.repository";
import { TokensRepository } from "../../../tokens/tokens.repository";
import { UserWithProfile, UsersRepository } from "../../../users/users.repository";

@Injectable()
export class ApiAuthStrategy extends PassportStrategy(BaseStrategy, "api-auth") {
  constructor(
    private readonly deploymentsService: DeploymentsService,
    private readonly oauthFlowService: OAuthFlowService,
    private readonly tokensRepository: TokensRepository,
    private readonly userRepository: UsersRepository,
    private readonly oauthRepository: OAuthClientRepository,
    private readonly profilesRepository: ProfilesRepository
  ) {
    super();
  }

  async authenticate(request: Request) {
    try {
      const { params } = request;
      const oAuthClientSecret = request.get(X_CAL_SECRET_KEY);
      const oAuthClientId = params.clientId || request.get(X_CAL_CLIENT_ID);
      const bearerToken = request.get("Authorization")?.replace("Bearer ", "");

      if (oAuthClientId && oAuthClientSecret) {
        return await this.authenticateOAuthClient(oAuthClientId, oAuthClientSecret);
      }

      if (bearerToken) {
        const requestOrigin = request.get("Origin");
        return await this.authenticateBearerToken(bearerToken, requestOrigin);
      }

      const nextAuthSecret = getEnv("NEXTAUTH_SECRET");
      const nextAuthToken = await getToken({ req: request, secret: nextAuthSecret });

      if (nextAuthToken) {
        return await this.authenticateNextAuth(nextAuthToken);
      }

      throw new UnauthorizedException(
        "No authentication method provided. Either pass an API key as 'Bearer' header or OAuth client credentials as 'x-cal-secret-key' and 'x-cal-client-id' headers"
      );
    } catch (err) {
      if (err instanceof Error) {
        return this.error(err);
      }
      return this.error(
        new InternalServerErrorException("An error occurred while authenticating the request")
      );
    }
  }

  async authenticateNextAuth(token: { email?: string | null }) {
    const user = await this.nextAuthStrategy(token);
    return this.success(user);
  }

  async authenticateOAuthClient(oAuthClientId: string, oAuthClientSecret: string) {
    const user = await this.oAuthClientStrategy(oAuthClientId, oAuthClientSecret);
    return this.success(user);
  }

  async oAuthClientStrategy(oAuthClientId: string, oAuthClientSecret: string) {
    const client = await this.oauthRepository.getOAuthClient(oAuthClientId);

    if (!client) {
      throw new UnauthorizedException(`Client with ID ${oAuthClientId} not found`);
    }

    if (client.secret !== oAuthClientSecret) {
      throw new UnauthorizedException("Invalid client secret");
    }

    const platformCreatorId = await this.profilesRepository.getPlatformOwnerUserId(client.organizationId);

    if (!platformCreatorId) {
      throw new UnauthorizedException("No owner ID found for this OAuth client");
    }

    const user = await this.userRepository.findByIdWithProfile(platformCreatorId);

    if (!user) {
      throw new UnauthorizedException("No user associated with the provided OAuth client");
    }

    return user;
  }

  async authenticateBearerToken(authString: string, requestOrigin: string | undefined) {
    try {
      const apiKeyPrefix = getEnv("API_KEY_PREFIX");
      const user = isApiKey(authString, apiKeyPrefix ?? "cal_")
        ? await this.apiKeyStrategy(authString)
        : await this.accessTokenStrategy(authString, requestOrigin);

      if (!user) {
        return this.error(new UnauthorizedException("No user associated with the provided token"));
      }

      return this.success(user);
    } catch (err) {
      if (err instanceof Error) {
        return this.error(err);
      }
      return this.error(
        new InternalServerErrorException("An error occurred while authenticating the request")
      );
    }
  }

  async apiKeyStrategy(apiKey: string) {
    const isLicenseValid = await this.deploymentsService.checkLicense();
    if (!isLicenseValid) {
      throw new UnauthorizedException("Invalid or missing CALCOM_LICENSE_KEY environment variable");
    }

    const { data: keyData } = await supabase.from("ApiKey").select("*").eq("id", apiKey).limit(1).single();

    if (!keyData) throw new UnauthorizedException("Your api key is not valid");

    const apiKeyOwnerId = keyData.userId;
    if (!apiKeyOwnerId) throw new UnauthorizedException("No user tied to this apiKey");

    const { data: user } = await supabase.from("users").select("*").eq("id", apiKeyOwnerId).limit(1).single();

    return user;
  }

  async accessTokenStrategy(accessToken: string, origin?: string) {
    const accessTokenValid = await this.oauthFlowService.validateAccessToken(accessToken);
    if (!accessTokenValid) {
      throw new UnauthorizedException(INVALID_ACCESS_TOKEN);
    }

    const client = await this.tokensRepository.getAccessTokenClient(accessToken);
    if (!client) {
      throw new UnauthorizedException("OAuth client not found given the access token");
    }

    if (origin && !client.redirectUris.some((uri) => uri.startsWith(origin))) {
      throw new UnauthorizedException(
        `Invalid request origin - please open https://app.cal.com/settings/platform and add the origin '${origin}' to the 'Redirect uris' of your OAuth client.`
      );
    }

    const ownerId = await this.tokensRepository.getAccessTokenOwnerId(accessToken);

    if (!ownerId) {
      throw new UnauthorizedException(INVALID_ACCESS_TOKEN);
    }

    const user: UserWithProfile | null = await this.userRepository.findByIdWithProfile(ownerId);
    return user;
  }

  async nextAuthStrategy(token: { email?: string | null }) {
    if (!token.email) {
      throw new UnauthorizedException("Email not found in the authentication token.");
    }

    const user = await this.userRepository.findByEmailWithProfile(token.email);
    if (!user) {
      throw new UnauthorizedException("User associated with the authentication token email not found.");
    }

    return user;
  }
}