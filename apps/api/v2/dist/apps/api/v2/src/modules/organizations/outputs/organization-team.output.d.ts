import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";
import { OrgTeamOutputDto } from "@calcom/platform-types";

export declare class OrgMeTeamOutputDto extends OrgTeamOutputDto {
  readonly accepted: boolean;
}
export declare class OrgTeamsOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: OrgTeamOutputDto[];
}
export declare class OrgMeTeamsOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: OrgTeamOutputDto[];
}
export declare class OrgTeamOutputResponseDto {
  status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data: OrgTeamOutputDto;
}
