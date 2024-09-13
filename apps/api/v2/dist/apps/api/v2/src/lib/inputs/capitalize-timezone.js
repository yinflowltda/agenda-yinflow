"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalizeTimeZone = void 0;
const class_transformer_1 = require("class-transformer");
function CapitalizeTimeZone() {
  return (0, class_transformer_1.Transform)(({ value }) => {
    if (typeof value === "string") {
      const parts = value.split("/");
      const normalizedParts = parts.map((part) =>
        part
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join("_")
      );
      let normalizedTimeZone = normalizedParts.join("/");
      const specialCases = ["GMT", "EST", "UTC"];
      specialCases.forEach((specialCase) => {
        const regex = new RegExp(`(^|[^a-zA-Z])(${specialCase})([^a-zA-Z]|$)`, "gi");
        normalizedTimeZone = normalizedTimeZone.replace(regex, (match, p1, p2, p3) => {
          return `${p1}${specialCase}${p3}`;
        });
      });
      return normalizedTimeZone;
    }
    return value;
  });
}
exports.CapitalizeTimeZone = CapitalizeTimeZone;
//# sourceMappingURL=capitalize-timezone.js.map
