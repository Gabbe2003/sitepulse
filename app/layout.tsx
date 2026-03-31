import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitepulse Marketing – AI Marketing Platform",
  description:
    "Vi hjälper dig att lyfta din sida till ny nivå med modern webbdesign, kraftfull SEO, hosting och digital marknadsföring.",
  keywords: ["webbdesign", "SEO", "digital marknadsföring", "Stockholm", "AI marketing"],
  openGraph: {
    title: "Sitepulse Marketing – AI Marketing Platform",
    description:
      "Vi hjälper dig att lyfta din sida till ny nivå med modern webbdesign, kraftfull SEO och digital marknadsföring.",
    url: "https://sitepulse.se",
    siteName: "Sitepulse Marketing",
    images: [{ url: "/og-image-light-1200x630.png", width: 1200, height: 630 }],
    locale: "sv_SE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/app-icon-light-512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
