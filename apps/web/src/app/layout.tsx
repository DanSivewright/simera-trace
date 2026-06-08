import * as Banner from "@simera-trace/ui/components/banner";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import { PageCanvas } from "@/components/page-canvas";
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
      <body className={`${inter.variable} bg-page-canvas antialiased`}>
        <Providers>
          <PageCanvas>
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
          </PageCanvas>
        </Providers>
      </body>
    </html>
  );
}
