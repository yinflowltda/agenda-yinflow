import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class DeletedCalendarCredentialsOutputDto {
  readonly id: number;
  readonly type: string;
  readonly userId: number | null;
  readonly teamId: number | null;
  readonly appId: string | null;
  readonly invalid: boolean | null;
}
export declare class DeletedCalendarCredentialsOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: DeletedCalendarCredentialsOutputDto;
}
