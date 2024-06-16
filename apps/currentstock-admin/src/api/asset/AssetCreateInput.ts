import { MeasurementCreateNestedManyWithoutAssetsInput } from "./MeasurementCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  measurements?: MeasurementCreateNestedManyWithoutAssetsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
