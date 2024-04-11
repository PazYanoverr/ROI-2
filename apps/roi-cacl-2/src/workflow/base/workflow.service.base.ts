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
  Workflow as PrismaWorkflow,
  WorkflowStep as PrismaWorkflowStep,
  WorkflowsOnEventType as PrismaWorkflowsOnEventType,
  User as PrismaUser,
} from "@prisma/client";

export class WorkflowServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WorkflowCountArgs, "select">): Promise<number> {
    return this.prisma.workflow.count(args);
  }

  async workflows<T extends Prisma.WorkflowFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowFindManyArgs>
  ): Promise<PrismaWorkflow[]> {
    return this.prisma.workflow.findMany<Prisma.WorkflowFindManyArgs>(args);
  }
  async workflow<T extends Prisma.WorkflowFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowFindUniqueArgs>
  ): Promise<PrismaWorkflow | null> {
    return this.prisma.workflow.findUnique(args);
  }
  async createWorkflow<T extends Prisma.WorkflowCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowCreateArgs>
  ): Promise<PrismaWorkflow> {
    return this.prisma.workflow.create<T>(args);
  }
  async updateWorkflow<T extends Prisma.WorkflowUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowUpdateArgs>
  ): Promise<PrismaWorkflow> {
    return this.prisma.workflow.update<T>(args);
  }
  async deleteWorkflow<T extends Prisma.WorkflowDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowDeleteArgs>
  ): Promise<PrismaWorkflow> {
    return this.prisma.workflow.delete(args);
  }

  async findSteps(
    parentId: number,
    args: Prisma.WorkflowStepFindManyArgs
  ): Promise<PrismaWorkflowStep[]> {
    return this.prisma.workflow
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .steps(args);
  }

  async findActiveOn(
    parentId: number,
    args: Prisma.WorkflowsOnEventTypeFindManyArgs
  ): Promise<PrismaWorkflowsOnEventType[]> {
    return this.prisma.workflow
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .activeOn(args);
  }

  async getUser(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.workflow
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
