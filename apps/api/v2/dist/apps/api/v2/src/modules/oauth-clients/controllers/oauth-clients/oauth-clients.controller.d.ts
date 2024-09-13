import { GetManagedUsersOutput } from "src/modules/oauth-clients/controllers/oauth-client-users/outputs/get-managed-users.output";
import { CreateOAuthClientResponseDto } from "src/modules/oauth-clients/controllers/oauth-clients/responses/CreateOAuthClientResponse.dto";
import { GetOAuthClientResponseDto } from "src/modules/oauth-clients/controllers/oauth-clients/responses/GetOAuthClientResponse.dto";
import { GetOAuthClientsResponseDto } from "src/modules/oauth-clients/controllers/oauth-clients/responses/GetOAuthClientsResponse.dto";
import { UpdateOAuthClientInput } from "src/modules/oauth-clients/inputs/update-oauth-client.input";
import { OAuthClientRepository } from "src/modules/oauth-clients/oauth-client.repository";
import { OrganizationsRepository } from "src/modules/organizations/organizations.repository";
import { UsersService } from "src/modules/users/services/users.service";
import { UserWithProfile } from "src/modules/users/users.repository";
import { UsersRepository } from "src/modules/users/users.repository";

import { CreateOAuthClientInput } from "@calcom/platform-types";
import { Pagination } from "@calcom/platform-types";

export declare class OAuthClientsController {
  private readonly oauthClientRepository;
  private readonly userRepository;
  private readonly teamsRepository;
  private usersService;
  private readonly logger;
  constructor(
    oauthClientRepository: OAuthClientRepository,
    userRepository: UsersRepository,
    teamsRepository: OrganizationsRepository,
    usersService: UsersService
  );
  createOAuthClient(
    user: UserWithProfile,
    body: CreateOAuthClientInput
  ): Promise<CreateOAuthClientResponseDto>;
  getOAuthClients(user: UserWithProfile): Promise<GetOAuthClientsResponseDto>;
  getOAuthClientById(clientId: string): Promise<GetOAuthClientResponseDto>;
  getOAuthClientManagedUsersById(clientId: string, queryParams: Pagination): Promise<GetManagedUsersOutput>;
  updateOAuthClient(clientId: string, body: UpdateOAuthClientInput): Promise<GetOAuthClientResponseDto>;
  deleteOAuthClient(clientId: string): Promise<GetOAuthClientResponseDto>;
  private getResponseUser;
}
