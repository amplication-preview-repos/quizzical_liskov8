import { Module } from "@nestjs/common";
import { DataFetchService } from "./datafetch.service";
import { DataFetchController } from "./datafetch.controller";
import { DataFetchResolver } from "./datafetch.resolver";

@Module({
  controllers: [DataFetchController],
  providers: [DataFetchService, DataFetchResolver],
  exports: [DataFetchService],
})
export class DataFetchModule {}
