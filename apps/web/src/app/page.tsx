"use client";
import {
  RiAccountCircleLine,
  RiArrowRightDoubleFill,
  RiArrowRightUpLongLine,
  RiBarChart2Fill,
  RiCheckLine,
  RiPlayFill,
  RiPriceTagLine,
  RiSettings2Line,
  RiShieldLine,
  RiSparklingLine,
  RiSubwayLine,
  RiSunLine,
} from "@remixicon/react";
import * as Accordion from "@simera-trace/ui/components/accordion";
import * as Avatar from "@simera-trace/ui/components/avatar";
import * as AvatarGroupCompact from "@simera-trace/ui/components/avatar-group-compact";
import * as Badge from "@simera-trace/ui/components/badge";
import * as Button from "@simera-trace/ui/components/button";
import * as Divider from "@simera-trace/ui/components/divider";
import * as LinkButton from "@simera-trace/ui/components/link-button";
import * as SegmentedControl from "@simera-trace/ui/components/segmented-control";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="md:p-4">
        <div className="flex w-full flex-col gap-8 px-6 py-8 md:gap-16">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-bg-soft-200 px-1.5 py-1 pr-2">
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
              Simera Trace brings a proven graphene lubricant to your mine—through
              an on-site fuel savings trial you can measure in weeks, not years.
            </p>
            <div className="flex items-center gap-4">
              <Button.Root variant="primary" size="medium" asChild>
                <Link href="/contact">
                  Start your fuel savings trial
                  <Button.Icon as={RiArrowRightUpLongLine} />
                </Link>
              </Button.Root>
              <Button.Root variant="primary" mode="lighter" size="medium" asChild>
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
            defaultValue="light"
            className="z-10 flex flex-col gap-4"
          >
            <SegmentedControl.List
              floatingBgClassName="bg-bg-weak-50 rounded-[12px] shadow-none!"
              className="h-11 w-fit gap-1 rounded-[14px] bg-bg-white-0 p-1 shadow-gray-shadow-4"
            >
              <SegmentedControl.Trigger
                className="flex h-full items-center justify-center rounded-[12px] bg-transparent pr-4 data-[state=active]:[&_svg]:text-primary-base"
                value="light"
              >
                <RiSunLine className="size-4 shrink-0" />
                For leadership
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger
                className="flex h-full items-center justify-center rounded-[12px] bg-transparent pr-4 data-[state=active]:[&_svg]:text-primary-base"
                value="two"
              >
                <RiSunLine className="size-4 shrink-0" />
                For maintenance
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger
                className="flex h-full items-center justify-center rounded-[12px] bg-transparent pr-4 data-[state=active]:[&_svg]:text-primary-base"
                value="three"
              >
                <RiSunLine className="size-4 shrink-0" />
                The trial
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
            <SegmentedControl.Content value="light">
              <div className="flex aspect-9/16 w-full flex-col justify-end gap-3 rounded-20 border border-stroke-soft-200 p-6">
                <p className="text-label-lg text-text-strong-950">
                  Energy savings you can budget for
                </p>
                <p className="text-paragraph-sm text-text-sub-600">
                  Diesel is one of your largest operating costs. Our on-site trial
                  shows how much you can cut—typically 5–8%, up to 8% under load—with
                  numbers your finance team can use.
                </p>
              </div>
            </SegmentedControl.Content>
            <SegmentedControl.Content value="two">
              <div className="flex aspect-9/16 w-full flex-col justify-end gap-3 rounded-20 border border-stroke-soft-200 p-6">
                <p className="text-label-lg text-text-strong-950">
                  Less friction. Less wear.
                </p>
                <p className="text-paragraph-sm text-text-sub-600">
                  Graphene forms a protective layer on metal surfaces inside your
                  engines—smoother contact, better heat transfer, and less damage to
                  rings, bearings, and liners over time.
                </p>
              </div>
            </SegmentedControl.Content>
            <SegmentedControl.Content value="three">
              <div className="flex aspect-9/16 w-full flex-col justify-end gap-3 rounded-20 border border-stroke-soft-200 p-6">
                <p className="text-label-lg text-text-strong-950">
                  Four steps on your mine
                </p>
                <p className="text-paragraph-sm text-text-sub-600">
                  Consult → set up the trial → run with your existing oil programme →
                  review fuel and wear data together. No capital outlay. No production
                  stop.
                </p>
              </div>
            </SegmentedControl.Content>
          </SegmentedControl.Root>
          <div className="absolute inset-0 z-0 w-full bg-linear-to-t from-bg-white-0 to-bg-weak-25" />
          <div className="z-10 flex flex-col gap-4 pt-4">
            <p className="text-label-sm text-text-soft-400">
              Built for mining operations in Africa and the Middle East
            </p>
            <div className="flex h-6 flex-wrap items-center gap-8">
              <div className="h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="216"
                  height="24"
                  viewBox="0 0 216 40"
                  aria-label="Simera Trace Logo"
                  fill="none"
                  id="Logo"
                >
                  <g id="logomark">
                    <path
                      d="M20 28.4356C16.5306 28.4357 13.3035 30.2166 11.4521 33.1512L9.1543 36.7934L10.0371 37.3511C10.3132 37.5101 10.5937 37.6622 10.8779 37.8082L13.1436 34.2188C14.6285 31.8648 17.2171 30.437 20 30.4369C22.783 30.4369 25.3714 31.8647 26.8564 34.2188L29.1211 37.8082C29.4053 37.6623 29.6858 37.5101 29.9619 37.3511L30.8457 36.7934L28.5479 33.1512C26.6964 30.2165 23.4695 28.4356 20 28.4356ZM20.123 36.4428L20 36.4379C19.3855 36.4381 18.8239 36.774 18.5312 37.3072L18.4766 37.4166L17.3691 39.834C18.0662 39.9256 18.7744 39.9821 19.4922 40L20 38.8914L20.5068 40C21.2249 39.9821 21.9335 39.9256 22.6309 39.834L21.5244 37.4166L21.4697 37.3072C21.1966 36.8096 20.689 36.4842 20.123 36.4428ZM21 12.4063V0H19V12.4063L15.7891 0.422921L13.8574 0.940585L17.0674 12.923L10.8662 2.18005L9.13379 3.18021L15.335 13.9222L6.56543 5.15124L5.15039 6.56651L13.9199 15.3375L3.17969 9.13529L2.17969 10.868L12.9209 17.0702L0.94043 13.8597L0.422852 15.7917L12.4053 19.0031H0V21.0035H12.4053L0.422852 24.2149L0.94043 26.1469L12.9209 22.9354L2.17969 29.1386L3.17969 30.8713L13.9199 24.6681L5.15039 33.4401L6.56543 34.8554L13.1216 28.2964C13.684 27.7337 14 26.9706 14 26.175V20.435C14 17.1209 16.6865 14.4342 20 14.434C23.3137 14.434 26 17.1208 26 20.435V26.1759C26 26.9716 26.316 27.7347 26.8785 28.2974L33.4346 34.8554L34.8496 33.4401L26.0801 24.6691L36.8203 30.8713L37.8203 29.1386L27.0791 22.9354L39.0596 26.1469L39.5771 24.2149L27.5957 21.0035H40V19.0031H27.5947L39.5771 15.7917L39.0596 13.8597L27.0791 17.0692L37.8203 10.868L36.8203 9.13529L26.0781 15.3375L34.8496 6.56554L33.4355 5.15124L24.6641 13.9232L30.8662 3.18021L29.1338 2.18005L22.9316 12.923L26.1426 0.940585L24.2109 0.422921L21 12.4063ZM20 32.4372C18.0122 32.4374 16.1792 33.5112 15.207 35.2453L13.2021 38.8201C13.8407 39.051 14.4942 39.2501 15.1611 39.4159L16.9512 36.224C17.5694 35.1209 18.7357 34.4377 20 34.4376C21.2645 34.4376 22.4305 35.1208 23.0488 36.224L24.8379 39.4159C25.5048 39.2502 26.1583 39.0509 26.7969 38.8201L24.793 35.2453C23.8208 33.5111 21.9879 32.4372 20 32.4372Z"
                      fill="#FF2121"
                    />
                  </g>
                  <g id="logotype">
                    <path
                      d="M208.695 13.7151C210.09 13.7151 211.334 14.0029 212.428 14.5785C213.544 15.1541 214.412 16.0068 215.035 17.1366C215.678 18.2665 216 19.6308 216 21.2297V31.6221H212.364V21.7733C212.364 20.1957 211.967 18.9913 211.173 18.1599C210.379 17.3072 209.296 16.8808 207.923 16.8808C206.55 16.8808 205.456 17.3072 204.641 18.1599C203.847 18.9913 203.45 20.1957 203.45 21.7733V31.6221H199.814V21.7733C199.814 20.1957 199.417 18.9913 198.623 18.1599C197.829 17.3072 196.746 16.8808 195.373 16.8808C194 16.8808 192.906 17.3072 192.091 18.1599C191.297 18.9913 190.9 20.1957 190.9 21.7733V31.6221H187.232V14.0029H190.9V16.0174C191.501 15.2926 192.262 14.7277 193.185 14.3227C194.107 13.9176 195.094 13.7151 196.145 13.7151C197.561 13.7151 198.827 14.0136 199.942 14.6105C201.058 15.2074 201.916 16.0707 202.517 17.2006C203.053 16.1347 203.89 15.2926 205.027 14.6744C206.164 14.0349 207.387 13.7151 208.695 13.7151Z"
                      fill="#540000"
                    />
                    <path
                      d="M183.518 14.0029V31.622H179.849V29.5436C179.27 30.2684 178.509 30.8439 177.565 31.2703C176.642 31.6753 175.655 31.8779 174.604 31.8779C173.21 31.8779 171.955 31.5901 170.839 31.0145C169.745 30.4389 168.876 29.5862 168.233 28.4563C167.61 27.3265 167.299 25.9622 167.299 24.3633V14.0029H170.936V23.8197C170.936 25.3972 171.333 26.6124 172.126 27.4651C172.92 28.2965 174.003 28.7122 175.376 28.7122C176.749 28.7122 177.833 28.2965 178.627 27.4651C179.442 26.6124 179.849 25.3972 179.849 23.8197V14.0029H183.518Z"
                      fill="#540000"
                    />
                    <path
                      d="M157.833 31.9099C156.438 31.9099 155.183 31.6647 154.068 31.1744C152.974 30.6628 152.105 29.9806 151.461 29.1279C150.818 28.2539 150.474 27.2839 150.432 26.218H154.229C154.293 26.9641 154.647 27.593 155.291 28.1047C155.956 28.595 156.782 28.8401 157.768 28.8401C158.798 28.8401 159.592 28.6483 160.15 28.2645C160.729 27.8595 161.019 27.3479 161.019 26.7297C161.019 26.0688 160.697 25.5785 160.053 25.2587C159.431 24.939 158.433 24.5872 157.06 24.2035C155.73 23.8411 154.647 23.4893 153.81 23.1483C152.974 22.8072 152.244 22.2849 151.622 21.5814C151.021 20.8779 150.721 19.9506 150.721 18.7994C150.721 17.8614 151 17.0087 151.558 16.2413C152.116 15.4525 152.909 14.8343 153.939 14.3866C154.99 13.939 156.192 13.7151 157.543 13.7151C159.56 13.7151 161.179 14.2267 162.402 15.25C163.647 16.2519 164.312 17.6269 164.397 19.375H160.729C160.665 18.5862 160.343 17.9574 159.764 17.4884C159.184 17.0194 158.401 16.7849 157.414 16.7849C156.449 16.7849 155.709 16.9661 155.194 17.3285C154.679 17.6909 154.422 18.1705 154.422 18.7674C154.422 19.2364 154.593 19.6308 154.937 19.9506C155.28 20.2704 155.698 20.5262 156.192 20.718C156.685 20.8886 157.414 21.1124 158.38 21.3895C159.667 21.7306 160.718 22.0824 161.533 22.4448C162.37 22.7859 163.089 23.2975 163.689 23.9797C164.29 24.6618 164.601 25.5678 164.623 26.6977C164.623 27.6996 164.344 28.595 163.786 29.3837C163.228 30.1725 162.434 30.7907 161.405 31.2384C160.396 31.686 159.206 31.9099 157.833 31.9099Z"
                      fill="#540000"
                    />
                    <path
                      d="M134.382 16.593C135.005 15.783 135.852 15.1008 136.925 14.5465C137.997 13.9923 139.209 13.7151 140.561 13.7151C142.106 13.7151 143.511 14.0988 144.776 14.8663C146.064 15.6124 147.072 16.6676 147.801 18.032C148.531 19.3963 148.895 20.9632 148.895 22.7326C148.895 24.5019 148.531 26.0901 147.801 27.4971C147.072 28.8828 146.064 29.97 144.776 30.7587C143.511 31.5262 142.106 31.9099 140.561 31.9099C139.209 31.9099 138.008 31.6434 136.957 31.1105C135.906 30.5562 135.048 29.874 134.382 29.064V40H130.714V14.0029H134.382V16.593ZM145.163 22.7326C145.163 21.5174 144.905 20.4729 144.39 19.5988C143.897 18.7035 143.232 18.032 142.395 17.5843C141.58 17.1153 140.7 16.8808 139.756 16.8808C138.834 16.8808 137.954 17.1153 137.118 17.5843C136.303 18.0533 135.637 18.7355 135.123 19.6308C134.629 20.5262 134.382 21.5814 134.382 22.7965C134.382 24.0116 134.629 25.0775 135.123 25.9942C135.637 26.8895 136.303 27.5717 137.118 28.0407C137.954 28.5097 138.834 28.7442 139.756 28.7442C140.7 28.7442 141.58 28.5097 142.395 28.0407C143.232 27.5504 143.897 26.8469 144.39 25.9302C144.905 25.0136 145.163 23.9477 145.163 22.7326Z"
                      fill="#540000"
                    />
                    <path
                      d="M125.222 11.6686C124.557 11.6686 123.999 11.4448 123.549 10.9971C123.098 10.5494 122.873 9.99516 122.873 9.3343C122.873 8.67345 123.098 8.11919 123.549 7.67151C123.999 7.22384 124.557 7 125.222 7C125.866 7 126.413 7.22384 126.863 7.67151C127.314 8.11919 127.539 8.67345 127.539 9.3343C127.539 9.99516 127.314 10.5494 126.863 10.9971C126.413 11.4448 125.866 11.6686 125.222 11.6686ZM127.024 14.0029V31.6221H123.356V14.0029H127.024Z"
                      fill="#540000"
                    />
                    <path
                      d="M111.652 31.9099C109.979 31.9099 108.466 31.5368 107.115 30.7907C105.763 30.0233 104.701 28.9574 103.929 27.593C103.157 26.2074 102.771 24.6085 102.771 22.7965C102.771 21.0058 103.167 19.4176 103.961 18.032C104.755 16.6463 105.838 15.5804 107.211 14.8343C108.584 14.0882 110.118 13.7151 111.813 13.7151C113.508 13.7151 115.042 14.0882 116.415 14.8343C117.788 15.5804 118.871 16.6463 119.665 18.032C120.459 19.4176 120.855 21.0058 120.855 22.7965C120.855 24.5872 120.448 26.1754 119.633 27.561C118.817 28.9467 117.702 30.0233 116.286 30.7907C114.892 31.5368 113.347 31.9099 111.652 31.9099ZM111.652 28.7442C112.596 28.7442 113.476 28.5204 114.291 28.0727C115.128 27.625 115.803 26.9535 116.318 26.0581C116.833 25.1628 117.09 24.0756 117.09 22.7965C117.09 21.5174 116.844 20.4409 116.35 19.5669C115.857 18.6715 115.203 18 114.387 17.5523C113.572 17.1047 112.693 16.8808 111.749 16.8808C110.805 16.8808 109.925 17.1047 109.11 17.5523C108.316 18 107.683 18.6715 107.211 19.5669C106.739 20.4409 106.503 21.5174 106.503 22.7965C106.503 24.6938 106.986 26.1647 107.952 27.2093C108.938 28.2326 110.172 28.7442 111.652 28.7442Z"
                      fill="#540000"
                    />
                    <path
                      d="M92.2577 31.9099C90.5843 31.9099 89.0719 31.5368 87.7204 30.7907C86.3688 30.0233 85.3069 28.9574 84.5346 27.593C83.7623 26.2074 83.3762 24.6085 83.3762 22.7965C83.3762 21.0058 83.773 19.4176 84.5668 18.032C85.3605 16.6463 86.4439 15.5804 87.8169 14.8343C89.1899 14.0882 90.7238 13.7151 92.4186 13.7151C94.1134 13.7151 95.6472 14.0882 97.0202 14.8343C98.3932 15.5804 99.4766 16.6463 100.27 18.032C101.064 19.4176 101.461 21.0058 101.461 22.7965C101.461 24.5872 101.053 26.1754 100.238 27.561C99.423 28.9467 98.3074 30.0233 96.8915 30.7907C95.4971 31.5368 93.9525 31.9099 92.2577 31.9099ZM92.2577 28.7442C93.2016 28.7442 94.0812 28.5204 94.8964 28.0727C95.7331 27.625 96.4088 26.9535 96.9237 26.0581C97.4386 25.1628 97.696 24.0756 97.696 22.7965C97.696 21.5174 97.4493 20.4409 96.9559 19.5669C96.4625 18.6715 95.8081 18 94.9929 17.5523C94.1777 17.1047 93.2981 16.8808 92.3542 16.8808C91.4103 16.8808 90.5307 17.1047 89.7155 17.5523C88.9217 18 88.2889 18.6715 87.8169 19.5669C87.3449 20.4409 87.109 21.5174 87.109 22.7965C87.109 24.6938 87.5917 26.1647 88.557 27.2093C89.5439 28.2326 90.7774 28.7442 92.2577 28.7442Z"
                      fill="#540000"
                    />
                    <path
                      d="M72.8632 31.9099C71.1899 31.9099 69.6774 31.5368 68.3259 30.7907C66.9744 30.0233 65.9124 28.9574 65.1401 27.593C64.3678 26.2074 63.9817 24.6085 63.9817 22.7965C63.9817 21.0058 64.3786 19.4176 65.1723 18.032C65.9661 16.6463 67.0494 15.5804 68.4224 14.8343C69.7954 14.0882 71.3293 13.7151 73.0241 13.7151C74.7189 13.7151 76.2528 14.0882 77.6258 14.8343C78.9987 15.5804 80.0821 16.6463 80.8759 18.032C81.6696 19.4176 82.0665 21.0058 82.0665 22.7965C82.0665 24.5872 81.6589 26.1754 80.8437 27.561C80.0285 28.9467 78.9129 30.0233 77.497 30.7907C76.1026 31.5368 74.558 31.9099 72.8632 31.9099ZM72.8632 28.7442C73.8071 28.7442 74.6867 28.5204 75.5019 28.0727C76.3386 27.625 77.0144 26.9535 77.5292 26.0581C78.0441 25.1628 78.3015 24.0756 78.3015 22.7965C78.3015 21.5174 78.0548 20.4409 77.5614 19.5669C77.068 18.6715 76.4137 18 75.5985 17.5523C74.7832 17.1047 73.9037 16.8808 72.9597 16.8808C72.0158 16.8808 71.1362 17.1047 70.321 17.5523C69.5273 18 68.8944 18.6715 68.4224 19.5669C67.9505 20.4409 67.7145 21.5174 67.7145 22.7965C67.7145 24.6938 68.1972 26.1647 69.1626 27.2093C70.1494 28.2326 71.3829 28.7442 72.8632 28.7442Z"
                      fill="#540000"
                    />
                    <path
                      d="M55.6685 28.6802H63.2306V31.6221H52V9.39824H55.6685V28.6802Z"
                      fill="#540000"
                    />
                    <path
                      d="M83.3075 32.3982C83.4813 33.4945 83.8223 34.4985 84.3304 35.4102C85.1027 36.7745 86.1647 37.8404 87.5162 38.6079C88.8677 39.354 90.3802 39.7271 92.0535 39.7271C93.7483 39.7271 95.2929 39.354 96.6873 38.6079C98.1032 37.8404 99.2188 36.7639 100.034 35.3782C100.567 34.4716 100.926 33.4783 101.111 32.3982H97.2964C97.1677 32.938 96.9754 33.4303 96.7195 33.8753C96.2046 34.7707 95.5289 35.4422 94.6922 35.8899C93.877 36.3375 92.9974 36.5614 92.0535 36.5614C90.5732 36.5614 89.3397 36.0497 88.3529 35.0265C87.7151 34.3364 87.2881 33.4604 87.0716 32.3982H83.3075Z"
                      fill="#540000"
                    />
                  </g>
                </svg>
              </div>
            </div>
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
                pioneers in graphene for mining—the first to bring this technology
                to Africa.
              </span>{" "}
              Our team comes to your site, runs the trial, and leaves you with
              clear numbers.
            </p>
          </div>

          <div className="flex flex-col gap-[28px]">
            <p className="text-label-sm text-text-soft-400">
              <span className="text-text-strong-950">Graphene in one minute: </span>
              a carbon layer that coats metal inside your engines, cuts friction,
              moves heat away, and reduces wear—mixed into the oil you already use.
            </p>
            <div className="flex items-center gap-1">
              <AvatarGroupCompact.Root size="24">
                <AvatarGroupCompact.Stack>
                  <Avatar.Root>
                    <Avatar.Image src="https://www.alignui.com/images/avatar/illustration/emma.png" />
                  </Avatar.Root>
                  <Avatar.Root>
                    <Avatar.Image src="https://www.alignui.com/images/avatar/illustration/emma.png" />
                  </Avatar.Root>
                  <Avatar.Root>
                    <Avatar.Image src="https://www.alignui.com/images/avatar/illustration/emma.png" />
                  </Avatar.Root>
                </AvatarGroupCompact.Stack>
                <AvatarGroupCompact.Overflow>ST</AvatarGroupCompact.Overflow>
              </AvatarGroupCompact.Root>
              <p className="text-label-sm text-text-soft-400">
                — on-site graphene expertise
              </p>
            </div>
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
                      as={RiAccountCircleLine}
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
              We review your diesel burn, fleet mix, and how you manage engine oil
              today—so the trial targets where savings matter most.
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
                      as={RiAccountCircleLine}
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
              Graphene lubricant is mixed into your engine oil at the correct ratio.
              Your equipment keeps working—no shutdown, no new infrastructure.
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
                      as={RiAccountCircleLine}
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
              Fuel use and wear indicators are tracked against your baseline. Your
              team owns the data—so you can decide on rollout with confidence.
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
              Diesel powers almost everything that moves at a mine. When friction
              drops inside your engines, you burn less fuel—and your maintenance
              team spends less time fighting wear on the assets that matter most.
              <br />
              <br />
              Simera Trace combines graphene expertise with an on-site fuel
              savings trial. We set it up with your people, measure against your
              baseline, and show what energy and maintenance savings look like in
              your real operating conditions.
              <br />
              <br />
              Results vary by load, equipment mix, and how you run today. That is
              why we validate on your mine—not with generic promises.
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
            <RiShieldLine className="size-6 text-primary-base" />
            <RiShieldLine className="absolute top-[-64px] right-6 size-[148px] text-text-disabled-300 opacity-35" />
            <div className="flex flex-col gap-2">
              <p className="text-label-lg text-text-strong-950">Less friction</p>
              <p className="text-paragraph-md text-text-sub-600">
                Microscopic graphene flakes plate onto metal surfaces inside the
                engine—so parts slide against graphene, not bare metal.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-20 bg-bg-weak-25 p-7">
            <RiSubwayLine className="size-6 text-primary-base" />
            <RiSubwayLine className="absolute top-[-64px] right-6 size-[148px] text-text-disabled-300 opacity-35" />
            <div className="flex flex-col gap-2">
              <p className="text-label-lg text-text-strong-950">Better heat transfer</p>
              <p className="text-paragraph-md text-text-sub-600">
                Friction creates hot spots. Graphene pulls heat into the oil and
                block—protecting rings, liners, and bearings under load.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-20 bg-bg-weak-25 p-7">
            <RiSettings2Line className="size-6 text-primary-base" />
            <RiSettings2Line className="absolute top-[-64px] right-6 size-[148px] text-text-disabled-300 opacity-35" />
            <div className="flex flex-col gap-2">
              <p className="text-label-lg text-text-strong-950">Boundary protection</p>
              <p className="text-paragraph-md text-text-sub-600">
                When oil pressure drops at start-up or under extreme load, graphene
                stays on the metal—reducing scuffing until the full oil film returns.
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
              We come to your mine, set up the graphene lubricant trial, and work
              with your team until you have{" "}
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
                loaders, drills, and on-site power generation. If you burn serious
                diesel, the trial is built for you.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
              <Accordion.Trigger className="justify-start">
                <Accordion.Arrow />
                How long does it take?
              </Accordion.Trigger>
              <Accordion.Content>
                Most sites validate results in about 30 days. Setup is quick; your
                fleet keeps operating while we measure against your baseline.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="c" className="bg-bg-weak-50 ring-0">
              <Accordion.Trigger className="justify-start">
                <Accordion.Arrow />
                Is it safe for our engines?
              </Accordion.Trigger>
              <Accordion.Content>
                The lubricant is mixed into your existing engine oil at a fixed
                ratio. It is designed for diesel and petrol combustion engines. We
                recommend discussing OEM warranty status with your team before
                starting.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-[58%] md:shrink-0">
          <div className="flex flex-col gap-1 rounded-[28px] bg-bg-weak-50 p-1">
            <div className="flex items-center gap-4 px-4 py-2">
              <p className="text-label-sm text-text-sub-600">Limited Offer</p>
              <Badge.Root color="purple" variant="lighter">
                Save up to 15%
              </Badge.Root>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl bg-bg-white-0 p-6 shadow-complex-6 shadow-gray-shadow">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p className="text-label-md text-text-strong-950">
                    Pilot Program
                  </p>
                  <p className="text-label-sm text-text-sub-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-text-strong-950 text-title-h3">15%</p>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-label-sm text-text-sub-600">annual</p>
                    <p className="text-paragraph-xs text-text-soft-400">
                      fuel saving
                    </p>
                  </div>
                </div>
                <Button.Root variant="primary" mode="stroke">
                  Save Now
                </Button.Root>
              </div>
              <Divider.Root />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-base p-0.5">
                    <RiCheckLine className="size-3 text-static-white" />
                  </div>
                  <p className="text-label-sm text-text-strong-950">
                    Monitor your accounts
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-base p-0.5">
                    <RiCheckLine className="size-3 text-static-white" />
                  </div>
                  <p className="text-label-sm text-text-strong-950">
                    Monitor your accounts
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-base p-0.5">
                    <RiCheckLine className="size-3 text-static-white" />
                  </div>
                  <p className="text-label-sm text-text-strong-950">
                    Monitor your accounts
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl bg-bg-white-0 p-6 ring-1 ring-stroke-soft-200">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-label-md text-text-strong-950">Need Help?</p>
                <p className="text-label-sm text-text-sub-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button.Root variant="primary">Take Assessment</Button.Root>
                <Button.Root variant="primary" mode="stroke">
                  Contact Support
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
                  Monitor your accounts
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Monitor your accounts
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-base p-0.5">
                  <RiCheckLine className="size-3 text-static-white" />
                </div>
                <p className="text-label-sm text-text-strong-950">
                  Monitor your accounts
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
            Get quick answers to common questions
          </h2>
          <p className="text-label-md text-text-soft-400">
            Find solutions, explore resources, and resolve issues faster.
          </p>
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="grid grid-cols-2 gap-6 md:flex md:flex-1 md:flex-col md:items-start">
            <div className="w-full shrink-0 rounded-20 bg-pink-500 md:aspect-35/43 md:w-full" />
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
                  It's completely free to take the assessment.
                </p>
                <Button.Root
                  className="w-full md:w-fit"
                  size="small"
                  variant="primary"
                  mode="stroke"
                >
                  Take Assessment
                </Button.Root>
              </div>
            </div>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-6 md:w-[61.8%]">
            <div className="flex flex-col gap-3">
              <p className="text-subheading-xs text-text-soft-400">Section</p>
              <Accordion.Root type="single" collapsible className="space-y-2">
                <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    How do I update my account information?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Insert the accordion description here. It would look better
                    as two lines of text.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What payment methods are accepted?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Major credit and debit cards like Visa, MasterCard, and
                    American Express, as well as digital payment options like
                    PayPal and Apple Pay.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="c" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    How can I track my order?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Insert the accordion description here. It would look better
                    as two lines of text.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-subheading-xs text-text-soft-400">Section</p>
              <Accordion.Root type="single" collapsible className="space-y-2">
                <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    How do I update my account information?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Insert the accordion description here. It would look better
                    as two lines of text.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What payment methods are accepted?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Major credit and debit cards like Visa, MasterCard, and
                    American Express, as well as digital payment options like
                    PayPal and Apple Pay.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-subheading-xs text-text-soft-400">Section</p>
              <Accordion.Root type="single" collapsible className="space-y-2">
                <Accordion.Item value="a" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    How do I update my account information?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Insert the accordion description here. It would look better
                    as two lines of text.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="b" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What payment methods are accepted?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Major credit and debit cards like Visa, MasterCard, and
                    American Express, as well as digital payment options like
                    PayPal and Apple Pay.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="c" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What payment methods are accepted?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Major credit and debit cards like Visa, MasterCard, and
                    American Express, as well as digital payment options like
                    PayPal and Apple Pay.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="d" className="bg-bg-weak-50 ring-0">
                  <Accordion.Trigger className="justify-start">
                    <Accordion.Arrow />
                    What payment methods are accepted?
                  </Accordion.Trigger>
                  <Accordion.Content>
                    Major credit and debit cards like Visa, MasterCard, and
                    American Express, as well as digital payment options like
                    PayPal and Apple Pay.
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
            Case Studies & Blogs
          </h2>

          <LinkButton.Root className="w-fit" variant="black" underline>
            View All <LinkButton.Icon as={RiArrowRightUpLongLine} />
          </LinkButton.Root>
        </div>
        <div className="no-scrollbar w-screen overflow-scroll">
          <div className="flex w-max items-start gap-5 px-6 md:px-24">
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="aspect-video w-full rounded-20 bg-pink-500" />

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    April 10, 2026
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    How to improve your payment accuracy
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Savings</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="aspect-video w-full rounded-20 bg-pink-500" />

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    April 10, 2026
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    How to improve your payment accuracy
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Savings</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="aspect-video w-full rounded-20 bg-pink-500" />

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    April 10, 2026
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    How to improve your payment accuracy
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Savings</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="aspect-video w-full rounded-20 bg-pink-500" />

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    April 10, 2026
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    How to improve your payment accuracy
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <Badge.Root variant="light">Article</Badge.Root>
                  <Badge.Root variant="light">Savings</Badge.Root>
                </div>
              </div>
            </div>
            <div className="flex w-[75vw] flex-col gap-4 md:w-[33.33vw]">
              <div className="aspect-video w-full rounded-20 bg-pink-500" />

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm text-text-soft-400">
                    April 10, 2026
                  </p>
                  <p className="text-pretty text-label-lg text-text-strong-950">
                    How to improve your payment accuracy
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
            Reach out today!
          </h4>
          <LinkButton.Root className="w-fit" variant="black" underline>
            Contact Us <LinkButton.Icon as={RiArrowRightUpLongLine} />
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
            Smarter tools for modern mines{" "}
            <span className="text-text-strong-950">
              transfers through secure workflows
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-label-sm text-text-soft-400">Menu</p>
            <Link className="text-label-sm text-text-strong-950" href="/">
              Home
            </Link>
            <Link className="text-label-sm text-text-strong-950" href="/">
              About
            </Link>
            <Link className="text-label-sm text-text-strong-950" href="/">
              Assessment
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label-sm text-text-soft-400">Resources</p>
            <Link className="text-label-sm text-text-strong-950" href="/">
              Contact
            </Link>
            <Link className="text-label-sm text-text-strong-950" href="/">
              Case Studies
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
