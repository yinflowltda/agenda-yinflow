import { Response as ExpressResponse } from "express";
import { KeysResponseDto } from "src/modules/oauth-clients/controllers/oauth-flow/responses/KeysResponse.dto";
import { OAuthAuthorizeInput } from "src/modules/oauth-clients/inputs/authorize.input";
import { ExchangeAuthorizationCodeInput } from "src/modules/oauth-clients/inputs/exchange-code.input";
import { RefreshTokenInput } from "src/modules/oauth-clients/inputs/refresh-token.input";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { OAuthFlowService } from "src/modules/oauth-clients/services/oauth-flow.service";
import { TokensRepository } from "src/modules/tokens/tokens.repository";

export declare class OAuthFlowController {
  private readonly oauthClientRepository;
  private readonly tokensRepository;
  private readonly oAuthFlowService;
  constructor(
    oauthClientRepository: OAuthClientRepository,
    tokensRepository: TokensRepository,
    oAuthFlowService: OAuthFlowService
  );
  authorize(clientId: string, body: OAuthAuthorizeInput, userId: number, res: ExpressResponse): Promise<void>;
  exchange(
    authorization: string,
    clientId: string,
    body: ExchangeAuthorizationCodeInput
  ): Promise<KeysResponseDto>;
  refreshAccessToken(clientId: string, secretKey: string, body: RefreshTokenInput): Promise<KeysResponseDto>;
}
