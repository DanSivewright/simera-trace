import {
  bigserial,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const contactSubmission = pgTable(
  "contact_submission",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    mineName: text("mine_name").notNull(),
    location: text("location").notNull(),
    role: text("role"),
    message: text("message"),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("contact_submission_created_at_idx").on(table.createdAt),
    index("contact_submission_email_idx").on(table.email),
  ],
);

export const assessmentSubmission = pgTable(
  "assessment_submission",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    mineName: text("mine_name").notNull(),
    location: text("location").notNull(),
    role: text("role"),
    region: text("region").notNull(),
    mineType: text("mine_type").notNull(),
    haulTruckCount: integer("haul_truck_count").default(30).notNull(),
    allInTruckCostMillion: doublePrecision("all_in_truck_cost_million")
      .default(44)
      .notNull(),
    ebitdaMarginPercent: doublePrecision("ebitda_margin_percent")
      .default(30)
      .notNull(),
    costTkmImprovementPercent: doublePrecision("cost_tkm_improvement_percent")
      .default(5)
      .notNull(),
    equipment: jsonb("equipment").$type<string[]>().notNull(),
    monthlyDieselBand: text("monthly_diesel_band").notNull(),
    oilChangeInterval: text("oil_change_interval").notNull(),
    dieselPricePerLitre: doublePrecision("diesel_price_per_litre"),
    estimateSnapshot: jsonb("estimate_snapshot").notNull(),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("assessment_submission_created_at_idx").on(table.createdAt),
    index("assessment_submission_email_idx").on(table.email),
  ],
);
