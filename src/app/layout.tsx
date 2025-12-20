import PageLoadWrapper from "@/components/PageLoadWrapper";
import {
  ProjectWindowContextProvider,
} from "@/components/ProjectWindowContext";
import RetroDesktop from "@/components/RetroDesktop";
import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Press_Start_2P,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

/**
 * Font Configuration
 *
 * IBM Plex Mono: Authentic retro terminal font based on classic IBM fonts
 * Press Start 2P: Pixelated retro font for headings and UI elements
 * Source Code Pro: Clean monospace for code and technical content
 *
 * These fonts are loaded from Google Fonts and optimized for web performance
 */
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

/**
 * Site Metadata
 *
 * Defines the default metadata for the entire site including:
 * - Page title and description for SEO
 * - Open Graph tags for social sharing
 * - Twitter Card metadata
 * - Other SEO-related information
 */
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

/**
 * Root Layout Component
 *
 * This is the root layout that wraps all pages in the application.
 * It provides:
 * - HTML document structure
 * - Font loading and configuration
 * - Global CSS styles
 * - RetroDesktop wrapper for the RobotOS interface
 *
 * The RetroDesktop component creates the desktop environment where
 * all content is displayed in draggable, resizable windows with
 * authentic RobotOS styling and interactions.
 */
export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${pressStart2P.variable} ${sourceCodePro.variable} antialiased`}
      >
        {/*
          RetroDesktop Component

          This component creates the RobotOS desktop interface that wraps
          all content. It provides:
          - Desktop background with grid pattern
          - Draggable desktop icons for navigation
          - Window management system (open, close, minimize, resize)
          - Taskbar with start menu and running applications
          - Authentic RobotOS styling and interactions
          - Interactive work page with project grid and window management

          The children prop contains the actual page content, but in this
          implementation, content is loaded dynamically through the
          WindowContent component based on the current route. The work page
          has its own interactive system with project windows that open
          when users click on project icons.
        */}
        <PageLoadWrapper>
          <ProjectWindowContextProvider>
            <RetroDesktop />
          </ProjectWindowContextProvider>
        </PageLoadWrapper>
      </body>
    </html>
  );
}
