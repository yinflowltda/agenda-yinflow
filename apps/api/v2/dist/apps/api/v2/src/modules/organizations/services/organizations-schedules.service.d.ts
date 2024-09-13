import { OutputSchedulesService_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/services/output-schedules.service";
import { OrganizationSchedulesRepository } from "src/modules/organizations/repositories/organizations-schedules.repository";
import { UsersRepository } from "src/modules/users/users.repository";

import { ScheduleOutput_2024_06_11 } from "@calcom/platform-types";

export declare class OrganizationsSchedulesService {
  private readonly organizationSchedulesService;
  private readonly outputSchedulesService;
  private readonly usersRepository;
  constructor(
    organizationSchedulesService: OrganizationSchedulesRepository,
    outputSchedulesService: OutputSchedulesService_2024_06_11,
    usersRepository: UsersRepository
  );
  getOrganizationSchedules(
    organizationId: number,
    skip?: number,
    take?: number
  ): Promise<ScheduleOutput_2024_06_11[]>;
}
