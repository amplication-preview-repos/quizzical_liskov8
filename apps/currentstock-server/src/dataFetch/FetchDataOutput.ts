import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("FetchDataOutputObject")
class FetchDataOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    asset!: string;

    @Field(() => [Number])
    @ApiProperty({
        required: true,
        type: () => [Number]
    })
    @Type(() => Number)
    measurements!: number;
}

export { FetchDataOutput as FetchDataOutput };