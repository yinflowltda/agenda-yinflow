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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../users.repository");
let UsersService = class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async getByUsernames(usernames) {
    const users = await Promise.all(
      usernames.map((username) => this.usersRepository.findByUsername(username))
    );
    const usersFiltered = [];
    for (const user of users) {
      if (user) {
        usersFiltered.push(user);
      }
    }
    return users;
  }
  getUserMainProfile(user) {
    return (
      user?.movedToProfile ||
      user.profiles?.find((p) => p.organizationId === user.organizationId) ||
      user.profiles?.[0]
    );
  }
  getUserMainOrgId(user) {
    return this.getUserMainProfile(user)?.organizationId ?? user.organizationId;
  }
  getUserProfileByOrgId(user, organizationId) {
    return user.profiles?.find((p) => p.organizationId === organizationId);
  }
};
UsersService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [users_repository_1.UsersRepository])],
  UsersService
);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
