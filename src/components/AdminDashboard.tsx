"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AdminPageEditor from "./AdminPageEditor";
import AdminProjectEditor from "./AdminProjectEditor";

interface AdminDashboardProps {
  onLogout: () => void;
}

/**
 * Admin Dashboard
 *
 * Main admin interface showing all pages and projects
 * with ability to edit each one.
 */
export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [pages] = useState([
    { name: "About", slug: "about" },
    { name: "Contact", slug: "contact" },
  ]);
  // Note: "Home" is the desktop interface itself, not editable content
  // Note: "Work" is the projects list, which is managed separately below

  const [projects, setProjects] = useState<Array<{ slug: string; title?: string }>>([]);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/content/projects");
        const data = await response.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const handleSave = () => {
    // Refresh projects list after save
    fetch("/api/content/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data);
        }
      });
    setSelectedPage(null);
    setSelectedProject(null);
  };

  if (selectedPage) {
    return (
      <AdminPageEditor
        slug={selectedPage}
        onSave={handleSave}
        onCancel={() => setSelectedPage(null)}
      />
    );
  }

  if (selectedProject) {
    return (
      <AdminProjectEditor
        slug={selectedProject}
        onSave={handleSave}
        onCancel={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/rw-logo.png"
                alt="Rob W Logo"
                width={56}
                height={56}
                className="object-contain self-center"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Rob W</h1>
                <p className="text-sm text-gray-600 leading-tight">Admin Dashboard</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pages Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Pages</h2>
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => setSelectedPage(page.slug)}
                  className="w-full text-left px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Portfolio Projects</h2>
            {loading ? (
              <div className="text-gray-500">Loading projects...</div>
            ) : (
              <div className="space-y-2">
                {projects.map((project) => (
                  <button
                    key={project.slug}
                    onClick={() => setSelectedProject(project.slug)}
                    className="w-full text-left px-4 py-2 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
                  >
                    {project.title || project.slug}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
