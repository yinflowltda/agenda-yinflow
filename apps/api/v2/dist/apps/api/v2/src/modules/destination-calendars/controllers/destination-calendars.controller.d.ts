import { DestinationCalendarsInputBodyDto } from "src/modules/destination-calendars/inputs/destination-calendars.input";
import { DestinationCalendarsOutputResponseDto } from "src/modules/destination-calendars/outputs/destination-calendars.output";
import { DestinationCalendarsService } from "src/modules/destination-calendars/services/destination-calendars.service";
import { UserWithProfile } from "src/modules/users/users.repository";

export declare class DestinationCalendarsController {
  private readonly destinationCalendarsService;
  constructor(destinationCalendarsService: DestinationCalendarsService);
  updateDestinationCalendars(
    input: DestinationCalendarsInputBodyDto,
    user: UserWithProfile
  ): Promise<DestinationCalendarsOutputResponseDto>;
}
