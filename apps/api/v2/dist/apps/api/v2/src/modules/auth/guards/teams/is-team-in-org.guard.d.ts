import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OrganizationsTeamsRepository } from "src/modules/organizations/repositories/organizations-teams.repository";

export declare class IsTeamInOrg implements CanActivate {
  private organizationsTeamsRepository;
  constructor(organizationsTeamsRepository: OrganizationsTeamsRepository);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
