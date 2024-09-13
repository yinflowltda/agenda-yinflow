import { Editable } from "src/ee/event-types/event-types_2024_04_15/inputs/enums/editable";
import { BaseField } from "src/ee/event-types/event-types_2024_04_15/inputs/enums/field-type";
import { Frequency } from "src/ee/event-types/event-types_2024_04_15/inputs/enums/frequency";
import { EventTypeLocation_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/event-type-location.input";

declare class Option {
  value: string;
  label: string;
}
declare class Source {
  id: string;
  type: string;
  label: string;
  editUrl?: string;
  fieldRequired?: boolean;
}
declare class View {
  id: string;
  label: string;
  description?: string;
}
declare class OptionsInput {
  type: "address" | "text" | "phone";
  required?: boolean;
  placeholder?: string;
}
declare class VariantField {
  type: BaseField;
  name: string;
  label?: string;
  labelAsSafeHtml?: string;
  placeholder?: string;
  required?: boolean;
}
declare class Variant {
  fields: VariantField[];
}
declare class VariantsConfig {
  variants: Record<string, Variant>;
}
export declare class BookingField_2024_04_15 {
  type: BaseField;
  name: string;
  options?: Option[];
  label?: string;
  labelAsSafeHtml?: string;
  defaultLabel?: string;
  placeholder?: string;
  required?: boolean;
  getOptionsAt?: string;
  optionsInputs?: Record<string, OptionsInput>;
  variant?: string;
  variantsConfig?: VariantsConfig;
  views?: View[];
  hideWhenJustOneOption?: boolean;
  hidden?: boolean;
  editable?: Editable;
  sources?: Source[];
  disableOnPrefill?: boolean;
}
export declare class RecurringEvent_2024_04_15 {
  dtstart?: Date;
  interval: number;
  count: number;
  freq: Frequency;
  until?: Date;
  tzid?: string;
}
export declare class IntervalLimits_2024_04_15 {
  PER_DAY?: number;
  PER_WEEK?: number;
  PER_MONTH?: number;
  PER_YEAR?: number;
}
export declare class UpdateEventTypeInput_2024_04_15 {
  length?: number;
  slug?: string;
  title?: string;
  description?: string;
  hidden?: boolean;
  locations?: EventTypeLocation_2024_04_15[];
  bookingFields?: BookingField_2024_04_15[];
  disableGuests?: boolean;
  minimumBookingNotice?: number;
  beforeEventBuffer?: number;
  afterEventBuffer?: number;
  slotInterval?: number;
}
export {};
