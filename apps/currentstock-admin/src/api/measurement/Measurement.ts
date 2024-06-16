import { Asset } from "../asset/Asset";

export type Measurement = {
  asset?: Asset | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  percentChange: number | null;
  updatedAt: Date;
};
