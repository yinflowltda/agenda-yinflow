import { CalendarsService } from "src/ee/calendars/services/calendars.service";
import { DestinationCalendarsRepository } from "src/modules/destination-calendars/destination-calendars.repository";

export declare class DestinationCalendarsService {
  private readonly calendarsService;
  private readonly destinationCalendarsRepository;
  constructor(
    calendarsService: CalendarsService,
    destinationCalendarsRepository: DestinationCalendarsRepository
  );
  updateDestinationCalendars(
    integration: string,
    externalId: string,
    userId: number
  ): Promise<{
    userId: number | null;
    integration: string;
    externalId: string;
    credentialId: number | null;
  }>;
}
