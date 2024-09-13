import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class SelectedCalendarOutputDto {
  readonly userId: number;
  readonly integration: string;
  readonly externalId: string;
  readonly credentialId: number | null;
}
export declare class SelectedCalendarOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: SelectedCalendarOutputDto;
}
