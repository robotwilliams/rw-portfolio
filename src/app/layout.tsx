import ConditionalLayout from "@/components/ConditionalLayout";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Press_Start_2P,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

// Fonts: IBM Plex Mono for retro terminal look, Press Start 2P for pixelated headings, Source Code Pro for code
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "600"],
});

// Site metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Rob W - Creative Developer & Designer",
  description:
    "Portfolio of Rob W, a creative developer and designer building digital experiences that matter.",
  // Additional metadata can be added here:
  // keywords: ["web development", "design", "portfolio"],
  // authors: [{ name: "Rob W" }],
  // creator: "Rob W",
  // openGraph: {
  //   title: "Rob W - Creative Developer & Designer",
  //   description: "Portfolio of Rob W, a creative developer and designer building digital experiences that matter.",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Rob W - Creative Developer & Designer",
  //   description: "Portfolio of Rob W, a creative developer and designer building digital experiences that matter.",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // Required for safe-area-inset to work on iOS
};

// Root layout - wraps everything with fonts, styles, and desktop interface
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${pressStart2P.variable} ${sourceCodePro.variable} antialiased`}
      >
        {/* Desktop interface for main site, plain layout for admin */}
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  );
}
