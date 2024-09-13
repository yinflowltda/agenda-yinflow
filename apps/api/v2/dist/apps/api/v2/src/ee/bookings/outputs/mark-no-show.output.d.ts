import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

declare class Attendee {
  email: string;
  noShow: boolean;
}
declare class HandleMarkNoShowData {
  message: string;
  noShowHost?: boolean;
  attendees?: Attendee[];
}
export declare class MarkNoShowOutput {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: HandleMarkNoShowData;
}
export {};
