import { Section, Text } from "@react-email/components";

import { BaseLayout } from "./base-layout";

export function AssessmentInternalTemplate({
  fullName,
  email,
  phone,
  mineName,
  location,
  region,
  mineType,
  equipment,
  monthlyDieselBand,
  oilChangeInterval,
}: {
  fullName: string;
  email: string;
  phone: string;
  mineName: string;
  location: string;
  region: string;
  mineType: string;
  equipment: string[];
  monthlyDieselBand: string;
  oilChangeInterval: string;
}) {
  return (
    <BaseLayout
      preview={`New assessment submission from ${fullName}`}
      title="New assessment submission"
    >
      <Section style={styles.card}>
        <Text style={styles.row}>
          <strong>Name:</strong> {fullName}
        </Text>
        <Text style={styles.row}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={styles.row}>
          <strong>Phone:</strong> {phone}
        </Text>
        <Text style={styles.row}>
          <strong>Mine or company:</strong> {mineName}
        </Text>
        <Text style={styles.row}>
          <strong>Location:</strong> {location}
        </Text>
        <Text style={styles.row}>
          <strong>Region:</strong> {region}
        </Text>
        <Text style={styles.row}>
          <strong>Mine type:</strong> {mineType}
        </Text>
        <Text style={styles.row}>
          <strong>Equipment:</strong> {equipment.join(", ")}
        </Text>
        <Text style={styles.row}>
          <strong>Monthly diesel band:</strong> {monthlyDieselBand}
        </Text>
        <Text style={styles.row}>
          <strong>Oil change interval:</strong> {oilChangeInterval}
        </Text>
      </Section>
    </BaseLayout>
  );
}

const styles = {
  card: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    padding: "16px",
  },
  row: {
    color: "#0f172a",
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "0 0 8px",
  },
};
