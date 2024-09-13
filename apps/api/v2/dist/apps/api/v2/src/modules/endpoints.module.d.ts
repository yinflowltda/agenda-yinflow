import type { MiddlewareConsumer, NestModule } from "@nestjs/common";

export declare class EndpointsModule implements NestModule {
  configure(_consumer: MiddlewareConsumer): void;
}
