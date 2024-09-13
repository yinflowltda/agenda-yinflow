/// <reference types="cookie-parser" />
import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

export declare class RewriterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): void;
}
