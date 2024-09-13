"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("next-auth/jwt");
const api_key_1 = require("../../../../lib/api-key");
const types_1 = require("../../../../lib/passport/strategies/types");
const api_key_repository_1 = require("../../../api-key/api-key-repository");
const deployments_service_1 = require("../../../deployments/deployments.service");
const oauth_client_repository_1 = require("../../../oauth-clients/oauth-client.repository");
const oauth_flow_service_1 = require("../../../oauth-clients/services/oauth-flow.service");
const profiles_repository_1 = require("../../../profiles/profiles.repository");
const tokens_repository_1 = require("../../../tokens/tokens.repository");
const users_repository_1 = require("../../../users/users.repository");
const platform_constants_1 = require("@calcom/platform-constants");
let ApiAuthStrategy = class ApiAuthStrategy extends (0, passport_1.PassportStrategy)(
  types_1.BaseStrategy,
  "api-auth"
) {
  constructor(
    deploymentsService,
    config,
    oauthFlowService,
    tokensRepository,
    userRepository,
    apiKeyRepository,
    oauthRepository,
    profilesRepository
  ) {
    super();
    this.deploymentsService = deploymentsService;
    this.config = config;
    this.oauthFlowService = oauthFlowService;
    this.tokensRepository = tokensRepository;
    this.userRepository = userRepository;
    this.apiKeyRepository = apiKeyRepository;
    this.oauthRepository = oauthRepository;
    this.profilesRepository = profilesRepository;
  }
  async authenticate(request) {
    try {
      const { params } = request;
      const oAuthClientSecret = request.get(platform_constants_1.X_CAL_SECRET_KEY);
      const oAuthClientId = params.clientId || request.get(platform_constants_1.X_CAL_CLIENT_ID);
      const bearerToken = request.get("Authorization")?.replace("Bearer ", "");
      if (oAuthClientId && oAuthClientSecret) {
        return await this.authenticateOAuthClient(oAuthClientId, oAuthClientSecret);
      }
      if (bearerToken) {
        const requestOrigin = request.get("Origin");
        return await this.authenticateBearerToken(bearerToken, requestOrigin);
      }
      const nextAuthSecret = this.config.get("next.authSecret", { infer: true });
      const nextAuthToken = await (0, jwt_1.getToken)({ req: request, secret: nextAuthSecret });
      if (nextAuthToken) {
        return await this.authenticateNextAuth(nextAuthToken);
      }
      throw new common_1.UnauthorizedException(
        "No authentication method provided. Either pass an API key as 'Bearer' header or OAuth client credentials as 'x-cal-secret-key' and 'x-cal-client-id' headers"
      );
    } catch (err) {
      if (err instanceof Error) {
        return this.error(err);
      }
      return this.error(
        new common_1.InternalServerErrorException("An error occurred while authenticating the request")
      );
    }
  }
  async authenticateNextAuth(token) {
    const user = await this.nextAuthStrategy(token);
    return this.success(user);
  }
  async authenticateOAuthClient(oAuthClientId, oAuthClientSecret) {
    const user = await this.oAuthClientStrategy(oAuthClientId, oAuthClientSecret);
    return this.success(user);
  }
  async oAuthClientStrategy(oAuthClientId, oAuthClientSecret) {
    const client = await this.oauthRepository.getOAuthClient(oAuthClientId);
    if (!client) {
      throw new common_1.UnauthorizedException(`Client with ID ${oAuthClientId} not found`);
    }
    if (client.secret !== oAuthClientSecret) {
      throw new common_1.UnauthorizedException("Invalid client secret");
    }
    const platformCreatorId = await this.profilesRepository.getPlatformOwnerUserId(client.organizationId);
    if (!platformCreatorId) {
      throw new common_1.UnauthorizedException("No owner ID found for this OAuth client");
    }
    const user = await this.userRepository.findByIdWithProfile(platformCreatorId);
    if (!user) {
      throw new common_1.UnauthorizedException("No user associated with the provided OAuth client");
    }
    return user;
  }
  async authenticateBearerToken(authString, requestOrigin) {
    try {
      const user = (0, api_key_1.isApiKey)(authString, this.config.get("api.apiKeyPrefix") ?? "cal_")
        ? await this.apiKeyStrategy(authString)
        : await this.accessTokenStrategy(authString, requestOrigin);
      if (!user) {
        return this.error(new common_1.UnauthorizedException("No user associated with the provided token"));
      }
      return this.success(user);
    } catch (err) {
      if (err instanceof Error) {
        return this.error(err);
      }
      return this.error(
        new common_1.InternalServerErrorException("An error occurred while authenticating the request")
      );
    }
  }
  async apiKeyStrategy(apiKey) {
    const isLicenseValid = await this.deploymentsService.checkLicense();
    if (!isLicenseValid) {
      throw new common_1.UnauthorizedException("Invalid or missing CALCOM_LICENSE_KEY environment variable");
    }
    const strippedApiKey = (0, api_key_1.stripApiKey)(apiKey, this.config.get("api.keyPrefix"));
    const apiKeyHash = (0, api_key_1.hashAPIKey)(strippedApiKey);
    const keyData = await this.apiKeyRepository.getApiKeyFromHash(apiKeyHash);
    if (!keyData) {
      throw new common_1.UnauthorizedException("Your api key is not valid");
    }
    const isKeyExpired =
      keyData.expiresAt && new Date().setHours(0, 0, 0, 0) > keyData.expiresAt.setHours(0, 0, 0, 0);
    if (isKeyExpired) {
      throw new common_1.UnauthorizedException("Your api key is expired");
    }
    const apiKeyOwnerId = keyData.userId;
    if (!apiKeyOwnerId) {
      throw new common_1.UnauthorizedException("No user tied to this apiKey");
    }
    const user = await this.userRepository.findByIdWithProfile(apiKeyOwnerId);
    return user;
  }
  async accessTokenStrategy(accessToken, origin) {
    const accessTokenValid = await this.oauthFlowService.validateAccessToken(accessToken);
    if (!accessTokenValid) {
      throw new common_1.UnauthorizedException(platform_constants_1.INVALID_ACCESS_TOKEN);
    }
    const client = await this.tokensRepository.getAccessTokenClient(accessToken);
    if (!client) {
      throw new common_1.UnauthorizedException("OAuth client not found given the access token");
    }
    if (origin && !client.redirectUris.some((uri) => uri.startsWith(origin))) {
      throw new common_1.UnauthorizedException(
        `Invalid request origin - please open https://app.cal.com/settings/platform and add the origin '${origin}' to the 'Redirect uris' of your OAuth client.`
      );
    }
    const ownerId = await this.tokensRepository.getAccessTokenOwnerId(accessToken);
    if (!ownerId) {
      throw new common_1.UnauthorizedException(platform_constants_1.INVALID_ACCESS_TOKEN);
    }
    const user = await this.userRepository.findByIdWithProfile(ownerId);
    return user;
  }
  async nextAuthStrategy(token) {
    if (!token.email) {
      throw new common_1.UnauthorizedException("Email not found in the authentication token.");
    }
    const user = await this.userRepository.findByEmailWithProfile(token.email);
    if (!user) {
      throw new common_1.UnauthorizedException(
        "User associated with the authentication token email not found."
      );
    }
    return user;
  }
};
ApiAuthStrategy = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      deployments_service_1.DeploymentsService,
      config_1.ConfigService,
      oauth_flow_service_1.OAuthFlowService,
      tokens_repository_1.TokensRepository,
      users_repository_1.UsersRepository,
      api_key_repository_1.ApiKeyRepository,
      oauth_client_repository_1.OAuthClientRepository,
      profiles_repository_1.ProfilesRepository,
    ]),
  ],
  ApiAuthStrategy
);
exports.ApiAuthStrategy = ApiAuthStrategy;
//# sourceMappingURL=api-auth.strategy.js.map
