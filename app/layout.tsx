import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "St. Xavier Institute",
  description: "Skill-based education and training platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        scroll-smooth
      `}
    >
      <body
        className="
          min-h-full
          bg-white
          text-gray-900
          antialiased
          transition-colors duration-300
          dark:bg-gray-950
          dark:text-white
        "
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}