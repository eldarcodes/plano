import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Plano - Think, plan and stay organized.",
  description:
    "Your Personal Productivity Hub. Stay focused, stay organized with customizable features tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
