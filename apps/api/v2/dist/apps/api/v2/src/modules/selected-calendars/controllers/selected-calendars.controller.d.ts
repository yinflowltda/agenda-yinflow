import { CalendarsRepository } from "src/ee/calendars/calendars.repository";
import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import {
  SelectedCalendarsInputDto,
  SelectedCalendarsQueryParamsInputDto,
} from "src/modules/selected-calendars/inputs/selected-calendars.input";
import { SelectedCalendarOutputResponseDto } from "src/modules/selected-calendars/outputs/selected-calendars.output";
import { SelectedCalendarsRepository } from "src/modules/selected-calendars/selected-calendars.repository";
import { UserWithProfile } from "src/modules/users/users.repository";

export declare class SelectedCalendarsController {
  private readonly calendarsRepository;
  private readonly selectedCalendarsRepository;
  private readonly calendarsService;
  constructor(
    calendarsRepository: CalendarsRepository,
    selectedCalendarsRepository: SelectedCalendarsRepository,
    calendarsService: CalendarsService
  );
  addSelectedCalendar(
    input: SelectedCalendarsInputDto,
    user: UserWithProfile
  ): Promise<SelectedCalendarOutputResponseDto>;
  removeSelectedCalendar(
    queryParams: SelectedCalendarsQueryParamsInputDto,
    user: UserWithProfile
  ): Promise<SelectedCalendarOutputResponseDto>;
}
