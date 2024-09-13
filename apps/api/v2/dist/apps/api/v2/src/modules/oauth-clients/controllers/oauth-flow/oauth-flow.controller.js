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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthFlowController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const env_1 = require("../../../../env");
const api_versions_1 = require("../../../../lib/api-versions");
const get_user_decorator_1 = require("../../../auth/decorators/get-user/get-user.decorator");
const api_auth_guard_1 = require("../../../auth/guards/api-auth/api-auth.guard");
const next_auth_guard_1 = require("../../../auth/guards/next-auth/next-auth.guard");
const KeysResponse_dto_1 = require("./responses/KeysResponse.dto");
const authorize_input_1 = require("../../inputs/authorize.input");
const exchange_code_input_1 = require("../../inputs/exchange-code.input");
const refresh_token_input_1 = require("../../inputs/refresh-token.input");
const oauth_client_repository_1 = require("../../oauth-client.repository");
const oauth_flow_service_1 = require("../../services/oauth-flow.service");
const tokens_repository_1 = require("../../../tokens/tokens.repository");
const platform_constants_1 = require("@calcom/platform-constants");
let OAuthFlowController = class OAuthFlowController {
  constructor(oauthClientRepository, tokensRepository, oAuthFlowService) {
    this.oauthClientRepository = oauthClientRepository;
    this.tokensRepository = tokensRepository;
    this.oAuthFlowService = oAuthFlowService;
  }
  async authorize(clientId, body, userId, res) {
    const oauthClient = await this.oauthClientRepository.getOAuthClient(clientId);
    if (!oauthClient) {
      throw new common_1.BadRequestException(`OAuth client with ID '${clientId}' not found`);
    }
    if (!oauthClient?.redirectUris.includes(body.redirectUri)) {
      throw new common_1.BadRequestException("Invalid 'redirect_uri' value.");
    }
    const alreadyAuthorized = await this.tokensRepository.getAuthorizationTokenByClientUserIds(
      clientId,
      userId
    );
    if (alreadyAuthorized) {
      throw new common_1.BadRequestException(
        `User with id=${userId} has already authorized client with id=${clientId}.`
      );
    }
    const { id } = await this.tokensRepository.createAuthorizationToken(clientId, userId);
    return res.redirect(`${body.redirectUri}?code=${id}`);
  }
  async exchange(authorization, clientId, body) {
    const authorizeEndpointCode = authorization.replace("Bearer ", "").trim();
    if (!authorizeEndpointCode) {
      throw new common_1.BadRequestException("Missing 'Bearer' Authorization header.");
    }
    const { accessToken, refreshToken, accessTokenExpiresAt } =
      await this.oAuthFlowService.exchangeAuthorizationToken(
        authorizeEndpointCode,
        clientId,
        body.clientSecret
      );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        accessToken,
        accessTokenExpiresAt: accessTokenExpiresAt.valueOf(),
        refreshToken,
      },
    };
  }
  async refreshAccessToken(clientId, secretKey, body) {
    const { accessToken, refreshToken, accessTokenExpiresAt } = await this.oAuthFlowService.refreshToken(
      clientId,
      secretKey,
      body.refreshToken
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: {
        accessToken: accessToken,
        accessTokenExpiresAt: accessTokenExpiresAt.valueOf(),
        refreshToken: refreshToken,
      },
    };
  }
};
__decorate(
  [
    (0, common_1.Post)("/authorize"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(next_auth_guard_1.NextAuthGuard),
    (0, swagger_1.ApiOperation)({
      summary: "Authorize an OAuth client",
      description:
        "Redirects the user to the specified 'redirect_uri' with an authorization code in query parameter if the client is authorized successfully. The code is then exchanged for access and refresh tokens via the `/exchange` endpoint.",
    }),
    (0, swagger_1.ApiOkResponse)({
      description:
        "The user is redirected to the 'redirect_uri' with an authorization code in query parameter e.g. `redirectUri?code=secretcode.`",
    }),
    (0, swagger_1.ApiBadRequestResponse)({
      description:
        "Bad request if the OAuth client is not found, if the redirect URI is invalid, or if the user has already authorized the client.",
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)("id")),
    __param(3, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, authorize_input_1.OAuthAuthorizeInput, Number, Object]),
    __metadata("design:returntype", Promise),
  ],
  OAuthFlowController.prototype,
  "authorize",
  null
);
__decorate(
  [
    (0, common_1.Post)("/exchange"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
      summary: "Exchange authorization code for access tokens",
      description:
        "Exchanges the authorization code received from the `/authorize` endpoint for access and refresh tokens. The authorization code should be provided in the 'Authorization' header prefixed with 'Bearer '.",
    }),
    (0, swagger_1.ApiOkResponse)({
      type: KeysResponse_dto_1.KeysResponseDto,
      description: "Successfully exchanged authorization code for access and refresh tokens.",
    }),
    (0, swagger_1.ApiBadRequestResponse)({
      description:
        "Bad request if the authorization code is missing, invalid, or if the client ID and secret do not match.",
    }),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./responses/KeysResponse.dto").KeysResponseDto,
    }),
    __param(0, (0, common_1.Headers)("Authorization")),
    __param(1, (0, common_1.Param)("clientId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, exchange_code_input_1.ExchangeAuthorizationCodeInput]),
    __metadata("design:returntype", Promise),
  ],
  OAuthFlowController.prototype,
  "exchange",
  null
);
__decorate(
  [
    (0, common_1.Post)("/refresh"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({
      status: common_1.HttpStatus.OK,
      type: require("./responses/KeysResponse.dto").KeysResponseDto,
    }),
    __param(0, (0, common_1.Param)("clientId")),
    __param(1, (0, common_1.Headers)(platform_constants_1.X_CAL_SECRET_KEY)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, refresh_token_input_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise),
  ],
  OAuthFlowController.prototype,
  "refreshAccessToken",
  null
);
OAuthFlowController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/oauth/:clientId",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, swagger_1.ApiExcludeController)((0, env_1.getEnv)("NODE_ENV") === "production"),
    (0, swagger_1.ApiTags)("OAuth - development only"),
    __metadata("design:paramtypes", [
      oauth_client_repository_1.OAuthClientRepository,
      tokens_repository_1.TokensRepository,
      oauth_flow_service_1.OAuthFlowService,
    ]),
  ],
  OAuthFlowController
);
exports.OAuthFlowController = OAuthFlowController;
//# sourceMappingURL=oauth-flow.controller.js.map
