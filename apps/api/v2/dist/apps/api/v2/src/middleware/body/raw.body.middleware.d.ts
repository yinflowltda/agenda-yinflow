/// <reference types="cookie-parser" />
import { NestMiddleware } from "@nestjs/common";
import type { Request, Response } from "express";

export declare class RawBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any): void;
}
