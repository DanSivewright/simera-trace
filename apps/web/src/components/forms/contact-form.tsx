"use client";

import * as Button from "@simera-trace/ui/components/button";
import * as Input from "@simera-trace/ui/components/input";
import * as Select from "@simera-trace/ui/components/select";
import * as Textarea from "@simera-trace/ui/components/textarea";
import { toast } from "@simera-trace/ui/components/toast";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import {
  type ContactSubmissionValues,
  contactSubmissionSchema,
  locationLabels,
  locationOptions,
  roleLabels,
  roleOptions,
} from "@/lib/forms/schemas";
import { client } from "@/utils/orpc";

import { FormField, getFirstFieldError } from "./form-field";
import { SubmitButton } from "./submit-button";

function zodStringFieldValidator(schema: {
  safeParse: (value: unknown) => {
    success: boolean;
    error?: { issues: { message: string }[] };
  };
}) {
  return ({ value }: { value: unknown }) => {
    const parsed = schema.safeParse(value);
    if (parsed.success) return undefined;
    return parsed.error?.issues[0]?.message ?? "Invalid value";
  };
}

const defaultValues: ContactSubmissionValues = {
  fullName: "",
  email: "",
  phone: "",
  mineName: "",
  location: "africa",
  role: undefined,
  message: "",
};

export function ContactForm() {
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      const parsed = contactSubmissionSchema.safeParse(value);
      if (!parsed.success) {
        toast.error(
          parsed.error.issues[0]?.message ?? "Please fix form errors",
        );
        return;
      }

      const response = (await client.submitContact(parsed.data)) as {
        ok: boolean;
        email?: {
          user?: {
            skipped?: boolean;
          };
        };
      };

      if (response.ok) {
        toast.success(
          "Thanks - we received your enquiry. We will respond within one business day.",
        );
        if (response.email?.user?.skipped) {
          toast.message(
            "User thank-you email was skipped in development mode recipient guard.",
          );
        }
        form.reset();
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <form.Field
        name="fullName"
        validators={{
          onBlur: zodStringFieldValidator(
            contactSubmissionSchema.shape.fullName,
          ),
        }}
      >
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

      <form.Field
        name="email"
        validators={{
          onBlur: zodStringFieldValidator(contactSubmissionSchema.shape.email),
        }}
      >
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

      <form.Field
        name="phone"
        validators={{
          onBlur: zodStringFieldValidator(contactSubmissionSchema.shape.phone),
        }}
      >
        {(field) => {
          const error = getFirstFieldError(field.state.meta);
          return (
            <FormField
              label="Phone"
              required
              error={error}
              hint="Include country code"
            >
              <Input.Root hasError={Boolean(error)}>
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
          );
        }}
      </form.Field>

      <form.Field
        name="mineName"
        validators={{
          onBlur: zodStringFieldValidator(
            contactSubmissionSchema.shape.mineName,
          ),
        }}
      >
        {(field) => {
          const error = getFirstFieldError(field.state.meta);
          return (
            <FormField label="Mine or company name" required error={error}>
              <Input.Root hasError={Boolean(error)}>
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
          );
        }}
      </form.Field>

      <form.Field name="location">
        {(field) => {
          const error = getFirstFieldError(field.state.meta);
          return (
            <FormField label="Location" required error={error}>
              <Select.Root
                value={field.state.value}
                onValueChange={(value) =>
                  field.handleChange(
                    value as ContactSubmissionValues["location"],
                  )
                }
                hasError={Boolean(error)}
              >
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  {locationOptions.map((value) => (
                    <Select.Item key={value} value={value}>
                      {locationLabels[value]}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </FormField>
          );
        }}
      </form.Field>

      <form.Field name="role">
        {(field) => (
          <FormField label="Role (optional)">
            <Select.Root
              value={field.state.value ?? ""}
              onValueChange={(value) =>
                field.handleChange(
                  value
                    ? (value as ContactSubmissionValues["role"])
                    : undefined,
                )
              }
            >
              <Select.Trigger>
                <Select.Value placeholder="Select your role" />
              </Select.Trigger>
              <Select.Content>
                {roleOptions.map((value) => (
                  <Select.Item key={value} value={value}>
                    {roleLabels[value]}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </FormField>
        )}
      </form.Field>

      <form.Field name="message">
        {(field) => (
          <FormField label="Message (optional)">
            <Textarea.Root
              simple
              value={field.state.value ?? ""}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="Share fleet context, diesel spend band, or key questions"
            />
          </FormField>
        )}
      </form.Field>

      <div className="flex flex-col gap-2">
        <SubmitButton form={form} label="Send enquiry" />
        <p className="text-paragraph-xs text-text-soft-400">
          This sends a notification to our team and a thank-you response to your
          email (dev recipient rules apply).
        </p>
        <Button.Root asChild variant="neutral" mode="lighter">
          <Link href="/assessment">
            Prefer numbers first? Take the assessment
          </Link>
        </Button.Root>
      </div>
    </form>
  );
}
