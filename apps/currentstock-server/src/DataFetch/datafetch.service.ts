import { Injectable } from "@nestjs/common";
import { FetchDataInput } from "../dataFetch/FetchDataInput";
import { FetchDataOutput } from "../dataFetch/FetchDataOutput";

@Injectable()
export class DataFetchService {
  constructor() {}
  async FetchData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchStockData(args: FetchDataInput): Promise<FetchDataOutput[]> {
    throw new Error("Not implemented");
  }
}
