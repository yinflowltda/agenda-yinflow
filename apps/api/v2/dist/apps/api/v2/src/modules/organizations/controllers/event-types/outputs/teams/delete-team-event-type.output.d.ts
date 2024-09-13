import { ApiResponseWithoutData, TeamEventTypeOutput_2024_06_14 } from "@calcom/platform-types";

export declare class DeleteTeamEventTypeOutput extends ApiResponseWithoutData {
  data: Pick<TeamEventTypeOutput_2024_06_14, "id" | "title">;
}
