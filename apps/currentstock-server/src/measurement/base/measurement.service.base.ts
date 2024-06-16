/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Measurement as PrismaMeasurement,
  Asset as PrismaAsset,
} from "@prisma/client";

export class MeasurementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MeasurementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.measurement.count(args);
  }

  async measurements<T extends Prisma.MeasurementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeasurementFindManyArgs>
  ): Promise<PrismaMeasurement[]> {
    return this.prisma.measurement.findMany<Prisma.MeasurementFindManyArgs>(
      args
    );
  }
  async measurement<T extends Prisma.MeasurementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeasurementFindUniqueArgs>
  ): Promise<PrismaMeasurement | null> {
    return this.prisma.measurement.findUnique(args);
  }
  async createMeasurement<T extends Prisma.MeasurementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeasurementCreateArgs>
  ): Promise<PrismaMeasurement> {
    return this.prisma.measurement.create<T>(args);
  }
  async updateMeasurement<T extends Prisma.MeasurementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeasurementUpdateArgs>
  ): Promise<PrismaMeasurement> {
    return this.prisma.measurement.update<T>(args);
  }
  async deleteMeasurement<T extends Prisma.MeasurementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeasurementDeleteArgs>
  ): Promise<PrismaMeasurement> {
    return this.prisma.measurement.delete(args);
  }

  async getAsset(parentId: string): Promise<PrismaAsset | null> {
    return this.prisma.measurement
      .findUnique({
        where: { id: parentId },
      })
      .asset();
  }
}
