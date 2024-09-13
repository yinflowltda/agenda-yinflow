import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { UsersService } from "src/modules/users/services/users.service";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

export declare class IsOAuthClientWebhookGuard implements CanActivate {
  private readonly webhooksService;
  private readonly oAuthClientRepository;
  private usersService;
  constructor(
    webhooksService: WebhooksService,
    oAuthClientRepository: OAuthClientRepository,
    usersService: UsersService
  );
  canActivate(context: ExecutionContext): Promise<boolean>;
}
