import { Button, Section, Text } from "@react-email/components";

import { BaseLayout } from "./base-layout";

export function ContactThankYouTemplate({
  fullName,
  assessmentUrl,
}: {
  fullName: string;
  assessmentUrl: string;
}) {
  return (
    <BaseLayout
      preview="Thanks for contacting Simera Trace"
      title="Thanks for your enquiry"
    >
      <Text style={styles.p}>
        Hi {fullName}, thanks for reaching out. We received your enquiry and will
        respond within one business day.
      </Text>
      <Text style={styles.p}>
        If you want a quick estimate before we speak, complete the assessment and
        we will send an indicative energy and diesel savings report.
      </Text>
      <Section style={styles.ctaWrap}>
        <Button href={assessmentUrl} style={styles.button}>
          Take the free assessment
        </Button>
      </Section>
      <Text style={styles.disclaimer}>
        Assessment estimates are indicative. Final numbers are validated through
        an on-site fuel savings trial.
      </Text>
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
  ctaWrap: {
    margin: "8px 0 18px",
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
  disclaimer: {
    color: "#667085",
    fontSize: "12px",
    lineHeight: "1.5",
    margin: "0 0 4px",
  },
};
