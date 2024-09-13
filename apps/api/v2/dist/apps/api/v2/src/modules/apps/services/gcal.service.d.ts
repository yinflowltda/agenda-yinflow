import { AppsRepository } from "src/modules/apps/apps.repository";

export declare class GCalService {
  private readonly appsRepository;
  private logger;
  private gcalResponseSchema;
  constructor(appsRepository: AppsRepository);
  getOAuthClient(redirectUri: string): Promise<import("google-auth-library").OAuth2Client>;
}
