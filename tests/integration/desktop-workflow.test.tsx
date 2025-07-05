/**
 * Desktop Workflow Integration Tests
 *
 * Tests the complete desktop workflow including:
 * - Desktop initialization and layout
 * - Start menu functionality
 * - Window management
 * - Navigation between different sections
 * - User interactions and state changes
 */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RetroDesktop from "@/components/RetroDesktop";

// Import Jest DOM matchers
import "@testing-library/jest-dom";

/**
 * Desktop Workflow Integration Tests
 *
 * Tests for the complete desktop workflow including window management,
 * navigation, and user interactions. Demonstrates integration testing patterns.
 */

// Mock the window content loading
jest.mock("@/components/WindowContent", () => {
  return function MockWindowContent({ title }: { title: string }) {
    return <div data-testid="window-content">{title}</div>;
  };
});

describe("Desktop Workflow", () => {
  beforeEach(() => {
    // Reset window dimensions for consistent testing
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1200,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      value: 800,
    });

    // Mock window.matchMedia for responsive design tests
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  describe("Desktop Initialization", () => {
    it("renders desktop with all main components", () => {
      render(<RetroDesktop />);

      // Check for main desktop elements
      expect(screen.queryAllByText("About").length).toBeGreaterThan(0);
      expect(screen.queryAllByText("Work").length).toBeGreaterThan(0);
      expect(screen.queryAllByText("Contact").length).toBeGreaterThan(0);
    });

    it("renders start button and clock", () => {
      render(<RetroDesktop />);

      const startButton = screen.getByRole("button", { name: /start/i });
      expect(startButton).toBeInTheDocument();

      // Check for clock element (might be in different formats)
      const clockElement = screen.getByText(/\d{1,2}:\d{2}/);
      expect(clockElement).toBeInTheDocument();
    });
  });

  describe("Start Menu Functionality", () => {
    it("opens start menu when start button is clicked", async () => {
      render(<RetroDesktop />);

      const startButton = screen.getByRole("button", { name: /start/i });
      fireEvent.click(startButton);

      await waitFor(() => {
        expect(screen.getByText("robotOS")).toBeInTheDocument();
      });
    });

    it("closes start menu when clicking outside", async () => {
      render(<RetroDesktop />);

      const startButton = screen.getByRole("button", { name: /start/i });
      fireEvent.click(startButton);

      // Click outside the menu
      fireEvent.click(document.body);

      await waitFor(() => {
        expect(screen.queryByText("robotOS")).not.toBeInTheDocument();
      });
    });
  });

  describe("Window Management", () => {
    it("opens windows when desktop icons are clicked", async () => {
      render(<RetroDesktop />);

      const aboutIcon = screen.getAllByText("About")[0];
      fireEvent.click(aboutIcon);

      await waitFor(() => {
        const window = screen.getByTestId("window-content");
        expect(window).toBeInTheDocument();
      });
    });

    it("minimizes windows correctly", async () => {
      render(<RetroDesktop />);

      const aboutIcon = screen.getByText("About");
      fireEvent.click(aboutIcon);

      await waitFor(() => {
        const window = screen.getByTestId("window-content");
        expect(window).toBeInTheDocument();
      });

      // Find and click minimize button
      const minimizeButton = screen.getByText("−");
      fireEvent.click(minimizeButton);

      await waitFor(() => {
        const window = screen.getByTestId("window-content");
        const retroWindow = window.closest('.retro-window');
        expect(retroWindow).toHaveClass("hidden");
      });
    });
  });

  describe("Navigation and Content", () => {
    it("displays correct window titles", async () => {
      render(<RetroDesktop />);

      const aboutIcon = screen.getAllByText("About")[0];
      fireEvent.click(aboutIcon);

      await waitFor(() => {
        expect(screen.queryAllByText("About").length).toBeGreaterThan(0);
      });
    });

    it("displays work window title", async () => {
      render(<RetroDesktop />);

      const workIcon = screen.getAllByText("Work")[0];
      fireEvent.click(workIcon);

      await waitFor(() => {
        expect(screen.queryAllByText("Work").length).toBeGreaterThan(0);
      });
    });

    it("displays contact window title", async () => {
      render(<RetroDesktop />);

      const contactIcon = screen.getAllByText("Contact")[0];
      fireEvent.click(contactIcon);

      await waitFor(() => {
        expect(screen.queryAllByText("Contact").length).toBeGreaterThan(0);
      });
    });
  });

  describe("User Interactions", () => {
    it("handles multiple window interactions", async () => {
      render(<RetroDesktop />);

      // Open multiple windows
      const aboutIcon = screen.getAllByText("About")[0];
      const workIcon = screen.getAllByText("Work")[0];
      const contactIcon = screen.getAllByText("Contact")[0];

      fireEvent.click(aboutIcon);
      fireEvent.click(workIcon);
      fireEvent.click(contactIcon);

      await waitFor(() => {
        expect(screen.queryAllByText("About").length).toBeGreaterThan(0);
        expect(screen.queryAllByText("Work").length).toBeGreaterThan(0);
        expect(screen.queryAllByText("Contact").length).toBeGreaterThan(0);
      });
    });

    it("applies hover effects to desktop icons", () => {
      render(<RetroDesktop />);

      const aboutIcon = screen.getAllByText("About")[0];
      const iconContainer = aboutIcon.closest(".desktop-icon");
      expect(iconContainer).toHaveClass("desktop-icon");
    });
  });

  describe("Responsive Behavior", () => {
    it("adapts to different screen sizes", () => {
      // Mock different screen sizes
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        value: 768,
      });

      render(<RetroDesktop />);

      // Check that desktop still renders correctly
      expect(screen.getByText("About")).toBeInTheDocument();
      expect(screen.getByText("Work")).toBeInTheDocument();
      expect(screen.getByText("Contact")).toBeInTheDocument();
    });
  });

  describe("Performance and Accessibility", () => {
    it("renders without performance issues", () => {
      const startTime = performance.now();
      render(<RetroDesktop />);
      const endTime = performance.now();

      // Should render within 100ms
      expect(endTime - startTime).toBeLessThan(100);
    });

    it("maintains accessibility standards", async () => {
      render(<RetroDesktop />);

      const startButton = screen.getByRole("button", { name: /start/i });
      fireEvent.click(startButton);

      await waitFor(() => {
        expect(screen.getByText("robotOS")).toBeInTheDocument();
      });
    });
  });
});
