/// <reference types="cookie-parser" />
import { ConfigService } from "@nestjs/config";
import type { Request } from "express";
import { NextAuthPassportStrategy } from "src/lib/passport/strategies/types";
import { UsersRepository } from "src/modules/users/users.repository";

declare const NextAuthStrategy_base: new (...args: any[]) => NextAuthPassportStrategy;
export declare class NextAuthStrategy extends NextAuthStrategy_base {
  private readonly userRepository;
  private readonly config;
  constructor(userRepository: UsersRepository, config: ConfigService);
  authenticate(req: Request): Promise<void>;
}
export {};
