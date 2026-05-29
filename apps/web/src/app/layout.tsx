import { RiArrowRightUpLongLine, RiSparklingLine } from "@remixicon/react";
import * as Banner from "@simera-trace/ui/components/banner";
import * as LinkButton from "@simera-trace/ui/components/link-button";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";

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
          <Banner.Root
            className="hidden md:flex"
            variant="lighter"
            status="feature"
          >
            <Banner.Content>
              <p className="truncate text-label-xs">Using graphene for improved asset performance and return on assets</p>
            </Banner.Content>
          </Banner.Root>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
