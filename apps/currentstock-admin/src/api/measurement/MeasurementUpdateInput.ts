import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type MeasurementUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  date?: Date | null;
  percentChange?: number | null;
};
