import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anthony de Cuyper",
    template: "%s | Anthony de Cuyper",
  },
  description: "Frontend engineering leader building complex regulated digital products",
  metadataBase: new URL("https://anthonydecuyper.com"),
  keywords: [
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Tech Lead",
  ],
  authors: [{ name: "Anthony de Cuyper" }],
  creator: "Anthony de Cuyper",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    title: "Anthony de Cuyper",
    description: "Frontend engineering leader building complex regulated digital products",
    siteName: "Anthony de Cuyper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony de Cuyper",
    description: "Frontend engineering leader building complex regulated digital products",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anthony DC",
  },
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${inter.variable} font-sans antialiased`}>
      <ThemeProvider>
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
