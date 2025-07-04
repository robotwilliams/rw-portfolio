import {
  getPortfolioProject,
  getAllPortfolioProjects,
  markdownToHtml,
} from "@/lib/markdown";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllPortfolioProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Robot Williams`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const htmlContent = await markdownToHtml(project.content);

  return (
    <div className="min-h-screen bg-[#c0c0c0] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Back to Work - Windows 98 Style */}
        <div className="mb-6">
          <Link
            href="/work"
            className="inline-flex items-center text-[#000080] hover:text-[#0000ff] font-medium text-sm"
          >
            ← Back to Work
          </Link>
        </div>

        {/* Project Header - Windows 98 Window */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/rw-site-icon-folder-close.png"
              alt={`${project.title} folder`}
              className="w-8 h-8 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-[#000080]">
                {project.title}
              </h1>
              <p className="text-sm text-[#000000]">{project.description}</p>
            </div>
          </div>

          {/* Project Meta - Windows 98 Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-[#ffffff] border border-[#808080] p-3">
              <span className="text-xs text-[#808080]">Client</span>
              <p className="font-medium text-sm">{project.client}</p>
            </div>
            <div className="bg-[#ffffff] border border-[#808080] p-3">
              <span className="text-xs text-[#808080]">Duration</span>
              <p className="font-medium text-sm">{project.duration}</p>
            </div>
            <div className="bg-[#ffffff] border border-[#808080] p-3">
              <span className="text-xs text-[#808080]">Date</span>
              <p className="font-medium text-sm">
                {new Date(project.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Project Links - Windows 98 Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors"
              >
                View Live Site
                <svg
                  className="ml-2 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors"
              >
                View Code
                <svg
                  className="ml-2 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Content - Windows 98 Window */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-6">
          <h2 className="text-lg font-bold text-[#000080] mb-4">
            📄 Project Details
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

        {/* Technologies Used - Windows 98 Window */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-6">
          <h3 className="text-lg font-bold text-[#000080] mb-4">
            🔧 Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#ffffff] border border-[#808080] text-[#000000] font-medium text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Gallery - Windows 98 Window */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-6">
            <h3 className="text-lg font-bold text-[#000080] mb-4">
              🖼️ Project Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff] border border-[#808080] h-48 flex items-center justify-center"
                >
                  <span className="text-[#808080] text-sm">
                    Gallery Image {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects - Windows 98 Window */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
          <h3 className="text-lg font-bold text-[#000080] mb-4">
            📁 Related Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getAllPortfolioProjects()
              .filter(
                (p) =>
                  p.slug !== project.slug && p.category === project.category
              )
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/work/${relatedProject.slug}`}
                  className="bg-[#ffffff] border border-[#808080] p-3 hover:bg-[#f0f0f0] transition-colors"
                >
                  <h4 className="font-medium text-sm text-[#000000] mb-1">
                    {relatedProject.title}
                  </h4>
                  <p className="text-xs text-[#808080]">
                    {relatedProject.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

