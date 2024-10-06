import { getEnv } from "@/env";
import { Controller, Get, Version, VERSION_NEUTRAL } from "@nestjs/common";
import { ApiExcludeController as DocsExcludeController, ApiTags as DocsTags } from "@nestjs/swagger";

@Controller()
@DocsTags("Health - development only")
@DocsExcludeController(getEnv("NODE_ENV") === "production")
export class AppController {
  @Get("health")
  @Version(VERSION_NEUTRAL)
  getHealth(): "OK" {
    return "OK";
  }
}
