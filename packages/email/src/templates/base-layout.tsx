import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export function BaseLayout({
  preview,
  title,
  children,
}: {
  preview: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.brand}>Simera Trace</Text>
            <Text style={styles.title}>{title}</Text>
          </Section>
          <Section style={styles.content}>{children}</Section>
          <Hr style={styles.hr} />
          <Text style={styles.footer}>
            Simera Trace fuel savings trial communications
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f4f6f8",
    margin: "0",
    padding: "24px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    border: "1px solid #e4e7ec",
    margin: "0 auto",
    maxWidth: "640px",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "24px 28px",
  },
  brand: {
    color: "#bfdbfe",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    margin: "0 0 10px",
    textTransform: "uppercase" as const,
  },
  title: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "1.3",
    margin: "0",
  },
  content: {
    padding: "24px 28px 12px",
  },
  hr: {
    borderColor: "#e4e7ec",
    margin: "0 28px",
  },
  footer: {
    color: "#667085",
    fontSize: "12px",
    lineHeight: "1.4",
    margin: "14px 28px 24px",
  },
};
