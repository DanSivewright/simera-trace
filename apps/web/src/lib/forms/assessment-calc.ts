import {
  calculateAssessmentEstimate as calculateSharedAssessmentEstimate,
  type AssessmentEstimate,
} from "@simera-trace/assessment-model";

import type { AssessmentSubmissionValues } from "./schemas";

export type { AssessmentEstimate };

export function calculateAssessmentEstimate(values: AssessmentSubmissionValues) {
  return calculateSharedAssessmentEstimate(values);
}
