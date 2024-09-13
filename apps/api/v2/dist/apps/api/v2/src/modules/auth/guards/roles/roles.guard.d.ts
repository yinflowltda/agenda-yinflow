import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ORG_ROLES, TEAM_ROLES } from "src/lib/roles/constants";
import { MembershipsRepository } from "src/modules/memberships/memberships.repository";
import { RedisService } from "src/modules/redis/redis.service";

export declare class RolesGuard implements CanActivate {
  private reflector;
  private membershipRepository;
  private readonly redisService;
  private readonly logger;
  constructor(reflector: Reflector, membershipRepository: MembershipsRepository, redisService: RedisService);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
type HasMinimumTeamRoleProp = {
  checkRole: (typeof TEAM_ROLES)[number];
  minimumRole: string;
  roles: typeof TEAM_ROLES;
};
type HasMinimumOrgRoleProp = {
  checkRole: (typeof ORG_ROLES)[number];
  minimumRole: string;
  roles: typeof ORG_ROLES;
};
type HasMinimumRoleProp = HasMinimumTeamRoleProp | HasMinimumOrgRoleProp;
export declare function hasMinimumRole(props: HasMinimumRoleProp): boolean;
export {};
