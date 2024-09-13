import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { ZodError } from "zod";

export declare class ZodExceptionFilter implements ExceptionFilter {
  private readonly logger;
  catch(error: ZodError, host: ArgumentsHost): void;
}
