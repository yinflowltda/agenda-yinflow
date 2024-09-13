import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";

export declare class IsUserInOrg implements CanActivate {
  private organizationsRepository;
  constructor(organizationsRepository: OrganizationsRepository);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
