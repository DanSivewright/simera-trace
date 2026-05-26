import { z } from "zod";

export const locationOptions = ["africa", "mena", "other"] as const;
export const roleOptions = [
  "mine-leadership",
  "maintenance-reliability",
  "operations",
  "other",
] as const;
export const mineTypeOptions = ["open-pit", "underground", "both"] as const;
export const equipmentOptions = [
  "haul-trucks",
  "loaders",
  "drills",
  "gensets",
  "other",
] as const;
export const dieselBandOptions = [
  "under-50000",
  "50000-150000",
  "150000-500000",
  "over-500000",
] as const;
export const oilIntervalOptions = ["250h", "500h", "calendar", "varies"] as const;

export const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(120),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number").max(40),
  mineName: z.string().min(2, "Enter your mine or company name").max(160),
  location: z.enum(locationOptions, {
    error: "Select a location",
  }),
  role: z.enum(roleOptions).optional(),
});

export const contactSubmissionSchema = leadSchema.extend({
  message: z.string().max(2000).optional(),
});

export const assessmentSubmissionSchema = leadSchema.extend({
  region: z.string().min(2, "Enter your region").max(80),
  mineType: z.enum(mineTypeOptions, {
    error: "Select mine type",
  }),
  haulTruckCount: z
    .number({ message: "Enter haul truck count" })
    .int()
    .min(5, "Minimum fleet size is 5 trucks")
    .max(120, "Maximum fleet size is 120 trucks"),
  allInTruckCostMillion: z
    .number({ message: "Enter annual all-in truck cost" })
    .min(25, "Minimum all-in truck cost is R25M")
    .max(65, "Maximum all-in truck cost is R65M"),
  ebitdaMarginPercent: z
    .number({ message: "Enter EBITDA margin" })
    .min(10, "Minimum EBITDA margin is 10%")
    .max(55, "Maximum EBITDA margin is 55%"),
  costTkmImprovementPercent: z
    .number({ message: "Enter cost/t-km improvement" })
    .min(1)
    .max(20)
    .default(5),
  equipment: z.array(z.enum(equipmentOptions)).min(1, "Select at least one equipment type"),
  monthlyDieselBand: z.enum(dieselBandOptions, {
    error: "Select monthly diesel usage",
  }),
  oilChangeInterval: z.enum(oilIntervalOptions, {
    error: "Select your current oil interval",
  }),
  dieselPricePerLitre: z
    .number({ message: "Enter a valid diesel price" })
    .positive("Diesel price must be greater than 0")
    .max(1000)
    .optional(),
});

export type ContactSubmissionValues = z.infer<typeof contactSubmissionSchema>;
export type AssessmentSubmissionValues = z.infer<typeof assessmentSubmissionSchema>;

export const roleLabels: Record<(typeof roleOptions)[number], string> = {
  "mine-leadership": "Mine leadership",
  "maintenance-reliability": "Maintenance and reliability",
  operations: "Operations",
  other: "Other",
};

export const locationLabels: Record<(typeof locationOptions)[number], string> = {
  africa: "Africa",
  mena: "Middle East and North Africa",
  other: "Other",
};

export const mineTypeLabels: Record<(typeof mineTypeOptions)[number], string> = {
  "open-pit": "Open-pit",
  underground: "Underground",
  both: "Both",
};

export const equipmentLabels: Record<(typeof equipmentOptions)[number], string> = {
  "haul-trucks": "Haul trucks",
  loaders: "Loaders",
  drills: "Drills",
  gensets: "Gensets",
  other: "Other",
};

export const dieselBandLabels: Record<(typeof dieselBandOptions)[number], string> = {
  "under-50000": "Under 50,000 L/month",
  "50000-150000": "50,000 - 150,000 L/month",
  "150000-500000": "150,000 - 500,000 L/month",
  "over-500000": "Over 500,000 L/month",
};

export const oilIntervalLabels: Record<(typeof oilIntervalOptions)[number], string> = {
  "250h": "250h",
  "500h": "500h",
  calendar: "By calendar schedule",
  varies: "Varies by fleet",
};

export const defaultCostTkmImprovementPercent = 5;
