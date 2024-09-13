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
exports.GCalService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const apps_repository_1 = require("../apps.repository");
const zod_1 = require("zod");
let GCalService = class GCalService {
  constructor(appsRepository) {
    this.appsRepository = appsRepository;
    this.logger = new common_1.Logger("GcalService");
    this.gcalResponseSchema = zod_1.z.object({
      client_id: zod_1.z.string(),
      client_secret: zod_1.z.string(),
    });
  }
  async getOAuthClient(redirectUri) {
    this.logger.log("Getting Google Calendar OAuth Client");
    const app = await this.appsRepository.getAppBySlug("google-calendar");
    if (!app) {
      throw new common_1.NotFoundException();
    }
    const { client_id, client_secret } = this.gcalResponseSchema.parse(app.keys);
    const oAuth2Client = new googleapis_1.google.auth.OAuth2(client_id, client_secret, redirectUri);
    return oAuth2Client;
  }
};
GCalService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [apps_repository_1.AppsRepository])],
  GCalService
);
exports.GCalService = GCalService;
//# sourceMappingURL=gcal.service.js.map
