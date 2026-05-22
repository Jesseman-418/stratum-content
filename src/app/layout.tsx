import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratum-content.vercel.app"),
  title: {
    default: "Stratum Content — Your AI-powered Chief Content Officer",
    template: "%s · Stratum Content",
  },
  description:
    "Done-for-you ghostwriting via AI delivery. Voice trained on your last 30 posts. Founder-edited every draft. You hit publish.",
  openGraph: {
    title: "Stratum Content — Your AI-powered Chief Content Officer",
    description:
      "Done-for-you ghostwriting via AI delivery. Voice trained on your last 30 posts. Founder-edited every draft.",
    url: "https://stratum-content.vercel.app",
    siteName: "Stratum Content",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratum Content — Your AI-powered Chief Content Officer",
    description:
      "Done-for-you ghostwriting via AI delivery. Voice trained on your last 30 posts.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
