import { isTeamOwner } from "@calcom/lib/server/queries/teams";
import { TeamRepository } from "@calcom/lib/server/repository/team";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../trpc";
import { deleteRemindersOfActiveOnIds } from "../workflows/util";
import type { TDeleteInputSchema } from "./delete.schema";

type DeleteOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TDeleteInputSchema;
};

export const deleteHandler = async ({ ctx, input }: DeleteOptions) => {
  if (!(await isTeamOwner(ctx.user?.id, input.teamId))) throw new TRPCError({ code: "UNAUTHORIZED" });

  return await TeamRepository.deleteById({ id: input.teamId });
};

// cancel/delete all workflowReminders of the removed team if the realted booking doesn't belong to another active team (org teams only)
async function deleteWorkflowRemindersOfRemovedTeam(teamId: number) {
  const team = await prisma.team.findFirst({
    where: {
      id: teamId,
    },
  });

  if (team?.parentId) {
    const activeWorkflowsOnTeam = await prisma.workflow.findMany({
      where: {
        teamId: team.parentId,
        OR: [
          {
            activeOnTeams: {
              some: {
                teamId: team.id,
              },
            },
          },
          {
            isActiveOnAll: true,
          },
        ],
      },
      select: {
        steps: true,
        activeOnTeams: true,
        isActiveOnAll: true,
      },
    });

    for (const workflow of activeWorkflowsOnTeam) {
      const workflowSteps = workflow.steps;
      let remainingActiveOnIds = [];

      if (workflow.isActiveOnAll) {
        const allRemainingOrgTeams = await prisma.team.findMany({
          where: {
            parentId: team.parentId,
            id: {
              not: team.id,
            },
          },
        });
        remainingActiveOnIds = allRemainingOrgTeams.map((team) => team.id);
      } else {
        remainingActiveOnIds = workflow.activeOnTeams
          .filter((activeOn) => activeOn.teamId !== team.id)
          .map((activeOn) => activeOn.teamId);
      }
      deleteRemindersOfActiveOnIds({
        removedActiveOnIds: [team.id],
        workflowSteps,
        isOrg: true,
        activeOnIds: remainingActiveOnIds,
      });
    }
  }
}

export default deleteHandler;
