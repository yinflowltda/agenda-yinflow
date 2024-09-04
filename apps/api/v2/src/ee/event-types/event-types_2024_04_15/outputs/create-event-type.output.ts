import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmptyObject, ValidateNested } from "class-validator";
import { EventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/event-type.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export class CreateEventTypeOutput {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ApiProperty({
    type: EventTypeOutput,
  })
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EventTypeOutput)
  data!: EventTypeOutput;
}
