import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
class FetchDataInput {
    @Field(() => Date)
    @Type(() => Date)
    dateFrom!: Date;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    dateTo?: Date;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    assets!: string;
}

export { FetchDataInput as FetchDataInput };