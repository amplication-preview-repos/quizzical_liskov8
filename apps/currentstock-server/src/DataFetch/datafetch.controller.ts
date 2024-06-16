import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataFetchService } from "./datafetch.service";
import { FetchDataInput } from "../dataFetch/FetchDataInput";
import { FetchDataOutput } from "../dataFetch/FetchDataOutput";

@swagger.ApiTags("dataFetches")
@common.Controller("dataFetches")
export class DataFetchController {
  constructor(protected readonly service: DataFetchService) {}

  @common.Get("/:id/fetch-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchData(
    @common.Body()
    body: FetchDataInput
  ): Promise<string> {
        return this.service.FetchData(body);
      }

  @common.Get("/fetch-stock-data")
  @swagger.ApiOkResponse({
    type: FetchDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchStockData(
    @common.Body()
    body: FetchDataInput
  ): Promise<FetchDataOutput[]> {
        return this.service.FetchStockData(body);
      }
}
