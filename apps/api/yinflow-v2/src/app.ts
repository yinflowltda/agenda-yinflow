import type { ValidationError } from "@nestjs/common";
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import type { NestExpressApplication } from "@nestjs/platform-express";

import {
  CAL_API_VERSION_HEADER,
  X_CAL_CLIENT_ID,
  X_CAL_PLATFORM_EMBED,
  X_CAL_SECRET_KEY,
} from "@calcom/platform-constants";

export const bootstrap = (app: NestExpressApplication): NestExpressApplication => {
  app.enableShutdownHooks();

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
