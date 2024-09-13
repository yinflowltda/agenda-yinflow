import { Membership } from "@calcom/prisma/client";

export type GetMembershipReturnType = Membership;
export declare const GetMembership: (
  ...dataOrPipes: (
    | "id"
    | "userId"
    | "teamId"
    | "role"
    | "disableImpersonation"
    | "accepted"
    | import("@nestjs/common").PipeTransform<any, any>
    | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>
    | ("id" | "userId" | "teamId" | "role" | "disableImpersonation" | "accepted")[]
  )[]
) => ParameterDecorator;
