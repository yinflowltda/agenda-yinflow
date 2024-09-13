import { ConfigService } from "@nestjs/config";
import { AppConfig } from "src/config/type";
import Stripe from "stripe";

export declare class StripeService {
  stripe: Stripe;
  constructor(configService: ConfigService<AppConfig>);
}
