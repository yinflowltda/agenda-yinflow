/// <reference types="cookie-parser" />
import { NestMiddleware } from "@nestjs/common";
import { Request, NextFunction } from "express";

import { Response } from "@calcom/platform-types";

export declare class AppLoggerMiddleware implements NestMiddleware {
  private logger;
  use(request: Request, response: Response, next: NextFunction): void;
}
