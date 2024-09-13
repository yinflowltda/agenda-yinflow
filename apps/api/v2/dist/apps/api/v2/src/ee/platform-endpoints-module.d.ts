import type { MiddlewareConsumer, NestModule } from "@nestjs/common";

export declare class PlatformEndpointsModule implements NestModule {
  configure(_consumer: MiddlewareConsumer): void;
}
