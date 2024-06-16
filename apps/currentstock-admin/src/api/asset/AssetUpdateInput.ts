import { MeasurementUpdateManyWithoutAssetsInput } from "./MeasurementUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  measurements?: MeasurementUpdateManyWithoutAssetsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
