import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import "dotenv/config";

import { bootstrap } from "./app";
import { AppModule } from "./app.module";

const run = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false,
  });

  const logger = new Logger("App");

  try {
    bootstrap(app);
    const port = 4000;
    await app.listen(port);
    logger.log(`Application started on port: ${port}`);
  } catch (error) {
    console.error(error);
    logger.error("Application crashed", {
      error,
    });
  }
};

run().catch((error: Error) => {
  console.error("Failed to start Cal Platform API", { error: error.stack });
  process.exit(1);
});
