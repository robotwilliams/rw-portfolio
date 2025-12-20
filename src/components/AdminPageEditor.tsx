"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AdminPageEditorProps {
  slug: string;
  onSave: () => void;
  onCancel: () => void;
}

/**
 * Admin Page Editor
 *
 * Form for editing page markdown content.
 */
export default function AdminPageEditor({
  slug,
  onSave,
  onCancel,
}: AdminPageEditorProps) {
  const [frontmatter, setFrontmatter] = useState<Record<string, unknown>>({});
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPage() {
      try {
        // Get raw markdown file
        const markdownResponse = await fetch(`/api/admin/get-raw/${slug}`, {
          credentials: "include",
        });

        if (markdownResponse.ok) {
          const data = await markdownResponse.json();

          // Parse frontmatter and content using API
          const parseResponse = await fetch("/api/admin/parse-markdown", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ content: data.content }),
          });

          if (parseResponse.ok) {
            const parsed = await parseResponse.json();
            setFrontmatter(parsed.frontmatter || {});
            setContent(parsed.content || "");
          } else {
            throw new Error("Failed to parse markdown");
          }
        } else {
          throw new Error("Failed to load page");
        }
      } catch {
        setError("Failed to load page content");
      } finally {
        setLoading(false);
      }
    }
    loadPage();
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
          type: "page",
          slug,
          frontmatter,
          content,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        setError("");
        alert(data.message || "Content saved successfully! Changes will appear on the site after Vercel redeploys (usually 1-2 minutes).");
        onSave();
      } else {
        setError(data.error || "Failed to save");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to save content";
      setError(errorMessage);
      console.error("Save error:", err);
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
            <h2 className="text-2xl font-bold">Edit Page: {slug}</h2>
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
          <h3 className="text-lg font-semibold mb-3">Metadata (Frontmatter)</h3>
          <div className="space-y-3">
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
