import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmptyObject, ValidateNested } from "class-validator";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

import { OrgMembershipOutputDto } from "../../../organizations/outputs/organization-membership/membership.output";

export class GetOrgMembership {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ApiProperty({
    type: OrgMembershipOutputDto,
  })
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrgMembershipOutputDto)
  data!: OrgMembershipOutputDto;
}
