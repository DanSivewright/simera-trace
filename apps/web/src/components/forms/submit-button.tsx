"use client";

import * as Button from "@simera-trace/ui/components/button";
import type * as React from "react";

export function SubmitButton({
  form,
  label,
  submittingLabel = "Submitting...",
}: {
  form: {
    Subscribe: React.ComponentType<{
      selector: (state: { canSubmit: boolean; isSubmitting: boolean }) => {
        canSubmit: boolean;
        isSubmitting: boolean;
      };
      children: (state: { canSubmit: boolean; isSubmitting: boolean }) => React.ReactNode;
    }>;
  };
  label: string;
  submittingLabel?: string;
}) {
  return (
    <form.Subscribe selector={(state) => state}>
      {({ canSubmit, isSubmitting }) => (
        <Button.Root
          type="submit"
          variant="primary"
          mode="filled"
          disabled={!canSubmit || isSubmitting}
        >
          {isSubmitting ? submittingLabel : label}
        </Button.Root>
      )}
    </form.Subscribe>
  );
}
