import Link from "next/link";

import { AssessmentWizard } from "@/components/forms/assessment-wizard";

export default function AssessmentPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-4">
        <p className="text-label-sm text-text-sub-600">Free assessment</p>
        <h1 className="text-title-h2 text-text-strong-950">
          See what you could save
        </h1>
        <p className="text-paragraph-md text-text-sub-600">
          Answer a few questions about your mine. You will get a rough estimate of
          potential energy and fuel savings—typically in the 5–8% range for diesel,
          with up to 8% possible under load. For site-specific numbers, book an
          on-site fuel savings trial.
        </p>
      </div>

      <AssessmentWizard />

      <p className="text-paragraph-md text-text-sub-600">
        Ready to validate on your mine?{" "}
        <Link href="/contact" className="text-primary-base underline">
          Start your fuel savings trial
        </Link>
      </p>
    </main>
  );
}
