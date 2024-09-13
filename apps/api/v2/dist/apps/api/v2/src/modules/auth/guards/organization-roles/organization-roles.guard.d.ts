import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { MembershipsRepository } from "src/modules/memberships/memberships.repository";
import { OrganizationsService } from "src/modules/organizations/services/organizations.service";
import { UsersService } from "src/modules/users/services/users.service";

import { MembershipRole } from "@calcom/prisma/enums";

export declare class OrganizationRolesGuard implements CanActivate {
  private reflector;
  private organizationsService;
  private membershipRepository;
  private usersService;
  constructor(
    reflector: Reflector,
    organizationsService: OrganizationsService,
    membershipRepository: MembershipsRepository,
    usersService: UsersService
  );
  canActivate(context: ExecutionContext): Promise<boolean>;
  isPlatform(organizationId: number): Promise<void>;
  isMembershipAccepted(accepted: boolean): void;
  isRoleAllowed(membershipRole: MembershipRole, allowedRoles: MembershipRole[]): true | undefined;
}
