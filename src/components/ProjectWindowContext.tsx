"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import ProjectWindow from "./ProjectWindow";

import { PortfolioProject, ProjectWindowContextType } from "@/types";

const ProjectWindowContext = createContext<
  ProjectWindowContextType | undefined
>(undefined);



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
      {/* Render project windows at root level */}
      {Object.entries(openWindows).map(([windowId, windowData]) => (
        <ProjectWindow
          key={windowId}
          project={windowData.project}
          onClose={() => closeProjectWindow(windowId)}
        />
      ))}
    </ProjectWindowContext.Provider>
  );
}

export function useProjectWindows() {
  const context = useContext(ProjectWindowContext);
  if (context === undefined) {
    throw new Error(
      "useProjectWindows must be used within a ProjectWindowContextProvider"
    );
  }
  return context;
}
