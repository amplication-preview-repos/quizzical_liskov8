import { Measurement as TMeasurement } from "../api/measurement/Measurement";

export const MEASUREMENT_TITLE_FIELD = "id";

export const MeasurementTitle = (record: TMeasurement): string => {
  return record.id?.toString() || String(record.id);
};
