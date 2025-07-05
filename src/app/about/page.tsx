import { getPageContent, markdownToHtml } from "@/lib/markdown";
import { Metadata } from "next";

/**
 * About Page Metadata
 *
 * Defines SEO metadata for the about page including:
 * - Page title for browser tab and search results
 * - Description for search engine snippets
 * - Other SEO-related information
 */
export const metadata: Metadata = {
  title: "About Robot Williams",
  description:
    "Learn more about Rob Williams, Frontend Maker and creative developer.",
};

/**
 * About Page Component
 *
 * This page displays detailed information about Rob Williams including:
 * - Personal introduction and background
 * - Skills and expertise areas
 * - Professional experience
 * - Contact information and social links
 *
 * The page uses a Windows 98-style layout with:
 * - Main content area displaying markdown content
 * - Sidebar with profile image, quick info, and social links
 *
 * Content is loaded from the markdown CMS system, making it easy
 * to update without touching code.
 */
export default async function AboutPage() {
  // Load page content from markdown CMS
  const content = getPageContent("about");
  const htmlContent = await markdownToHtml(content);

  return (
    <div className="min-h-screen bg-[#c0c0c0] p-4">
      <div className="max-w-4xl mx-auto">
        {/* 
          Page Header - Windows 98 Style
          Main title and subtitle section that introduces the page
          with classic Windows 98 styling.
        */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/rw-site-icon-folder-close.png"
              alt="About folder"
              className="w-8 h-8 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#000080]">
                About Robot Williams 🤖
              </h1>
              <p className="text-sm text-[#000000]">
                Frontend Maker and creative developer
              </p>
            </div>
          </div>
        </div>

        {/* 
          Main Content Area - Windows 98 Style
          Two-column layout with main content and sidebar.
          The main content displays the markdown content converted to HTML.
        */}
        <div className="grid grid-cols-1 lg-grid-cols-3 gap-6 mb-6">
          {/* Main Content Column */}
          <div className="lg-col-span-2">
            <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
              <h2 className="text-lg font-bold text-[#000080] mb-4">
                📄 About Me
              </h2>
              <div
                className="prose prose-sm max-w-none text-[#000000]"
                style={
                  {
                    "--tw-prose-body": "#000000",
                    "--tw-prose-headings": "#000080",
                    "--tw-prose-links": "#000080",
                  } as React.CSSProperties
                }
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* 
              Profile Image - Windows 98 Style
              Placeholder for profile photo with fallback text.
              This can be replaced with an actual image when available.
            */}
            <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
              <h3 className="text-sm font-bold text-[#000080] mb-3">
                🖼️ Profile
              </h3>
              <div className="bg-[#ffffff] border border-[#808080] h-48 flex items-center justify-center">
                <span className="text-[#808080] text-sm">Profile Image</span>
              </div>
            </div>

            {/* 
              Quick Info Section - Windows 98 Style
              Displays key information about skills, specialty, and contact.
              Provides a quick overview for visitors.
            */}
            <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
              <h3 className="text-sm font-bold text-[#000080] mb-3">
                ℹ️ Quick Info
              </h3>
              <div className="space-y-3">
                <div className="bg-[#ffffff] border border-[#808080] p-2">
                  <span className="text-xs text-[#808080]">Focus</span>
                  <p className="font-medium text-sm">Frontend Development</p>
                </div>
                <div className="bg-[#ffffff] border border-[#808080] p-2">
                  <span className="text-xs text-[#808080]">Specialty</span>
                  <p className="font-medium text-sm">
                    Web Design & Development
                  </p>
                </div>
                <div className="bg-[#ffffff] border border-[#808080] p-2">
                  <span className="text-xs text-[#808080]">Email</span>
                  <a
                    href="mailto:hello@robotwilliams.com"
                    className="font-medium text-sm text-[#000080] hover:text-[#0000ff]"
                  >
                    hello@robotwilliams.com
                  </a>
                </div>
              </div>
            </div>

            {/* 
              Social Links Section - Windows 98 Style
              Provides links to professional social media profiles
              and online presence. Helps visitors connect and learn more.
            */}
            <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
              <h3 className="text-sm font-bold text-[#000080] mb-3">
                🔗 Connect
              </h3>
              <div className="space-y-2">
                <a
                  href="https://twitter.com/r0b0twilliams"
                  className="block text-[#000080] hover:text-[#0000ff] font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/robotwilliams"
                  className="block text-[#000080] hover:text-[#0000ff] font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://codepen.io/robotwilliams"
                  className="block text-[#000080] hover:text-[#0000ff] font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodePen
                </a>
                <a
                  href="https://www.linkedin.com/pub/robert-williams/30/80b/5b0"
                  className="block text-[#000080] hover:text-[#0000ff] font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 
          Call-to-Action Section - Windows 98 Style
          Encourages visitors to get in touch for projects or collaboration.
          Uses classic Windows 98 button styling.
        */}
        <div className="text-center">
          <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-6">
            <h2 className="text-lg font-bold text-[#000080] mb-3">
              💼 Let&apos;s Work Together
            </h2>
            <p className="text-[#000000] text-sm mb-4 max-w-2xl mx-auto">
              Whether you need a complete website redesign, a custom web
              application, or help improving your existing digital presence,
              I&apos;m here to help.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
