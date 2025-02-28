import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { BookingFindManyArgs } from "../booking/base/BookingFindManyArgs";
import { EnumReminderMailReminderType } from "../reminderMail/base/EnumReminderMailReminderType";

@ArgsType()
class RoiDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    property1!: string;

    @Field(() => BookingFindManyArgs)
    @ApiProperty({
        required: true,
        type: () => BookingFindManyArgs
    })
    @Type(() => BookingFindManyArgs)
    prop2!: BookingFindManyArgs;

    @Field(() => EnumReminderMailReminderType)
    @ApiProperty({
        required: true,
        enum: EnumReminderMailReminderType
    })
    @Type(() => EnumReminderMailReminderType)
    prop3!: EnumReminderMailReminderType;
}

export { RoiDto as RoiDto };