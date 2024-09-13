import { GetMeOutput } from "src/ee/me/outputs/get-me.output";
import { UpdateMeOutput } from "src/ee/me/outputs/update-me.output";
import { SchedulesService_2024_04_15 } from "src/ee/schedules/schedules_2024_04_15/services/schedules.service";
import { UpdateManagedUserInput } from "src/modules/users/inputs/update-managed-user.input";
import { UsersService } from "src/modules/users/services/users.service";
import { UserWithProfile, UsersRepository } from "src/modules/users/users.repository";

export declare class MeController {
  private readonly usersRepository;
  private readonly schedulesService;
  private readonly usersService;
  constructor(
    usersRepository: UsersRepository,
    schedulesService: SchedulesService_2024_04_15,
    usersService: UsersService
  );
  getMe(user: UserWithProfile): Promise<GetMeOutput>;
  updateMe(user: UserWithProfile, bodySchedule: UpdateManagedUserInput): Promise<UpdateMeOutput>;
}
