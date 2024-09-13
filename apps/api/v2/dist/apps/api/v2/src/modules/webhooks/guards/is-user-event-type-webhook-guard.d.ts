import { CanActivate, ExecutionContext } from "@nestjs/common";
import { EventTypesRepository_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/event-types.repository";
import { WebhooksService } from "src/modules/webhooks/services/webhooks.service";

export declare class IsUserEventTypeWebhookGuard implements CanActivate {
  private readonly webhooksService;
  private readonly eventtypesRepository;
  constructor(webhooksService: WebhooksService, eventtypesRepository: EventTypesRepository_2024_06_14);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
