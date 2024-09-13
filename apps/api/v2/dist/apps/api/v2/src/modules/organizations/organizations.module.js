"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsModule = void 0;
const common_1 = require("@nestjs/common");
const event_types_module_1 = require("../../ee/event-types/event-types_2024_06_14/event-types.module");
const schedules_module_1 = require("../../ee/schedules/schedules_2024_06_11/schedules.module");
const email_module_1 = require("../email/email.module");
const email_service_1 = require("../email/email.service");
const memberships_repository_1 = require("../memberships/memberships.repository");
const organizations_event_types_controller_1 = require("./controllers/event-types/organizations-event-types.controller");
const organizations_membership_controller_1 = require("./controllers/memberships/organizations-membership.controller");
const organizations_schedules_controller_1 = require("./controllers/schedules/organizations-schedules.controller");
const organizations_teams_memberships_controller_1 = require("./controllers/teams/memberships/organizations-teams-memberships.controller");
const organizations_teams_controller_1 = require("./controllers/teams/organizations-teams.controller");
const organizations_users_controller_1 = require("./controllers/users/organizations-users.controller");
const organizations_repository_1 = require("./organizations.repository");
const organizations_event_types_repository_1 = require("./repositories/organizations-event-types.repository");
const organizations_membership_repository_1 = require("./repositories/organizations-membership.repository");
const organizations_schedules_repository_1 = require("./repositories/organizations-schedules.repository");
const organizations_teams_memberships_repository_1 = require("./repositories/organizations-teams-memberships.repository");
const organizations_teams_repository_1 = require("./repositories/organizations-teams.repository");
const organizations_users_repository_1 = require("./repositories/organizations-users.repository");
const input_service_1 = require("./services/event-types/input.service");
const organizations_event_types_service_1 = require("./services/event-types/organizations-event-types.service");
const output_service_1 = require("./services/event-types/output.service");
const organizations_membership_service_1 = require("./services/organizations-membership.service");
const organizations_schedules_service_1 = require("./services/organizations-schedules.service");
const organizations_teams_memberships_service_1 = require("./services/organizations-teams-memberships.service");
const organizations_teams_service_1 = require("./services/organizations-teams.service");
const organizations_users_service_1 = require("./services/organizations-users-service");
const organizations_service_1 = require("./services/organizations.service");
const prisma_module_1 = require("../prisma/prisma.module");
const redis_module_1 = require("../redis/redis.module");
const stripe_module_1 = require("../stripe/stripe.module");
const users_module_1 = require("../users/users.module");
let OrganizationsModule = class OrganizationsModule {};
OrganizationsModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        prisma_module_1.PrismaModule,
        stripe_module_1.StripeModule,
        schedules_module_1.SchedulesModule_2024_06_11,
        users_module_1.UsersModule,
        redis_module_1.RedisModule,
        email_module_1.EmailModule,
        event_types_module_1.EventTypesModule_2024_06_14,
      ],
      providers: [
        organizations_repository_1.OrganizationsRepository,
        organizations_teams_repository_1.OrganizationsTeamsRepository,
        organizations_service_1.OrganizationsService,
        organizations_teams_service_1.OrganizationsTeamsService,
        memberships_repository_1.MembershipsRepository,
        organizations_schedules_service_1.OrganizationsSchedulesService,
        organizations_schedules_repository_1.OrganizationSchedulesRepository,
        organizations_users_repository_1.OrganizationsUsersRepository,
        organizations_users_service_1.OrganizationsUsersService,
        email_service_1.EmailService,
        organizations_membership_repository_1.OrganizationsMembershipRepository,
        organizations_membership_service_1.OrganizationsMembershipService,
        organizations_event_types_service_1.OrganizationsEventTypesService,
        input_service_1.InputOrganizationsEventTypesService,
        output_service_1.OutputOrganizationsEventTypesService,
        organizations_event_types_repository_1.OrganizationsEventTypesRepository,
        organizations_teams_memberships_repository_1.OrganizationsTeamsMembershipsRepository,
        organizations_teams_memberships_service_1.OrganizationsTeamsMembershipsService,
      ],
      exports: [
        organizations_service_1.OrganizationsService,
        organizations_repository_1.OrganizationsRepository,
        organizations_teams_repository_1.OrganizationsTeamsRepository,
        organizations_users_repository_1.OrganizationsUsersRepository,
        organizations_users_service_1.OrganizationsUsersService,
        organizations_membership_repository_1.OrganizationsMembershipRepository,
        organizations_membership_service_1.OrganizationsMembershipService,
        organizations_teams_memberships_repository_1.OrganizationsTeamsMembershipsRepository,
        organizations_teams_memberships_service_1.OrganizationsTeamsMembershipsService,
      ],
      controllers: [
        organizations_teams_controller_1.OrganizationsTeamsController,
        organizations_schedules_controller_1.OrganizationsSchedulesController,
        organizations_users_controller_1.OrganizationsUsersController,
        organizations_membership_controller_1.OrganizationsMembershipsController,
        organizations_event_types_controller_1.OrganizationsEventTypesController,
        organizations_teams_memberships_controller_1.OrganizationsTeamsMembershipsController,
      ],
    }),
  ],
  OrganizationsModule
);
exports.OrganizationsModule = OrganizationsModule;
//# sourceMappingURL=organizations.module.js.map
