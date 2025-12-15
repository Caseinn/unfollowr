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
  title: "Unfollowr | Check Instagram unfollowers from your export",
  description:
    "Upload your Instagram data export (.zip) to spot unfollowers, non-mutuals, and mutuals with a clean, privacy-first dashboard.",
  openGraph: {
    title: "Unfollowr | Instagram unfollowers from your export zip",
    description:
      "Use the official Instagram data export to see who unfollowed you, who doesn’t follow back, and your mutuals. No password needed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfollowr | Instagram unfollowers from your export zip",
    description:
      "Upload your Instagram export (.zip) and review unfollowers, non-mutuals, and mutuals in a clean dashboard.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
