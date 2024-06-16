import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MeasurementWhereInput = {
  asset?: AssetWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  percentChange?: FloatNullableFilter;
};
