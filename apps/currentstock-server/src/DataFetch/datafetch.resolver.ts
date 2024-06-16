import * as graphql from "@nestjs/graphql";
import { FetchDataInput } from "../dataFetch/FetchDataInput";
import { FetchDataOutput } from "../dataFetch/FetchDataOutput";
import { DataFetchService } from "./datafetch.service";

export class DataFetchResolver {
  constructor(protected readonly service: DataFetchService) {}

  @graphql.Query(() => String)
  async FetchData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchData(args);
  }

  @graphql.Query(() => [FetchDataOutput])
  async FetchStockData(
    @graphql.Args()
    args: FetchDataInput
  ): Promise<FetchDataOutput[]> {
    return this.service.FetchStockData(args);
  }
}
