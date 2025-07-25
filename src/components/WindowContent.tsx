"use client";
import { PortfolioProject, WindowContentProps } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import PageLayout, {
  ContentSection,
  InfoCard,
  InfoGrid,
  LinkButton,
  LinkGrid,
} from "./PageLayout";
import ProjectWindow from "./ProjectWindow";
import VintageButton from "./VintageButton";

/**
 * WindowContent Component
 *
 * This component dynamically loads content for different pages within
 * the desktop windows. It provides:
 *
 * For Work Page:
 * - Interactive project grid with RobotOS-style icons
 * - Clickable project icons that open detailed project windows
 * - Window management system (open, close, drag, activate)
 * - Project categories and metadata display
 *
 * For Other Pages:
 * - Markdown content rendering from API routes
 * - Loading and error states
 * - Consistent RobotOS styling
 *
 * The component integrates with the RetroDesktop system to provide
 * a seamless RobotOS-style desktop experience where all content
 * opens within windows rather than navigating to new pages.
 */
export default function WindowContent({ page }: WindowContentProps) {
  // State for work page
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Window management state for work page
  const [openWindows, setOpenWindows] = useState<{
    [key: string]: {
      project: PortfolioProject;
      position: { x: number; y: number };
      isActive: boolean;
    };
  }>({});
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // State for other pages
  const [html, setHtml] = useState<string>("");
  const [otherPageError, setOtherPageError] = useState<string | null>(null);

  /**
   * Load Work Page Content
   *
   * Fetches projects and sets up the interactive work page.
   */
  const loadWorkPage = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/content/projects");
      const result = await response.json();

      if (result.success) {
        setProjects(result.data);
      } else {
        setError(result.error || "Failed to fetch projects");
      }
    } catch (err) {
      setError("Failed to fetch projects");
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Load Other Page Content
   *
   * Fetches markdown content for non-work pages.
   */
  const loadOtherPage = useCallback(async () => {
    try {
      setOtherPageError(null);

      const response = await fetch(`/api/content/${page}`);
      if (!response.ok) throw new Error("Not found");

      const data = await response.json();
      setHtml(data.html);
    } catch (err) {
      setOtherPageError("Failed to load content");
      console.error("Error loading content:", err);
    }
  }, [page]);

  /**
   * Load Content Effect
   *
   * Handles different content loading based on the page type.
   */
  useEffect(() => {
    if (page === "work") {
      loadWorkPage();
    } else {
      loadOtherPage();
    }
  }, [page, loadWorkPage, loadOtherPage]);

  /**
   * Work Page Window Management
   */
  const openProjectWindow = (project: PortfolioProject) => {
    setOpenWindows({});
    const windowId = project.slug;
    const screenWidth = window.innerWidth;

    // Calculate responsive window size
    let windowWidth = 850;
    if (screenWidth <= 600) {
      // Mobile: use responsive width
      if (screenWidth <= 360) windowWidth = 280;
      else if (screenWidth <= 480) windowWidth = 320;
      else windowWidth = 400;
    }

    // Always center the window
    const x = Math.max(0, (window.innerWidth - windowWidth) / 2);
    const y = Math.max(0, (window.innerHeight - 550 - 80) / 2); // Account for taskbar

    setOpenWindows({
      [windowId]: {
        project,
        position: { x, y },
        isActive: true,
      },
    });
    setActiveWindow(windowId);
  };

  const closeProjectWindow = (windowId: string) => {
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      delete newWindows[windowId];
      return newWindows;
    });
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const activateWindow = (windowId: string) => {
    setActiveWindow(windowId);
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      Object.keys(newWindows).forEach((id) => {
        newWindows[id].isActive = id === windowId;
      });
      return newWindows;
    });
  };

  const moveWindow = (windowId: string, x: number, y: number) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        position: { x, y },
      },
    }));
  };

  // Render other pages using the new PageLayout
  if (page === "about" || page === "contact") {
    const pageConfig = {
      about: {
        title: "🤖 About Robot Williams",
        description: "Learn more about Rob Williams, Frontend Maker and creative developer.",
        icon: "/images/rw-logo.png",
      },
      contact: {
        title: "📠 Say Hello",
        description: "Get in touch with Rob Williams for your next project.",
        icon: "/images/rw-site-icon-folder-closed-contact.png",
      },
    };

    const config = pageConfig[page];

    return (
      <PageLayout
        page={page}
        title={config.title}
        description={config.description}
        icon={config.icon}
        error={otherPageError}
        onRetry={loadOtherPage}
      >
        {page === "about" && (
          <>
            <ContentSection title="About Me" icon="💼">
              <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
                My focus is on frontend development and creative problem-solving. I combine technical expertise with a strong understanding of user experience, ensuring that every project delivers both performance and visual impact.
              </p>
            </ContentSection>

            <ContentSection title="My Philosophy" icon="🎯" headingLevel={3}>
              <InfoGrid columns={2}>
                <InfoCard title="Perspective">
                  My experience enables me to deliver solutions that are intuitive and natural for end users. I am comfortable working independently or as part of a team of any size.
                </InfoCard>
                <InfoCard title="Future-Proofing">
                  With the ever-changing landscape of digital media, I believe it is essential to design for flexibility and longevity, ensuring that solutions remain effective as technology evolves.
                </InfoCard>
                <InfoCard title="Process-Oriented">
                  I approach each project as a unique challenge, blending UX, UI, IA, and technical requirements to deliver the best possible outcome.
                </InfoCard>
                <InfoCard title="Results-Focused">
                  I am passionate about improving systems and processes. If you need help with refactoring or CMS maintenance, I am always ready to assist.
                </InfoCard>
              </InfoGrid>
            </ContentSection>

            <ContentSection title="Technical Skills" icon="🔧" headingLevel={4}>
              <InfoGrid columns={3}>
                <InfoCard title="Frontend Development">
                  React, Vue.js, HTML5, CSS3, JavaScript/TypeScript
                </InfoCard>
                <InfoCard title="Design Tools">
                  Figma, Adobe Creative Suite, Sketch
                </InfoCard>
                <InfoCard title="CMS Platforms">
                  WordPress, Contentful, Strapi
                </InfoCard>
                <InfoCard title="Performance">
                  Web optimization, accessibility, responsive design
                </InfoCard>
                <InfoCard title="Tools">
                  Git, Webpack, Node.js, modern build tools
                </InfoCard>
              </InfoGrid>
            </ContentSection>

            <ContentSection title="Recent Work" icon="📁" headingLevel={4}>
              <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
                I have had the pleasure of working with a variety of clients, including:
              </p>
              <InfoGrid columns={2}>
                <InfoCard title="Edgewater Landscapes LLC">
                  Landscape design and development
                </InfoCard>
                <InfoCard title="SMPS New York">
                  Professional services marketing
                </InfoCard>
                <InfoCard title="SBN Philadelphia">
                  Sustainable business network
                </InfoCard>
                <InfoCard title="Evron">
                  Digital agency and creative studio
                </InfoCard>
                <InfoCard title="Springboard Collaborative">
                  Educational nonprofit
                </InfoCard>
                <InfoCard title="U3 Studio">
                  Creative design studio
                </InfoCard>
              </InfoGrid>
            </ContentSection>

            <ContentSection title="Let's Work Together" icon="🤝" headingLevel={3}>
              <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
                Whether you need a complete website redesign, a custom web application, or assistance improving your digital presence, I am here to help. I believe in delivering work that meets your immediate needs and supports your long-term goals.
              </p>
              <LinkButton href="/contact" external={false}>
                Get in touch
              </LinkButton>
            </ContentSection>
          </>
        )}

        {page === "contact" && (
          <>
            <ContentSection title="Get In Touch" icon="💌">
              <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
                I&apos;m always interested in new opportunities and exciting projects. Whether you need a complete website redesign, a custom web application, or just want to chat about digital experiences, I&apos;d love to hear from you.
              </p>
            </ContentSection>

            <ContentSection title="Contact Form" icon="📝">
              <form className="contact-form w-full bg-gray-100 bg-opacity-40 shadow-lg p-4 rounded-lg" id="contact-form" method="POST" name="contactForm">
                <p className="screen-reader-text">
                  <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                </p>

                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-x-4">
                    <div className="form-row">
                      <label className="form-label" htmlFor="contact-user-name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="contact-user-name"
                        className="form-input retro-input w-full"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="form-row">
                      <label className="form-label" htmlFor="contact-user-email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="contact-user-email"
                        className="form-input retro-input w-full"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea
                      name="message"
                      id="contact-message"
                      className="form-textarea retro-textarea w-full"
                      rows={6}
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <input type="hidden" name="form-name" value="contactForm" />

                  <div className="form-row form-submit pt-4">
                    <VintageButton type="submit" variant="purple" size="lg">
                      Send Message
                    </VintageButton>
                  </div>
                </div>
              </form>
            </ContentSection>

            <ContentSection title="Other Ways to Connect" icon="🔗" headingLevel={3}>
              <LinkGrid>
                <LinkButton href="mailto:hello@robotwilliams.com">
                  Email: hello@robotwilliams.com
                </LinkButton>
                <LinkButton href="https://twitter.com/r0b0twilliams">
                  Twitter: @r0b0twilliams
                </LinkButton>
                <LinkButton href="https://codepen.io/robotwilliams">
                  CodePen: robotwilliams
                </LinkButton>
                <LinkButton href="https://github.com/robotwilliams">
                  GitHub: robotwilliams
                </LinkButton>
                <LinkButton href="https://www.linkedin.com/pub/robert-williams/30/80b/5b0">
                  LinkedIn: Robert Williams
                </LinkButton>
              </LinkGrid>
              <p className="text-sm mt-6" style={{ color: '#000000' }}>
                I typically respond to all inquiries within 24 hours. I look forward to hearing from you!
              </p>
            </ContentSection>
          </>
        )}
      </PageLayout>
    );
  }

  // Render work page
  if (page === "work") {
    // Loading state
    if (loading) {
      return (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className="text-center">
          <div className="text-2xl mb-5">❌</div>
          <h2 className="text-lg font-bold">
            Error Loading Projects
          </h2>
          <p className="text-sm text-[#000000] mb-5">{error}</p>
          <VintageButton
            variant="purple"
            onClick={loadWorkPage}
          >
            Try Again
          </VintageButton>
        </div>
      );
    }

    // Extract categories
    const categories = Array.from(
      new Set(projects.map((project) => project.category))
    );

    return (
      <PageLayout
        page="work"
        title={<>✏️My Work</>}
        description="Click on any project icon to open it in a window. A collection of projects that showcase my skills in web development, design, and creative problem-solving."
        icon="/images/rw-site-icon-folder-close.png"
      >
        {/* Projects Grid */}
        <ContentSection title="Projects" icon="📁">
          <div className="grid gap-2" style={{
            gridTemplateColumns: window.innerWidth <= 600
              ? 'repeat(auto-fill, minmax(140px, 160px))' // Bigger on mobile
              : 'repeat(auto-fill, minmax(100px, 120px))', // Original size on desktop
            justifyContent: 'start',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => openProjectWindow(project)}
                className="window-icon"
                onMouseEnter={() => setHoveredProject(project.slug)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ minWidth: '0', maxWidth: '120px' }}
              >
                {/* Project Icon */}
                <div className="mb-3">
                  <Image
                    src={
                      hoveredProject === project.slug
                        ? "/images/rw-site-icon-folder-open.png"
                        : "/images/rw-site-icon-folder-close.png"
                    }
                    alt="Project folder"
                    width={window.innerWidth <= 600 ? 72 : 56} // Bigger on mobile
                    height={window.innerWidth <= 600 ? 72 : 56} // Bigger on mobile
                    className="object-contain"
                  />
                </div>

                {/* Project Title */}
                <div className="text-center space-y-1" style={{ width: '100%', maxWidth: '100%' }}>
                  <span className="text-xs font-medium text-center leading-tight truncate block text-teal" style={{
                    fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", "Arial", sans-serif',
                    fontSize: window.innerWidth <= 600 ? '15px' : '13px', // Bigger on mobile
                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }} title={project.title}>
                    {project.title}
                  </span>
                  {project.featured && (
                    <span className="text-xs" style={{
                      color: '#ff0000',
                      fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", "Arial", sans-serif',
                      fontSize: '11px',
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}>★ Featured</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </ContentSection>

        {/* Categories Summary */}
        <ContentSection title="Project Categories" icon="📊" headingLevel={3}>
          <div className="flex flex-wrap gap-3 mb-5">
            {categories.map((category) => {
              const categoryProjects = projects.filter(
                (project) => project.category === category
              );
              return (
                <div key={category} style={{ minWidth: '200px', flex: '1 1 200px' }}>
                  <InfoCard title={category}>
                    {categoryProjects.length} projects
                  </InfoCard>
                </div>
              );
            })}
          </div>
        </ContentSection>

        {/* Project Windows */}
        {Object.entries(openWindows).map(([windowId, windowData]) => (
          <ProjectWindow
            key={windowId}
            project={windowData.project}
            onClose={() => closeProjectWindow(windowId)}
            isActive={windowData.isActive}
            onActivate={() => activateWindow(windowId)}
            position={windowData.position}
            onMove={(x, y) => moveWindow(windowId, x, y)}
          />
        ))}
      </PageLayout>
    );
  }

  // Fallback for home page or other content
  return (
    <div
      className="prose max-w-none"
      style={
        {
          "--tw-prose-body": "#000000",
          "--tw-prose-headings": "#000080",
          "--tw-prose-links": "#000080",
        } as React.CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
