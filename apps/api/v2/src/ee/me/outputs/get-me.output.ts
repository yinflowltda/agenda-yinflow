import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmptyObject, ValidateNested } from "class-validator";
import { MeOutput } from "src/ee/me/outputs/me.output";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export class GetMeOutput {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ApiProperty({
    type: MeOutput,
  })
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeOutput)
  data!: MeOutput;
}
