import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class ProcessDataInput {
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

export { ProcessDataInput as ProcessDataInput };