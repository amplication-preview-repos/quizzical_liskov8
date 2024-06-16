import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type MeasurementCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  date?: Date | null;
  percentChange?: number | null;
};
