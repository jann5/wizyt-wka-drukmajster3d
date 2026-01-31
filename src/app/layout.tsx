import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Grzegorz Nawrot | Stratasys F170 Premium 3D Printing",
  description:
    "Industrial-grade 3D printing services with Stratasys F170. Precision engineering meets additive manufacturing. Professional prototyping, functional parts, and custom tooling.",
  keywords: [
    "3D printing",
    "Stratasys F170",
    "FDM printing",
    "additive manufacturing",
    "prototyping",
    "industrial 3D printing",
    "Grzegorz Nawrot",
  ],
  authors: [{ name: "Grzegorz Nawrot" }],
  openGraph: {
    title: "Grzegorz Nawrot | Stratasys F170 Premium 3D Printing",
    description:
      "Industrial-grade 3D printing services with Stratasys F170. Precision engineering meets additive manufacturing.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
