import * as graphql from "@nestjs/graphql";
import { ProcessDataInput } from "../dataProcessing/ProcessDataInput";
import { ProcessDataOutput } from "../dataProcessing/ProcessDataOutput";
import { DataProcessingService } from "./dataprocessing.service";

export class DataProcessingResolver {
  constructor(protected readonly service: DataProcessingService) {}

  @graphql.Query(() => String)
  async ProcessData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessData(args);
  }

  @graphql.Mutation(() => [ProcessDataOutput])
  async ProcessStockData(
    @graphql.Args()
    args: ProcessDataInput[]
  ): Promise<ProcessDataOutput[]> {
    return this.service.ProcessStockData(args);
  }
}
