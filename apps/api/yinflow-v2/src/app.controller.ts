import { Controller, Get, Param, UseGuards, Version, VERSION_NEUTRAL } from "@nestjs/common";

import { ApiAuthGuard } from "./modules/auth/guards/api-auth/api-auth.guard";

const SUPABASE_URL = process.env.SUPABASE_BASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

@Controller()
export class AppController {
  @Get("health")
  @Version(VERSION_NEUTRAL)
  getHealth(): "OK" {
    return "OK";
  }

  @Get("/supabase/:scope/:eq")
  @UseGuards(ApiAuthGuard)
  @Version(VERSION_NEUTRAL)
  async getSupabase(@Param("scope") scope: string, @Param("eq") eq: string): Promise<any> {
    const supabaseResponse = await fetch(`${SUPABASE_URL}/${scope}?select=${eq}`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
      },
    });

    return await supabaseResponse.json();
  }

  @Get()
  @Version(VERSION_NEUTRAL)
  getRoot(): string {
    return `{"message":"Welcome to Cal.com API V2 - docs are at https://developer.cal.com/api}`;
  }
}
