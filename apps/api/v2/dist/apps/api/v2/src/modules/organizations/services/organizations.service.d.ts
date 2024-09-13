import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";

export declare class OrganizationsService {
  private readonly organizationsRepository;
  constructor(organizationsRepository: OrganizationsRepository);
  isPlatform(organizationId: number): Promise<boolean | undefined>;
}
