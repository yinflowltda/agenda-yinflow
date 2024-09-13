"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
async function copyNestSwagger() {
  const monorepoRoot = path.resolve(__dirname, "../../../../");
  const nodeModulesNestjs = path.resolve(__dirname, "../node_modules/@nestjs");
  const swaggerModulePath = "@nestjs/swagger";
  const sourceDir = path.join(monorepoRoot, "node_modules", swaggerModulePath);
  const targetDir = path.join(nodeModulesNestjs, "swagger");
  if (!(await fs.pathExists(targetDir))) {
    try {
      await fs.ensureDir(nodeModulesNestjs);
      await fs.copy(sourceDir, targetDir);
    } catch (error) {
      console.error("Failed to copy @nestjs/swagger:", error);
    }
  }
}
copyNestSwagger();
//# sourceMappingURL=copy-swagger-module.js.map
