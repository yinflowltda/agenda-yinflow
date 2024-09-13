import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OrganizationsMembershipRepository } from "src/modules/organizations/repositories/organizations-membership.repository";

export declare class IsMembershipInOrg implements CanActivate {
  private organizationsMembershipRepository;
  constructor(organizationsMembershipRepository: OrganizationsMembershipRepository);
  canActivate(context: ExecutionContext): Promise<boolean>;
}
