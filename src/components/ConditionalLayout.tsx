"use client";

import { usePathname } from "next/navigation";
import PageLoadWrapper from "./PageLoadWrapper";
import { ProjectWindowContextProvider } from "./ProjectWindowContext";
import RetroDesktop from "./RetroDesktop";

/**
 * Conditional Layout Wrapper
 *
 * Renders RetroDesktop for main site routes,
 * but skips it for admin routes.
 */
export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Skip RetroDesktop for admin routes
  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  // Render full desktop interface for other routes
  return (
    <PageLoadWrapper>
      <ProjectWindowContextProvider>
        <RetroDesktop />
      </ProjectWindowContextProvider>
    </PageLoadWrapper>
  );
}
