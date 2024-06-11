import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ConvexProvider } from "@/providers/convex-provider";

import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Plano - Think, plan and stay organized.",
  description:
    "Your Personal Productivity Hub. Stay focused, stay organized with customizable features tailored to your needs.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon-light.svg",
        href: "/images/icon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon.svg",
        href: "/images/icon-dark.svg",
      },
    ],
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexProvider>{children}</ConvexProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
