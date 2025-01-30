import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsISO8601,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";

export enum Status_2024_04_15 {
  upcoming = "upcoming",
  recurring = "recurring",
  past = "past",
  cancelled = "cancelled",
  unconfirmed = "unconfirmed",
  pending = "pending",
}

type BookingStatus = `${Status_2024_04_15}`;

class Filters {
  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @ApiPropertyOptional({ type: [Number] })
  teamsIds?: number[];

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @ApiPropertyOptional({ type: [Number] })
  userIds?: number[];

  @IsEnum(Status_2024_04_15)
  @ApiProperty({ enum: Status_2024_04_15 })
  status!: BookingStatus;

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @ApiPropertyOptional({ type: [Number] })
  eventTypeIds?: number[];
}

export class GetBookingsInput_2024_04_15 {
  @ValidateNested({ each: true })
  @Type(() => Filters)
  @ApiProperty({ type: Filters })
  filters!: Filters;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings by the attendee's email address.",
    example: "example@domain.com",
  })
  attendeeEmail?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings by the attendee's name.",
    example: "John Doe",
  })
  attendeeName?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.split(",").map((eventTypeId: string) => parseInt(eventTypeId));
    }
    return value;
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1, { message: "eventTypeIds must contain at least 1 event type id" })
  @ApiProperty({
    type: String,
    required: false,
    description:
      "Filter bookings by event type ids belonging to the user. Event type ids must be separated by a comma.",
    example: "?eventTypeIds=100,200",
  })
  eventTypeIds?: number[];

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings by event type id belonging to the user.",
    example: "?eventTypeId=100",
  })
  eventTypeId?: number;

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.split(",").map((teamId: string) => parseInt(teamId));
    }
    return value;
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1, { message: "teamIds must contain at least 1 team id" })
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings by team ids that user is part of. Team ids must be separated by a comma.",
    example: "?teamIds=50,60",
  })
  teamsIds?: number[];

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings by team id that user is part of",
    example: "?teamId=50",
  })
  teamId?: number;

  @IsOptional()
  @IsISO8601({ strict: true }, { message: "fromDate must be a valid ISO 8601 date." })
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings with start after this date string.",
    example: "?afterStart=2025-03-07T10:00:00.000Z",
  })
  afterStart?: string;

  @IsOptional()
  @IsISO8601({ strict: true }, { message: "toDate must be a valid ISO 8601 date." })
  @ApiProperty({
    type: String,
    required: false,
    description: "Filter bookings with end before this date string.",
    example: "?beforeEnd=2025-03-07T11:00:00.000Z",
  })
  beforeEnd?: string;

  @IsOptional()
  @IsEnum(SortOrder, {
    message: 'SortStart must be either "asc" or "desc".',
  })
  @ApiProperty({
    required: false,
    description: "Sort results by their start time in ascending or descending order.",
    example: "?sortStart=asc OR ?sortStart=desc",
    enum: SortOrder,
  })
  sortStart?: SortOrderType;

  @IsOptional()
  @IsEnum(SortOrder, {
    message: 'SortEnd must be either "asc" or "desc".',
  })
  @ApiProperty({
    required: false,
    description: "Sort results by their end time in ascending or descending order.",
    example: "?sortEnd=asc OR ?sortEnd=desc",
    enum: SortOrder,
  })
  sortEnd?: SortOrderType;

  @IsOptional()
  @IsEnum(SortOrder, {
    message: 'SortCreated must be either "asc" or "desc".',
  })
  @ApiProperty({
    required: false,
    description:
      "Sort results by their creation time (when booking was made) in ascending or descending order.",
    example: "?sortEnd=asc OR ?sortEnd=desc",
    enum: SortOrder,
  })
  sortCreated?: SortOrderType;

  @ApiProperty({ required: false, description: "The number of items to return", example: 10 })
  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @Min(1)
  @Max(250)
  @IsOptional()
  @ApiPropertyOptional({ description: "Maximum number of bookings to retrieve.", example: 50 })
  limit?: number;

  @ApiProperty({ required: false, description: "The number of items to skip", example: 0 })
  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional({ description: "Cursor for pagination.", example: 10, nullable: true })
  cursor?: number | null;
}

export class CancelBookingInput_2024_04_15 {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ description: "Booking ID to cancel.", example: 123 })
  id?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  uid?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    example: true,
  })
  allRemainingBookings?: boolean;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Reason for cancellation.",
    example: "Scheduling conflict",
  })
  cancellationReason?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  seatReferenceUid?: string;
}
