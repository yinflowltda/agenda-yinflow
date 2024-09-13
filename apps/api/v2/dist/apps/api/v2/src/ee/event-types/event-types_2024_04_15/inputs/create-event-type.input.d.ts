import { EventTypeLocation_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/event-type-location.input";

export declare const CREATE_EVENT_LENGTH_EXAMPLE = 60;
export declare const CREATE_EVENT_SLUG_EXAMPLE = "cooking-class";
export declare const CREATE_EVENT_TITLE_EXAMPLE = "Learn the secrets of masterchief!";
export declare const CREATE_EVENT_DESCRIPTION_EXAMPLE =
  "Discover the culinary wonders of the Argentina by making the best flan ever!";
export declare class CreateEventTypeInput_2024_04_15 {
  length: number;
  slug: string;
  title: string;
  description?: string;
  hidden?: boolean;
  locations?: EventTypeLocation_2024_04_15[];
  disableGuests?: boolean;
  slotInterval?: number;
  minimumBookingNotice?: number;
  beforeEventBuffer?: number;
  afterEventBuffer?: number;
}
