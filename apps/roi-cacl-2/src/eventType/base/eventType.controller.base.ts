/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EventTypeService } from "../eventType.service";
import { EventTypeCreateInput } from "./EventTypeCreateInput";
import { EventType } from "./EventType";
import { EventTypeFindManyArgs } from "./EventTypeFindManyArgs";
import { EventTypeWhereUniqueInput } from "./EventTypeWhereUniqueInput";
import { EventTypeUpdateInput } from "./EventTypeUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { AvailabilityFindManyArgs } from "../../availability/base/AvailabilityFindManyArgs";
import { Availability } from "../../availability/base/Availability";
import { AvailabilityWhereUniqueInput } from "../../availability/base/AvailabilityWhereUniqueInput";
import { EventTypeCustomInputFindManyArgs } from "../../eventTypeCustomInput/base/EventTypeCustomInputFindManyArgs";
import { EventTypeCustomInput } from "../../eventTypeCustomInput/base/EventTypeCustomInput";
import { EventTypeCustomInputWhereUniqueInput } from "../../eventTypeCustomInput/base/EventTypeCustomInputWhereUniqueInput";
import { WebhookFindManyArgs } from "../../webhook/base/WebhookFindManyArgs";
import { Webhook } from "../../webhook/base/Webhook";
import { WebhookWhereUniqueInput } from "../../webhook/base/WebhookWhereUniqueInput";
import { WorkflowsOnEventTypeFindManyArgs } from "../../workflowsOnEventType/base/WorkflowsOnEventTypeFindManyArgs";
import { WorkflowsOnEventType } from "../../workflowsOnEventType/base/WorkflowsOnEventType";
import { WorkflowsOnEventTypeWhereUniqueInput } from "../../workflowsOnEventType/base/WorkflowsOnEventTypeWhereUniqueInput";

export class EventTypeControllerBase {
  constructor(protected readonly service: EventTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventType })
  async createEventType(
    @common.Body() data: EventTypeCreateInput
  ): Promise<EventType> {
    return await this.service.createEventType({
      data: {
        ...data,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,

        schedule: data.schedule
          ? {
              connect: data.schedule,
            }
          : undefined,

        destinationCalendar: data.destinationCalendar
          ? {
              connect: data.destinationCalendar,
            }
          : undefined,

        hashedLink: data.hashedLink
          ? {
              connect: data.hashedLink,
            }
          : undefined,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        position: true,
        locations: true,
        length: true,
        hidden: true,
        userId: true,

        team: {
          select: {
            id: true,
          },
        },

        eventName: true,
        timeZone: true,
        periodType: true,
        periodStartDate: true,
        periodEndDate: true,
        periodDays: true,
        periodCountCalendarDays: true,
        requiresConfirmation: true,
        recurringEvent: true,
        disableGuests: true,
        hideCalendarNotes: true,
        minimumBookingNotice: true,
        beforeEventBuffer: true,
        afterEventBuffer: true,
        seatsPerTimeSlot: true,
        schedulingType: true,

        schedule: {
          select: {
            id: true,
          },
        },

        price: true,
        currency: true,
        slotInterval: true,
        metadata: true,
        successRedirectUrl: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        hashedLink: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EventType] })
  @ApiNestedQuery(EventTypeFindManyArgs)
  async eventTypes(@common.Req() request: Request): Promise<EventType[]> {
    const args = plainToClass(EventTypeFindManyArgs, request.query);
    return this.service.eventTypes({
      ...args,
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        position: true,
        locations: true,
        length: true,
        hidden: true,
        userId: true,

        team: {
          select: {
            id: true,
          },
        },

        eventName: true,
        timeZone: true,
        periodType: true,
        periodStartDate: true,
        periodEndDate: true,
        periodDays: true,
        periodCountCalendarDays: true,
        requiresConfirmation: true,
        recurringEvent: true,
        disableGuests: true,
        hideCalendarNotes: true,
        minimumBookingNotice: true,
        beforeEventBuffer: true,
        afterEventBuffer: true,
        seatsPerTimeSlot: true,
        schedulingType: true,

        schedule: {
          select: {
            id: true,
          },
        },

        price: true,
        currency: true,
        slotInterval: true,
        metadata: true,
        successRedirectUrl: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        hashedLink: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async eventType(
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventType | null> {
    const result = await this.service.eventType({
      where: params,
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        position: true,
        locations: true,
        length: true,
        hidden: true,
        userId: true,

        team: {
          select: {
            id: true,
          },
        },

        eventName: true,
        timeZone: true,
        periodType: true,
        periodStartDate: true,
        periodEndDate: true,
        periodDays: true,
        periodCountCalendarDays: true,
        requiresConfirmation: true,
        recurringEvent: true,
        disableGuests: true,
        hideCalendarNotes: true,
        minimumBookingNotice: true,
        beforeEventBuffer: true,
        afterEventBuffer: true,
        seatsPerTimeSlot: true,
        schedulingType: true,

        schedule: {
          select: {
            id: true,
          },
        },

        price: true,
        currency: true,
        slotInterval: true,
        metadata: true,
        successRedirectUrl: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        hashedLink: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEventType(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() data: EventTypeUpdateInput
  ): Promise<EventType | null> {
    try {
      return await this.service.updateEventType({
        where: params,
        data: {
          ...data,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,

          schedule: data.schedule
            ? {
                connect: data.schedule,
              }
            : undefined,

          destinationCalendar: data.destinationCalendar
            ? {
                connect: data.destinationCalendar,
              }
            : undefined,

          hashedLink: data.hashedLink
            ? {
                connect: data.hashedLink,
              }
            : undefined,
        },
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          position: true,
          locations: true,
          length: true,
          hidden: true,
          userId: true,

          team: {
            select: {
              id: true,
            },
          },

          eventName: true,
          timeZone: true,
          periodType: true,
          periodStartDate: true,
          periodEndDate: true,
          periodDays: true,
          periodCountCalendarDays: true,
          requiresConfirmation: true,
          recurringEvent: true,
          disableGuests: true,
          hideCalendarNotes: true,
          minimumBookingNotice: true,
          beforeEventBuffer: true,
          afterEventBuffer: true,
          seatsPerTimeSlot: true,
          schedulingType: true,

          schedule: {
            select: {
              id: true,
            },
          },

          price: true,
          currency: true,
          slotInterval: true,
          metadata: true,
          successRedirectUrl: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          hashedLink: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEventType(
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventType | null> {
    try {
      return await this.service.deleteEventType({
        where: params,
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          position: true,
          locations: true,
          length: true,
          hidden: true,
          userId: true,

          team: {
            select: {
              id: true,
            },
          },

          eventName: true,
          timeZone: true,
          periodType: true,
          periodStartDate: true,
          periodEndDate: true,
          periodDays: true,
          periodCountCalendarDays: true,
          requiresConfirmation: true,
          recurringEvent: true,
          disableGuests: true,
          hideCalendarNotes: true,
          minimumBookingNotice: true,
          beforeEventBuffer: true,
          afterEventBuffer: true,
          seatsPerTimeSlot: true,
          schedulingType: true,

          schedule: {
            select: {
              id: true,
            },
          },

          price: true,
          currency: true,
          slotInterval: true,
          metadata: true,
          successRedirectUrl: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          hashedLink: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        emailVerified: true,
        password: true,
        bio: true,
        avatar: true,
        timeZone: true,
        weekStart: true,
        startTime: true,
        endTime: true,
        bufferTime: true,
        hideBranding: true,
        theme: true,
        createdDate: true,
        trialEndsAt: true,
        defaultScheduleId: true,
        completedOnboarding: true,
        locale: true,
        timeFormat: true,
        twoFactorSecret: true,
        twoFactorEnabled: true,
        identityProvider: true,
        identityProviderId: true,
        invitedTo: true,
        plan: true,
        brandColor: true,
        darkBrandColor: true,
        away: true,
        allowDynamicBooking: true,
        metadata: true,
        verified: true,
        role: true,
        disableImpersonation: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        id: true,
        uid: true,

        user: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        title: true,
        description: true,
        customInputs: true,
        startTime: true,
        endTime: true,
        location: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        paid: true,
        cancellationReason: true,
        rejectionReason: true,
        dynamicEventSlugRef: true,
        dynamicGroupSlugRef: true,
        rescheduled: true,
        fromReschedule: true,
        recurringEventId: true,
        smsReminderNumber: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        dailyRef: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  async connectBookings(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  async updateBookings(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  async disconnectBookings(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/availability")
  @ApiNestedQuery(AvailabilityFindManyArgs)
  async findAvailability(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Availability[]> {
    const query = plainToClass(AvailabilityFindManyArgs, request.query);
    const results = await this.service.findAvailability(params.id, {
      ...query,
      select: {
        id: true,

        user: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        days: true,
        startTime: true,
        endTime: true,
        date: true,

        schedule: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/availability")
  async connectAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/availability")
  async updateAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/availability")
  async disconnectAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/customInputs")
  @ApiNestedQuery(EventTypeCustomInputFindManyArgs)
  async findCustomInputs(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventTypeCustomInput[]> {
    const query = plainToClass(EventTypeCustomInputFindManyArgs, request.query);
    const results = await this.service.findCustomInputs(params.id, {
      ...query,
      select: {
        id: true,

        eventType: {
          select: {
            id: true,
          },
        },

        label: true,
        type: true,
        required: true,
        placeholder: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customInputs")
  async connectCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customInputs")
  async updateCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customInputs")
  async disconnectCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/webhooks")
  @ApiNestedQuery(WebhookFindManyArgs)
  async findWebhooks(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Webhook[]> {
    const query = plainToClass(WebhookFindManyArgs, request.query);
    const results = await this.service.findWebhooks(params.id, {
      ...query,
      select: {
        id: true,
        subscriberUrl: true,
        payloadTemplate: true,
        createdAt: true,
        active: true,
        eventTriggers: true,

        user: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        appField: {
          select: {
            id: true,
          },
        },

        secret: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/webhooks")
  async connectWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/webhooks")
  async updateWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/webhooks")
  async disconnectWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/workflows")
  @ApiNestedQuery(WorkflowsOnEventTypeFindManyArgs)
  async findWorkflows(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<WorkflowsOnEventType[]> {
    const query = plainToClass(WorkflowsOnEventTypeFindManyArgs, request.query);
    const results = await this.service.findWorkflows(params.id, {
      ...query,
      select: {
        id: true,

        workflow: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workflows")
  async connectWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflows")
  async updateWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflows")
  async disconnectWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/roi-dto")
  @swagger.ApiOkResponse({
    type: Booking,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async RoiAPI(
    @common.Query()
    query: BookingFindManyArgs,
    @common.Body()
    body: string
  ): Promise<Booking> {
    const args = {
      prop2: query,
      property1: body,
    };
    return this.service.RoiAPI(args);
  }
}
