import { RiArrowRightUpLongLine } from "@remixicon/react";
import * as Badge from "@simera-trace/ui/components/badge";
import * as LinkButton from "@simera-trace/ui/components/link-button";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "simera-trace",
  description: "simera-trace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <div className="relative flex h-10 w-full items-center justify-center gap-2 bg-bg-weak-25 px-4 py-2.5">
            <div className="truncate text-label-xs text-text-sub-600">
              Promote a live event, webinar, or demo in this area
            </div>
            <div className="h-[1px] w-4 bg-text-soft-400 opacity-[0.48]" />
            <LinkButton.Root underline variant="primary" size="small">
              Learn more <LinkButton.Icon as={RiArrowRightUpLongLine} />
            </LinkButton.Root>
          </div>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
