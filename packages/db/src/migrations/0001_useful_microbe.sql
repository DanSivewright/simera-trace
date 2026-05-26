ALTER TABLE "assessment_submission" ADD COLUMN "haul_truck_count" integer DEFAULT 30 NOT NULL;--> statement-breakpoint
ALTER TABLE "assessment_submission" ADD COLUMN "all_in_truck_cost_million" double precision DEFAULT 44 NOT NULL;--> statement-breakpoint
ALTER TABLE "assessment_submission" ADD COLUMN "ebitda_margin_percent" double precision DEFAULT 30 NOT NULL;--> statement-breakpoint
ALTER TABLE "assessment_submission" ADD COLUMN "cost_tkm_improvement_percent" double precision DEFAULT 5 NOT NULL;