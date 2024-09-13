import { JwtService as NestJwtService } from "@nestjs/jwt";

export declare class JwtService {
  private readonly nestJwtService;
  constructor(nestJwtService: NestJwtService);
  signAccessToken(payload: Payload): string;
  signRefreshToken(payload: Payload): string;
  sign(payload: Payload): string;
  getIssuedAtTime(): number;
}
type Payload = Record<string | number | symbol, any>;
export {};
