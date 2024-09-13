/// <reference types="cookie-parser" />
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { AppConfig } from "src/config/type";
import { SubscribeToPlanInput } from "src/modules/billing/controllers/inputs/subscribe-to-plan.input";
import { CheckPlatformBillingResponseDto } from "src/modules/billing/controllers/outputs/CheckPlatformBillingResponse.dto";
import { SubscribeTeamToBillingResponseDto } from "src/modules/billing/controllers/outputs/SubscribeTeamToBillingResponse.dto";
import { BillingService } from "src/modules/billing/services/billing.service";

import { ApiResponse } from "@calcom/platform-types";

export declare class BillingController {
  private readonly billingService;
  private readonly configService;
  private readonly stripeWhSecret;
  private logger;
  constructor(billingService: BillingService, configService: ConfigService<AppConfig>);
  checkTeamBilling(teamId: number): Promise<ApiResponse<CheckPlatformBillingResponseDto>>;
  subscribeTeamToStripe(
    teamId: number,
    input: SubscribeToPlanInput
  ): Promise<ApiResponse<SubscribeTeamToBillingResponseDto | undefined>>;
  stripeWebhook(request: Request, stripeSignature: string): Promise<ApiResponse>;
}
