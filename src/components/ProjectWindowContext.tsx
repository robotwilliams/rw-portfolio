"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import ProjectWindow from "./ProjectWindow";

interface PortfolioProject {
  slug: string;
  title: string;
  description: string;
  client: string;
  duration: string;
  date: string;
  category: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  gallery?: string[];
  content: string;
  featured?: boolean;
}

interface ProjectWindowContextType {
  openProjectWindow: (project: PortfolioProject) => void;
  closeProjectWindow: (windowId: string) => void;
  openWindows: Record<string, { project: PortfolioProject; isActive: boolean }>;
}

const ProjectWindowContext = createContext<
  ProjectWindowContextType | undefined
>(undefined);

export function ProjectWindowProvider() {
  const [openWindows, setOpenWindows] = useState<
    Record<string, { project: PortfolioProject; isActive: boolean }>
  >({});

  const closeProjectWindow = (windowId: string) => {
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      delete newWindows[windowId];
      return newWindows;
    });
  };

  return (
    <>
      {/* Render project windows at root level */}
      {Object.entries(openWindows).map(([windowId, windowData]) => (
        <ProjectWindow
          key={windowId}
          project={windowData.project}
          onClose={() => closeProjectWindow(windowId)}
        />
      ))}
    </>
  );
}

export function ProjectWindowContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [openWindows, setOpenWindows] = useState<
    Record<string, { project: PortfolioProject; isActive: boolean }>
  >({});

  const openProjectWindow = (project: PortfolioProject) => {
    const windowId = `project-${project.slug}`;
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: { project, isActive: true },
    }));
  };

  const closeProjectWindow = (windowId: string) => {
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      delete newWindows[windowId];
      return newWindows;
    });
  };

  return (
    <ProjectWindowContext.Provider
      value={{ openProjectWindow, closeProjectWindow, openWindows }}
    >
      {children}
    </ProjectWindowContext.Provider>
  );
}

export function useProjectWindows() {
  const context = useContext(ProjectWindowContext);
  if (context === undefined) {
    throw new Error(
      "useProjectWindows must be used within a ProjectWindowProvider"
    );
  }
  return context;
}
