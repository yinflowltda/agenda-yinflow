import { ProviderVerifyAccessTokenOutput } from "src/ee/provider/outputs/verify-access-token.output";
import { ProviderVerifyClientOutput } from "src/ee/provider/outputs/verify-client.output";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { UserWithProfile } from "src/modules/users/users.repository";

export declare class CalProviderController {
  private readonly oauthClientRepository;
  constructor(oauthClientRepository: OAuthClientRepository);
  verifyClientId(clientId: string): Promise<ProviderVerifyClientOutput>;
  verifyAccessToken(clientId: string, user: UserWithProfile): Promise<ProviderVerifyAccessTokenOutput>;
}
