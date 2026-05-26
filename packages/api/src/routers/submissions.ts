import { assessmentSubmission, contactSubmission, db } from "@simera-trace/db";
import {
  calculateAssessmentEstimate,
  type AssessmentEstimate,
} from "@simera-trace/assessment-model";
import {
  type EmailDeliveryStatus,
  sendAssessmentNotificationToTeam,
  sendAssessmentResultsToUser,
  sendContactNotificationToTeam,
  sendContactThankYouToUser,
} from "@simera-trace/email";
import { z } from "zod";

import { publicProcedure } from "../index";

const locationOptions = ["africa", "mena", "other"] as const;
const roleOptions = [
  "mine-leadership",
  "maintenance-reliability",
  "operations",
  "other",
] as const;
const equipmentOptions = [
  "haul-trucks",
  "loaders",
  "drills",
  "gensets",
  "other",
] as const;
const dieselBandOptions = [
  "under-50000",
  "50000-150000",
  "150000-500000",
  "over-500000",
] as const;
const mineTypeOptions = ["open-pit", "underground", "both"] as const;
const oilIntervalOptions = ["250h", "500h", "calendar", "varies"] as const;

export const leadSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(40),
  mineName: z.string().min(2).max(160),
  location: z.enum(locationOptions),
  role: z.enum(roleOptions).optional(),
});

export const contactSubmissionInputSchema = leadSchema.extend({
  message: z.string().max(2000).optional(),
});

export const assessmentSubmissionInputSchema = leadSchema.extend({
  region: z.string().min(2).max(80),
  mineType: z.enum(mineTypeOptions),
  haulTruckCount: z.number().int().min(5).max(120),
  allInTruckCostMillion: z.number().min(25).max(65),
  ebitdaMarginPercent: z.number().min(10).max(55),
  costTkmImprovementPercent: z.number().min(1).max(20).default(5),
  equipment: z.array(z.enum(equipmentOptions)).min(1),
  monthlyDieselBand: z.enum(dieselBandOptions),
  oilChangeInterval: z.enum(oilIntervalOptions),
  dieselPricePerLitre: z.number().positive().max(1000).optional(),
});

function settledToStatus(
  result: PromiseSettledResult<EmailDeliveryStatus>,
): EmailDeliveryStatus {
  if (result.status === "fulfilled") {
    return result.value;
  }

  return {
    sent: false,
    skipped: false,
    error:
      result.reason instanceof Error
        ? result.reason.message
        : "Unknown email error",
  };
}

export const submissionsRouter = {
  submitContact: publicProcedure
    .input(contactSubmissionInputSchema)
    .handler(async ({ input }) => {
      const [saved] = await db
        .insert(contactSubmission)
        .values({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          mineName: input.mineName,
          location: input.location,
          role: input.role ?? null,
          message: input.message ?? null,
        })
        .returning({ id: contactSubmission.id });

      const [internalEmail, userEmail] = await Promise.allSettled([
        sendContactNotificationToTeam(input),
        sendContactThankYouToUser(input),
      ]);

      return {
        ok: true,
        submissionId: saved?.id ?? null,
        email: {
          internal: settledToStatus(internalEmail),
          user: settledToStatus(userEmail),
        },
      };
    }),

  submitAssessment: publicProcedure
    .input(assessmentSubmissionInputSchema)
    .handler(async ({ input }) => {
      const estimate: AssessmentEstimate = calculateAssessmentEstimate(input);

      const [saved] = await db
        .insert(assessmentSubmission)
        .values({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          mineName: input.mineName,
          location: input.location,
          role: input.role ?? null,
          region: input.region,
          mineType: input.mineType,
          haulTruckCount: input.haulTruckCount,
          allInTruckCostMillion: input.allInTruckCostMillion,
          ebitdaMarginPercent: input.ebitdaMarginPercent,
          costTkmImprovementPercent: input.costTkmImprovementPercent,
          equipment: input.equipment,
          monthlyDieselBand: input.monthlyDieselBand,
          oilChangeInterval: input.oilChangeInterval,
          dieselPricePerLitre: input.dieselPricePerLitre ?? null,
          estimateSnapshot: estimate,
        })
        .returning({ id: assessmentSubmission.id });

      const [internalEmail, userEmailResult] = await Promise.allSettled([
        sendAssessmentNotificationToTeam({
          ...input,
          estimate,
        }),
        sendAssessmentResultsToUser({
          ...input,
          estimate,
        }),
      ]);

      const userEmail =
        userEmailResult.status === "fulfilled"
          ? userEmailResult.value.email
          : {
              sent: false,
              skipped: false,
              error:
                userEmailResult.reason instanceof Error
                  ? userEmailResult.reason.message
                  : "Unknown email error",
            };

      return {
        ok: true,
        submissionId: saved?.id ?? null,
        estimate,
        email: {
          internal: settledToStatus(internalEmail),
          user: userEmail,
          attachment:
            userEmailResult.status === "fulfilled"
              ? {
                  included: userEmailResult.value.attachmentIncluded,
                }
              : {
                  included: false,
                },
        },
      };
    }),
};
