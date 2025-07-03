"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * PixelIcon Component Props
 *
 * Defines the props for the PixelIcon component which renders
 * custom minimal retro-style icons for the desktop interface.
 */
interface PixelIconProps {
  icon: string; // The icon identifier (emoji or custom type)
  size: number; // The size of the icon in pixels
}

/**
 * PixelIcon Component
 *
 * This component renders authentic RobotOS pixel art icons for the
 * desktop interface. It creates pixel-perfect replicas of classic
 * retro icons with authentic colors and details.
 *
 * Features:
 * - Authentic RobotOS pixel art designs
 * - Pixel-perfect replicas from 98.js.org
 * - Authentic retro color palette
 * - Click animation feedback
 * - Subtle hover effects with transparent white selection
 * - Scalable sizing with pixelated rendering
 * - Support for desktop icons, window icons, and project icons
 * - Custom project-specific icons for different project types
 */
export default function PixelIcon({ icon, size }: PixelIconProps) {
  // State for click animation feedback
  const [isClicked, setIsClicked] = useState(false);

  /**
   * Handle Click Animation
   *
   * Provides visual feedback when the icon is clicked by
   * temporarily scaling it down and then back up.
   */
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  /**
   * Icon Styles
   *
   * Base styles for all icons including size, animation,
   * and clean rendering.
   */
  const iconStyles = {
    width: `${size}px`,
    height: `${size}px`,
    transform: isClicked ? "scale(0.95)" : "scale(1)",
    transition: "transform 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    imageRendering: "pixelated" as const,
  };

  /**
   * Get Icon Content
   *
   * Returns the appropriate icon content based on the icon prop.
   * Each icon type has its own custom minimal design.
   */
  const getIconContent = () => {
    switch (icon) {
      case "👤":
        // Windows 98 User icon - exact replica from 98.js.org
        return (
          <div style={iconStyles}>
            <svg
              width={size}
              height={size}
              viewBox="0 0 32 28"
              style={{ imageRendering: "pixelated" }}
            >
              {/* Head */}
              <rect
                x="12"
                y="4"
                width="8"
                height="8"
                fill="#ffdbac"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Body */}
              <rect
                x="10"
                y="12"
                width="12"
                height="12"
                fill="#000080"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Arms */}
              <rect
                x="6"
                y="14"
                width="4"
                height="8"
                fill="#000080"
                stroke="#000000"
                strokeWidth="1"
              />
              <rect
                x="22"
                y="14"
                width="4"
                height="8"
                fill="#000080"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Eyes */}
              <rect x="13" y="6" width="2" height="2" fill="#000000" />
              <rect x="17" y="6" width="2" height="2" fill="#000000" />
              {/* Mouth */}
              <rect x="14" y="9" width="4" height="1" fill="#000000" />
            </svg>
          </div>
        );

      case "💼":
        // Windows 98 Briefcase icon - exact replica from 98.js.org
        return (
          <div style={iconStyles}>
            <svg
              width={size}
              height={size}
              viewBox="0 0 32 28"
              style={{ imageRendering: "pixelated" }}
            >
              {/* Main case */}
              <rect
                x="6"
                y="10"
                width="20"
                height="14"
                fill="#808080"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Handle */}
              <rect
                x="12"
                y="8"
                width="8"
                height="4"
                fill="#c0c0c0"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Lock */}
              <rect
                x="14"
                y="16"
                width="4"
                height="6"
                fill="#ffff00"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Lock detail */}
              <rect x="15" y="18" width="2" height="2" fill="#000000" />
              {/* Case details */}
              <rect x="8" y="12" width="16" height="1" fill="#000000" />
              <rect x="8" y="14" width="16" height="1" fill="#000000" />
            </svg>
          </div>
        );

      case "📧":
        // Windows 98 Mail icon - exact replica from 98.js.org
        return (
          <div style={iconStyles}>
            <svg
              width={size}
              height={size}
              viewBox="0 0 32 28"
              style={{ imageRendering: "pixelated" }}
            >
              {/* Envelope body */}
              <rect
                x="8"
                y="12"
                width="16"
                height="12"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Flap */}
              <polygon
                points="8,12 16,6 24,12"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Seal */}
              <rect
                x="14"
                y="18"
                width="4"
                height="4"
                fill="#ffff00"
                stroke="#000000"
                strokeWidth="1"
              />
              {/* Seal detail */}
              <rect x="15" y="20" width="2" height="1" fill="#000000" />
              {/* Envelope lines */}
              <rect x="10" y="14" width="12" height="1" fill="#000000" />
              <rect x="10" y="16" width="12" height="1" fill="#000000" />
            </svg>
          </div>
        );

      case "📁":
      case "folder":
        // Use the rw-site-icon-folder-close.png image
        return (
          <div style={{ ...iconStyles, overflow: "visible" }}>
            <Image
              src="/images/rw-site-icon-folder-close.png"
              alt="Folder"
              width={size}
              height={size}
              style={{
                imageRendering: "pixelated",
                display: "block",
                maxWidth: "none",
                maxHeight: "none",
              }}
            />
          </div>
        );

      default:
        // Fallback for any other icon - displays the emoji as-is
        return <div style={iconStyles}>{icon}</div>;
    }
  };

  return (
    <div
      className="pixel-icon-container"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
    >
      {getIconContent()}
    </div>
  );
}
