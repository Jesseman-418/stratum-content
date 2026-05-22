import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratum-content.vercel.app"),
  title: {
    default: "Stratum Content · Issue No. 01 — The Studio Book",
    template: "%s · Stratum Content",
  },
  description:
    "A studio book for founders who want their voice on the page without writing it themselves. Voice-trained ghostwriting. Founder-edited every line. You hit publish.",
  openGraph: {
    title: "Stratum Content · Issue No. 01 — The Studio Book",
    description:
      "Voice-trained ghostwriting. Founder-edited every line. You hit publish.",
    url: "https://stratum-content.vercel.app",
    siteName: "Stratum Content",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratum Content · Issue No. 01 — The Studio Book",
    description: "Voice-trained ghostwriting. Founder-edited every line.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jbMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
