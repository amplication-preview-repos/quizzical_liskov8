import { Injectable } from "@nestjs/common";
import { ProcessDataInput } from "../dataProcessing/ProcessDataInput";
import { ProcessDataOutput } from "../dataProcessing/ProcessDataOutput";

@Injectable()
export class DataProcessingService {
  constructor() {}
  async ProcessData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessStockData(args: ProcessDataInput[]): Promise<ProcessDataOutput[]> {
    throw new Error("Not implemented");
  }
}
