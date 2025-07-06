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

import Image from "next/image";
import React from "react";

interface PageLayoutProps {
  page: "about" | "work" | "contact" | "project";
  title: React.ReactNode;
  description: string;
  icon: string;
  children: React.ReactNode;
  error?: string | null;
  onRetry?: () => void;
}

export default function PageLayout({
  page,
  title,
  description,
  icon,
  children,
  error = null,
  onRetry,
}: PageLayoutProps) {
  // Error state
  if (error) {
    return (
      <div className="p-8">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={icon}
            alt={`${page} icon`}
            width={40}
            height={40}
            className="object-contain"
          />
          <h1>{title}</h1>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-5">❌</div>
          <h2>
            Error Loading {page.charAt(0).toUpperCase() + page.slice(1)} Content
          </h2>
          <p className="text-sm text-[#000000] mb-5">{error}</p>
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
      <div>
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-5">
            <h1>{title}</h1>
          </div>
          <p className="text-sm leading-relaxed max-w-3xl px-2" style={{ color: '#2F4F4F' }}>
            {description}
          </p>
        </div>

        {/* Page Content */}
        <div className="page-content">
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
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function ContentSection({
  title,
  icon,
  children,
  className = "",
  headingLevel = 2,
}: ContentSectionProps) {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`content-section ${className}`}>
      <div className="flex items-start gap-1 mb-5">
        {icon && (
          <span className="text-2xl -mt-1">{icon}</span>
        )}
        <HeadingTag>{title}</HeadingTag>
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
    <div
      className={`bg-white border border-gray p-4 min-w-0 ${className}`}
      style={{
        backgroundColor: '#f0f0f0',
        border: '2px outset #ffffff',
        borderTopColor: '#c0c0c0',
        borderLeftColor: '#c0c0c0',
        borderRadius: '16px',
        boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 0 rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.1s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f8f8f8';
        e.currentTarget.style.boxShadow = 'inset 1px 1px 0 rgba(255, 255, 255, 0.6), inset -1px -1px 0 rgba(0, 0, 0, 0.2), 2px 2px 6px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.boxShadow = 'inset 1px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 0 rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)';
      }}
    >
      <h5 className="truncate" title={title}>{title}</h5>
      <span className="text-md text-gray leading-relaxed break-words" style={{ color: '#606060' }}>{children}</span>
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
      className={`inline-flex items-center px-6 py-3 text-sm transition-colors ${className}`}
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
