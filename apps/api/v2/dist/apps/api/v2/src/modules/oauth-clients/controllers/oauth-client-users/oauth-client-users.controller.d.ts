import { User } from "@prisma/client";
import { CreateManagedUserOutput } from "src/modules/oauth-clients/controllers/oauth-client-users/outputs/create-managed-user.output";
import { GetManagedUserOutput } from "src/modules/oauth-clients/controllers/oauth-client-users/outputs/get-managed-user.output";
import { GetManagedUsersOutput } from "src/modules/oauth-clients/controllers/oauth-client-users/outputs/get-managed-users.output";
import { KeysResponseDto } from "src/modules/oauth-clients/controllers/oauth-flow/responses/KeysResponse.dto";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { OAuthClientUsersService } from "src/modules/oauth-clients/services/oauth-clients-users.service";
import { TokensRepository } from "src/modules/tokens/tokens.repository";
import { CreateManagedUserInput } from "src/modules/users/inputs/create-managed-user.input";
import { UpdateManagedUserInput } from "src/modules/users/inputs/update-managed-user.input";
import { UsersRepository } from "src/modules/users/users.repository";

import { Pagination } from "@calcom/platform-types";

export declare class OAuthClientUsersController {
  private readonly userRepository;
  private readonly oAuthClientUsersService;
  private readonly oauthRepository;
  private readonly tokensRepository;
  private readonly logger;
  constructor(
    userRepository: UsersRepository,
    oAuthClientUsersService: OAuthClientUsersService,
    oauthRepository: OAuthClientRepository,
    tokensRepository: TokensRepository
  );
  getManagedUsers(oAuthClientId: string, queryParams: Pagination): Promise<GetManagedUsersOutput>;
  createUser(oAuthClientId: string, body: CreateManagedUserInput): Promise<CreateManagedUserOutput>;
  getUserById(clientId: string, userId: number): Promise<GetManagedUserOutput>;
  updateUser(clientId: string, userId: number, body: UpdateManagedUserInput): Promise<GetManagedUserOutput>;
  deleteUser(clientId: string, userId: number): Promise<GetManagedUserOutput>;
  forceRefresh(userId: number, oAuthClientId: string): Promise<KeysResponseDto>;
  private validateManagedUserOwnership;
  private getResponseUser;
}
export type UserReturned = Pick<User, "id" | "email" | "username">;
export type CreateUserResponse = {
  user: UserReturned;
  accessToken: string;
  refreshToken: string;
};
