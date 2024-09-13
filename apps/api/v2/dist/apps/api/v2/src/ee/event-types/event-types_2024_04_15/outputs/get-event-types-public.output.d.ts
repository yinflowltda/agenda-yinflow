import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class PublicEventType {
  id: number;
  length: number;
  slug: string;
  title: string;
  description?: string | null;
}
export declare class GetEventTypesPublicOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: PublicEventType[];
}
export {};
