"use client";

import * as Button from "@simera-trace/ui/components/button";
import Link from "next/link";

import type { AssessmentEstimate } from "@/lib/forms/assessment-calc";

function formatRange(low: number, high: number, suffix: string) {
  return `${Math.round(low).toLocaleString()} - ${Math.round(high).toLocaleString()} ${suffix}`;
}

function formatCurrencyRange(low?: number | null, high?: number | null) {
  if (low == null || high == null) return null;
  return `${Math.round(low).toLocaleString()} - ${Math.round(high).toLocaleString()}`;
}

export function AssessmentReport({ estimate }: { estimate: AssessmentEstimate }) {
  const currencyRange = formatCurrencyRange(
    estimate.annualSavingsLowCurrency,
    estimate.annualSavingsHighCurrency,
  );
  const financial = estimate.financialImpact;

  return (
    <section className="flex flex-col gap-6 rounded-20 border border-stroke-soft-200 p-6">
      <div className="flex flex-col gap-2">
        <p className="text-label-sm text-text-sub-600">Assessment results</p>
        <h2 className="text-text-strong-950 text-title-h4">
          Your indicative savings estimate
        </h2>
        <p className="text-paragraph-sm text-text-sub-600">
          Cost/t-km financial impact plus diesel and validation insights.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">Total annual haulage cost</p>
          <p className="text-paragraph-lg text-text-strong-950">
            {Math.round(financial.totalAnnualHaulageCost).toLocaleString()}
          </p>
        </div>
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">5% cost/t-km improvement</p>
          <p className="text-paragraph-lg text-success-base">
            {Math.round(financial.directAnnualSaving).toLocaleString()}
          </p>
        </div>
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">Revenue equivalent</p>
          <p className="text-paragraph-lg text-text-strong-950">
            {Math.round(financial.revenueEquivalent).toLocaleString()}
          </p>
        </div>
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">Enterprise value created</p>
          <p className="text-paragraph-lg text-success-base">
            {Math.round(financial.enterpriseValueLow).toLocaleString()} -{" "}
            {Math.round(financial.enterpriseValueHigh).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">Diesel savings</p>
          <p className="text-paragraph-lg text-text-strong-950">Up to 8%</p>
        </div>
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">Typical range</p>
          <p className="text-paragraph-lg text-text-strong-950">5-8%</p>
        </div>
        <div className="rounded-12 bg-bg-weak-50 p-4">
          <p className="text-label-xs text-text-soft-400">Equipment outcome</p>
          <p className="text-paragraph-lg text-text-strong-950">Less wear</p>
        </div>
      </div>

      <div className="rounded-12 border border-stroke-soft-200 bg-bg-weak-50 p-4">
        <p className="text-label-xs text-text-soft-400">Financial cascade</p>
        <div className="mt-2 grid gap-2">
          <p className="text-paragraph-xs text-text-sub-600">
            Haulage cost (before):{" "}
            <span className="text-text-strong-950">
              {Math.round(financial.totalAnnualHaulageCost).toLocaleString()}
            </span>
          </p>
          <p className="text-paragraph-xs text-text-sub-600">
            Cost/t-km improvement:{" "}
            <span className="text-success-base">
              -{Math.round(financial.directAnnualSaving).toLocaleString()}
            </span>
          </p>
          <p className="text-paragraph-xs text-text-sub-600">
            Revenue equivalent at {financial.ebitdaMarginPercent}% margin:{" "}
            <span className="text-text-strong-950">
              {Math.round(financial.revenueEquivalent).toLocaleString()}
            </span>
          </p>
          <p className="text-paragraph-xs text-text-sub-600">
            Enterprise value at 6-8x EBITDA:{" "}
            <span className="text-success-base">
              {Math.round(financial.enterpriseValueLow).toLocaleString()} -{" "}
              {Math.round(financial.enterpriseValueHigh).toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-paragraph-sm text-text-sub-600">
          Monthly diesel savings estimate:{" "}
          <span className="text-text-strong-950">
            {formatRange(
              estimate.monthlySavingsLowLitres,
              estimate.monthlySavingsHighLitres,
              "L/month",
            )}
          </span>
        </p>
        <p className="text-paragraph-sm text-text-sub-600">
          Annual diesel savings estimate:{" "}
          <span className="text-text-strong-950">
            {formatRange(
              estimate.annualSavingsLowLitres,
              estimate.annualSavingsHighLitres,
              "L/year",
            )}
          </span>
        </p>
        {currencyRange ? (
          <p className="text-paragraph-sm text-text-sub-600">
            Indicative annual value:{" "}
            <span className="text-text-strong-950">{currencyRange}</span>
          </p>
        ) : null}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {estimate.costTkmScenarios.map((scenario) => (
          <div
            key={scenario.key}
            className="rounded-12 border border-stroke-soft-200 bg-bg-weak-50 p-4"
          >
            <p className="text-label-xs text-text-soft-400">{scenario.label}</p>
            <p className="text-paragraph-lg text-text-strong-950">
              {scenario.improvementRange}
            </p>
            <p className="text-paragraph-xs text-text-sub-600">{scenario.summary}</p>
          </div>
        ))}
      </div>

      <div className="rounded-12 border border-stroke-soft-200 p-4">
        <p className="text-label-xs text-text-soft-400">Mechanism highlights</p>
        <div className="mt-2 grid gap-2">
          {estimate.mechanismHighlights.map((mechanism) => (
            <p key={mechanism.key} className="text-paragraph-xs text-text-sub-600">
              <span className="text-text-strong-950">{mechanism.title}:</span>{" "}
              {mechanism.effect} ({mechanism.signalTimescale})
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-12 border border-stroke-soft-200 p-4">
        <p className="text-label-xs text-text-soft-400">Validation protocol</p>
        <div className="mt-2 grid gap-2">
          {estimate.validationPhases.map((phase) => (
            <p key={phase.phase} className="text-paragraph-xs text-text-sub-600">
              <span className="text-text-strong-950">
                {phase.phase} ({phase.duration}) - {phase.title}:
              </span>{" "}
              {phase.summary}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-12 border border-stroke-soft-200 bg-bg-weak-50 p-4">
        <p className="text-paragraph-xs text-text-soft-400">
          Indicative only. Savings are validated on site and vary by fleet,
          operating profile, and load conditions.
        </p>
      </div>

      <Button.Root asChild>
        <Link href="/contact">Start your fuel savings trial</Link>
      </Button.Root>
    </section>
  );
}
