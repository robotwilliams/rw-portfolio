import { getPageData, getFeaturedProjects } from "@/lib/markdown";
import Link from "next/link";

/**
 * Home Page Component
 *
 * This is the main landing page of the portfolio website. It showcases:
 * - Hero section with introduction and call-to-action
 * - Featured work section highlighting key projects
 * - About preview section with skills overview
 * - Final call-to-action to encourage contact
 *
 * The page uses data from markdown files in the content/pages/ directory
 * and dynamically loads featured projects from the portfolio.
 */
export default function HomePage() {
  // Load page data from markdown CMS
  const homeData = getPageData("home");

  // Get featured projects for showcase
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="p-4">
      {/* 
        Hero Section
        Main introduction area with:
        - Page title and subtitle from markdown frontmatter
        - Call-to-action button linking to work page
        - Clean, centered layout for maximum impact
      */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">{homeData.hero_title}</h1>
        <p className="text-lg mb-6">{homeData.hero_subtitle}</p>
        <Link href={String(homeData.cta_link)} className="retro-button">
          {homeData.cta_text}
        </Link>
      </div>

      {/* 
        Featured Work Section
        Showcases selected projects that best represent skills and experience.
        Features:
        - Grid layout for project cards
        - Technology tags for each project
        - Links to individual project pages
        - "View All Work" button for complete portfolio
      */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Work</h2>
        <p className="text-center mb-6">
          A selection of my recent projects that showcase my skills and approach
          to creative development.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="retro-window p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="mb-3">{project.description}</p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-600 text-white text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <Link href={`/work/${project.slug}`} className="retro-link">
                View Project →
              </Link>
            </div>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="text-center mt-6">
          <Link href="/work" className="retro-button">
            View All Work
          </Link>
        </div>
      </div>

      {/* 
        About Preview Section
        Brief introduction to skills and expertise areas.
        Features:
        - Four key skill areas with descriptions
        - Grid layout for easy scanning
        - Link to full about page for more details
      */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
        <p className="mb-6 text-center">
          I&apos;m a passionate creative developer and designer with over 5
          years of experience crafting digital experiences that make a
          difference. I specialize in modern web development, UI/UX design, and
          creating solutions that bridge the gap between creativity and
          functionality.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-bold">Web Development</h4>
            <p className="text-sm">Full-stack with modern technologies</p>
          </div>
          <div>
            <h4 className="font-bold">UI/UX Design</h4>
            <p className="text-sm">
              User-centered design that drives engagement
            </p>
          </div>
          <div>
            <h4 className="font-bold">Brand Identity</h4>
            <p className="text-sm">Creating memorable brand experiences</p>
          </div>
          <div>
            <h4 className="font-bold">Mobile Development</h4>
            <p className="text-sm">Cross-platform mobile applications</p>
          </div>
        </div>

        {/* About Link */}
        <div className="text-center">
          <Link href="/about" className="retro-button">
            Learn More About Me
          </Link>
        </div>
      </div>

      {/* 
        Final Call-to-Action Section
        Encourages visitors to start a project or get in touch.
        Features:
        - Clear value proposition
        - Direct call-to-action button
        - Simple, focused messaging
      */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Let&apos;s work together to bring your vision to life. I&apos;m always
          excited to hear about new projects and opportunities.
        </p>
        <Link href="/contact" className="retro-button">
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
