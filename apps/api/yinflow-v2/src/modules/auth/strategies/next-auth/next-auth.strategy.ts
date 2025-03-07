import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import type { Request } from "express";
import { getToken } from "next-auth/jwt";

import { getEnv } from "../../../../env";
import { NextAuthPassportStrategy } from "../../../../lib/passport/strategies/types";
import { UsersRepository } from "../../../users/users.repository";

@Injectable()
export class NextAuthStrategy extends PassportStrategy(NextAuthPassportStrategy, "next-auth") {
  constructor(private readonly userRepository: UsersRepository) {
    super();
  }

  async authenticate(req: Request) {
    try {
      const nextAuthSecret = getEnv("NEXTAUTH_SECRET");
      const payload = await getToken({ req, secret: nextAuthSecret });

      if (!payload) {
        throw new UnauthorizedException("Authentication token is missing or invalid.");
      }

      if (!payload.email) {
        throw new UnauthorizedException("Email not found in the authentication token.");
      }

      const user = await this.userRepository.findByEmailWithProfile(payload.email);
      if (!user) {
        throw new UnauthorizedException("User associated with the authentication token email not found.");
      }

      return this.success(user);
    } catch (error) {
      if (error instanceof Error) return this.error(error);
      return this.error(
        new InternalServerErrorException("An error occurred while authenticating the request")
      );
    }
  }
}
