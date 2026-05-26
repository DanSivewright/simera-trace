"use client";

import { useMemo, useState } from "react";
import { useForm } from "@tanstack/react-form";
import * as Button from "@simera-trace/ui/components/button";
import * as Checkbox from "@simera-trace/ui/components/checkbox";
import * as HorizontalStepper from "@simera-trace/ui/components/horizontal-stepper";
import * as Input from "@simera-trace/ui/components/input";
import * as Label from "@simera-trace/ui/components/label";
import * as Radio from "@simera-trace/ui/components/radio";
import * as Select from "@simera-trace/ui/components/select";
import { toast } from "@simera-trace/ui/components/toast";

import type { AssessmentEstimate } from "@/lib/forms/assessment-calc";
import {
  assessmentSubmissionSchema,
  dieselBandLabels,
  dieselBandOptions,
  equipmentLabels,
  equipmentOptions,
  locationLabels,
  locationOptions,
  mineTypeLabels,
  mineTypeOptions,
  oilIntervalLabels,
  oilIntervalOptions,
  roleLabels,
  roleOptions,
  type AssessmentSubmissionValues,
} from "@/lib/forms/schemas";
import { client } from "@/utils/orpc";

import { AssessmentReport } from "./assessment-report";
import { FormField, getFirstFieldError } from "./form-field";
import { SubmitButton } from "./submit-button";

const stepTitles = [
  "Your operation",
  "Haulage fleet",
  "Fleet and fuel",
  "Lubrication and role",
  "Your details",
];

const defaultValues: AssessmentSubmissionValues = {
  region: "",
  mineType: "open-pit",
  haulTruckCount: 30,
  allInTruckCostMillion: 44,
  ebitdaMarginPercent: 30,
  costTkmImprovementPercent: 5,
  equipment: [],
  monthlyDieselBand: "under-50000",
  oilChangeInterval: "500h",
  fullName: "",
  email: "",
  phone: "",
  mineName: "",
  location: "africa",
  role: undefined,
  dieselPricePerLitre: undefined,
};

const stepSchemas = [
  assessmentSubmissionSchema.pick({
    region: true,
    mineType: true,
  }),
  assessmentSubmissionSchema.pick({
    haulTruckCount: true,
    allInTruckCostMillion: true,
    ebitdaMarginPercent: true,
    costTkmImprovementPercent: true,
  }),
  assessmentSubmissionSchema.pick({
    equipment: true,
    monthlyDieselBand: true,
    dieselPricePerLitre: true,
  }),
  assessmentSubmissionSchema.pick({
    oilChangeInterval: true,
    role: true,
  }),
  assessmentSubmissionSchema.pick({
    fullName: true,
    email: true,
    phone: true,
    mineName: true,
    location: true,
  }),
] as const;

export function AssessmentWizard() {
  const [step, setStep] = useState(0);
  const [stepError, setStepError] = useState<string | null>(null);
  const [result, setResult] = useState<AssessmentEstimate | null>(null);

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      const parsed = assessmentSubmissionSchema.safeParse(value);
      if (!parsed.success) {
        toast.error(parsed.error.issues[0]?.message ?? "Please fix form errors");
        return;
      }

      const response = (await client.submitAssessment(parsed.data)) as {
        ok: boolean;
        estimate: AssessmentEstimate;
        email?: {
          user?: { skipped?: boolean };
          attachment?: { included?: boolean };
        };
      };

      if (response.ok) {
        setResult(response.estimate);
        toast.success("Assessment submitted. Your estimate is ready.");
        if (response.email?.attachment?.included === false) {
          toast.message("Assessment email sent without attachment fallback.");
        }
        if (response.email?.user?.skipped) {
          toast.message(
            "User assessment email was skipped in development mode recipient guard.",
          );
        }
      }
    },
  });

  const completedSteps = useMemo(() => new Set<number>(Array.from({ length: step }, (_, index) => index)), [step]);

  const validateStep = (targetStep: number) => {
    const schema = stepSchemas[targetStep];
    const parsed = schema.safeParse(form.state.values);
    if (parsed.success) {
      setStepError(null);
      return true;
    }
    setStepError(parsed.error.issues[0]?.message ?? "Please complete required fields");
    return false;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((previous) => Math.min(previous + 1, stepTitles.length - 1));
    }
  };

  const previousStep = () => {
    setStepError(null);
    setStep((previous) => Math.max(previous - 1, 0));
  };

  return (
    <div className="flex flex-col gap-6 rounded-20 border border-stroke-soft-200 p-6">
      <HorizontalStepper.Root className="justify-start gap-2">
        {stepTitles.map((title, index) => (
          <div key={title} className="flex items-center gap-2">
            <HorizontalStepper.Item
              type="button"
              state={
                index === step
                  ? "active"
                  : completedSteps.has(index)
                    ? "completed"
                    : "default"
              }
              onClick={() => {
                if (index <= step) {
                  setStep(index);
                  setStepError(null);
                }
              }}
              className="cursor-pointer"
            >
              <HorizontalStepper.ItemIndicator>{index + 1}</HorizontalStepper.ItemIndicator>
              <span className="hidden sm:inline">{title}</span>
            </HorizontalStepper.Item>
            {index < stepTitles.length - 1 ? <HorizontalStepper.SeparatorIcon /> : null}
          </div>
        ))}
      </HorizontalStepper.Root>

      {result ? <AssessmentReport estimate={result} /> : null}

      {!result ? (
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            void form.handleSubmit();
          }}
        >
          {step === 0 ? (
            <>
              <form.Field name="region">
                {(field) => {
                  const error = getFirstFieldError(field.state.meta);
                  return (
                    <FormField label="Region" required error={error}>
                      <Input.Root hasError={Boolean(error)}>
                        <Input.Wrapper>
                          <Input.Input
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(event) => field.handleChange(event.target.value)}
                            placeholder="Country or region"
                          />
                        </Input.Wrapper>
                      </Input.Root>
                    </FormField>
                  );
                }}
              </form.Field>

              <form.Field name="mineType">
                {(field) => (
                  <FormField label="Mine type" required>
                    <Radio.Group
                      value={field.state.value}
                      onValueChange={(value) =>
                        field.handleChange(value as AssessmentSubmissionValues["mineType"])
                      }
                      className="flex flex-col gap-2"
                    >
                      {mineTypeOptions.map((option) => (
                        <Label.Root key={option} className="flex items-center gap-2">
                          <Radio.Item value={option} />
                          <span>{mineTypeLabels[option]}</span>
                        </Label.Root>
                      ))}
                    </Radio.Group>
                  </FormField>
                )}
              </form.Field>
            </>
          ) : null}

          {step === 1 ? (
            <>
              <form.Field name="haulTruckCount">
                {(field) => (
                  <FormField label="Haul truck fleet size" required>
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          type="number"
                          min={5}
                          max={120}
                          step="1"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) =>
                            field.handleChange(Number(event.target.value || 30))
                          }
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="allInTruckCostMillion">
                {(field) => (
                  <FormField
                    label="All-in cost per truck per year (R million)"
                    required
                    hint="Typical range used by client model: 25 - 65"
                  >
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          type="number"
                          min={25}
                          max={65}
                          step="1"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) =>
                            field.handleChange(Number(event.target.value || 44))
                          }
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="ebitdaMarginPercent">
                {(field) => (
                  <FormField label="Mine EBITDA margin (%)" required>
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          type="number"
                          min={10}
                          max={55}
                          step="1"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) =>
                            field.handleChange(Number(event.target.value || 30))
                          }
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="costTkmImprovementPercent">
                {(field) => (
                  <FormField
                    label="Cost/t-km improvement assumption (%)"
                    hint="Client reference baseline uses 5%"
                    required
                  >
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          type="number"
                          min={1}
                          max={20}
                          step="0.5"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) =>
                            field.handleChange(Number(event.target.value || 5))
                          }
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <form.Field name="equipment">
                {(field) => (
                  <FormField label="Equipment in scope" required>
                    <div className="grid gap-2">
                      {equipmentOptions.map((option) => (
                        <Label.Root key={option} className="flex items-center gap-2">
                          <Checkbox.Root
                            checked={field.state.value.includes(option)}
                            onCheckedChange={(checked) => {
                              const next = new Set(field.state.value);
                              if (checked) {
                                next.add(option);
                              } else {
                                next.delete(option);
                              }
                              field.handleChange(Array.from(next));
                            }}
                          />
                          <span>{equipmentLabels[option]}</span>
                        </Label.Root>
                      ))}
                    </div>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="monthlyDieselBand">
                {(field) => (
                  <FormField label="Monthly diesel usage" required>
                    <Select.Root
                      value={field.state.value}
                      onValueChange={(value) =>
                        field.handleChange(
                          value as AssessmentSubmissionValues["monthlyDieselBand"],
                        )
                      }
                    >
                      <Select.Trigger>
                        <Select.Value />
                      </Select.Trigger>
                      <Select.Content>
                        {dieselBandOptions.map((option) => (
                          <Select.Item key={option} value={option}>
                            {dieselBandLabels[option]}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="dieselPricePerLitre">
                {(field) => (
                  <FormField
                    label="Diesel price per litre (optional)"
                    hint="Used for currency impact estimates"
                  >
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          type="number"
                          min={0}
                          step="0.01"
                          value={field.state.value ?? ""}
                          onBlur={field.handleBlur}
                          onChange={(event) => {
                            const nextValue = event.target.value;
                            field.handleChange(
                              nextValue === "" ? undefined : Number(nextValue),
                            );
                          }}
                          placeholder="e.g. 1.30"
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <form.Field name="oilChangeInterval">
                {(field) => (
                  <FormField label="Current oil change interval" required>
                    <Select.Root
                      value={field.state.value}
                      onValueChange={(value) =>
                        field.handleChange(
                          value as AssessmentSubmissionValues["oilChangeInterval"],
                        )
                      }
                    >
                      <Select.Trigger>
                        <Select.Value />
                      </Select.Trigger>
                      <Select.Content>
                        {oilIntervalOptions.map((option) => (
                          <Select.Item key={option} value={option}>
                            {oilIntervalLabels[option]}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="role">
                {(field) => (
                  <FormField label="Role (optional)">
                    <Select.Root
                      value={field.state.value ?? ""}
                      onValueChange={(value) =>
                        field.handleChange(
                          value ? (value as AssessmentSubmissionValues["role"]) : undefined,
                        )
                      }
                    >
                      <Select.Trigger>
                        <Select.Value placeholder="Select your role" />
                      </Select.Trigger>
                      <Select.Content>
                        {roleOptions.map((option) => (
                          <Select.Item key={option} value={option}>
                            {roleLabels[option]}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </FormField>
                )}
              </form.Field>
            </>
          ) : null}

          {step === 4 ? (
            <>
              <form.Field name="fullName">
                {(field) => {
                  const error = getFirstFieldError(field.state.meta);
                  return (
                    <FormField label="Full name" required error={error}>
                      <Input.Root hasError={Boolean(error)}>
                        <Input.Wrapper>
                          <Input.Input
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(event) => field.handleChange(event.target.value)}
                            placeholder="Your full name"
                          />
                        </Input.Wrapper>
                      </Input.Root>
                    </FormField>
                  );
                }}
              </form.Field>

              <form.Field name="email">
                {(field) => {
                  const error = getFirstFieldError(field.state.meta);
                  return (
                    <FormField label="Email" required error={error}>
                      <Input.Root hasError={Boolean(error)}>
                        <Input.Wrapper>
                          <Input.Input
                            type="email"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(event) => field.handleChange(event.target.value)}
                            placeholder="name@company.com"
                          />
                        </Input.Wrapper>
                      </Input.Root>
                    </FormField>
                  );
                }}
              </form.Field>

              <form.Field name="phone">
                {(field) => (
                  <FormField label="Phone" required hint="Include country code">
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          type="tel"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) => field.handleChange(event.target.value)}
                          placeholder="+27 ..."
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="mineName">
                {(field) => (
                  <FormField label="Mine or company name" required>
                    <Input.Root>
                      <Input.Wrapper>
                        <Input.Input
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(event) => field.handleChange(event.target.value)}
                          placeholder="Mine or company"
                        />
                      </Input.Wrapper>
                    </Input.Root>
                  </FormField>
                )}
              </form.Field>

              <form.Field name="location">
                {(field) => (
                  <FormField label="Location" required>
                    <Select.Root
                      value={field.state.value}
                      onValueChange={(value) =>
                        field.handleChange(value as AssessmentSubmissionValues["location"])
                      }
                    >
                      <Select.Trigger>
                        <Select.Value />
                      </Select.Trigger>
                      <Select.Content>
                        {locationOptions.map((option) => (
                          <Select.Item key={option} value={option}>
                            {locationLabels[option]}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </FormField>
                )}
              </form.Field>
            </>
          ) : null}

          {stepError ? (
            <p className="text-error-base text-paragraph-xs">{stepError}</p>
          ) : null}
          {form.state.values.haulTruckCount > 0 &&
          !form.state.values.equipment.includes("haul-trucks") ? (
            <p className="text-paragraph-xs text-warning-base">
              Fleet size is set, but haul trucks are not selected in equipment.
              Adjust either value for a consistent estimate.
            </p>
          ) : null}

          <div className="flex items-center justify-between gap-3">
            <Button.Root
              type="button"
              variant="neutral"
              mode="stroke"
              onClick={previousStep}
              disabled={step === 0}
            >
              Back
            </Button.Root>

            {step < stepTitles.length - 1 ? (
              <Button.Root type="button" onClick={nextStep}>
                Continue
              </Button.Root>
            ) : (
              <SubmitButton form={form} label="See my estimate" />
            )}
          </div>
        </form>
      ) : null}

      {!result ? (
        <p className="text-paragraph-xs text-text-soft-400">
          Your estimate is indicative only and validated through an on-site fuel
          savings trial.
        </p>
      ) : null}
    </div>
  );
}
