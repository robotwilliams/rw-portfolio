import React from 'react';
import { cn } from '@/lib/utils';

export interface VintageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'teal' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

/**
 * Vintage OS Button Component
 *
 * Button component matching Windows 98 aesthetic
 * with authentic 3D effects, gleam, and shadow styling. Supports teal and
 * purple color variants with proper hover and active states.
 *
 * Features:
 * - Authentic Windows 98 3D button styling
 * - Teal and purple color variants
 * - Multiple sizes (sm, md, lg)
 * - Proper gleam and shadow effects
 * - Hover and active state animations
 * - Full button functionality (onClick, disabled, etc.)
 * - Responsive design
 */
export const VintageButton: React.FC<VintageButtonProps> = ({
  variant = 'teal',
  size = 'md',
  children,
  className,
  disabled = false,
  ...props
}) => {
  const baseClasses = [
    // Base button styling
    'vintage-button',
    'font-family-pixel',
    'font-bold',
    'cursor-pointer',
    'transition-all',
    'duration-100',
    'ease-out',
    'border-2',
    'border-radius-0',
    'text-shadow-sm',
    'filter-contrast-saturate',
    'select-none',
    'outline-none',
    'focus:outline-none',
    'focus:ring-0',
    'focus:ring-offset-0',

    // Disabled state
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:pointer-events-none',

    // Size variants
    size === 'sm' && 'px-2 py-1 text-xs',
    size === 'md' && 'px-4 py-2 text-sm',
    size === 'lg' && 'px-6 py-3 text-base',

    // Color variants
    variant === 'teal' && 'vintage-button-teal',
    variant === 'purple' && 'vintage-button-purple',

    // Custom className
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cn(baseClasses)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default VintageButton;
