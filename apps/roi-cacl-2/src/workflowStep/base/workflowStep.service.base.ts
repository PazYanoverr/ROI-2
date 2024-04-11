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
  WorkflowStep as PrismaWorkflowStep,
  WorkflowReminder as PrismaWorkflowReminder,
  Workflow as PrismaWorkflow,
} from "@prisma/client";

export class WorkflowStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkflowStepCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workflowStep.count(args);
  }

  async workflowSteps<T extends Prisma.WorkflowStepFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepFindManyArgs>
  ): Promise<PrismaWorkflowStep[]> {
    return this.prisma.workflowStep.findMany<Prisma.WorkflowStepFindManyArgs>(
      args
    );
  }
  async workflowStep<T extends Prisma.WorkflowStepFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepFindUniqueArgs>
  ): Promise<PrismaWorkflowStep | null> {
    return this.prisma.workflowStep.findUnique(args);
  }
  async createWorkflowStep<T extends Prisma.WorkflowStepCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepCreateArgs>
  ): Promise<PrismaWorkflowStep> {
    return this.prisma.workflowStep.create<T>(args);
  }
  async updateWorkflowStep<T extends Prisma.WorkflowStepUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepUpdateArgs>
  ): Promise<PrismaWorkflowStep> {
    return this.prisma.workflowStep.update<T>(args);
  }
  async deleteWorkflowStep<T extends Prisma.WorkflowStepDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepDeleteArgs>
  ): Promise<PrismaWorkflowStep> {
    return this.prisma.workflowStep.delete(args);
  }

  async findWorkflowReminders(
    parentId: number,
    args: Prisma.WorkflowReminderFindManyArgs
  ): Promise<PrismaWorkflowReminder[]> {
    return this.prisma.workflowStep
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workflowReminders(args);
  }

  async getWorkflow(parentId: number): Promise<PrismaWorkflow | null> {
    return this.prisma.workflowStep
      .findUnique({
        where: { id: parentId },
      })
      .workflow();
  }
}
