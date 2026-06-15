import Link from "next/link";

import { PageSection } from "@/components/page-section";

export default function ThermalXrPage() {
  return (
    <PageSection variant="hero">
      <main className="page-surface mx-auto flex max-w-3xl flex-col gap-12 rounded-20 px-6 py-16 md:my-10">
        <div className="flex flex-col gap-4">
          <p className="text-label-sm text-text-sub-600">Thermal-XR</p>
          <h1 className="text-title-h2 text-text-strong-950">
            High-emissivity coating for heat exchange
          </h1>
          <p className="text-paragraph-md text-text-sub-600">
            Thermal-XR is a surface coating that dramatically improves radiative
            heat rejection from metal surfaces. For HVAC and refrigeration
            systems, that means better condenser performance, lower compressor
            head pressure, and measurable electricity savings—without replacing
            your equipment.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-title-h4 text-text-strong-950">
            Emissivity that changes the equation
          </h2>
          <p className="text-paragraph-md text-text-sub-600">
            Emissivity measures how effectively a surface radiates heat. Thermal-XR
            achieves an emissivity index of{" "}
            <strong className="text-text-strong-950">1.0</strong>—near the
            theoretical maximum for radiative heat transfer.
          </p>
          <p className="text-paragraph-md text-text-sub-600">
            Compare that to typical bare metal surfaces used in heat exchangers:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-paragraph-md text-text-sub-600">
            <li>
              Bare polished aluminium:{" "}
              <strong className="text-text-strong-950">0.04–0.09</strong>
            </li>
            <li>
              Copper: <strong className="text-text-strong-950">0.03–0.05</strong>
            </li>
          </ul>
          <p className="text-paragraph-md text-text-sub-600">
            A metal surface coated with Thermal-XR delivers{" "}
            <strong className="text-text-strong-950">
              8.6× more radiative heat rejection
            </strong>{" "}
            from the same surface area—turning underperforming condenser fins
            into far more effective heat radiators.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-title-h4 text-text-strong-950">
            How it improves system efficiency
          </h2>
          <ol className="flex list-decimal flex-col gap-3 pl-5 text-paragraph-md text-text-sub-600">
            <li>
              <strong className="text-text-strong-950">
                Better condenser heat rejection.
              </strong>{" "}
              Coated surfaces radiate heat away faster, improving condenser
              efficiency under load.
            </li>
            <li>
              <strong className="text-text-strong-950">
                Lower compressor head pressure.
              </strong>{" "}
              As the condenser rejects heat more effectively, discharge
              pressure drops—reducing strain on the compressor.
            </li>
            <li>
              <strong className="text-text-strong-950">
                Lower electricity consumption.
              </strong>{" "}
              Field results show compressor electricity savings of{" "}
              <strong className="text-text-strong-950">8%–16% or more</strong>,
              depending on system configuration and operating conditions.
            </li>
          </ol>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-title-h4 text-text-strong-950">
            Built for harsh environments
          </h2>
          <p className="text-paragraph-md text-text-sub-600">
            Thermal-XR has been tested for salt spray corrosion resistance up to{" "}
            <strong className="text-text-strong-950">20,000 hours</strong> to
            date—making it suitable for coastal, industrial, and mining
            applications where equipment faces aggressive conditions.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-title-h4 text-text-strong-950">Case studies</h2>
          <p className="text-paragraph-md text-text-sub-600">
            Validated case studies are available covering condenser retrofit
            applications and measured energy savings. We are adding detailed
            project summaries to this page—contact us in the meantime for the
            full presentation and supporting data.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-title-h4 text-text-strong-950">Next steps</h2>
          <p className="text-paragraph-md text-text-sub-600">
            If you are evaluating heat exchange improvements for refrigeration,
            HVAC, or industrial cooling systems, we can share case study data and
            discuss whether Thermal-XR fits your application.
          </p>
          <p className="text-paragraph-md text-text-sub-600">
            <Link href="/contact" className="text-primary-base underline">
              Contact us about Thermal-XR
            </Link>{" "}
            or{" "}
            <Link href="/about" className="text-primary-base underline">
              learn about our graphene lubrication work
            </Link>
            .
          </p>
        </section>
      </main>
    </PageSection>
  );
}
