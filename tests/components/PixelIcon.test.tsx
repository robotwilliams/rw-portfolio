/**
 * PixelIcon Component Tests
 *
 * Tests the PixelIcon component which renders Windows 98-style icons
 * for the desktop interface. The component handles different icon types
 * including emoji, images, and SVG icons.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import PixelIcon from "@/components/PixelIcon";

// Import Jest DOM matchers
import "@testing-library/jest-dom";

describe("PixelIcon", () => {
  it("renders emoji icon correctly", () => {
    render(<PixelIcon icon="👤" size={32} />);
    expect(screen.getByText("👤")).toBeInTheDocument();
  });

  it("renders image icon correctly", () => {
    render(<PixelIcon icon="rw-logo.png" size={48} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("rw-logo.png"));
  });

  it("renders fallback for unknown icon", () => {
    render(<PixelIcon icon="unknown-icon" size={32} />);
    expect(screen.getByText("unknown-icon")).toBeInTheDocument();
  });

  it("renders SVG icons correctly", () => {
    render(<PixelIcon icon="globe.svg" size={32} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
  });

  it("renders window icon correctly", () => {
    render(<PixelIcon icon="window.svg" size={32} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
  });

  it("renders file icon correctly", () => {
    render(<PixelIcon icon="file.svg" size={32} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
  });

  it("applies correct size styles", () => {
    const { container } = render(<PixelIcon icon="👤" size={64} />);
    const iconElement = container.firstChild as HTMLElement;
    expect(iconElement).toHaveStyle({ width: "64px", height: "64px" });
  });
});
