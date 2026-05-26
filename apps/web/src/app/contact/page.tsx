import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-4">
        <p className="text-label-sm text-text-sub-600">Get in touch</p>
        <h1 className="text-title-h2 text-text-strong-950">
          Start a conversation
        </h1>
        <p className="text-paragraph-md text-text-sub-600">
          Tell us about your operation. We will respond within one business day to
          discuss an on-site fuel savings trial and how graphene lubricant can cut
          energy costs and extend equipment life at your mine.
        </p>
        <p className="text-label-sm text-text-soft-400">
          Your information is kept confidential and used only to respond to your
          enquiry.
        </p>
      </div>

      <div className="rounded-20 border border-stroke-soft-200 p-6">
        <ContactForm />
      </div>

      <div className="flex flex-col gap-2 text-paragraph-md text-text-sub-600">
        <p className="text-label-md text-text-strong-950">Somerset West, South Africa</p>
        <p>End of Paardevlei Road, Somerset West, 7130</p>
        <p>
          Prefer numbers first?{" "}
          <Link href="/assessment" className="text-primary-base underline">
            Take the free assessment
          </Link>{" "}
          to estimate savings before you call.
        </p>
      </div>
    </main>
  );
}
