import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import type { AssessmentSubmissionPayload } from "./types";

export async function createAssessmentSummaryPdf(
  submission: AssessmentSubmissionPayload,
) {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const drawText = (
    page: ReturnType<typeof pdf.addPage>,
    text: string,
    x: number,
    y: number,
    size = 12,
    isBold = false,
  ) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: isBold ? bold : font,
      color: rgb(0.06, 0.1, 0.2),
    });
  };

  const pageOne = pdf.addPage([595, 842]);
  const pageTwo = pdf.addPage([595, 842]);
  const pageThree = pdf.addPage([595, 842]);

  drawText(pageOne, "Simera Trace", 48, 790, 12, true);
  drawText(pageOne, "Assessment Summary", 48, 760, 26, true);
  drawText(
    pageOne,
    "Indicative output - validate through on-site fuel savings trial.",
    48,
    740,
    11,
  );
  drawText(pageOne, `Prepared for: ${submission.fullName}`, 48, 708, 12, true);
  drawText(pageOne, `Mine: ${submission.mineName}`, 48, 690);
  drawText(pageOne, `Email: ${submission.email}`, 48, 674);
  drawText(pageOne, `Location: ${submission.location}`, 48, 658);

  drawText(pageOne, "Financial impact (executive view)", 48, 620, 13, true);
  drawText(
    pageOne,
    `Total annual haulage cost: ${Math.round(submission.estimate.financialImpact.totalAnnualHaulageCost).toLocaleString()}`,
    48,
    600,
  );
  drawText(
    pageOne,
    `Direct annual saving: ${Math.round(submission.estimate.financialImpact.directAnnualSaving).toLocaleString()}`,
    48,
    584,
  );
  drawText(
    pageOne,
    `Revenue equivalent: ${Math.round(submission.estimate.financialImpact.revenueEquivalent).toLocaleString()}`,
    48,
    568,
  );
  drawText(
    pageOne,
    `Enterprise value (6x-8x): ${Math.round(submission.estimate.financialImpact.enterpriseValueLow).toLocaleString()} - ${Math.round(submission.estimate.financialImpact.enterpriseValueHigh).toLocaleString()}`,
    48,
    552,
  );

  drawText(pageOne, "Operations estimate (diesel)", 48, 520, 13, true);
  drawText(
    pageOne,
    `Monthly diesel savings: ${Math.round(submission.estimate.monthlySavingsLowLitres).toLocaleString()} - ${Math.round(submission.estimate.monthlySavingsHighLitres).toLocaleString()} L`,
    48,
    500,
  );
  drawText(
    pageOne,
    `Annual diesel savings: ${Math.round(submission.estimate.annualSavingsLowLitres).toLocaleString()} - ${Math.round(submission.estimate.annualSavingsHighLitres).toLocaleString()} L`,
    48,
    484,
  );
  if (
    submission.estimate.annualSavingsLowCurrency != null &&
    submission.estimate.annualSavingsHighCurrency != null
  ) {
    drawText(
      pageOne,
      `Indicative annual value: ${Math.round(submission.estimate.annualSavingsLowCurrency).toLocaleString()} - ${Math.round(submission.estimate.annualSavingsHighCurrency).toLocaleString()}`,
      48,
      468,
    );
  }

  drawText(pageOne, "Assessment inputs", 48, 430, 13, true);
  drawText(pageOne, `Region: ${submission.region}`, 48, 410);
  drawText(pageOne, `Mine type: ${submission.mineType}`, 48, 394);
  drawText(pageOne, `Equipment: ${submission.equipment.join(", ")}`, 48, 378);
  drawText(pageOne, `Monthly diesel band: ${submission.monthlyDieselBand}`, 48, 362);
  drawText(pageOne, `Oil change interval: ${submission.oilChangeInterval}`, 48, 346);

  drawText(pageTwo, "Cost/t-km scenario view", 48, 790, 20, true);
  let pageTwoCursor = 760;
  for (const scenario of submission.estimate.costTkmScenarios) {
    drawText(
      pageTwo,
      `${scenario.label}: ${scenario.improvementRange}`,
      48,
      pageTwoCursor,
      13,
      true,
    );
    drawText(pageTwo, scenario.summary, 48, pageTwoCursor - 16, 11);
    pageTwoCursor -= 44;
  }

  drawText(pageTwo, "Fleet scenario bands", 48, pageTwoCursor - 8, 14, true);
  pageTwoCursor -= 30;
  for (const band of submission.estimate.fleetScenarioBands) {
    drawText(
      pageTwo,
      `${band.label} (${band.truckRange[0]}-${band.truckRange[1]} trucks)`,
      48,
      pageTwoCursor,
      12,
      true,
    );
    drawText(
      pageTwo,
      `Saving: ${Math.round(band.annualSavingLow).toLocaleString()} - ${Math.round(band.annualSavingHigh).toLocaleString()}`,
      48,
      pageTwoCursor - 16,
      11,
    );
    drawText(
      pageTwo,
      `Enterprise value: ${Math.round(band.enterpriseValueLow).toLocaleString()} - ${Math.round(band.enterpriseValueHigh).toLocaleString()}`,
      48,
      pageTwoCursor - 30,
      11,
    );
    pageTwoCursor -= 56;
  }

  drawText(pageThree, "Mechanism highlights", 48, 790, 20, true);
  let pageThreeCursor = 760;
  for (const mechanism of submission.estimate.mechanismHighlights) {
    drawText(
      pageThree,
      `${mechanism.title} (${mechanism.signalTimescale})`,
      48,
      pageThreeCursor,
      12,
      true,
    );
    drawText(pageThree, mechanism.effect, 48, pageThreeCursor - 16, 11);
    pageThreeCursor -= 40;
  }

  drawText(pageThree, "Validation protocol", 48, pageThreeCursor - 8, 14, true);
  pageThreeCursor -= 30;
  for (const phase of submission.estimate.validationPhases) {
    drawText(
      pageThree,
      `${phase.phase} (${phase.duration}) - ${phase.title}`,
      48,
      pageThreeCursor,
      12,
      true,
    );
    drawText(pageThree, phase.summary, 48, pageThreeCursor - 16, 11);
    pageThreeCursor -= 40;
  }

  drawText(
    pageThree,
    "Disclaimer: This report is indicative only and must be validated on site.",
    48,
    80,
    10,
  );

  const bytes = await pdf.save();
  return {
    filename: "simera-trace-assessment-report.pdf",
    content: Buffer.from(bytes).toString("base64"),
    contentType: "application/pdf",
  };
}
