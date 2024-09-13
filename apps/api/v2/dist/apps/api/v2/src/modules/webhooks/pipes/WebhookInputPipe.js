"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialWebhookInputPipe = exports.WebhookInputPipe = void 0;
const common_1 = require("@nestjs/common");
let WebhookInputPipe = class WebhookInputPipe {
  transform(value) {
    const { triggers, ...rest } = value;
    const eventTriggers = triggers;
    const parsedData = { ...rest, eventTriggers };
    return parsedData;
  }
};
WebhookInputPipe = __decorate([(0, common_1.Injectable)()], WebhookInputPipe);
exports.WebhookInputPipe = WebhookInputPipe;
let PartialWebhookInputPipe = class PartialWebhookInputPipe {
  transform(value) {
    if (value.triggers) {
      const { triggers, ...rest } = value;
      const eventTriggers = triggers;
      const parsedData = { ...rest, eventTriggers };
      return parsedData;
    }
    return { ...value, eventTriggers: undefined };
  }
};
PartialWebhookInputPipe = __decorate([(0, common_1.Injectable)()], PartialWebhookInputPipe);
exports.PartialWebhookInputPipe = PartialWebhookInputPipe;
//# sourceMappingURL=WebhookInputPipe.js.map
