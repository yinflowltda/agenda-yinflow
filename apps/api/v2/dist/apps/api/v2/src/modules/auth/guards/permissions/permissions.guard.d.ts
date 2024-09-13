import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { TokensRepository } from "src/modules/tokens/tokens.repository";

export declare class PermissionsGuard implements CanActivate {
  private reflector;
  private tokensRepository;
  private readonly config;
  constructor(reflector: Reflector, tokensRepository: TokensRepository, config: ConfigService);
  canActivate(context: ExecutionContext): Promise<boolean>;
  getOAuthClientPermissions(accessToken: string): Promise<number | undefined>;
}
