import { Measurement } from "../measurement/Measurement";

export type Asset = {
  createdAt: Date;
  id: string;
  measurements?: Array<Measurement>;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
