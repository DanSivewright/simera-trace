"use client";

import * as Hint from "@simera-trace/ui/components/hint";
import * as Label from "@simera-trace/ui/components/label";

type FieldMeta = {
  isTouched?: boolean;
  errors?: unknown[];
};

export function getFirstFieldError(meta: FieldMeta | undefined) {
  if (!meta?.isTouched || !meta.errors?.length) {
    return undefined;
  }

  const firstError = meta.errors[0];
  if (typeof firstError === "string") {
    return firstError;
  }
  if (
    typeof firstError === "object" &&
    firstError !== null &&
    "message" in firstError &&
    typeof firstError.message === "string"
  ) {
    return firstError.message;
  }

  return "Invalid value";
}

export function FormField({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label.Root>
        {label}
        {required ? <Label.Asterisk /> : null}
      </Label.Root>
      {children}
      {error ? (
        <Hint.Root hasError>
          <span>{error}</span>
        </Hint.Root>
      ) : hint ? (
        <Hint.Root>
          <span>{hint}</span>
        </Hint.Root>
      ) : null}
    </div>
  );
}
