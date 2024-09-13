"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
require("dotenv/config");
const fs = require("fs");
const nest_winston_1 = require("nest-winston");
const app_1 = require("./app");
const app_module_1 = require("./app.module");
const logger_1 = require("./lib/logger");
const run = async () => {
  const app = await core_1.NestFactory.create(app_module_1.AppModule, {
    logger: nest_winston_1.WinstonModule.createLogger((0, logger_1.loggerConfig)()),
    bodyParser: false,
  });
  const logger = new common_1.Logger("App");
  try {
    (0, app_1.bootstrap)(app);
    const port = app.get(config_1.ConfigService).get("api.port", { infer: true });
    void generateSwagger(app);
    await app.listen(port);
    logger.log(`Application started on port: ${port}`);
  } catch (error) {
    console.error(error);
    logger.error("Application crashed", {
      error,
    });
  }
};
async function generateSwagger(app) {
  const logger = new common_1.Logger("App");
  logger.log(`Generating Swagger documentation...\n`);
  const config = new swagger_1.DocumentBuilder().setTitle("Cal.com v2 API").build();
  const document = swagger_1.SwaggerModule.createDocument(app, config);
  const outputFile = "./swagger/documentation.json";
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
  fs.writeFileSync(outputFile, JSON.stringify(document, null, 2), { encoding: "utf8" });
  swagger_1.SwaggerModule.setup("docs", app, document, {
    customCss: ".swagger-ui .topbar { display: none }",
  });
  logger.log(`Swagger documentation available in the "/docs" endpoint\n`);
}
run().catch((error) => {
  console.error("Failed to start Cal Platform API", { error: error.stack });
  process.exit(1);
});
//# sourceMappingURL=main.js.map
