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
exports.OrganizationsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_read_service_1 = require("../prisma/prisma-read.service");
const prisma_write_service_1 = require("../prisma/prisma-write.service");
const stripe_service_1 = require("../stripe/stripe.service");
let OrganizationsRepository = class OrganizationsRepository {
  constructor(dbRead, dbWrite, stripeService) {
    this.dbRead = dbRead;
    this.dbWrite = dbWrite;
    this.stripeService = stripeService;
  }
  async findById(organizationId) {
    return this.dbRead.prisma.team.findUnique({
      where: {
        id: organizationId,
        isOrganization: true,
      },
    });
  }
  async findByIdIncludeBilling(orgId) {
    return this.dbRead.prisma.team.findUnique({
      where: {
        id: orgId,
      },
      include: {
        platformBilling: true,
      },
    });
  }
  async createNewBillingRelation(orgId, plan) {
    const { id } = await this.stripeService.stripe.customers.create({
      metadata: {
        createdBy: "oauth_client_no_csid",
      },
    });
    await this.dbWrite.prisma.team.update({
      where: {
        id: orgId,
      },
      data: {
        platformBilling: {
          create: {
            customerId: id,
            plan: plan ? plan.toString() : "none",
          },
        },
      },
    });
    return id;
  }
  async findTeamIdFromClientId(clientId) {
    return this.dbRead.prisma.team.findFirstOrThrow({
      where: {
        platformOAuthClient: {
          some: {
            id: clientId,
          },
        },
      },
      select: {
        id: true,
      },
    });
  }
  async findPlatformOrgFromUserId(userId) {
    return this.dbRead.prisma.team.findFirstOrThrow({
      where: {
        orgProfiles: {
          some: {
            userId: userId,
          },
        },
        isPlatform: true,
        isOrganization: true,
      },
      select: {
        id: true,
        isPlatform: true,
        isOrganization: true,
      },
    });
  }
  async findOrgUser(organizationId, userId) {
    return this.dbRead.prisma.user.findUnique({
      where: {
        id: userId,
        profiles: {
          some: {
            organizationId,
          },
        },
      },
    });
  }
  async fetchOrgAdminApiStatus(organizationId) {
    return this.dbRead.prisma.organizationSettings.findUnique({
      where: {
        organizationId,
      },
      select: {
        isAdminAPIEnabled: true,
      },
    });
  }
};
OrganizationsRepository = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [
      prisma_read_service_1.PrismaReadService,
      prisma_write_service_1.PrismaWriteService,
      stripe_service_1.StripeService,
    ]),
  ],
  OrganizationsRepository
);
exports.OrganizationsRepository = OrganizationsRepository;
//# sourceMappingURL=organizations.repository.js.map
