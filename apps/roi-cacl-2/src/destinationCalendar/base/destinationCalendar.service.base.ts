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
  DestinationCalendar as PrismaDestinationCalendar,
  User as PrismaUser,
  Booking as PrismaBooking,
  EventType as PrismaEventType,
  Credential as PrismaCredential,
} from "@prisma/client";

export class DestinationCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DestinationCalendarCountArgs, "select">
  ): Promise<number> {
    return this.prisma.destinationCalendar.count(args);
  }

  async destinationCalendars<T extends Prisma.DestinationCalendarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarFindManyArgs>
  ): Promise<PrismaDestinationCalendar[]> {
    return this.prisma.destinationCalendar.findMany<Prisma.DestinationCalendarFindManyArgs>(
      args
    );
  }
  async destinationCalendar<T extends Prisma.DestinationCalendarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarFindUniqueArgs>
  ): Promise<PrismaDestinationCalendar | null> {
    return this.prisma.destinationCalendar.findUnique(args);
  }
  async createDestinationCalendar<
    T extends Prisma.DestinationCalendarCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarCreateArgs>
  ): Promise<PrismaDestinationCalendar> {
    return this.prisma.destinationCalendar.create<T>(args);
  }
  async updateDestinationCalendar<
    T extends Prisma.DestinationCalendarUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarUpdateArgs>
  ): Promise<PrismaDestinationCalendar> {
    return this.prisma.destinationCalendar.update<T>(args);
  }
  async deleteDestinationCalendar<
    T extends Prisma.DestinationCalendarDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarDeleteArgs>
  ): Promise<PrismaDestinationCalendar> {
    return this.prisma.destinationCalendar.delete(args);
  }

  async getUser(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getBooking(parentId: number): Promise<PrismaBooking | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .booking();
  }

  async getEventType(parentId: number): Promise<PrismaEventType | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getCredential(parentId: number): Promise<PrismaCredential | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .credential();
  }
}
