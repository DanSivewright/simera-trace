export const monthlyDieselBandOptions = [
  "under-50000",
  "50000-150000",
  "150000-500000",
  "over-500000",
] as const;

export type MonthlyDieselBand = (typeof monthlyDieselBandOptions)[number];
export type MineType = "open-pit" | "underground" | "both";

const bandMidpoints: Record<MonthlyDieselBand, number> = {
  "under-50000": 25000,
  "50000-150000": 100000,
  "150000-500000": 325000,
  "over-500000": 750000,
};

export const dieselBandLabels: Record<MonthlyDieselBand, string> = {
  "under-50000": "Under 50,000 L/month",
  "50000-150000": "50,000 - 150,000 L/month",
  "150000-500000": "150,000 - 500,000 L/month",
  "over-500000": "Over 500,000 L/month",
};

export type FinancialImpact = {
  fleetSize: number;
  allInTruckCostMillion: number;
  ebitdaMarginPercent: number;
  costTkmImprovementPercent: number;
  totalAnnualHaulageCost: number;
  directAnnualSaving: number;
  revenueEquivalent: number;
  enterpriseValueLow: number;
  enterpriseValueHigh: number;
  chart: {
    labels: string[];
    remainingCostMillions: number[];
    savingMillions: number[];
  };
};

export type FleetScenarioBand = {
  label: string;
  truckRange: [number, number];
  annualSavingLow: number;
  annualSavingHigh: number;
  enterpriseValueLow: number;
  enterpriseValueHigh: number;
};

export type CostTkmScenario = {
  key: "conservative" | "base" | "full";
  label: string;
  improvementRange: string;
  summary: string;
};

export type BenefitMechanism = {
  key: string;
  title: string;
  effect: string;
  signalTimescale: string;
  impactType: "direct" | "indirect";
};

export type ValidationPhase = {
  phase: string;
  duration: string;
  title: string;
  summary: string;
};

export type AssessmentModelInput = {
  monthlyDieselBand: MonthlyDieselBand;
  dieselPricePerLitre?: number | null;
  haulTruckCount?: number;
  allInTruckCostMillion?: number;
  ebitdaMarginPercent?: number;
  costTkmImprovementPercent?: number | null;
};

export type AssessmentEstimate = {
  dieselBandLabel: string;
  monthlyBaselineLitres: number;
  monthlySavingsLowLitres: number;
  monthlySavingsHighLitres: number;
  annualSavingsLowLitres: number;
  annualSavingsHighLitres: number;
  monthlySavingsLowCurrency?: number | null;
  monthlySavingsHighCurrency?: number | null;
  annualSavingsLowCurrency?: number | null;
  annualSavingsHighCurrency?: number | null;
  dieselPricePerLitre?: number | null;
  financialImpact: FinancialImpact;
  fleetScenarioBands: FleetScenarioBand[];
  costTkmScenarios: CostTkmScenario[];
  mechanismHighlights: BenefitMechanism[];
  validationPhases: ValidationPhase[];
};

export function calculateFinancialImpact(
  input: Pick<
    AssessmentModelInput,
    | "haulTruckCount"
    | "allInTruckCostMillion"
    | "ebitdaMarginPercent"
    | "costTkmImprovementPercent"
  >,
): FinancialImpact {
  const requestedFleet = input.haulTruckCount ?? 30;
  const clampedFleet = Number.isFinite(requestedFleet)
    ? Math.max(5, Math.min(120, Math.round(requestedFleet)))
    : 30;
  const allInTruckCostMillion = Math.max(
    25,
    Math.min(65, input.allInTruckCostMillion ?? 44),
  );
  const ebitdaMarginPercent = Math.max(
    10,
    Math.min(55, input.ebitdaMarginPercent ?? 30),
  );
  const costTkmImprovementPercent = Math.max(
    1,
    Math.min(20, input.costTkmImprovementPercent ?? 5),
  );

  const allInTruckCost = allInTruckCostMillion * 1_000_000;
  const totalAnnualHaulageCost = clampedFleet * allInTruckCost;
  const directAnnualSaving =
    totalAnnualHaulageCost * (costTkmImprovementPercent / 100);
  const revenueEquivalent = directAnnualSaving / (ebitdaMarginPercent / 100);
  const enterpriseValueLow = directAnnualSaving * 6;
  const enterpriseValueHigh = directAnnualSaving * 8;

  const scenarioFleet = [
    { label: "Small (15 trucks)", trucks: 15 },
    { label: "Medium (30 trucks)", trucks: 30 },
    { label: "Large (70 trucks)", trucks: 70 },
  ];
  const costs = scenarioFleet.map((entry) =>
    Math.round(entry.trucks * allInTruckCostMillion),
  );
  const savingMillions = costs.map((cost) =>
    Math.round(cost * (costTkmImprovementPercent / 100)),
  );
  const remainingCostMillions = costs.map(
    (cost, index) => cost - (savingMillions[index] ?? 0),
  );

  return {
    fleetSize: clampedFleet,
    allInTruckCostMillion,
    ebitdaMarginPercent,
    costTkmImprovementPercent,
    totalAnnualHaulageCost,
    directAnnualSaving,
    revenueEquivalent,
    enterpriseValueLow,
    enterpriseValueHigh,
    chart: {
      labels: scenarioFleet.map((entry) => entry.label),
      remainingCostMillions,
      savingMillions,
    },
  };
}

function calculateFleetScenarioBands(
  allInTruckCostMillion: number,
  costTkmImprovementPercent: number,
): FleetScenarioBand[] {
  const cases = [
    { label: "Small mine", truckRange: [10, 20] as [number, number] },
    { label: "Medium mine", truckRange: [25, 40] as [number, number] },
    { label: "Large mine", truckRange: [60, 120] as [number, number] },
  ];

  return cases.map((entry) => {
    const annualSavingLow =
      entry.truckRange[0] * allInTruckCostMillion * 1_000_000 * (costTkmImprovementPercent / 100);
    const annualSavingHigh =
      entry.truckRange[1] * allInTruckCostMillion * 1_000_000 * (costTkmImprovementPercent / 100);
    return {
      label: entry.label,
      truckRange: entry.truckRange,
      annualSavingLow,
      annualSavingHigh,
      enterpriseValueLow: annualSavingLow * 6,
      enterpriseValueHigh: annualSavingHigh * 8,
    };
  });
}

function getCostTkmScenarios(): CostTkmScenario[] {
  return [
    {
      key: "conservative",
      label: "Conservative case",
      improvementRange: "-2% to -3%",
      summary: "Fuel-only effect under conservative operating assumptions.",
    },
    {
      key: "base",
      label: "Base case",
      improvementRange: "-5% to -7%",
      summary: "Fuel plus uptime improvements with normalized fleet operation.",
    },
    {
      key: "full",
      label: "Full case",
      improvementRange: "-8% to -12%",
      summary: "Fuel, uptime, and maintenance deferral considered together.",
    },
  ];
}

function getMechanismHighlights(): BenefitMechanism[] {
  return [
    {
      key: "a1",
      title: "Boundary lubrication at piston assembly",
      effect: "Lower friction losses where oil film collapses under high load.",
      signalTimescale: "Hours",
      impactType: "direct",
    },
    {
      key: "a2",
      title: "Sealing recovery through surface filling",
      effect: "Reduced blow-by supports better pressure conversion to useful work.",
      signalTimescale: "Hours",
      impactType: "direct",
    },
    {
      key: "b1",
      title: "Lower wear particle generation",
      effect: "Reduced Fe/Cr/Al trend supports slower wear progression.",
      signalTimescale: "2-4 weeks",
      impactType: "direct",
    },
    {
      key: "b3",
      title: "Unplanned downtime reduction",
      effect: "Improved availability recovers productive haulage hours.",
      signalTimescale: "4-6 weeks",
      impactType: "direct",
    },
    {
      key: "c1",
      title: "Oil degradation slowdown",
      effect: "Cleaner oil supports longer intervals where OEM constraints allow.",
      signalTimescale: "2-4 weeks",
      impactType: "indirect",
    },
  ];
}

function getValidationPhases(): ValidationPhase[] {
  return [
    {
      phase: "Phase 1",
      duration: "Week 1",
      title: "Blow-by baseline and first treatment",
      summary:
        "Measure blow-by at fixed load before and after treatment to validate immediate friction mechanisms.",
    },
    {
      phase: "Phase 2",
      duration: "Weeks 1-4",
      title: "Used-oil analysis trend",
      summary:
        "Track wear markers (Fe, Cr, Al) using existing oil analysis workflow.",
    },
    {
      phase: "Phase 3",
      duration: "Weeks 2-6",
      title: "Paired truck fuel normalization",
      summary:
        "Compare treated vs control trucks with telematics normalized by tonne-kilometre.",
    },
  ];
}

export function calculateAssessmentEstimate(
  input: AssessmentModelInput,
): AssessmentEstimate {
  const monthlyBaselineLitres = bandMidpoints[input.monthlyDieselBand];
  const monthlySavingsLowLitres = monthlyBaselineLitres * 0.05;
  const monthlySavingsHighLitres = monthlyBaselineLitres * 0.08;
  const annualSavingsLowLitres = monthlySavingsLowLitres * 12;
  const annualSavingsHighLitres = monthlySavingsHighLitres * 12;

  let monthlySavingsLowCurrency: number | null = null;
  let monthlySavingsHighCurrency: number | null = null;
  let annualSavingsLowCurrency: number | null = null;
  let annualSavingsHighCurrency: number | null = null;

  if (input.dieselPricePerLitre != null) {
    monthlySavingsLowCurrency = monthlySavingsLowLitres * input.dieselPricePerLitre;
    monthlySavingsHighCurrency = monthlySavingsHighLitres * input.dieselPricePerLitre;
    annualSavingsLowCurrency = monthlySavingsLowCurrency * 12;
    annualSavingsHighCurrency = monthlySavingsHighCurrency * 12;
  }

  const financialImpact = calculateFinancialImpact(input);

  return {
    dieselBandLabel: dieselBandLabels[input.monthlyDieselBand],
    monthlyBaselineLitres,
    monthlySavingsLowLitres,
    monthlySavingsHighLitres,
    annualSavingsLowLitres,
    annualSavingsHighLitres,
    monthlySavingsLowCurrency,
    monthlySavingsHighCurrency,
    annualSavingsLowCurrency,
    annualSavingsHighCurrency,
    dieselPricePerLitre: input.dieselPricePerLitre ?? null,
    financialImpact,
    fleetScenarioBands: calculateFleetScenarioBands(
      financialImpact.allInTruckCostMillion,
      financialImpact.costTkmImprovementPercent,
    ),
    costTkmScenarios: getCostTkmScenarios(),
    mechanismHighlights: getMechanismHighlights(),
    validationPhases: getValidationPhases(),
  };
}

export function assertClientDefaultFinancialScenario() {
  const estimate = calculateAssessmentEstimate({
    monthlyDieselBand: "under-50000",
    haulTruckCount: 30,
    allInTruckCostMillion: 44,
    ebitdaMarginPercent: 30,
    costTkmImprovementPercent: 5,
  });

  const expectedDirectSaving = 66_000_000;
  if (Math.round(estimate.financialImpact.directAnnualSaving) !== expectedDirectSaving) {
    throw new Error(
      `Financial model mismatch: expected ${expectedDirectSaving}, received ${estimate.financialImpact.directAnnualSaving}`,
    );
  }

  return true;
}
