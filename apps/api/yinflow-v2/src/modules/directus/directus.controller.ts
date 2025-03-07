import { Controller, Get, Param } from "@nestjs/common";

import { API_VERSIONS_VALUES } from "../../lib/api-versions";
import { DirectusService } from "./directus.service";

@Controller({
  path: "/v2/directus",
  version: API_VERSIONS_VALUES,
})
export class DirectusController {
  constructor(private readonly supabaseService: DirectusService) {}

  @Get("/pro_professionals/:calUserId")
  async getProProfessionals(@Param("calUserId") calUserId: string): Promise<any> {
    return this.supabaseService.getProProfessionals(calUserId);
  }

  @Get("/pro_professional_companies/:proProfessionalId")
  async get(@Param("proProfessionalId") proProfessionalId: string): Promise<any> {
    return this.supabaseService.getProProfessionalsCompanies(proProfessionalId);
  }
}
