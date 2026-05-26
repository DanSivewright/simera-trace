"use client";
import {
  type RemixiconComponentType,
  RiAccountCircleLine,
  RiArrowLeftRightLine,
  RiArrowRightDoubleFill,
  RiArrowRightUpLongLine,
  RiBarChart2Fill,
  RiBarChart2Line,
  RiCheckLine,
  RiClipboardLine,
  RiFlaskLine,
  RiHourglassLine,
  RiPlayFill,
  RiPriceTagLine,
  RiSettings2Line,
  RiShieldLine,
  RiSparklingLine,
  RiSubwayLine,
  RiTempHotLine,
} from "@remixicon/react";
import * as Accordion from "@simera-trace/ui/components/accordion";
import * as Badge from "@simera-trace/ui/components/badge";
import * as Button from "@simera-trace/ui/components/button";
import * as Divider from "@simera-trace/ui/components/divider";
import * as LinkButton from "@simera-trace/ui/components/link-button";
import * as SegmentedControl from "@simera-trace/ui/components/segmented-control";
import Image from "next/image";
import Link from "next/link";

type AudienceCard = {
  icon: RemixiconComponentType;
  title: string;
  description: string;
  path?: string;
};

type AudienceTab = {
  value: string;
  label: string;
  triggerIcon: RemixiconComponentType;
  cards: AudienceCard[];
};

const audienceTabs: AudienceTab[] = [
  {
    value: "leadership",
    label: "For leadership",
    triggerIcon: RiBarChart2Fill,
    cards: [
      {
        icon: RiBarChart2Fill,
        title: "Cut diesel spend",
        description:
          "Up to 8% fuel reduction in trial conditions—typically 5–8% once validated on your mine.",
        path: "/pipe-liquid.jpg",
      },
      {
        icon: RiPriceTagLine,
        title: "Haulage economics",
        description:
          "See how lubrication-led efficiency can shift cost per tonne-kilometre—using your fleet and operating inputs.",
        path: "/trucks.jpg",
      },
      {
        icon: RiSparklingLine,
        title: "Numbers before commitment",
        description:
          "The free assessment models indicative fuel and financial impact—then book the on-site trial for validation.",
        path: "/computer.jpg",
      },
    ],
  },
  {
    value: "maintenance",
    label: "For maintenance",
    triggerIcon: RiSettings2Line,
    cards: [
      {
        icon: RiSettings2Line,
        title: "Less friction",
        description:
          "Graphene plates metal surfaces inside your engines, so parts slide with less resistance under load.",
        path: "/gears.jpg",
      },
      {
        icon: RiShieldLine,
        title: "Less wear",
        description:
          "Smoother surfaces and boundary protection when oil film is thin—longer life for engines and drivetrains.",
        path: "/wear.jpg",
      },
      {
        icon: RiSubwayLine,
        title: "Fits your oil programme",
        description:
          "Mixed into the engine oil you already use. No shutdown and no new lubrication infrastructure.",
        path: "/pipe-hole.jpg",
      },
    ],
  },
  {
    value: "trial",
    label: "The trial",
    triggerIcon: RiHourglassLine,
    cards: [
      {
        icon: RiAccountCircleLine,
        title: "We learn your operation",
        description:
          "We review diesel burn, fleet mix, and lubrication practices—so the trial targets where savings matter most.",
        path: "/swirl.jpg",
      },
      {
        icon: RiSettings2Line,
        title: "We run the trial on site",
        description:
          "Graphene lubricant is mixed per spec. Your equipment keeps working while we measure.",
        path: "/finger-print.jpg",
      },
      {
        icon: RiBarChart2Fill,
        title: "You see the numbers",
        description:
          "Fuel use and wear indicators tracked against your baseline—your team owns the data for rollout decisions.",
        path: "/test.jpg",
      },
    ],
  },
];

function AudienceBenefitCard({
  icon: Icon,
  title,
  description,
  path,
}: AudienceCard) {
  return (
    <div className="flex flex-1 shrink-0 flex-col gap-9 rounded-4xl bg-bg-white-0 px-4 pt-9 pb-4 shadow-complex-6 shadow-gray-shadow">
      <div className="flex flex-col gap-9 px-5">
        <div className="flex size-12 items-center justify-center rounded-[14px] bg-bg-white-0">
          <Icon className="text-primary-base" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-text-strong-950 text-title-h6">{title}</p>
            <p className="text-label-md text-text-sub-600">{description}</p>
          </div>
          <LinkButton.Root
            className="w-fit"
            variant="primary"
            underline
            asChild
          >
            <Link href="/assessment">
              Take assessment
              <LinkButton.Icon as={RiArrowRightUpLongLine} />
            </Link>
          </LinkButton.Root>
        </div>
      </div>
      <div className="relative aspect-square w-full flex-1 shrink-0 overflow-hidden rounded-[calc(var(--radius-4xl)-var(--spacing)*4)] bg-bg-weak-50">
        <Image src={path ?? ""} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="md:p-4">
        <div className="flex w-full flex-col gap-8 px-6 py-8 md:gap-16">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-bg-weak-50 px-1.5 py-1 pr-2">
              <Badge.Root variant="light" color="purple" size="small">
                First in Africa
              </Badge.Root>
              <p className="text-label-sm text-text-sub-600">
                Graphene experts for mining
              </p>
              <RiArrowRightUpLongLine className="size-4 text-text-sub-600" />
            </div>
            <h1 className="text-title-h1">
              Cut energy costs. Extend machine life.
            </h1>
            <p>
              Simera Trace brings a proven graphene lubricant to your
              mine—through an on-site fuel savings trial you can measure in
              weeks, not years.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button.Root variant="primary" size="medium" asChild>
                <Link href="/assessment">
                  Qualification Assessment
                  <Button.Icon as={RiArrowRightUpLongLine} />
                </Link>
              </Button.Root>
              <Button.Root
                variant="primary"
                mode="lighter"
                size="medium"
                asChild
              >
                <Link href="/about">
                  <Button.Icon as={RiPlayFill} />
                  See how it works
                </Link>
              </Button.Root>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Less diesel burned across your fleet
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Less wear on haul trucks, loaders, and gensets
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Validated on your mine in about 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-t-20 bg-bg-weak-25 px-4 pt-4 pb-10">
          <SegmentedControl.Root
            defaultValue="leadership"
            className="z-10 flex w-full flex-col items-center gap-4"
          >
            <SegmentedControl.List
              floatingBgClassName="bg-bg-weak-50 rounded-[12px] shadow-none!"
              className="h-11 w-fit gap-1 rounded-[14px] bg-bg-white-0 p-1 shadow-gray-shadow-4"
            >
              {audienceTabs.map((tab) => (
                <SegmentedControl.Trigger
                  key={tab.value}
                  className="flex h-full items-center justify-center rounded-[12px] bg-transparent pr-4 data-[state=active]:[&_svg]:text-primary-base"
                  value={tab.value}
                >
                  <tab.triggerIcon className="size-4 shrink-0" />
                  {tab.label}
                </SegmentedControl.Trigger>
              ))}
            </SegmentedControl.List>
            {audienceTabs.map((tab) => (
              <SegmentedControl.Content
                key={tab.value}
                className="w-full"
                value={tab.value}
              >
                <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-6">
                  {tab.cards.map((card) => (
                    <AudienceBenefitCard key={card.title} {...card} />
                  ))}
                </div>
              </SegmentedControl.Content>
            ))}
          </SegmentedControl.Root>
          <div className="absolute inset-0 z-0 w-full bg-linear-to-t from-bg-white-0 to-bg-weak-25" />
          <div className="z-10 flex flex-col gap-4 pt-4">
            <p className="text-label-sm text-text-soft-400">
              Built for mining operations in Africa and the Middle East
            </p>
          </div>
        </div>
      </div>
      <Divider.Root className="py-3" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-10 pb-6 md:flex-row md:py-24">
        <div className="flex w-full flex-col items-start justify-between gap-8 md:w-[33.333%]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex w-fit items-center gap-1.5 rounded-10 bg-bg-weak-50 py-1 pr-2.5 pl-2">
                <RiArrowRightDoubleFill className="size-5 text-primary-base" />
                <p className="text-label-sm text-text-sub-600">How it works</p>
              </div>
              <h2 className="text-pretty text-stroke-strong-950 text-title-h4">
                From first call to proven savings
              </h2>
            </div>
            <p className="text-label-md text-text-soft-400">
              We are{" "}
              <span className="text-text-strong-950">
                pioneers in graphene for mining—the first to bring this
                technology to Africa.
              </span>{" "}
              Our team comes to your site, runs the trial, and leaves you with
              clear numbers.
            </p>
          </div>

          <div className="flex flex-col gap-[28px]">
            <p className="text-label-sm text-text-soft-400">
              <span className="text-text-strong-950">
                Graphene in one minute:{" "}
              </span>
              a carbon layer that coats metal inside your engines, cuts
              friction, moves heat away, and reduces wear—mixed into the oil you
              already use.
            </p>
          </div>
        </div>
        <Accordion.Root
          type="single"
          collapsible
          className="w-full flex-1 space-y-3"
        >
          <Accordion.Item
            value="a"
            className="rounded-3xl! shadow-gray-shadow!"
          >
            <Accordion.Trigger className="justify-between">
              <div className="flex items-center gap-2">
                <div className="w-fit rounded-full bg-primary-lighter p-3">
                  <div className="rounded-full bg-primary-base p-1">
                    <Accordion.Icon
                      as={RiClipboardLine}
                      className="size-5 text-static-white"
                    />
                  </div>
                </div>
                We learn your operation
              </div>
              <div className="flex items-center justify-center rounded-full bg-bg-white-0 p-1 ring-1 ring-stroke-soft-200">
                <Accordion.Arrow className="ml-auto" />
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="">
              We review your diesel burn, fleet mix, and how you manage engine
              oil today—so the trial targets where savings matter most.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="b"
            className="rounded-3xl! shadow-gray-shadow!"
          >
            <Accordion.Trigger className="justify-between">
              <div className="flex items-center gap-2">
                <div className="w-fit rounded-full bg-primary-lighter p-3">
                  <div className="rounded-full bg-primary-base p-1">
                    <Accordion.Icon
                      as={RiFlaskLine}
                      className="size-5 text-static-white"
                    />
                  </div>
                </div>
                We run the trial on site
              </div>
              <div className="flex items-center justify-center rounded-full bg-bg-white-0 p-1 ring-1 ring-stroke-soft-200">
                <Accordion.Arrow className="ml-auto" />
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="">
              Graphene lubricant is mixed into your engine oil at the correct
              ratio. Your equipment keeps working—no shutdown, no new
              infrastructure.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="c"
            className="rounded-3xl! shadow-gray-shadow!"
          >
            <Accordion.Trigger className="justify-between">
              <div className="flex items-center gap-2">
                <div className="w-fit rounded-full bg-primary-lighter p-3">
                  <div className="rounded-full bg-primary-base p-1">
                    <Accordion.Icon
                      as={RiBarChart2Line}
                      className="size-5 text-static-white"
                    />
                  </div>
                </div>
                You see the numbers
              </div>
              <div className="flex items-center justify-center rounded-full bg-bg-white-0 p-1 ring-1 ring-stroke-soft-200">
                <Accordion.Arrow className="ml-auto" />
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="">
              Fuel use and wear indicators are tracked against your baseline.
              Your team owns the data—so you can decide on rollout with
              confidence.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
      <Divider.Root className="py-3" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-10 pb-6 md:py-24">
        <div className="flex flex-col gap-4">
          <div className="flex w-fit items-center gap-1.5 rounded-10 bg-bg-weak-50 py-1 pr-2.5 pl-2">
            <RiBarChart2Fill className="size-5 text-primary-base" />
            <p className="text-label-sm text-text-sub-600">Measurable impact</p>
          </div>
          <h2 className="text-pretty text-stroke-strong-950 text-title-h4">
            Savings you can measure on your mine
          </h2>
        </div>
        <Divider.Root />
        <div className="flex flex-col gap-6 md:hidden">
          <div className="flex flex-col gap-2">
            <h4 className="text-text-strong-950 text-title-h4">Up to 8%</h4>
            <p className="text-label-md text-text-soft-400">
              Diesel reduction in trial conditions—{" "}
              <span className="text-text-strong-950">
                typically 5–8% once validated on site
              </span>
            </p>
          </div>
          <Divider.Root />
          <div className="flex flex-col gap-2">
            <h4 className="text-text-strong-950 text-title-h4">Less wear</h4>
            <p className="text-label-md text-text-soft-400">
              Smoother metal surfaces and{" "}
              <span className="text-text-strong-950">
                longer life for engines and drivetrains
              </span>
            </p>
          </div>
          <Divider.Root />
          <div className="flex flex-col gap-2">
            <h4 className="text-text-strong-950 text-title-h4">~30 days</h4>
            <p className="text-label-md text-text-soft-400">
              Typical window to{" "}
              <span className="text-text-strong-950">
                validate results on your operation
              </span>
            </p>
          </div>
        </div>
        <Divider.Root className="md:hidden" />
        <div className="flex flex-col gap-6 md:flex-row">
          <p className="text-label-xs text-text-soft-400">Mining</p>
          <div className="flex w-full flex-1 flex-col gap-6 pl-0 md:justify-between md:border-stroke-soft-200 md:border-l md:pl-6">
            <p className="text-paragraph-md text-text-sub-600">
              Diesel powers almost everything that moves at a mine. When
              friction drops inside your engines, you burn less fuel—and your
              maintenance team spends less time fighting wear on the assets that
              matter most.
              <br />
              <br />
              Simera Trace combines graphene expertise with an on-site fuel
              savings trial. We set it up with your people, measure against your
              baseline, and show what energy and maintenance savings look like
              in your real operating conditions.
              <br />
              <br />
              Results vary by load, equipment mix, and how you run today. That
              is why we validate on your mine—not with generic promises.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-label-xs text-text-sub-600">
                Cut energy costs. Protect your fleet.
              </p>
              <Image
                src="/Simera-Trace-Logo-Black.png"
                alt="Simera Trace"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="hidden flex-1 flex-col justify-between gap-6 border-stroke-soft-200 border-l pl-6 md:flex">
            <div className="flex flex-col gap-2">
              <h4 className="text-text-strong-950 text-title-h4">Up to 8%</h4>
              <p className="text-label-md text-text-soft-400">
                Diesel reduction in trial conditions—{" "}
                <span className="text-text-strong-950">
                  typically 5–8% once validated on site
                </span>
              </p>
            </div>
            <Divider.Root />
            <div className="flex flex-col gap-2">
              <h4 className="text-text-strong-950 text-title-h4">Less wear</h4>
              <p className="text-label-md text-text-soft-400">
                Smoother metal surfaces and{" "}
                <span className="text-text-strong-950">
                  longer life for engines and drivetrains
                </span>
              </p>
            </div>
            <Divider.Root />
            <div className="flex flex-col gap-2">
              <h4 className="text-text-strong-950 text-title-h4">~30 days</h4>
              <p className="text-label-md text-text-soft-400">
                Typical window to{" "}
                <span className="text-text-strong-950">
                  validate results on your operation
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider.Root className="py-3" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-2 pt-10 pb-6 md:flex-row md:py-24">
        <div className="flex w-full flex-col gap-6 px-4">
          <div className="flex flex-col gap-3">
            <div className="flex w-fit items-center gap-1.5 rounded-10 bg-bg-weak-50 py-1 pr-2.5 pl-2">
              <RiSparklingLine className="size-5 text-primary-base" />
              <p className="text-label-sm text-text-sub-600">Why graphene</p>
            </div>
            <h2 className="text-pretty text-stroke-strong-950 text-title-h4">
              Advanced science. Explained simply.
            </h2>
          </div>
          <p className="text-pretty text-label-md text-text-soft-400">
            Graphene is pure carbon—one atom thick, incredibly strong, and built
            to slide. In your engines it{" "}
            <span className="text-text-strong-950">
              reduces friction where metal meets metal
            </span>
            , so you save energy and protect moving parts.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary-base p-0.5">
                <RiCheckLine className="size-3 text-static-white" />
              </div>
              <p className="text-label-sm text-text-strong-950">
                Less friction at pistons, rings, and bearings
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary-base p-0.5">
                <RiCheckLine className="size-3 text-static-white" />
              </div>
              <p className="text-label-sm text-text-strong-950">
                Heat moves away from contact surfaces faster
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary-base p-0.5">
                <RiCheckLine className="size-3 text-static-white" />
              </div>
              <p className="text-label-sm text-text-strong-950">
                A protective layer when oil film is thin
              </p>
            </div>
          </div>
          <Button.Root
            className="w-full md:w-fit"
            variant="primary"
            mode="stroke"
            asChild
          >
            <Link href="/contact">Start your fuel savings trial</Link>
          </Button.Root>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-[58%] md:shrink-0">
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-20 bg-bg-weak-25 p-7">
            <RiArrowLeftRightLine className="size-6 text-primary-base" />
            <RiArrowLeftRightLine className="absolute top-[-64px] right-6 size-[148px] text-text-disabled-300 opacity-35" />
            <div className="flex flex-col gap-2">
              <p className="text-label-lg text-text-strong-950">
                Less friction
              </p>
              <p className="text-paragraph-md text-text-sub-600">
                Microscopic graphene flakes plate onto metal surfaces inside the
                engine—so parts slide against graphene, not bare metal.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-20 bg-bg-weak-25 p-7">
            <RiTempHotLine className="size-6 text-primary-base" />
            <RiTempHotLine className="absolute top-[-64px] right-6 size-[148px] text-text-disabled-300 opacity-35" />
            <div className="flex flex-col gap-2">
              <p className="text-label-lg text-text-strong-950">
                Better heat transfer
              </p>
              <p className="text-paragraph-md text-text-sub-600">
                Friction creates hot spots. Graphene pulls heat into the oil and
                block—protecting rings, liners, and bearings under load.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-20 bg-bg-weak-25 p-7">
            <RiShieldLine className="size-6 text-primary-base" />
            <RiShieldLine className="absolute top-[-64px] right-6 size-[148px] text-text-disabled-300 opacity-35" />
            <div className="flex flex-col gap-2">
              <p className="text-label-lg text-text-strong-950">
                Boundary protection
              </p>
              <p className="text-paragraph-md text-text-sub-600">
                When oil pressure drops at start-up or under extreme load,
                graphene stays on the metal—reducing scuffing until the full oil
                film returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider.Root className="py-3" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-10 pb-6 md:flex-row md:py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex w-fit items-center gap-1.5 rounded-10 bg-bg-weak-50 py-1 pr-2.5 pl-2">
              <RiPriceTagLine className="size-5 rotate-45 text-primary-base" />
              <p className="text-label-sm text-text-sub-600">Trial programme</p>
            </div>
            <h2 className="text-pretty text-stroke-strong-950 text-title-h4">
              On-site validation, zero guesswork
            </h2>
            <p className="text-label-md text-text-soft-400">
              We come to your mine, set up the graphene lubricant trial, and
              work with your team until you have{" "}
              <span className="text-text-strong-950">
                clear fuel and wear data—not a brochure
              </span>
            </p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-2">
            <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
              <Accordion.Trigger className="justify-start">
                <Accordion.Arrow />
                Who is the trial for?
              </Accordion.Trigger>
              <Accordion.Content>
                Mining operations running diesel-powered equipment—haul trucks,
                loaders, drills, and on-site power generation. If you burn
                serious diesel, the trial is built for you.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
              <Accordion.Trigger className="justify-start">
                <Accordion.Arrow />
                How long does it take?
              </Accordion.Trigger>
              <Accordion.Content>
                Most sites validate results in about 30 days. Setup is quick;
                your fleet keeps operating while we measure against your
                baseline.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="c" className="bg-bg-weak-50 ring-0">
              <Accordion.Trigger className="justify-start">
                <Accordion.Arrow />
                Is it safe for our engines?
              </Accordion.Trigger>
              <Accordion.Content>
                The lubricant is mixed into your existing engine oil at a fixed
                ratio. It is designed for diesel and petrol combustion engines.
                We recommend discussing OEM warranty status with your team
                before starting.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-[58%] md:shrink-0">
          <div className="flex flex-col gap-1 rounded-[28px] bg-bg-weak-50 p-1">
            <div className="flex items-center gap-4 px-4 py-2">
              <p className="text-label-sm text-text-sub-600">On your mine</p>
              <Badge.Root color="purple" variant="lighter">
                Up to 8% fuel
              </Badge.Root>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl bg-bg-white-0 p-6 shadow-complex-6 shadow-gray-shadow">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p className="text-label-md text-text-strong-950">
                    On-site fuel savings trial
                  </p>
                  <p className="text-label-sm text-text-sub-600">
                    Consultation, setup, monitoring, and reporting—run at your
                    operation with your data.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-text-strong-950 text-title-h3">Up to 8%</p>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-label-sm text-text-sub-600">diesel</p>
                    <p className="text-paragraph-xs text-text-soft-400">
                      typical range 5–8% after validation
                    </p>
                  </div>
                </div>
                <Button.Root variant="primary" mode="stroke" asChild>
                  <Link href="/contact">Start your trial</Link>
                </Button.Root>
              </div>
              <Divider.Root />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-base p-0.5">
                    <RiCheckLine className="size-3 text-static-white" />
                  </div>
                  <p className="text-label-sm text-text-strong-950">
                    On-site consultation and setup
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-base p-0.5">
                    <RiCheckLine className="size-3 text-static-white" />
                  </div>
                  <p className="text-label-sm text-text-strong-950">
                    Fuel and wear tracking vs baseline
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-base p-0.5">
                    <RiCheckLine className="size-3 text-static-white" />
                  </div>
                  <p className="text-label-sm text-text-strong-950">
                    No capital outlay to start
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl bg-bg-white-0 p-6 ring-1 ring-stroke-soft-200">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-label-md text-text-strong-950">
                  Not sure yet?
                </p>
                <p className="text-label-sm text-text-sub-600">
                  Estimate your potential savings in minutes, or speak to our
                  team directly.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button.Root variant="primary" asChild>
                  <Link href="/assessment">Take assessment</Link>
                </Button.Root>
                <Button.Root variant="primary" mode="stroke" asChild>
                  <Link href="/contact">Contact us</Link>
                </Button.Root>
              </div>
            </div>
            <Divider.Root />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Free savings estimate
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Built for mine leadership and maintenance teams
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Response within one business day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider.Root className="py-3" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-10 pb-6 md:py-24">
        <div className="flex flex-col gap-4">
          <div className="flex w-fit items-center gap-1.5 rounded-10 bg-bg-weak-50 py-1 pr-2.5 pl-2">
            <p className="text-label-sm text-text-sub-600">FAQ Guide</p>
          </div>
          <h2 className="text-pretty text-stroke-strong-950 text-title-h4">
            Questions from the pit to the boardroom
          </h2>
          <p className="text-label-md text-text-soft-400">
            Straight answers on graphene, the trial, and what results to expect—
            without the science lecture.
          </p>
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="grid grid-cols-2 gap-6 md:flex md:flex-1 md:flex-col md:items-start">
            <div className="relative w-full shrink-0 overflow-hidden rounded-20 bg-bg-weak-50 md:aspect-35/43 md:w-full">
              <Image
                src="/finger-print.jpg"
                alt="Question"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-label-lg text-text-soft-400">
                Need Help?
                <br />
                <span className="text-text-strong-950">
                  Reach out or take the assessment
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-label-xs text-text-soft-400">
                  The assessment is free and takes a few minutes.
                </p>
                <Button.Root
                  className="w-full md:w-fit"
                  size="small"
                  variant="primary"
                  mode="stroke"
                  asChild
                >
                  <Link href="/assessment">Take assessment</Link>
                </Button.Root>
              </div>
            </div>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-6 md:w-[61.8%]">
            <div className="flex flex-col gap-3">
              <p className="text-subheading-xs text-text-soft-400">
                The technology
              </p>
              <Accordion.Root type="single" collapsible className="space-y-2">
                <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What is graphene?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Graphene is a single layer of carbon atoms—strong, slippery,
                    and excellent at conducting heat. In engine oil it reduces
                    friction where metal parts meet.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    How is the lubricant added?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    A small amount of graphene lubricant is mixed into your
                    existing engine oil—about 1 part additive to 100 parts
                    oil—then used in your equipment as normal.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="c" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    Which equipment can use it?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Any combustion engine that runs on mineral or synthetic
                    engine oil—diesel haul trucks, loaders, drills, generators,
                    and similar mine plant.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-subheading-xs text-text-soft-400">The trial</p>
              <Accordion.Root type="single" collapsible className="space-y-2">
                <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    Will production stop?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    No. The trial fits into your current lubrication programme.
                    Equipment keeps running while we measure fuel use and wear
                    indicators against your baseline.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What do you need from us?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Access to fuel records, oil practices, and a defined fleet
                    or equipment group for the trial. We handle setup and work
                    with your maintenance team on site.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-subheading-xs text-text-soft-400">Results</p>
              <Accordion.Root type="single" collapsible className="space-y-2">
                <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What savings should we expect?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Most sites see diesel reductions in the 5–8% range after
                    validation, with up to 8% possible under higher load. Wear
                    benefits show as smoother running and longer component
                    life—your trial data will show what applies to you.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What if results are lower than expected?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    That is why we trial on site. If the numbers do not stack up
                    for your operation, you have auditable data before any wider
                    rollout—no obligation to continue.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="c" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    How is fuel savings measured?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    We compare fuel consumption and operating conditions during
                    the trial to your pre-trial baseline—using your records and
                    agreed metrics so finance and maintenance can review the
                    same dataset.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="d" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What happens after the trial?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    If savings justify rollout, we work with you on a deployment
                    plan aligned to your operation. If not, you keep the
                    validation data and we part ways with no hard sell.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        </div>
      </div>
      <Divider.Root className="py-3" />
      <div className="flex flex-col gap-8 pt-10 pb-6 md:py-24">
        <div className="flex flex-col gap-4 px-6 text-left md:w-full md:items-center md:justify-center md:text-center">
          <div className="flex w-fit items-center gap-1.5 rounded-10 bg-bg-weak-50 py-1 pr-2.5 pl-2">
            <div className="size-1.5 rounded-full bg-primary-base" />
            <p className="text-label-sm text-text-sub-600">Insights</p>
          </div>
          <h2 className="text-pretty text-stroke-strong-950 text-title-h4">
            Insights for mining teams
          </h2>

          <LinkButton.Root className="w-fit" variant="black" underline asChild>
            <Link href="/case-studies">
              View all <LinkButton.Icon as={RiArrowRightUpLongLine} />
            </Link>
          </LinkButton.Root>
        </div>
        <div className="no-scrollbar w-screen overflow-scroll">
          <div className="flex w-max items-start gap-5 px-6 md:px-24">
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="relative aspect-video w-full overflow-hidden rounded-20 bg-pink-500">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-strong-950/40 text-center backdrop-blur-sm">
                  <p className="text-label-lg text-static-white">Coming soon</p>
                </div>
                <Image
                  src="/test.jpg"
                  fill
                  alt="test"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    Coming soon
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    What mine FMs should know about diesel burn
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Energy</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="relative aspect-video w-full overflow-hidden rounded-20 bg-pink-500">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-strong-950/40 text-center backdrop-blur-sm">
                  <p className="text-label-lg text-static-white">Coming soon</p>
                </div>
                <Image
                  src="/test.jpg"
                  fill
                  alt="test"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    Coming soon
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    Graphene lubrication in haul trucks: a plain-English guide
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Guide</Badge.Root>
                  <Badge.Root variant="light">Maintenance</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="relative aspect-video w-full overflow-hidden rounded-20 bg-pink-500">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-strong-950/40 text-center backdrop-blur-sm">
                  <p className="text-label-lg text-static-white">Coming soon</p>
                </div>
                <Image
                  src="/test.jpg"
                  fill
                  alt="test"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    Coming soon
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    How to validate fuel savings on site
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Trial</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="relative aspect-video w-full overflow-hidden rounded-20 bg-pink-500">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-strong-950/40 text-center backdrop-blur-sm">
                  <p className="text-label-lg text-static-white">Coming soon</p>
                </div>
                <Image
                  src="/test.jpg"
                  fill
                  alt="test"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    Coming soon
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    Friction, wear, and why small changes add up at scale
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Wear</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="relative aspect-video w-full overflow-hidden rounded-20 bg-pink-500">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-strong-950/40 text-center backdrop-blur-sm">
                  <p className="text-label-lg text-static-white">Coming soon</p>
                </div>
                <Image
                  src="/test.jpg"
                  fill
                  alt="test"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    Coming soon
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    Energy savings vs fuel savings: what to measure first
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Savings</Badge.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider.Root className="py-3" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 overflow-hidden px-6 pt-10 pb-6 md:gap-12 md:py-24">
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h4 className="text-text-strong-950 text-title-h2">
            Ready to cut energy costs at your mine?
          </h4>
          <LinkButton.Root className="w-fit" variant="black" underline asChild>
            <Link href="/contact">
              Contact us <LinkButton.Icon as={RiArrowRightUpLongLine} />
            </Link>
          </LinkButton.Root>
        </div>
        <Divider.Root />
        <div className="flex flex-col gap-6 md:hidden">
          <Image
            src="/Simera-Trace-Logo-Black.png"
            alt="Footer Logo"
            width={100}
            height={100}
          />
          <p className="text-label-sm text-text-soft-400">
            Graphene expertise. On-site trials.{" "}
            <span className="text-text-strong-950">
              Built for African mining.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-label-sm text-text-soft-400">Menu</p>
            <Link className="text-label-sm text-text-strong-950" href="/">
              Home
            </Link>
            <Link className="text-label-sm text-text-strong-950" href="/about">
              About
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label-sm text-text-soft-400">Resources</p>
            <Link
              className="text-label-sm text-text-strong-950"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-label-sm text-text-strong-950"
              href="/assessment"
            >
              Assessment
            </Link>
          </div>
        </div>
        <p className="text-label-sm text-text-soft-400">
          2026 Simera Trace. All rights reserved.
        </p>
      </div>
    </>
  );
}
