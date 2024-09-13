import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";

import { TRPCError } from "@calcom/platform-libraries";

export declare class TRPCExceptionFilter implements ExceptionFilter {
  private readonly logger;
  catch(exception: TRPCError, host: ArgumentsHost): void;
}
