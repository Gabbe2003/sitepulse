import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sitepulse.se"),
  title: {
    default: "Sitepulse Marketing – Webbdesign, SEO & Digital Marknadsföring i Stockholm",
    template: "%s | Sitepulse Marketing",
  },
  description:
    "Vi hjälper företag att lyckas online med modern webbdesign, kraftfull SEO, hosting och digital marknadsföring som ger verkliga resultat. Baserade i Stockholm.",
  keywords: [
    "webbdesign Stockholm",
    "SEO Stockholm",
    "digital marknadsföring",
    "webbyrå Stockholm",
    "hosting",
    "AI marketing",
    "sökmotoroptimering",
  ],
  authors: [{ name: "Sitepulse Marketing", url: "https://sitepulse.se" }],
  creator: "Sitepulse Marketing",
  publisher: "Sitepulse Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sitepulse.se",
  },
  openGraph: {
    title: "Sitepulse Marketing – Webbdesign, SEO & Digital Marknadsföring i Stockholm",
    description:
      "Vi hjälper företag att lyckas online med modern webbdesign, kraftfull SEO och digital marknadsföring som ger verkliga resultat.",
    url: "https://sitepulse.se",
    siteName: "Sitepulse Marketing",
    images: [
      {
        url: "/og-image-light-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Sitepulse Marketing – Webbdesign & SEO Stockholm",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitepulse Marketing – Webbdesign, SEO & Digital Marknadsföring",
    description:
      "Modern webbdesign, kraftfull SEO och digital marknadsföring som ger verkliga resultat.",
    images: ["/og-image-light-1200x630.png"],
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
