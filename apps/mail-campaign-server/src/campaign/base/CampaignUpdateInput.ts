/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignReportUpdateManyWithoutCampaignsInput } from "./CampaignReportUpdateManyWithoutCampaignsInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CampaignUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CampaignReportUpdateManyWithoutCampaignsInput,
  })
  @ValidateNested()
  @Type(() => CampaignReportUpdateManyWithoutCampaignsInput)
  @IsOptional()
  @Field(() => CampaignReportUpdateManyWithoutCampaignsInput, {
    nullable: true,
  })
  campaignReports?: CampaignReportUpdateManyWithoutCampaignsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
}

export { CampaignUpdateInput as CampaignUpdateInput };
