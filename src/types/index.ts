/**
 * Centralized Type Definitions
 *
 * This file contains all shared TypeScript interfaces and types
 * used throughout the application to ensure consistency and
 * eliminate duplication.
 */

/**
 * Project Image Interface
 *
 * Defines the structure for project gallery images.
 */
export interface ProjectImage {
  src: string; // Image source path
  alt: string; // Alt text for accessibility
  width: number; // Image width
  height: number; // Image height
}

/**
 * Portfolio Project Interface
 *
 * Defines the complete structure for portfolio project data.
 * This includes both metadata (from frontmatter) and content (from markdown body).
 * All fields are used throughout the portfolio pages for display and filtering.
 */
export interface PortfolioProject {
  // Basic project information
  title: string; // Project title
  description: string; // Short project description
  slug: string; // URL-friendly identifier
  category: string; // Project category (e.g., "Web Development")
  client: string; // Client name
  date: string; // Project completion date
  duration: string; // Project duration (e.g., "3 months")

  // Technical information
  technologies: string[]; // Array of technologies used
  image: string; // Main project image path
  gallery?: ProjectImage[]; // Optional gallery of additional images

  // Links
  live_url?: string; // Link to live project
  github_url?: string; // Link to GitHub repository

  // Display options
  featured: boolean; // Whether to show in featured section

  // Content
  content: string; // Full markdown content
}

/**
 * Window Interface
 *
 * Defines the structure for each window in the desktop environment.
 * Windows can be opened, closed, minimized, moved, and resized.
 */
export interface Window {
  id: string; // Unique identifier for the window
  title: string; // Display title in the window titlebar
  isOpen: boolean; // Whether the window is currently open
  isMinimized: boolean; // Whether the window is minimized
  zIndex: number; // Stacking order for overlapping windows
  position: { x: number; y: number }; // Window position on screen
  size: { width: number; height: number }; // Window dimensions
}

/**
 * Page Data Interface
 *
 * Defines the structure for page metadata extracted from markdown frontmatter.
 * This interface is flexible to accommodate various frontmatter fields
 * that different pages might have.
 */
export interface PageData {
  title: string; // Page title for SEO and display
  description: string; // Page description for SEO
  [key: string]: string | number | boolean | string[]; // Additional frontmatter fields
}

/**
 * Window Content Props Interface
 */
export interface WindowContentProps {
  page: "home" | "about" | "work" | "contact"; // The page content to load
}

/**
 * Project Window Props Interface
 */
export interface ProjectWindowProps {
  project: PortfolioProject;
  onClose: () => void;
  isActive?: boolean;
  onActivate?: () => void;
  position?: { x: number; y: number };
  onMove?: (x: number, y: number) => void;
}

/**
 * Page Layout Props Interface
 */
export interface PageLayoutProps {
  page: "about" | "work" | "contact" | "project";
  title: React.ReactNode;
  description: string;
  icon: string;
  children: React.ReactNode;
  error?: string | null;
  onRetry?: () => void;
}

/**
 * Content Section Props Interface
 */
export interface ContentSectionProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Info Grid Props Interface
 */
export interface InfoGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

/**
 * Info Card Props Interface
 */
export interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Link Grid Props Interface
 */
export interface LinkGridProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Link Button Props Interface
 */
export interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

/**
 * Retro Loading Props Interface
 */
export interface RetroLoadingProps {
  messages?: string[];
  onComplete?: () => void;
  duration?: number;
}

/**
 * Project Window Context Type
 */
export interface ProjectWindowContextType {
  openProjectWindow: (project: PortfolioProject) => void;
  closeProjectWindow: (windowId: string) => void;
  openWindows: Record<string, { project: PortfolioProject; isActive: boolean }>;
}
