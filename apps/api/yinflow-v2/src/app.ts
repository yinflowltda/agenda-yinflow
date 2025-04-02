import "./instrument";

import type { ValidationError } from "@nestjs/common";
import { BadRequestException, ValidationPipe, VersioningType } from "@nestjs/common";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { Request } from "express";

import {
  API_VERSIONS,
  API_VERSIONS_ENUM,
  CAL_API_VERSION_HEADER,
  VERSION_2024_04_15,
  X_CAL_CLIENT_ID,
  X_CAL_PLATFORM_EMBED,
  X_CAL_SECRET_KEY,
} from "@calcom/platform-constants";

export const bootstrap = (app: NestExpressApplication): NestExpressApplication => {
  app.enableShutdownHooks();

  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor: (request: unknown) => {
      const headerVersion = (request as Request)?.headers[CAL_API_VERSION_HEADER] as string | undefined;
      if (headerVersion && API_VERSIONS.includes(headerVersion as API_VERSIONS_ENUM)) {
        return headerVersion;
      }
      return VERSION_2024_04_15;
    },
    defaultVersion: VERSION_2024_04_15,
  });

  app.enableCors({
    origin: "*",
    methods: ["GET", "PATCH", "DELETE", "HEAD", "POST", "PUT", "OPTIONS"],
    allowedHeaders: [
      X_CAL_CLIENT_ID,
      X_CAL_SECRET_KEY,
      X_CAL_PLATFORM_EMBED,
      CAL_API_VERSION_HEADER,
      "Accept",
      "Authorization",
      "Content-Type",
      "Origin",
    ],
    maxAge: 86_400,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      validationError: {
        target: true,
        value: true,
      },
      exceptionFactory(errors: ValidationError[]) {
        return new BadRequestException({ errors });
      },
    })
  );

  return app;
};
