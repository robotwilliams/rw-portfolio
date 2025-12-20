"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AdminProjectEditorProps {
  slug: string;
  onSave: () => void;
  onCancel: () => void;
}

/**
 * Admin Project Editor
 *
 * Form for editing portfolio project markdown content.
 */
export default function AdminProjectEditor({
  slug,
  onSave,
  onCancel,
}: AdminProjectEditorProps) {
  const [frontmatter, setFrontmatter] = useState<Record<string, unknown>>({});
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProject() {
      try {
        const response = await fetch("/api/content/projects");
        const data = await response.json();
        if (data.success) {
          const project = data.data.find((p: { slug: string }) => p.slug === slug);
          if (!project) {
            setError("Project not found");
            return;
          }

          // Get raw markdown
            const markdownResponse = await fetch(
              `/api/admin/get-raw-project/${slug}`,
              { credentials: "include" }
            );

            if (markdownResponse.ok) {
              const markdownData = await markdownResponse.json();

              // Parse using API
              const parseResponse = await fetch("/api/admin/parse-markdown", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ content: markdownData.content }),
              });

              if (parseResponse.ok) {
                const parsed = await parseResponse.json();
                setFrontmatter(parsed.frontmatter || {});
                setContent(parsed.content || "");
              } else {
                // Fallback: reconstruct from project data
                setFrontmatter({
                  title: project.title,
                  description: project.description,
                  slug: project.slug,
                  category: project.category,
                  client: project.client,
                  duration: project.duration,
                  date: project.date,
                  featured: project.featured,
                  live_url: project.live_url,
                  github_url: project.github_url,
                  technologies: project.technologies,
                  gallery: project.gallery,
                });
                setContent(project.content || "");
              }
            } else {
              // Fallback: reconstruct from project data
              setFrontmatter({
                title: project.title,
                description: project.description,
                slug: project.slug,
                category: project.category,
                client: project.client,
                duration: project.duration,
                date: project.date,
                featured: project.featured,
                live_url: project.live_url,
                github_url: project.github_url,
                technologies: project.technologies,
                gallery: project.gallery,
              });
              setContent(project.content || "");
            }
        } else {
          setError("Failed to load projects");
        }
      } catch {
        setError("Failed to load project content");
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [slug]);

  const handleSave = async () => {
    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/admin/save-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          type: "project",
          slug,
          frontmatter,
          content,
        }),
      });

      const data = await response.json();

      if (data.success) {
        onSave();
      } else {
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Failed to save content");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-200 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with branding */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/rw-logo.png"
              alt="Rob W Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-lg font-bold text-gray-900">Rob W</span>
          </div>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            View Site
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Edit Project: {slug}</h2>
            <button
              onClick={onCancel}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Back
            </button>
          </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {/* Frontmatter Editor */}
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Project Metadata</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={String(frontmatter.title || "")}
                onChange={(e) =>
                  setFrontmatter({ ...frontmatter, title: e.target.value })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug</label>
              <input
                type="text"
                value={String(frontmatter.slug || "")}
                onChange={(e) =>
                  setFrontmatter({ ...frontmatter, slug: e.target.value })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <input
                type="text"
                value={String(frontmatter.description || "")}
                onChange={(e) =>
                  setFrontmatter({
                    ...frontmatter,
                    description: e.target.value,
                  })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                value={String(frontmatter.category || "")}
                onChange={(e) =>
                  setFrontmatter({ ...frontmatter, category: e.target.value })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Client</label>
              <input
                type="text"
                value={String(frontmatter.client || "")}
                onChange={(e) =>
                  setFrontmatter({ ...frontmatter, client: e.target.value })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                value={String(frontmatter.date || "")}
                onChange={(e) =>
                  setFrontmatter({ ...frontmatter, date: e.target.value })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Live URL
              </label>
              <input
                type="url"
                value={String(frontmatter.live_url || "")}
                onChange={(e) =>
                  setFrontmatter({ ...frontmatter, live_url: e.target.value })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                GitHub URL
              </label>
              <input
                type="url"
                value={String(frontmatter.github_url || "")}
                onChange={(e) =>
                  setFrontmatter({
                    ...frontmatter,
                    github_url: e.target.value,
                  })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={
                  Array.isArray(frontmatter.technologies)
                    ? frontmatter.technologies.join(", ")
                    : String(frontmatter.technologies || "")
                }
                onChange={(e) =>
                  setFrontmatter({
                    ...frontmatter,
                    technologies: e.target.value
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean),
                  })
                }
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={Boolean(frontmatter.featured)}
                  onChange={(e) =>
                    setFrontmatter({
                      ...frontmatter,
                      featured: e.target.checked,
                    })
                  }
                />
                <span className="text-sm font-medium">Featured</span>
              </label>
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Content (Markdown)</h3>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-96 px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md font-mono text-sm"
            placeholder="Enter markdown content..."
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
