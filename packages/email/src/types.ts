import type { AssessmentEstimate } from "@simera-trace/assessment-model";

export type LeadDetails = {
  fullName: string;
  email: string;
  phone: string;
  mineName: string;
  location: string;
  role?: string | null;
};

export type ContactSubmissionPayload = LeadDetails & {
  message?: string | null;
};

export type AssessmentEstimatePayload = AssessmentEstimate;

export type AssessmentSubmissionPayload = LeadDetails & {
  region: string;
  mineType: "open-pit" | "underground" | "both";
  equipment: string[];
  monthlyDieselBand: string;
  oilChangeInterval: string;
  haulTruckCount: number;
  allInTruckCostMillion: number;
  ebitdaMarginPercent: number;
  costTkmImprovementPercent: number;
  estimate: AssessmentEstimatePayload;
};

export type EmailDeliveryStatus = {
  sent: boolean;
  skipped: boolean;
  id?: string;
  error?: string;
  reason?: string;
};
