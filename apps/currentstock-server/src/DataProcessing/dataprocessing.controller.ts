import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataProcessingService } from "./dataprocessing.service";
import { ProcessDataInput } from "../dataProcessing/ProcessDataInput";
import { ProcessDataOutput } from "../dataProcessing/ProcessDataOutput";

@swagger.ApiTags("dataProcessings")
@common.Controller("dataProcessings")
export class DataProcessingController {
  constructor(protected readonly service: DataProcessingService) {}

  @common.Get("/:id/process-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessData(
    @common.Body()
    body: ProcessDataInput[]
  ): Promise<string> {
        return this.service.ProcessData(body);
      }

  @common.Post("/process-stock-data")
  @swagger.ApiOkResponse({
    type: ProcessDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessStockData(
    @common.Body()
    body: ProcessDataInput[]
  ): Promise<ProcessDataOutput[]> {
        return this.service.ProcessStockData(body);
      }
}
