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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const schedules_service_1 = require("../schedules/schedules_2024_04_15/services/schedules.service");
const api_versions_1 = require("../../lib/api-versions");
const get_user_decorator_1 = require("../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../modules/auth/guards/permissions/permissions.guard");
const update_managed_user_input_1 = require("../../modules/users/inputs/update-managed-user.input");
const users_service_1 = require("../../modules/users/services/users.service");
const users_repository_1 = require("../../modules/users/users.repository");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_types_1 = require("@calcom/platform-types");
let MeController = class MeController {
  constructor(usersRepository, schedulesService, usersService) {
    this.usersRepository = usersRepository;
    this.schedulesService = schedulesService;
    this.usersService = usersService;
  }
  async getMe(user) {
    const organization = this.usersService.getUserMainProfile(user)?.organization;
    const me = platform_types_1.userSchemaResponse.parse(
      organization
        ? {
            ...user,
            organizationId: organization.id,
            organization: {
              id: organization.id,
              isPlatform: organization.isPlatform,
            },
          }
        : user
    );
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: me,
    };
  }
  async updateMe(user, bodySchedule) {
    const updatedUser = await this.usersRepository.update(user.id, bodySchedule);
    if (bodySchedule.timeZone && user.defaultScheduleId) {
      await this.schedulesService.updateUserSchedule(user, user.defaultScheduleId, {
        timeZone: bodySchedule.timeZone,
      });
    }
    const me = platform_types_1.userSchemaResponse.parse(updatedUser);
    return {
      status: platform_constants_1.SUCCESS_STATUS,
      data: me,
    };
  }
};
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.PROFILE_READ]),
    openapi.ApiResponse({ status: 200, type: require("./outputs/get-me.output").GetMeOutput }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  MeController.prototype,
  "getMe",
  null
);
__decorate(
  [
    (0, common_1.Patch)("/"),
    (0, permissions_decorator_1.Permissions)([platform_constants_1.PROFILE_WRITE]),
    openapi.ApiResponse({ status: 200, type: require("./outputs/update-me.output").UpdateMeOutput }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_managed_user_input_1.UpdateManagedUserInput]),
    __metadata("design:returntype", Promise),
  ],
  MeController.prototype,
  "updateMe",
  null
);
MeController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/me",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, swagger_1.ApiTags)("Me"),
    __metadata("design:paramtypes", [
      users_repository_1.UsersRepository,
      schedules_service_1.SchedulesService_2024_04_15,
      users_service_1.UsersService,
    ]),
  ],
  MeController
);
exports.MeController = MeController;
//# sourceMappingURL=me.controller.js.map
