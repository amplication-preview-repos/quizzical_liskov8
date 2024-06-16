/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Measurement } from "./Measurement";
import { MeasurementCountArgs } from "./MeasurementCountArgs";
import { MeasurementFindManyArgs } from "./MeasurementFindManyArgs";
import { MeasurementFindUniqueArgs } from "./MeasurementFindUniqueArgs";
import { CreateMeasurementArgs } from "./CreateMeasurementArgs";
import { UpdateMeasurementArgs } from "./UpdateMeasurementArgs";
import { DeleteMeasurementArgs } from "./DeleteMeasurementArgs";
import { Asset } from "../../asset/base/Asset";
import { MeasurementService } from "../measurement.service";
@graphql.Resolver(() => Measurement)
export class MeasurementResolverBase {
  constructor(protected readonly service: MeasurementService) {}

  async _measurementsMeta(
    @graphql.Args() args: MeasurementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Measurement])
  async measurements(
    @graphql.Args() args: MeasurementFindManyArgs
  ): Promise<Measurement[]> {
    return this.service.measurements(args);
  }

  @graphql.Query(() => Measurement, { nullable: true })
  async measurement(
    @graphql.Args() args: MeasurementFindUniqueArgs
  ): Promise<Measurement | null> {
    const result = await this.service.measurement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Measurement)
  async createMeasurement(
    @graphql.Args() args: CreateMeasurementArgs
  ): Promise<Measurement> {
    return await this.service.createMeasurement({
      ...args,
      data: {
        ...args.data,

        asset: args.data.asset
          ? {
              connect: args.data.asset,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Measurement)
  async updateMeasurement(
    @graphql.Args() args: UpdateMeasurementArgs
  ): Promise<Measurement | null> {
    try {
      return await this.service.updateMeasurement({
        ...args,
        data: {
          ...args.data,

          asset: args.data.asset
            ? {
                connect: args.data.asset,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Measurement)
  async deleteMeasurement(
    @graphql.Args() args: DeleteMeasurementArgs
  ): Promise<Measurement | null> {
    try {
      return await this.service.deleteMeasurement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Asset, {
    nullable: true,
    name: "asset",
  })
  async getAsset(@graphql.Parent() parent: Measurement): Promise<Asset | null> {
    const result = await this.service.getAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
