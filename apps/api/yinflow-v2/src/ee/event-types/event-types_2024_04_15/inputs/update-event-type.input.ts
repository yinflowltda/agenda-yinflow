import { Type } from "class-transformer";
import {
  IsString,
  IsBoolean,
  IsOptional,
  ValidateNested,
  Min,
  IsInt,
  IsEnum,
  IsArray,
  IsDate,
  IsNumber,
} from "class-validator";

import { Editable } from "./enums/editable";
import { BaseField } from "./enums/field-type";
import { Frequency } from "./enums/frequency";
import { EventTypeLocation_2024_04_15 } from "./event-type-location.input";

// note(Lauris): We will gradually expose more properties if any customer needs them.
// Just uncomment any below when requested. Go to bottom of file to see UpdateEventTypeInput.

class Option {
  @IsString()
  value!: string;

  @IsString()
  label!: string;
}

class Source {
  @IsString()
  id!: string;

  @IsString()
  type!: string;

  @IsString()
  label!: string;

  @IsOptional()
  @IsString()
  editUrl?: string;

  @IsOptional()
  @IsBoolean()
  fieldRequired?: boolean;
}

class View {
  @IsString()
  id!: string;

  @IsString()
  label!: string;

  @IsOptional()
  @IsString()
  description?: string;
}

class OptionsInput {
  @IsString()
  type!: "address" | "text" | "phone";

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsString()
  placeholder?: string;
}

class VariantField {
  @IsString()
  type!: BaseField;

  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  labelAsSafeHtml?: string;

  @IsOptional()
  @IsString()
  placeholder?: string;

  @IsOptional()
  @IsBoolean()
  required?: boolean;
}

class Variant {
  @ValidateNested({ each: true })
  @Type(() => VariantField)
  fields!: VariantField[];
}

class VariantsConfig {
  variants!: Record<string, Variant>;
}

export class BookingField_2024_04_15 {
  @IsEnum(BaseField)
  type!: BaseField;

  @IsString()
  name!: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Option)
  options?: Option[];

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  labelAsSafeHtml?: string;

  @IsOptional()
  @IsString()
  defaultLabel?: string;

  @IsOptional()
  @IsString()
  placeholder?: string;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsString()
  getOptionsAt?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionsInput)
  optionsInputs?: Record<string, OptionsInput>;

  @IsOptional()
  @IsString()
  variant?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => VariantsConfig)
  variantsConfig?: VariantsConfig;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => View)
  views?: View[];

  @IsOptional()
  @IsBoolean()
  hideWhenJustOneOption?: boolean;

  @IsOptional()
  @IsBoolean()
  hidden?: boolean;

  @IsOptional()
  @IsEnum(Editable)
  editable?: Editable;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Source)
  sources?: Source[];

  @IsOptional()
  @IsBoolean()
  disableOnPrefill?: boolean;
}

export class RecurringEvent_2024_04_15 {
  @IsDate()
  @IsOptional()
  dtstart?: Date;

  @IsInt()
  interval!: number;

  @IsInt()
  count!: number;

  @IsEnum(Frequency)
  freq!: Frequency;

  @IsDate()
  @IsOptional()
  until?: Date;

  @IsString()
  @IsOptional()
  tzid?: string;
}

export class IntervalLimits_2024_04_15 {
  @IsNumber()
  @IsOptional()
  PER_DAY?: number;

  @IsNumber()
  @IsOptional()
  PER_WEEK?: number;

  @IsNumber()
  @IsOptional()
  PER_MONTH?: number;

  @IsNumber()
  @IsOptional()
  PER_YEAR?: number;
}

export class UpdateEventTypeInput_2024_04_15 {
  @IsInt()
  @Min(1)
  @IsOptional()
  length?: number;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  hidden?: boolean;

  @ValidateNested({ each: true })
  @Type(() => EventTypeLocation_2024_04_15)
  @IsOptional()
  locations?: EventTypeLocation_2024_04_15[];

  // @IsInt()
  // @IsOptional()
  // position?: number;

  // @IsInt()
  // @IsOptional()
  // offsetStart?: number;

  // @IsInt()
  // @IsOptional()
  // userId?: number;

  // @IsInt()
  // @IsOptional()
  // profileId?: number;

  // @IsInt()
  // @IsOptional()
  // teamId?: number;

  // @IsString()
  // @IsOptional()
  // eventName?: string;

  // @IsInt()
  // @IsOptional()
  // parentId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookingField_2024_04_15)
  bookingFields?: BookingField_2024_04_15[];

  // @IsString()
  // @IsOptional()
  // timeZone?: string;

  // @IsEnum(PeriodType)
  // @IsOptional()
  // periodType?: PeriodType; -> import { PeriodType } from "@/ee/event-types/inputs/enums/period-type";

  // @IsDate()
  // @IsOptional()
  // periodStartDate?: Date;

  // @IsDate()
  // @IsOptional()
  // periodEndDate?: Date;

  // @IsInt()
  // @IsOptional()
  // periodDays?: number;

  // @IsBoolean()
  // @IsOptional()
  // periodCountCalendarDays?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // lockTimeZoneToggleOnBookingPage?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // requiresConfirmation?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // requiresBookerEmailVerification?: boolean;

  // @ValidateNested()
  // @Type(() => RecurringEvent)
  // @IsOptional()
  // recurringEvent?: RecurringEvent;

  @IsBoolean()
  @IsOptional()
  disableGuests?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // hideCalendarNotes?: boolean;

  @IsInt()
  @Min(0)
  @IsOptional()
  minimumBookingNotice?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  beforeEventBuffer?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  afterEventBuffer?: number;

  // @IsInt()
  // @IsOptional()
  // seatsPerTimeSlot?: number;

  // @IsBoolean()
  // @IsOptional()
  // onlyShowFirstAvailableSlot?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // seatsShowAttendees?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // seatsShowAvailabilityCount?: boolean;

  // @IsEnum(SchedulingType)
  // @IsOptional()
  // schedulingType?: SchedulingType; -> import { SchedulingType } from "@/ee/event-types/inputs/enums/scheduling-type";

  // @IsInt()
  // @IsOptional()
  // scheduleId?: number;

  // @IsInt()
  // @IsOptional()
  // price?: number;

  // @IsString()
  // @IsOptional()
  // currency?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  slotInterval?: number;

  // @IsString()
  // @IsOptional()
  // @IsUrl()
  // successRedirectUrl?: string;

  // @ValidateNested()
  // @Type(() => IntervalLimits)
  // @IsOptional()
  // bookingLimits?: IntervalLimits;

  // @ValidateNested()
  // @Type(() => IntervalLimits)
  // @IsOptional()
  // durationLimits?: IntervalLimits;

  // @IsBoolean()
  // @IsOptional()
  // isInstantEvent?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // assignAllTeamMembers?: boolean;

  // @IsBoolean()
  // @IsOptional()
  // useEventTypeDestinationCalendarEmail?: boolean;

  // @IsInt()
  // @IsOptional()
  // secondaryEmailId?: number;
}
