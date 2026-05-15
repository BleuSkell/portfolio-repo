import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Inter, Shrikhand } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
    weight: "400",
    variable: "--font-instrument-serif",
});

const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
});

const inter = Inter({
    variable: "--font-inter",
});

const shrikhand = Shrikhand({
    weight: "400",
    variable: "--font-shrikhand",
});

export const metadata: Metadata = {
  title: "SEERVS",
  description: "Portfolio website of Seervs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${inter.variable} ${shrikhand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
