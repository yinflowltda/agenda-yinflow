import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { UsersService } from "src/modules/users/services/users.service";

export declare class OAuthClientGuard implements CanActivate {
  private oAuthClientRepository;
  private usersService;
  constructor(oAuthClientRepository: OAuthClientRepository, usersService: UsersService);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
