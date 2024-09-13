import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";

export declare class DestinationCalendarsOutputDto {
  readonly userId: number;
  readonly integration: string;
  readonly externalId: string;
  readonly credentialId: number | null;
}
export declare class DestinationCalendarsOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: DestinationCalendarsOutputDto;
}
