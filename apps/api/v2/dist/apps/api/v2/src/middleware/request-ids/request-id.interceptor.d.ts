import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";

export declare class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<any>;
}
