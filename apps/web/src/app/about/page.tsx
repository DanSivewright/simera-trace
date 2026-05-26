import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-16">
      <div className="flex flex-col gap-4">
        <p className="text-label-sm text-text-sub-600">About Simera Trace</p>
        <h1 className="text-title-h2 text-text-strong-950">
          Graphene expertise for mining
        </h1>
        <p className="text-paragraph-md text-text-sub-600">
          We are pioneers in graphene lubrication for heavy industry—the first to
          bring this technology to Africa. Our team works on site at mines across
          Africa and the Middle East, running fuel savings trials that prove energy
          and maintenance benefits with your data, not generic claims.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-title-h4 text-text-strong-950">What it is</h2>
        <p className="text-paragraph-md text-text-sub-600">
          A graphene lubricant mixed into your existing engine oil. It is designed
          for diesel and petrol engines in mining plant—haul trucks, loaders,
          drills, generators, and more. You do not replace your oil programme; you
          enhance it with a proven additive applied at the correct ratio.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-title-h4 text-text-strong-950">How it works</h2>
        <ol className="flex list-decimal flex-col gap-3 pl-5 text-paragraph-md text-text-sub-600">
          <li>
            <strong className="text-text-strong-950">Surface protection.</strong>{" "}
            Graphene flakes migrate to metal surfaces inside the engine and form a
            slippery, protective layer.
          </li>
          <li>
            <strong className="text-text-strong-950">Less friction.</strong> Moving
            parts slide with less resistance—so less fuel is burned to do the same
            work.
          </li>
          <li>
            <strong className="text-text-strong-950">Heat management.</strong> Heat
            moves away from contact points faster, protecting rings, bearings, and
            liners under load.
          </li>
          <li>
            <strong className="text-text-strong-950">Wear reduction.</strong>{" "}
            Smoother surfaces and boundary protection mean less scuffing and longer
            component life over time.
          </li>
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-title-h4 text-text-strong-950">What you save</h2>
        <p className="text-paragraph-md text-text-sub-600">
          <strong className="text-text-strong-950">Energy and fuel.</strong> Most
          sites see diesel reductions in the 5–8% range after on-site validation,
          with up to 8% possible when equipment runs under higher load.
        </p>
        <p className="text-paragraph-md text-text-sub-600">
          <strong className="text-text-strong-950">Equipment life.</strong> Less
          friction and wear at the metal interface supports longer intervals between
          major repairs—especially on assets where downtime costs the most.
        </p>
        <p className="text-paragraph-sm text-text-soft-400">
          Results depend on your fleet, load profile, and baseline. That is why
          every engagement starts with a fuel savings trial on your mine.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-title-h4 text-text-strong-950">Why Simera Trace</h2>
        <p className="text-paragraph-md text-text-sub-600">
          We combine deep graphene knowledge with on-the-ground mining experience.
          We set up the trial, train your team, measure fuel and wear indicators,
          and leave you with auditable results—so leadership and maintenance can
          decide together on rollout.
        </p>
        <p className="text-paragraph-md text-text-sub-600">
          <Link href="/contact" className="text-primary-base underline">
            Start your fuel savings trial
          </Link>{" "}
          or{" "}
          <Link href="/assessment" className="text-primary-base underline">
            take the free assessment
          </Link>{" "}
          to estimate savings first.
        </p>
      </section>
    </main>
  );
}
