/**
 * Test Utilities for React Testing Library
 *
 * This file contains reusable test utilities and custom render functions
 * that provide common testing functionality across all component tests.
 * It includes providers, mocks, and helper functions for consistent testing.
 */

import React from "react";
import {
  render,
  RenderOptions,
  screen,
  fireEvent,
} from "@testing-library/react";
import { ProjectWindowContextProvider } from "@/components/ProjectWindowContext";

/**
 * Custom Render Function with Providers
 *
 * This custom render function wraps components with necessary providers
 * for testing, specifically the ProjectWindowContextProvider which is required
 * for components that use the project window context.
 *
 * Usage:
 * const { getByText } = renderWithProviders(<MyComponent />);
 *
 * @param ui - The React component to render
 * @param options - Additional render options
 * @returns Render result with all necessary providers
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProjectWindowContextProvider>{children}</ProjectWindowContextProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

/**
 * Mock window dimensions for responsive testing
 */
export const setWindowDimensions = (width: number, height: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    value: width,
  });
  Object.defineProperty(window, "innerHeight", {
    writable: true,
    value: height,
  });
  window.dispatchEvent(new Event("resize"));
};

/**
 * Mock fetch for API testing
 */
export const mockFetch = (data: any, status = 200) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: status < 400,
      status,
      json: () => Promise.resolve(data),
    })
  );
};

/**
 * Wait for a condition to be true
 */
export const waitFor = (condition: () => boolean, timeout = 1000) => {
  return new Promise<void>((resolve, reject) => {
    const startTime = Date.now();

    const checkCondition = () => {
      if (condition()) {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error("Condition not met within timeout"));
      } else {
        setTimeout(checkCondition, 10);
      }
    };

    checkCondition();
  });
};

/**
 * Simulate user interactions
 */
export const userInteractions = {
  click: (element: Element) => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  },

  doubleClick: (element: Element) => {
    element.dispatchEvent(new MouseEvent("dblclick", { bubbles: true }));
  },

  mouseDown: (element: Element) => {
    element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
  },

  mouseMove: (element: Element, x: number, y: number) => {
    element.dispatchEvent(
      new MouseEvent("mousemove", {
        bubbles: true,
        clientX: x,
        clientY: y,
      })
    );
  },

  mouseUp: (element: Element) => {
    element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
  },

  keyDown: (element: Element, key: string) => {
    element.dispatchEvent(
      new KeyboardEvent("keydown", {
        bubbles: true,
        key,
      })
    );
  },
};

/**
 * Test data generators
 */
export const testData = {
  createProject: (overrides = {}) => ({
    slug: "test-project",
    title: "Test Project",
    description: "A test project for testing",
    client: "Test Client",
    duration: "1 month",
    date: "2024-01-01",
    category: "Web Development",
    technologies: ["React", "TypeScript"],
    live_url: "https://test.com",
    github_url: "https://github.com/test",
    gallery: [],
    content: "# Test Project\n\nThis is a test project.",
    featured: false,
    ...overrides,
  }),

  createWindow: (overrides = {}) => ({
    id: "test-window",
    title: "Test Window",
    isOpen: true,
    isMinimized: false,
    zIndex: 1,
    position: { x: 100, y: 100 },
    size: { width: 800, height: 600 },
    ...overrides,
  }),
};

// Re-export everything from testing library
export * from "@testing-library/react";
export { customRender as render, screen, fireEvent, waitFor as rtlWaitFor };

/**
 * Mock Data for Testing
 *
 * Provides consistent test data across all test files.
 * This ensures tests are reliable and use realistic data
 * that matches the actual application structure.
 */
export const mockProjects = [
  {
    slug: "test-project-1",
    title: "Test Project 1",
    description: "A test project for unit testing",
    category: "Web Development",
    client: "Test Client",
    date: "2024-01-01",
    duration: "2 months",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/test-project-1.jpg",
    featured: true,
    content: "# Test Project 1\n\nThis is a test project for unit testing.",
  },
  {
    slug: "test-project-2",
    title: "Test Project 2",
    description: "Another test project",
    category: "Design",
    client: "Another Client",
    date: "2024-02-01",
    duration: "1 month",
    technologies: ["Figma", "Photoshop"],
    image: "/images/test-project-2.jpg",
    featured: false,
    content: "# Test Project 2\n\nAnother test project for testing.",
  },
];

/**
 * Mock Window Data
 *
 * Provides mock data for testing the window management system.
 * This includes window states, positions, and content that
 * matches the actual application behavior.
 */
export const mockWindowData = {
  id: "test-window",
  title: "Test Window",
  content: "Test content",
  isOpen: true,
  isMinimized: false,
  position: { x: 100, y: 100 },
  size: { width: 400, height: 300 },
};
