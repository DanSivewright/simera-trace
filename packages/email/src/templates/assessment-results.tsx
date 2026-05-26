import { Button, Section, Text } from "@react-email/components";

import type { AssessmentEstimatePayload } from "../types";
import { BaseLayout } from "./base-layout";

function formatRange(low: number, high: number, unit: string) {
  return `${Math.round(low).toLocaleString()} - ${Math.round(high).toLocaleString()} ${unit}`;
}

function formatCurrencyRange(low?: number | null, high?: number | null) {
  if (low == null || high == null) return null;
  return `${Math.round(low).toLocaleString()} - ${Math.round(high).toLocaleString()}`;
}

export function AssessmentResultsTemplate({
  fullName,
  estimate,
  contactUrl,
}: {
  fullName: string;
  estimate: AssessmentEstimatePayload;
  contactUrl: string;
}) {
  const monthlyLitres = formatRange(
    estimate.monthlySavingsLowLitres,
    estimate.monthlySavingsHighLitres,
    "L/month",
  );
  const annualLitres = formatRange(
    estimate.annualSavingsLowLitres,
    estimate.annualSavingsHighLitres,
    "L/year",
  );
  const annualCurrency = formatCurrencyRange(
    estimate.annualSavingsLowCurrency,
    estimate.annualSavingsHighCurrency,
  );

  return (
    <BaseLayout
      preview="Your Simera Trace assessment estimate"
      title="Your indicative savings estimate"
    >
      <Text style={styles.p}>Hi {fullName}, here is your estimated savings range.</Text>
      <Section style={styles.statCard}>
        <Text style={styles.label}>Annual haulage cost</Text>
        <Text style={styles.value}>
          {Math.round(estimate.financialImpact.totalAnnualHaulageCost).toLocaleString()}
        </Text>
        <Text style={styles.label}>Direct annual saving (cost/t-km)</Text>
        <Text style={styles.value}>
          {Math.round(estimate.financialImpact.directAnnualSaving).toLocaleString()}
        </Text>
        <Text style={styles.label}>Revenue equivalent</Text>
        <Text style={styles.value}>
          {Math.round(estimate.financialImpact.revenueEquivalent).toLocaleString()}
        </Text>
        <Text style={styles.label}>Enterprise value (6x-8x)</Text>
        <Text style={styles.value}>
          {Math.round(estimate.financialImpact.enterpriseValueLow).toLocaleString()} -{" "}
          {Math.round(estimate.financialImpact.enterpriseValueHigh).toLocaleString()}
        </Text>
        <Text style={styles.label}>Monthly diesel savings</Text>
        <Text style={styles.value}>{monthlyLitres}</Text>
        <Text style={styles.label}>Annual diesel savings</Text>
        <Text style={styles.value}>{annualLitres}</Text>
        {annualCurrency ? (
          <>
            <Text style={styles.label}>Indicative annual value</Text>
            <Text style={styles.value}>
              {annualCurrency}
              {estimate.dieselPricePerLitre != null
                ? ` (at ${estimate.dieselPricePerLitre.toFixed(2)} per litre)`
                : ""}
            </Text>
          </>
        ) : null}
      </Section>
      <Text style={styles.p}>
        Typical diesel savings are in the 5-8% range, with up to 8% possible
        depending on load and operating profile.
      </Text>
      <Text style={styles.p}>
        This estimate is indicative only and should be validated through an on-site
        fuel savings trial.
      </Text>
      <Section style={styles.ctaWrap}>
        <Button href={contactUrl} style={styles.button}>
          Start your fuel savings trial
        </Button>
      </Section>
    </BaseLayout>
  );
}

const styles = {
  p: {
    color: "#0f172a",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0 0 14px",
  },
  statCard: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    margin: "0 0 16px",
    padding: "16px",
  },
  label: {
    color: "#475467",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.03em",
    margin: "0 0 2px",
    textTransform: "uppercase" as const,
  },
  value: {
    color: "#0f172a",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "1.5",
    margin: "0 0 12px",
  },
  ctaWrap: {
    margin: "8px 0 10px",
  },
  button: {
    backgroundColor: "#1d4ed8",
    borderRadius: "10px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    padding: "12px 16px",
    textDecoration: "none",
  },
};
