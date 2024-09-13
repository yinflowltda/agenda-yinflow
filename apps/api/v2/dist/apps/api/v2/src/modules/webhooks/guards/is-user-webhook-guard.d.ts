import { CanActivate, ExecutionContext } from "@nestjs/common";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

export declare class IsUserWebhookGuard implements CanActivate {
  private readonly webhooksService;
  constructor(webhooksService: WebhooksService);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
