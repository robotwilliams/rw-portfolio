/**
 * PageLayout Component
 *
 * A reusable layout component that provides consistent typography, hierarchy,
 * and icon layout for all pages (about, work, contact). Based on the work page
 * layout structure but adaptable for different content types.
 *
 * Features:
 * - Consistent page header with icon and title
 * - Flexible content areas for different page types
 * - Responsive grid layouts
 * - Consistent typography and spacing
 * - RobotOS styling throughout
 */

import React from "react";

interface PageLayoutProps {
  page: "about" | "work" | "contact" | "project";
  title: React.ReactNode;
  description: string;
  icon: string;
  children: React.ReactNode;
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function PageLayout({
  page,
  title,
  description,
  icon,
  children,
  loading = false,
  error = null,
  onRetry,
}: PageLayoutProps) {
  // Loading state
  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={icon}
            alt={`${page} icon`}
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-[#000080]">{title}</h1>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-6">⏳</div>
          <h2 className="text-lg font-bold text-[#000080] mb-3">
            Loading {page.charAt(0).toUpperCase() + page.slice(1)} Content
          </h2>
          <p className="text-sm text-[#000000]">
            Please wait while we load the content...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-8">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={icon}
            alt={`${page} icon`}
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-[#000080]">{title}</h1>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-6">❌</div>
          <h2 className="text-lg font-bold text-[#000080] mb-3">
            Error Loading {page.charAt(0).toUpperCase() + page.slice(1)} Content
          </h2>
          <p className="text-sm text-[#000000] mb-6">{error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold hover:bg-[#d4d0c8] transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Page Content */}
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">

            <h1 className="text-2xl font-bold text-[#000080]">{title}</h1>
          </div>
          <p className="text-[#000000] text-sm leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Page Content */}
        <div className="page-content space-y-12">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Content Section Component
 * 
 * A reusable section component for organizing content within pages.
 */
interface ContentSectionProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({
  title,
  icon,
  children,
  className = "",
}: ContentSectionProps) {
  return (
    <div className={`${className}`}>
      <div className="flex items-start gap-2 mb-6">
        {icon && (
          <span className="text-xl">{icon}</span>
        )}
        <h2 className="text-xl font-bold text-[#000080]">{title}</h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

/**
 * Info Grid Component
 * 
 * A responsive grid for displaying information cards.
 */
interface InfoGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function InfoGrid({
  children,
  columns = 3,
  className = "",
}: InfoGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md-grid-cols-2",
    3: "grid-cols-1 md-grid-cols-2 lg-grid-cols-3",
    4: "grid-cols-1 md-grid-cols-2 lg-grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Info Card Component
 * 
 * A styled card for displaying information.
 */
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoCard({ title, children, className = "" }: InfoCardProps) {
  return (
    <div className={`bg-white border border-gray p-6 rounded-sm ${className}`} style={{ backgroundColor: '#ffffff', borderColor: '#808080' }}>
      <h3 className="text-sm font-semibold text-black mb-3" style={{ color: '#000000' }}>{title}</h3>
      <div className="text-xs text-gray leading-relaxed" style={{ color: '#808080' }}>{children}</div>
    </div>
  );
}

/**
 * Link Grid Component
 * 
 * A grid for displaying external links and social media.
 */
interface LinkGridProps {
  children: React.ReactNode;
  className?: string;
}

export function LinkGrid({ children, className = "" }: LinkGridProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Link Button Component
 * 
 * A styled button for external links.
 */
interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function LinkButton({
  href,
  children,
  external = true,
  className = "",
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center px-6 py-3 font-semibold text-sm transition-colors ${className}`}
      style={{
        backgroundColor: '#c0c0c0',
        border: '2px solid #dfdfdf',
        borderTopColor: '#808080',
        borderLeftColor: '#808080',
        color: '#000000',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#d4d0c8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#c0c0c0';
      }}
    >
      {children}
    </a>
  );
} 