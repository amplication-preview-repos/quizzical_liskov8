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
import { MeasurementUpdateManyWithoutAssetsInput } from "./MeasurementUpdateManyWithoutAssetsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumAssetTypeField } from "./EnumAssetTypeField";

@InputType()
class AssetUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MeasurementUpdateManyWithoutAssetsInput,
  })
  @ValidateNested()
  @Type(() => MeasurementUpdateManyWithoutAssetsInput)
  @IsOptional()
  @Field(() => MeasurementUpdateManyWithoutAssetsInput, {
    nullable: true,
  })
  measurements?: MeasurementUpdateManyWithoutAssetsInput;

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
    enum: EnumAssetTypeField,
  })
  @IsEnum(EnumAssetTypeField)
  @IsOptional()
  @Field(() => EnumAssetTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { AssetUpdateInput as AssetUpdateInput };
