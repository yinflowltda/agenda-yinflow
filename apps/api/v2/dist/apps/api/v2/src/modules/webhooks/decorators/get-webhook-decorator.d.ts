import { Webhook } from "@calcom/prisma/client";

export type GetWebhookReturnType = Webhook;
export declare const GetWebhook: (
  ...dataOrPipes: (
    | "id"
    | "eventTypeId"
    | "userId"
    | "teamId"
    | "createdAt"
    | "appId"
    | "secret"
    | "platformOAuthClientId"
    | "subscriberUrl"
    | "payloadTemplate"
    | "active"
    | "eventTriggers"
    | "platform"
    | import("@nestjs/common").PipeTransform<any, any>
    | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>
    | (
        | "id"
        | "eventTypeId"
        | "userId"
        | "teamId"
        | "createdAt"
        | "appId"
        | "secret"
        | "platformOAuthClientId"
        | "subscriberUrl"
        | "payloadTemplate"
        | "active"
        | "eventTriggers"
        | "platform"
      )[]
  )[]
) => ParameterDecorator;
