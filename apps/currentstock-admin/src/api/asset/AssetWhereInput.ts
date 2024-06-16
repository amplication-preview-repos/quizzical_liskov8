import { StringFilter } from "../../util/StringFilter";
import { MeasurementListRelationFilter } from "../measurement/MeasurementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssetWhereInput = {
  id?: StringFilter;
  measurements?: MeasurementListRelationFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
